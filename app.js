// Global variables
let map;
let userLocation = null;
let userMarker = null;
let pinnedLocation = null;
let pinnedMarker = null;
let hospitalMarkers = [];
let hospitalLayer;
let mapClickMode = false;

// Haversine formula to calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Initialize map
function initMap() {
    map = L.map('map').setView([13.7563, 100.5018], 12); // Center on Bangkok

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    hospitalLayer = L.featureGroup().addTo(map);

    // Add click event for map to place pin
    map.on('click', function(e) {
        if (mapClickMode) {
            pinnedLocation = {
                lat: e.latlng.lat,
                lng: e.latlng.lng
            };
            addPinnedMarker();
            displayHospitals();
            updateStatus('✓ ปักหมุดที่ตำแหน่ง', false);
            disablePinMode();
        }
    });
}

// Enable pin mode
function enablePinMode() {
    mapClickMode = true;
    const pinBtn = document.getElementById('pinBtn');
    pinBtn.style.background = '#e74c3c';
    pinBtn.textContent = '📌 คลิกแผนที่เพื่อปักหมุด...';
    map.dragging.disable();
    map.style.cursor = 'crosshair';
    updateStatus('⏳ คลิกแผนที่เพื่อเลือกตำแหน่ง', false);
}

// Disable pin mode
function disablePinMode() {
    mapClickMode = false;
    const pinBtn = document.getElementById('pinBtn');
    pinBtn.style.background = '#f39c12';
    pinBtn.textContent = '📌 ปักหมุด';
    map.dragging.enable();
    map.style.cursor = '';
}

// Add pinned marker on map
function addPinnedMarker() {
    if (pinnedMarker) map.removeLayer(pinnedMarker);
    
    pinnedMarker = L.circleMarker([pinnedLocation.lat, pinnedLocation.lng], {
        radius: 8,
        fillColor: '#f39c12',
        color: '#d68910',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.9
    }).addTo(map);

    pinnedMarker.bindPopup(`<strong>📌 ตำแหน่งอ้างอิง</strong><br>Lat: ${pinnedLocation.lat.toFixed(4)}<br>Lng: ${pinnedLocation.lng.toFixed(4)}`);
    
    map.setView([pinnedLocation.lat, pinnedLocation.lng], 15);
    
    // Show pin status
    const pinStatus = document.getElementById('pinStatus');
    const pinCoords = document.getElementById('pinCoords');
    pinCoords.textContent = `${pinnedLocation.lat.toFixed(4)}, ${pinnedLocation.lng.toFixed(4)}`;
    pinStatus.style.display = 'block';
}

// Clear pinned location
function clearPinnedLocation() {
    if (pinnedMarker) map.removeLayer(pinnedMarker);
    pinnedLocation = null;
    pinnedMarker = null;
    document.getElementById('pinStatus').style.display = 'none';
    displayHospitals();
    updateStatus('✓ ปักหมุดถูกลบ', false);
}

// Get current search location (pinned or user)
function getCurrentLocation() {
    return pinnedLocation || userLocation;
}

// Search for location using Nominatim API
async function searchLocation(query) {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.disabled = true;
    searchBtn.textContent = '⏳...';

    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=10`,
            {
                headers: {
                    'User-Agent': 'HospitalFinder/1.0'
                }
            }
        );

        const results = await response.json();
        displaySearchResults(results);
    } catch (error) {
        updateStatus('✗ ไม่สามารถค้นหาตำแหน่ง', true);
        console.error('Search error:', error);
    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = 'ค้นหา';
    }
}

// Display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-result-item">ไม่พบผลลัพธ์</div>';
        resultsContainer.classList.add('show');
        return;
    }

    resultsContainer.innerHTML = results.map(result => `
        <div class="search-result-item" data-lat="${result.lat}" data-lng="${result.lon}">
            <strong>${result.name}</strong>
            <small>${result.address || result.display_name}</small>
        </div>
    `).join('');

    resultsContainer.classList.add('show');

    // Add click handlers
    resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const lat = parseFloat(item.dataset.lat);
            const lng = parseFloat(item.dataset.lng);
            selectSearchResult(lat, lng, item.querySelector('strong').textContent);
        });
    });
}

// Select a search result as pin location
function selectSearchResult(lat, lng, name) {
    pinnedLocation = { lat, lng };
    addPinnedMarker();
    displayHospitals();
    
    // Clear search and hide results
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').classList.remove('show');
    
    updateStatus(`✓ ปักหมุดที่: ${name}`, false);
    disablePinMode();
}

// Get current search location (pinned or user)

// Get user's location
function getUserLocation() {
    const btn = document.getElementById('locationBtn');
    btn.disabled = true;
    btn.textContent = '⏳ กำลังค้นหา...';
    
    // Clear pinned location if exists
    if (pinnedMarker) map.removeLayer(pinnedMarker);
    pinnedLocation = null;
    document.getElementById('pinStatus').style.display = 'none';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                addUserMarker();
                updateStatus('✓ ใช้ตำแหน่งของคุณ', false);
                displayHospitals();
                btn.disabled = false;
                btn.textContent = '📍 ตำแหน่งของฉัน';
            },
            (error) => {
                updateStatus('✗ ไม่สามารถค้นหาตำแหน่ง', true);
                btn.disabled = false;
                btn.textContent = '📍 ตำแหน่งของฉัน';
            }
        );
    } else {
        updateStatus('✗ เบราว์เซอร์ไม่รองรับ Geolocation', true);
        btn.disabled = false;
        btn.textContent = '📍 ตำแหน่งของฉัน';
    }
}

// Add user marker on map
function addUserMarker() {
    if (userMarker) map.removeLayer(userMarker);
    
    userMarker = L.circleMarker([userLocation.lat, userLocation.lng], {
        radius: 8,
        fillColor: '#3498db',
        color: '#2980b9',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);

    map.setView([userLocation.lat, userLocation.lng], 15);
}

// Display hospitals on map and in list
function displayHospitals() {
    const currentLocation = getCurrentLocation();

    let filtered = hospitals.map(h => {
        if (currentLocation) {
            h.distance = calculateDistance(currentLocation.lat, currentLocation.lng, h.latitude, h.longitude);
        }
        return h;
    });

    // Sort by distance if location available
    if (currentLocation) {
        filtered.sort((a, b) => a.distance - b.distance);
    } else {
        // Sort by province if no location
        filtered.sort((a, b) => a.province.localeCompare(b.province, 'th'));
    }

    // Clear previous markers
    hospitalLayer.clearLayers();
    hospitalMarkers = [];

    // Add markers and display list
    const listContainer = document.getElementById('hospitalList');
    listContainer.innerHTML = '';

    filtered.forEach((hospital, index) => {
        // Add marker
        const color = hospital.type === 'รัฐ' ? '#e74c3c' : '#f39c12';
        const marker = L.circleMarker([hospital.latitude, hospital.longitude], {
            radius: 6,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(hospitalLayer);

        let popupContent = `<strong>${hospital.name}</strong>`;
        if (hospital.type) popupContent += `<br>${hospital.type}`;
        if (hospital.google_maps_url) popupContent += `<br><a href="${hospital.google_maps_url}" target="_blank" rel="noopener noreferrer">open in google map</a>`;
        marker.bindPopup(popupContent);
        
        hospitalMarkers.push({ marker, hospital, index });

        // Add to list
        const card = document.createElement('div');
        card.className = 'hospital-card';
        card.innerHTML = `
            <div class="hospital-name">${hospital.name}</div>
            <div class="hospital-info">📍 ${hospital.province}</div>
            ${hospital.type ? `<span class="hospital-type ${hospital.type === 'รัฐ' ? 'public' : 'private'}">${hospital.type}</span>` : ''}
            ${currentLocation ? `<div class="hospital-distance">📏 ${hospital.distance.toFixed(1)} km</div>` : ''}
        `;

        card.addEventListener('click', () => {
            map.flyTo([hospital.latitude, hospital.longitude], 16);
            marker.openPopup();
            
            // Update active card
            document.querySelectorAll('.hospital-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });

        listContainer.appendChild(card);
    });

    updateStatus(`${filtered.length} โรงพยาบาล`, false);
}

// Update status message
function updateStatus(message, isError = false) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = 'status ' + (isError ? 'error' : 'loading');
}

// Event listeners
document.getElementById('locationBtn').addEventListener('click', getUserLocation);
document.getElementById('pinBtn').addEventListener('click', enablePinMode);
document.getElementById('clearPinBtn').addEventListener('click', clearPinnedLocation);

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        searchLocation(query);
    }
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = document.getElementById('searchInput').value.trim();
        if (query) {
            searchLocation(query);
        }
    }
});

// Close search results when clicking elsewhere
document.addEventListener('click', (e) => {
    const searchBox = document.querySelector('.search-box');
    const searchResults = document.getElementById('searchResults');
    if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('show');
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    initMap();
    displayHospitals();
    updateStatus('ยินดีต้อนรับ! ใช้ 📍 หรือ 📌 เพื่อค้นหา', false);
});

// Display last edited date
window.addEventListener('load', () => {
    const lastEditedSpan = document.getElementById('dataLastUpdated');
    if (typeof dataLastUpdated !== 'undefined') {
        const date = dataLastUpdated;
        const thaiMonths = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 
                           'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
        const day = date.getDate();
        const month = thaiMonths[date.getMonth()];
        const year = date.getFullYear() + 543; // Thai Buddha Era
        lastEditedSpan.textContent = `${day} ${month} ${year}`;
    }
});