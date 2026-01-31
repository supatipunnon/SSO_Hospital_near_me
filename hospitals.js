const hospitals = [
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "คณะแพทยศาสตร์วชิรพยาบาล มหาวิทยาลัยนวมินทราธิราช",
        "latitude": 13.7808145,
        "longitude": 100.5086484,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7808145,100.5086484&query_place_id=ChIJP2VYjF-Z4jARid69ULXxpAI"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "ทัณฑสถานโรงพยาบาลราชทัณฑ์",
        "latitude": 13.8504249,
        "longitude": 100.5533096,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8504249,100.5533096&query_place_id=ChIJn02-wuec4jAREGY5R-AZ1L0"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลกลาง",
        "latitude": 13.7465459,
        "longitude": 100.5092822,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7465459,100.5092822&query_place_id=ChIJCZJNzTyZ4jAR7CE9GYZLvSo"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลจุฬาภรณ์",
        "latitude": 13.8813307,
        "longitude": 100.5784954,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8813307,100.5784954&query_place_id=ChIJ6-PYNpyD4jAR70IzDGkVoAs"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลจุฬาลงกรณ์สภากาชาดไทย",
        "latitude": 13.7323844,
        "longitude": 100.5357643,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7323844,100.5357643&query_place_id=ChIJ4ccniimf4jARwPXi46NPWNs"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลเจริญกรุงประชารักษ์",
        "latitude": 13.6944514,
        "longitude": 100.4946298,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6944514,100.4946298&query_place_id=ChIJZavoFYOY4jAR_hy573oMpIM"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลตากสิน",
        "latitude": 13.7304755,
        "longitude": 100.5086438,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7304755,100.5086438&query_place_id=ChIJwcYDEd6Y4jARAVqbFnvQ9oQ"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลตำรวจ",
        "latitude": 13.7426433,
        "longitude": 100.5385645,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7426433,100.5385645&query_place_id=ChIJW6L7P9Ce4jARHxYOnmJgYhc"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลนคราภิบาล",
        "latitude": 13.7226011,
        "longitude": 100.7840688,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7226011,100.7840688&query_place_id=ChIJC7ISNohnHTER6ByCOiHdIho"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลนพรัตนราชธานี (สธ)",
        "latitude": 13.8157061,
        "longitude": 100.6880001,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8157061,100.6880001&query_place_id=ChIJWebIlp9jHTERwEQMPbMAAQ8"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลผู้สูงอายุบางขุนเทียน",
        "latitude": 13.573052,
        "longitude": 100.4233985,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.573052,100.4233985&query_place_id=ChIJEUO0Djy74jARlZr27xy6K3I"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลพระมงกุฎเกล้า",
        "latitude": 13.76773,
        "longitude": 100.534366,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.76773,100.534366&query_place_id=ChIJVfT4QbKe4jAR2O4ylLmd5FI"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลภูมิพลอดุลยเดช",
        "latitude": 13.9092514,
        "longitude": 100.6178965,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9092514,100.6178965&query_place_id=ChIJQRJv6YGC4jAREEMMPbMAAQ8"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลราชพิพัฒน์",
        "latitude": 13.7305052,
        "longitude": 100.3669313,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7305052,100.3669313&query_place_id=ChIJEyOsBmaW4jARLcT-nfffizI"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลราชวิถี",
        "latitude": 13.7643024,
        "longitude": 100.5367956,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7643024,100.5367956&query_place_id=ChIJb8ANw7Oe4jARueEOtUVoE0o"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล",
        "latitude": 13.7660775,
        "longitude": 100.5267631,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7660775,100.5267631&query_place_id=ChIJ_aGaqU2Z4jARz2tFjzmb3cQ"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลเลิดสิน (สธ)",
        "latitude": 13.7221964,
        "longitude": 100.5173902,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7221964,100.5173902&query_place_id=ChIJnbCResWY4jAR4cmKsontRGE"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลเวชการุณย์รัศม์",
        "latitude": 13.8568125,
        "longitude": 100.8590321,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8568125,100.8590321&query_place_id=ChIJL0yrnyduHTERdLLleLPOayA"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลศิริราช",
        "latitude": 13.7568186,
        "longitude": 100.4835109,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7568186,100.4835109&query_place_id=ChIJR_CqvwqZ4jARwnjxQfzdCp0"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระปิ่นเกล้า (กห)",
        "latitude": 13.7101188,
        "longitude": 100.4868259,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7101188,100.4868259&query_place_id=ChIJVVXF_oqY4jARC6rhS2Jyjvw"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลสิรินธร",
        "latitude": 13.7179812,
        "longitude": 100.707137,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7179812,100.707137&query_place_id=ChIJQ6I6WdJgHTERBWLiq2EiS-k"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลหลวงพ่อทวีศักดิ์ ชุตินธโร อุทิศ",
        "latitude": 13.6559905,
        "longitude": 100.3451606,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6559905,100.3451606&query_place_id=ChIJS0MYuX6-4jARqvmh4kA08fc"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลนวมินทร์ 9",
        "latitude": 13.8113417,
        "longitude": 100.7237556,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8113417,100.7237556&query_place_id=ChIJe_CcsGRkHTERG--X8tRP1Xo"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลนวมินทร์",
        "latitude": 13.8112195,
        "longitude": 100.7216146,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8112195,100.7216146&query_place_id=ChIJzaa60WVlHTERy2-Pe8fPIWA"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาล ไอเอ็มเอช ธนบุรี",
        "latitude": 13.6776854,
        "longitude": 100.4985685,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6776854,100.4985685&query_place_id=ChIJU6mCy2-i4jARBGBt8-vTa3I"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาล เอสเอ็มเอ สีลม",
        "latitude": 13.772884,
        "longitude": 100.6307296,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.772884,100.6307296&query_place_id=ChIJK02o0w9iHTERPj6fKTAoN-Y"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ บางแค",
        "latitude": 13.710611,
        "longitude": 100.3986326,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.710611,100.3986326&query_place_id=ChIJDyPFbMyX4jAR_4Mr-VoMk_g"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ รามคำแหง",
        "latitude": 13.7796526,
        "longitude": 100.6763046,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7796526,100.6763046&query_place_id=ChIJixB6ptdjHTERCP0xlh2GNV8"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ ประชาชื่น",
        "latitude": 13.8318577,
        "longitude": 100.5388777,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8318577,100.5388777&query_place_id=ChIJa1W74ced4jARo8hDLfMQohA"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาล บี.แคร์ เมดิคอลเซ็นเตอร์",
        "latitude": 13.9436441,
        "longitude": 100.6245672,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9436441,100.6245672&query_place_id=ChIJfSA2vPZ9HTERXuNYGTOJxv4"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาล เปาโล โชคชัย 4",
        "latitude": 13.8019068,
        "longitude": 100.596148,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8019068,100.596148&query_place_id=ChIJgUk-6b-d4jARmETTZMKJXGc"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาล พีเอ็มจี",
        "latitude": 13.6516984,
        "longitude": 100.4220017,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6516984,100.4220017&query_place_id=ChIJ1edQNiG94jARz-5cbOV-DMs"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาล โรงพยาบาลมงกุฎวัฒนะ",
        "latitude": 13.8940314,
        "longitude": 100.5616764,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8940314,100.5616764&query_place_id=ChIJ8yD9SyKD4jARpBeTmKSVIgA"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลกล้วยน้ำไท",
        "latitude": 13.7139515,
        "longitude": 100.5876303,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7139515,100.5876303&query_place_id=ChIJ80PIlryf4jARylxYtr10tDA"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลบางนา 1",
        "latitude": 13.6668249,
        "longitude": 100.6355092,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6668249,100.6355092&query_place_id=ChIJm6btGexfHTERspnx-FpGRko"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลเปาโล เกษตร",
        "latitude": 13.8354167,
        "longitude": 100.5741868,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8354167,100.5741868&query_place_id=ChIJ1W0WUv2c4jARBIHnnEm3V_A"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลแพทย์ปัญญา",
        "latitude": 13.7438941,
        "longitude": 100.6074312,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7438941,100.6074312&query_place_id=ChIJycK2uzqe4jARtiGWaZ2uFAU"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลมิตรประชา",
        "latitude": 13.7120791,
        "longitude": 100.4318653,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7120791,100.4318653&query_place_id=ChIJG4SzsPOX4jARKs3nsfIBkgI"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลราษฎร์บูรณะ",
        "latitude": 13.6778719,
        "longitude": 100.502859,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6778719,100.502859&query_place_id=ChIJA9Ni8m2i4jARhyKW_T0e1cI"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลลาดพร้าว",
        "latitude": 13.7782049,
        "longitude": 100.6238742,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7782049,100.6238742&query_place_id=ChIJq6IIvQFiHTEROjKzikjBCME"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลศิครินทร์ กรุงเทพ",
        "latitude": 13.6547311,
        "longitude": 100.646385,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6547311,100.646385&query_place_id=ChIJG7JWPbxfHTERL9GsCiavNRo"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลบางปะกอก 8",
        "latitude": 13.6631952,
        "longitude": 100.4069214,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6631952,100.4069214&query_place_id=ChIJlQvuTji84jARPQk1nrUA7s4"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลบางไผ่",
        "latitude": 13.7250264,
        "longitude": 100.464846,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7250264,100.464846&query_place_id=ChIJA0N_dR-Y4jARK21sISsBt-E"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลบางมด",
        "latitude": 13.6717765,
        "longitude": 100.45648,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6717765,100.45648&query_place_id=ChIJ0_zzJ7-i4jARTdFGwutNcWI"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลพญาไท นวมินทร์",
        "latitude": 13.8252124,
        "longitude": 100.6575516,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8252124,100.6575516&query_place_id=ChIJe6ACafliHTERZsTpTbVG2Jo"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลเพชรเวช",
        "latitude": 13.7426983,
        "longitude": 100.5948406,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7426983,100.5948406&query_place_id=ChIJGTlye0ie4jARAPS-SFd4yUg"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลมิชชั่น",
        "latitude": 13.7578678,
        "longitude": 100.5194916,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7578678,100.5194916&query_place_id=ChIJB9PG-jeZ4jAR2fK9fTwnawc"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลสุขสวัสดิ์อินเตอร์",
        "latitude": 13.6761127,
        "longitude": 100.5011043,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6761127,100.5011043&query_place_id=ChIJwWUufG6i4jARka2yiH_r-Lw"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลหัวเฉียว",
        "latitude": 13.7500823,
        "longitude": 100.5154121,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7500823,100.5154121&query_place_id=ChIJv_GwrDuZ4jAR_Q5LzzEmw58"
    },
    {
        "province": "กรุงเทพมหานคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลวิภาราม",
        "latitude": 13.7347131,
        "longitude": 100.6453885,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7347131,100.6453885&query_place_id=ChIJ-xf5LLRhHTERxd087rA5IKQ"
    },
    {
        "province": "กระบี่",
        "type": "รัฐ",
        "name": "โรงพยาบาลกระบี่ (สธ)",
        "latitude": 8.0759762,
        "longitude": 98.9150023,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.0759762,98.9150023&query_place_id=ChIJzehjZ4aUUTARl5n0NUfUyoM"
    },
    {
        "province": "กาญจนบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายสุรสีห์",
        "latitude": 14.1051429,
        "longitude": 99.4256097,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.1051429,99.4256097&query_place_id=ChIJuV5r0Iid4zAR88T5jgfspPM"
    },
    {
        "province": "กาญจนบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพหลพลพยุหเสนา (สธ)",
        "latitude": 14.0054791,
        "longitude": 99.5464707,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.0054791,99.5464707&query_place_id=ChIJI976RFUL4zAR_A_JeQtords"
    },
    {
        "province": "กาญจนบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลมะการักษ์ (สธ)",
        "latitude": 13.908217,
        "longitude": 99.76741,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.908217,99.76741&query_place_id=ChIJw6z3DCoF4zARDC0xmYAezE0"
    },
    {
        "province": "กาฬสินธุ์",
        "type": "รัฐ",
        "name": "โรงพยาบาลกาฬสินธุ์ (สธ)",
        "latitude": 16.4346649,
        "longitude": 103.5055873,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.4346649,103.5055873&query_place_id=ChIJZZsyYQC1IjER_rFMUhg-fsI"
    },
    {
        "province": "กำแพงเพชร",
        "type": "รัฐ",
        "name": "โรงพยาบาลกำแพงเพชร (สธ)",
        "latitude": 16.4630834,
        "longitude": 99.528414,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.4630834,99.52841400000001&query_place_id=ChIJBYX85mMY3jARY9s-fHt-vfA"
    },
    {
        "province": "ขอนแก่น",
        "type": "รัฐ",
        "name": "โรงพยาบาลขอนแก่น (สธ)",
        "latitude": 16.4291172,
        "longitude": 102.8491256,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.4291172,102.8491256&query_place_id=ChIJzeZ9pi2KIjERzC_b6jSEufY"
    },
    {
        "province": "ขอนแก่น",
        "type": "รัฐ",
        "name": "โรงพยาบาลชุมแพ (สธ)",
        "latitude": 16.5456353,
        "longitude": 102.0995812,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.5456353,102.0995812&query_place_id=ChIJVY3j-I0fIjERYPyN_gZ3TuQ"
    },
    {
        "province": "ขอนแก่น",
        "type": "รัฐ",
        "name": "โรงพยาบาลศรีนครินทร์ มหาวิทยาลัยขอนแก่น",
        "latitude": 16.4680574,
        "longitude": 102.8300541,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.4680574,102.8300541&query_place_id=ChIJ32MRaPWKIjER6v4dpAcUsZQ"
    },
    {
        "province": "จันทบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพระปกเกล้า (สธ)",
        "latitude": 12.6042716,
        "longitude": 102.1023517,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.6042716,102.1023517&query_place_id=ChIJ_R_HM5CBBDER6tIHoV_iqCs"
    },
    {
        "province": "ฉะเชิงเทรา",
        "type": "รัฐ",
        "name": "โรงพยาบาลพุทธโสธร (สธ)",
        "latitude": 13.6860439,
        "longitude": 101.0737507,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6860439,101.0737507&query_place_id=ChIJ5VjODMsXHTERXRGNl1w-M4g"
    },
    {
        "province": "ฉะเชิงเทรา",
        "type": "เอกชน",
        "name": "จุฬารัตน์ 11 อินเตอร์",
        "latitude": 13.5425523,
        "longitude": 100.9628266,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5425523,100.9628266&query_place_id=ChIJLUkfd0tHHTERTMQL9lK-AJc"
    },
    {
        "province": "ฉะเชิงเทรา",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ ฉะเชิงเทรา",
        "latitude": 13.695453,
        "longitude": 101.0515177,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.695453,101.0515177&query_place_id=ChIJF2is4ixsHTERqz2Sa7JzpMA"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลชลบุรี (สธ)",
        "latitude": 13.3519862,
        "longitude": 100.9821733,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.3519862,100.9821733&query_place_id=ChIJD5UpRoA1HTERwEXdwEvYAw8"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพนัสนิคม (สธ)",
        "latitude": 13.4599834,
        "longitude": 101.1724349,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.4599834,101.1724349&query_place_id=ChIJ29iFfsQvHTERvayIekPF5wc"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพัทยาปัทมคุณ (สธ)",
        "latitude": 12.9665688,
        "longitude": 100.9061757,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.9665688,100.9061757&query_place_id=ChIJ6VtZShO-AjER6lTlWGB3fAE"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาวิทยาลัยบูรพา",
        "latitude": 13.285218,
        "longitude": 100.922264,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.285218,100.922264&query_place_id=ChIJ-5_-n8K0AjERgtQvbLHaDQA"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลเมืองพัทยา (มท)",
        "latitude": 12.9278643,
        "longitude": 100.8844333,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.9278643,100.8844333&query_place_id=ChIJJygIAQyWAjERXIDXqnxxYDU"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระนางเจ้าสิริกิติ์ (กห)",
        "latitude": 12.6883094,
        "longitude": 100.9815633,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.6883094,100.9815633&query_place_id=ChIJW_g5tUrzAjERyz16FgDZYkQ"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระบรมราชเทวี ณ ศรีราชา",
        "latitude": 13.1618315,
        "longitude": 100.9184756,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.1618315,100.9184756&query_place_id=ChIJ25Km9Bm3AjERQIimf8BlCDg"
    },
    {
        "province": "ชลบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลแหลมฉบัง (สธ)",
        "latitude": 13.1160314,
        "longitude": 100.9189939,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.1160314,100.9189939&query_place_id=ChIJoYrqZNu5AjERc2KE80rYy8U"
    },
    {
        "province": "ชลบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลปิยะเวชช์ บ่อวิน",
        "latitude": 13.0628702,
        "longitude": 101.1026079,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.0628702,101.1026079&query_place_id=ChIJTy_qqE_EAjERoaXMJqsuQTc"
    },
    {
        "province": "ชลบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลพญาไทศรีราชา 2",
        "latitude": 13.1705846,
        "longitude": 100.9294747,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.1705846,100.9294747&query_place_id=ChIJvW5D5nG3AjERkL2dxlDkDGE"
    },
    {
        "province": "ชลบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลพญาไทศรีราชา",
        "latitude": 13.1687737,
        "longitude": 100.9282067,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.1687737,100.9282067&query_place_id=ChIJx3qvaQK3AjERgL7UmG8eok0"
    },
    {
        "province": "ชลบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลพญาไท บ่อวิน",
        "latitude": 13.0424366,
        "longitude": 101.0873156,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.0424366,101.0873156&query_place_id=ChIJl2D3egDFAjERWoCPDB4XRhY"
    },
    {
        "province": "ชลบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลวิภาราม อมตะนคร",
        "latitude": 13.421037,
        "longitude": 101.002989,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.421037,101.002989&query_place_id=ChIJs-nhiZBKHTERM8xyV9zHEVM"
    },
    {
        "province": "ชลบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลเอกชล อ่างศิลา",
        "latitude": 13.3176696,
        "longitude": 100.9487746,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.3176696,100.9487746&query_place_id=ChIJdUOS0DVLHTER8yy8j4bqe8Y"
    },
    {
        "province": "ชลบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลวิภารามแหลมฉบัง",
        "latitude": 13.0877644,
        "longitude": 100.9179247,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.0877644,100.9179247&query_place_id=ChIJUUx5kKO5AjERcbRbgV1snmw"
    },
    {
        "province": "ชัยนาท",
        "type": "รัฐ",
        "name": "โรงพยาบาลชัยนาทนเรนทร (สธ)",
        "latitude": 15.1917249,
        "longitude": 100.1275927,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.1917249,100.1275927&query_place_id=ChIJLZYA5py94TARzPOCeOElGMw"
    },
    {
        "province": "ชัยภูมิ",
        "type": "รัฐ",
        "name": "โรงพยาบาลชัยภูมิ (สธ)",
        "latitude": 15.8060889,
        "longitude": 102.0347765,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.8060889,102.0347765&query_place_id=ChIJF2uHAHE1HzERlJKdWomx3mE"
    },
    {
        "province": "ชุมพร",
        "type": "รัฐ",
        "name": "โรงพยาบาลชุมพรเขตรอุดมศักดิ์ (สธ)",
        "latitude": 10.4975184,
        "longitude": 99.1861941,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=10.4975184,99.1861941&query_place_id=ChIJHWmWC7Kq-DARvVjpcB0hzgw"
    },
    {
        "province": "เชียงราย",
        "type": "รัฐ",
        "name": "โรงพยาบาลเชียงรายประชานุเคราะห์ (สธ)",
        "latitude": 19.9007759,
        "longitude": 99.8291876,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=19.9007759,99.8291876&query_place_id=ChIJ58tbV0kG1zARpiHfKTJ3h_0"
    },
    {
        "province": "เชียงราย",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ศรีบุรินทร์",
        "latitude": 19.8781001,
        "longitude": 99.8355446,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=19.8781001,99.8355446&query_place_id=ChIJ__B8uyIG1zARJY5OkVrIXOQ"
    },
    {
        "province": "เชียงราย",
        "type": "เอกชน",
        "name": "โรงพยาบาลเชียงราย ราม",
        "latitude": 19.8949972,
        "longitude": 99.8311744,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=19.8949972,99.8311744&query_place_id=ChIJ6xgPsGsG1zARy8JFCnGkBaQ"
    },
    {
        "province": "เชียงใหม่",
        "type": "รัฐ",
        "name": "โรงพยาบาลนครพิงค์ (สธ)",
        "latitude": 18.789788,
        "longitude": 99.004244,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.789788,99.004244&query_place_id=ChIJfQyKtK862jAR2g2OVFjfm4s"
    },
    {
        "province": "เชียงใหม่",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาราชนครเชียงใหม่ มหาวิทยาลัยเชียงใหม่",
        "latitude": 18.7896261,
        "longitude": 98.9746184,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.7896261,98.9746184&query_place_id=ChIJU6ochIY62jARDl9lhKLE980"
    },
    {
        "province": "เชียงใหม่",
        "type": "รัฐ",
        "name": "โรงพยาบาลสันป่าตอง (สธ)",
        "latitude": 18.5956136,
        "longitude": 98.8853212,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.5956136,98.88532119999999&query_place_id=ChIJOZawHS3L2zARqiapHUHfdnM"
    },
    {
        "province": "เชียงใหม่",
        "type": "เอกชน",
        "name": "โรงพยาบาล เชียงใหม่ใกล้หมอ",
        "latitude": 18.7885153,
        "longitude": 99.0016793,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.7885153,99.00167929999999&query_place_id=ChIJ775PhqU62jARvW6Ns305dgc"
    },
    {
        "province": "เชียงใหม่",
        "type": "เอกชน",
        "name": "โรงพยาบาลเทพปัญญา",
        "latitude": 18.8102472,
        "longitude": 99.0113466,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.8102472,99.0113466&query_place_id=ChIJIfetl8w62jARVxL4n2qgF9s"
    },
    {
        "province": "เชียงใหม่",
        "type": "เอกชน",
        "name": "โรงพยาบาลราชเวชเชียงใหม่",
        "latitude": 18.7668981,
        "longitude": 99.0043205,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.7668981,99.00432049999999&query_place_id=ChIJlzWAwxow2jARkbIYxYULcC0"
    },
    {
        "province": "เชียงใหม่",
        "type": "เอกชน",
        "name": "โรงพยาบาลลานนา 3",
        "latitude": 18.8155563,
        "longitude": 98.9940998,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.8155563,98.9940998&query_place_id=ChIJZwLL-fc72jARbq_adq7uToE"
    },
    {
        "province": "เชียงใหม่",
        "type": "เอกชน",
        "name": "โรงพยาบาลลานนา",
        "latitude": 18.8123878,
        "longitude": 98.9910114,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.8123878,98.99101139999999&query_place_id=ChIJnY1secI62jARhZKmA8KY66s"
    },
    {
        "province": "ตรัง",
        "type": "รัฐ",
        "name": "โรงพยาบาลตรัง (สธ)",
        "latitude": 7.572413900000001,
        "longitude": 99.6204689,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.572413900000001,99.62046889999999&query_place_id=ChIJ4aoraU-MTTARZ0F3RREpDJw"
    },
    {
        "province": "ตรัง",
        "type": "เอกชน",
        "name": "โรงพยาบาลธนบุรีตรัง",
        "latitude": 7.568524399999999,
        "longitude": 99.6195664,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.568524399999999,99.6195664&query_place_id=ChIJ2bixkD2MTTAR2iXPYfZY030"
    },
    {
        "province": "ตราด",
        "type": "รัฐ",
        "name": "โรงพยาบาลตราด (สธ)",
        "latitude": 12.248056,
        "longitude": 102.5116209,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.248056,102.5116209&query_place_id=ChIJ4XOpYbhDBDER1mqmUpu4jWc"
    },
    {
        "province": "ตาก",
        "type": "รัฐ",
        "name": "โรงพยาบาลแม่สอด (สธ)",
        "latitude": 16.709782,
        "longitude": 98.572332,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.709782,98.57233199999999&query_place_id=ChIJ8T15ssqY3TARWsDCX-T92Qk"
    },
    {
        "province": "ตาก",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระเจ้าตากสินมหาราช (สธ)",
        "latitude": 16.8730199,
        "longitude": 99.131596,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.8730199,99.131596&query_place_id=ChIJk9bIfGfX3TARGQHj6Bp6Ito"
    },
    {
        "province": "ตาก",
        "type": "เอกชน",
        "name": "โรงพยาบาลแม่สอด ราม",
        "latitude": 16.7109205,
        "longitude": 98.5640479,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.7109205,98.56404789999999&query_place_id=ChIJDVmnKkif3TARtsoBdKA1BZ4"
    },
    {
        "province": "นครนายก",
        "type": "รัฐ",
        "name": "โรงพยาบาลนครนายก (สธ)",
        "latitude": 14.2080302,
        "longitude": 101.2129337,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.2080302,101.2129337&query_place_id=ChIJe-JRGtaxHTERtZsuaDYNcjo"
    },
    {
        "province": "นครนายก",
        "type": "รัฐ",
        "name": "โรงพยาบาลศูนย์การแพทย์สมเด็จพระเทพรัตนราชสุดาฯ",
        "latitude": 14.1114901,
        "longitude": 100.9848908,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.1114901,100.9848908&query_place_id=ChIJse8Un-OhHTERflIJbXlRH8g"
    },
    {
        "province": "นครปฐม",
        "type": "รัฐ",
        "name": "โรงพยาบาลจันทรุเบกษา",
        "latitude": 14.1027787,
        "longitude": 99.9392182,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.1027787,99.9392182&query_place_id=ChIJ5SHGNnNV4jAR7gaArUSi4wE"
    },
    {
        "province": "นครปฐม",
        "type": "รัฐ",
        "name": "โรงพยาบาลนครปฐม (สธ)",
        "latitude": 13.8191484,
        "longitude": 100.0751925,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8191484,100.0751925&query_place_id=ChIJK8G7dfTl4jARDWB6-dN2AbE"
    },
    {
        "province": "นครปฐม",
        "type": "รัฐ",
        "name": "โรงพยาบาลเมตตาประชารักษ์(วัดไร่ขิง) (สธ)",
        "latitude": 13.7387171,
        "longitude": 100.2563542,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7387171,100.2563542&query_place_id=ChIJZ7ROWw_r4jARvdolQwQ8R7I"
    },
    {
        "province": "นครพนม",
        "type": "รัฐ",
        "name": "โรงพยาบาลนครพนม (สธ)",
        "latitude": 17.4138876,
        "longitude": 104.7773892,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.4138876,104.7773892&query_place_id=ChIJC2uejTkJPDER7E_TB2DFFdg"
    },
    {
        "province": "นครราชสีมา",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายสุรนารี นครราชสีมา",
        "latitude": 14.9661843,
        "longitude": 102.0867506,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.9661843,102.0867506&query_place_id=ChIJ2UOcWcdMGTERJ95cLcyDxDU"
    },
    {
        "province": "นครราชสีมา",
        "type": "รัฐ",
        "name": "โรงพยาบาลเทพรัตน์นครราชสีมา (สธ)",
        "latitude": 14.9247409,
        "longitude": 101.9652755,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.9247409,101.9652755&query_place_id=ChIJ28Zi0pKxHjERS0oeTEK0ku8"
    },
    {
        "province": "นครราชสีมา",
        "type": "รัฐ",
        "name": "โรงพยาบาลปากช่องนานา (สธ)",
        "latitude": 14.6806741,
        "longitude": 101.4000776,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.6806741,101.4000776&query_place_id=ChIJh9Y_lBcrHDERR_FZyIGPelA"
    },
    {
        "province": "นครราชสีมา",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี",
        "latitude": 14.8640939,
        "longitude": 102.0355109,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.8640939,102.0355109&query_place_id=ChIJi-04EwWtHjERYobt57W00Qw"
    },
    {
        "province": "นครราชสีมา",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาราชนครราชสีมา (สธ)",
        "latitude": 14.9846923,
        "longitude": 102.1034119,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.9846923,102.1034119&query_place_id=ChIJh0n-95xMGTERutO0DAWmehQ"
    },
    {
        "province": "นครราชสีมา",
        "type": "เอกชน",
        "name": "โรงพยาบาลกรุงเทพปากช่อง",
        "latitude": 14.718258,
        "longitude": 101.431655,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.718258,101.431655&query_place_id=ChIJkfLFLScqHDERTClUG6yABWw"
    },
    {
        "province": "นครราชสีมา",
        "type": "เอกชน",
        "name": "โรงพยาบาล ป.แพทย์ 1",
        "latitude": 14.973961,
        "longitude": 102.1060961,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.973961,102.1060961&query_place_id=ChIJ9-DTNY5MGTERfYTBX1VBZAw"
    },
    {
        "province": "นครศรีธรรมราช",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายวชิราวุธ",
        "latitude": 8.4980356,
        "longitude": 99.9543009,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.4980356,99.95430089999999&query_place_id=ChIJSRvpy1EGUzARRbHQtLHgcTI"
    },
    {
        "province": "นครศรีธรรมราช",
        "type": "รัฐ",
        "name": "โรงพยาบาลท่าศาลา (สธ)",
        "latitude": 8.660730899999999,
        "longitude": 99.9228971,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.660730899999999,99.9228971&query_place_id=ChIJpWsJY2AKUzARgvHmT3a7Cec"
    },
    {
        "province": "นครศรีธรรมราช",
        "type": "รัฐ",
        "name": "โรงพยาบาลทุ่งสง (สธ)",
        "latitude": 8.1624419,
        "longitude": 99.6807166,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.1624419,99.6807166&query_place_id=ChIJH1faRQhFUjARyyxBnn5uAIg"
    },
    {
        "province": "นครศรีธรรมราช",
        "type": "รัฐ",
        "name": "โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยวลัยลักษณ์",
        "latitude": 8.6422429,
        "longitude": 99.913091,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.6422429,99.91309100000001&query_place_id=ChIJHVtnMw0KUzARg57HzuKxhZA"
    },
    {
        "province": "นครศรีธรรมราช",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาราชนครศรีธรรมราช (สธ)",
        "latitude": 8.3900084,
        "longitude": 99.9714187,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.3900084,99.9714187&query_place_id=ChIJG5g3_ZkBUzARBqWkxde78as"
    },
    {
        "province": "นครศรีธรรมราช",
        "type": "รัฐ",
        "name": "โรงพยาบาลสิชล (สธ)",
        "latitude": 9.00792,
        "longitude": 99.903068,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=9.00792,99.90306799999999&query_place_id=ChIJH-qfWn5_UzARiiGh0XCip58"
    },
    {
        "province": "นครสวรรค์",
        "type": "รัฐ",
        "name": "โรงพยาบาลสวรรค์ประชารักษ์ แห่งใหม่ (สธ)",
        "latitude": 15.7068592,
        "longitude": 100.1384211,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.7068592,100.1384211&query_place_id=ChIJQ311-hJP4DARCPr9PC4ObHc"
    },
    {
        "province": "นครสวรรค์",
        "type": "เอกชน",
        "name": "โรงพยาบาลร่มฉัตร",
        "latitude": 15.6997956,
        "longitude": 100.1336509,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.6997956,100.1336509&query_place_id=ChIJG9FnxRRP4DAR-HVjV7h0ugU"
    },
    {
        "province": "นนทบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพระนั่งเกล้า (สธ)",
        "latitude": 13.8653518,
        "longitude": 100.4813657,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8653518,100.4813657&query_place_id=ChIJVbCxG9ea4jARbLbkDKOYIiw"
    },
    {
        "province": "นนทบุรี",
        "type": "รัฐ",
        "name": "ศูนย์การแพทย์ปัญญานันทภิกขุ ชลประทาน",
        "latitude": 13.9000288,
        "longitude": 100.502027,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9000288,100.502027&query_place_id=ChIJO437tCeF4jARr4XZIO5p2FA"
    },
    {
        "province": "นนทบุรี",
        "type": "รัฐ",
        "name": "สถาบันบำราศนราดูร (สธ)",
        "latitude": 13.8537638,
        "longitude": 100.5227505,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8537638,100.5227505&query_place_id=ChIJu2C8R1yb4jARaBmA7RU8nBM"
    },
    {
        "province": "นนทบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลกรุงไทย",
        "latitude": 13.9129495,
        "longitude": 100.5092523,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9129495,100.5092523&query_place_id=ChIJLXBifYuE4jARbJzNE6nBZx8"
    },
    {
        "province": "นนทบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลกรุงไทย เวสเทิร์น",
        "latitude": 13.9272523,
        "longitude": 100.4081428,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9272523,100.4081428&query_place_id=ChIJKzwlwz-P4jARdmod2IriPDk"
    },
    {
        "province": "นนทบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ รัตนาธิเบศร์",
        "latitude": 13.8759146,
        "longitude": 100.4235118,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8759146,100.4235118&query_place_id=ChIJoysK5R2Q4jARa9hXb6aKijA"
    },
    {
        "province": "นนทบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลวิภารามปากเกร็ด",
        "latitude": 13.910178,
        "longitude": 100.4982839,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.910178,100.4982839&query_place_id=ChIJ569E0PCE4jARpZCwJFllthI"
    },
    {
        "province": "นราธิวาส",
        "type": "รัฐ",
        "name": "โรงพยาบาลนราธิวาสราชนครินทร์ (สธ)",
        "latitude": 6.4145173,
        "longitude": 101.8238271,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=6.4145173,101.8238271&query_place_id=ChIJeR5khxfxszERwXxgf3OKnxU"
    },
    {
        "province": "นราธิวาส",
        "type": "รัฐ",
        "name": "โรงพยาบาลสุไหงโก-ลก (สธ)",
        "latitude": 6.0271753,
        "longitude": 101.9707548,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=6.0271753,101.9707548&query_place_id=ChIJQ4rgBPsbtDER4JwcQXRv-gM"
    },
    {
        "province": "นราธิวาส",
        "type": "เอกชน",
        "name": "โรงพยาบาลราษฎร์นรา",
        "latitude": 6.410485899999999,
        "longitude": 101.8222433,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=6.410485899999999,101.8222433&query_place_id=ChIJu4aNTNPxszERLNdbxxy3maw"
    },
    {
        "province": "น่าน",
        "type": "รัฐ",
        "name": "โรงพยาบาลน่าน (สธ)",
        "latitude": 18.7943747,
        "longitude": 100.788303,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.7943747,100.788303&query_place_id=ChIJE9QE6_GNJzERfiW-9Hn76bM"
    },
    {
        "province": "บึงกาฬ",
        "type": "รัฐ",
        "name": "โรงพยาบาลบึงกาฬ (สธ)",
        "latitude": 18.3630517,
        "longitude": 103.6521911,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.3630517,103.6521911&query_place_id=ChIJFdoZKYnWOjERwyfL0_YvA5Y"
    },
    {
        "province": "บุรีรัมย์",
        "type": "รัฐ",
        "name": "โรงพยาบาลบุรีรัมย์ (สธ)",
        "latitude": 15.0056788,
        "longitude": 103.1007246,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.0056788,103.1007246&query_place_id=ChIJAYfCDseVGTERx0eNB6XjZlU"
    },
    {
        "province": "บุรีรัมย์",
        "type": "รัฐ",
        "name": "โรงพยาบาลนางรอง (สธ)",
        "latitude": 14.6343802,
        "longitude": 102.7867977,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.6343802,102.7867977&query_place_id=ChIJf1HwuSbVGzERRlnTXTEQf_E"
    },
    {
        "province": "ปทุมธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ",
        "latitude": 14.0736707,
        "longitude": 100.6156713,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.0736707,100.6156713&query_place_id=ChIJHVhAUot_4jARYCpP-vQr_Ow"
    },
    {
        "province": "ปทุมธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลปทุมธานี (สธ)",
        "latitude": 14.020474,
        "longitude": 100.5233701,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.020474,100.5233701&query_place_id=ChIJQxBGAy6H4jAR_d5R5E3N_5Y"
    },
    {
        "province": "ปทุมธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลราชวิถี 2 (รังสิต)",
        "latitude": 13.9751875,
        "longitude": 100.6188437,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9751875,100.6188437&query_place_id=ChIJTX6OSCGB4jARqvWyttwQRkc"
    },
    {
        "province": "ปทุมธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลกรุงไทย นอร์ทเทิร์น",
        "latitude": 14.0472528,
        "longitude": 100.463928,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.0472528,100.463928&query_place_id=ChIJQ7-XKwCH4jARyRu4bVyZKzs"
    },
    {
        "province": "ปทุมธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลกรุงไทย ปทุม",
        "latitude": 13.957679,
        "longitude": 100.527517,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.957679,100.527517&query_place_id=ChIJmy9WkOyF4jARruGyLA7LFK8"
    },
    {
        "province": "ปทุมธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ ปทุมธานี",
        "latitude": 14.1172222,
        "longitude": 100.6178566,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.1172222,100.6178566&query_place_id=ChIJA4BKU2B_4jARpzXuyDDRrpg"
    },
    {
        "province": "ปทุมธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลปทุมเวช",
        "latitude": 13.9880321,
        "longitude": 100.6104507,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9880321,100.6104507&query_place_id=ChIJbX75ltyB4jARjO_T4OQ602I"
    },
    {
        "province": "ปทุมธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลแพทย์รังสิต",
        "latitude": 13.9631251,
        "longitude": 100.6217871,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9631251,100.6217871&query_place_id=ChIJQbOf3gF-HTERvzje77sMNZI"
    },
    {
        "province": "ปทุมธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลซีจีเอ ลำลูกกา",
        "latitude": 13.9693495,
        "longitude": 100.6387373,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9693495,100.6387373&query_place_id=ChIJDzKmHmV_HTERGWYHa3EylKM"
    },
    {
        "province": "ปทุมธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลภัทร-ธนบุรี",
        "latitude": 14.0488576,
        "longitude": 100.6179585,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.0488576,100.6179585&query_place_id=ChIJ36sDVACA4jAR-Fu1A5zs8Qg"
    },
    {
        "province": "ประจวบคีรีขันธ์",
        "type": "รัฐ",
        "name": "โรงพยาบาลบางสะพาน (สธ)",
        "latitude": 11.223786,
        "longitude": 99.4967268,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=11.223786,99.49672679999999&query_place_id=ChIJq6qqqmre_jARtlVfE1Gp7fU"
    },
    {
        "province": "ประจวบคีรีขันธ์",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายธนะรัชต์",
        "latitude": 12.4101098,
        "longitude": 99.9228664,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.4101098,99.92286639999999&query_place_id=ChIJ799HBMKy_TARCXNKfoDh1Hk"
    },
    {
        "province": "ประจวบคีรีขันธ์",
        "type": "รัฐ",
        "name": "โรงพยาบาลประจวบคีรีขันธ์ (สธ)",
        "latitude": 11.8009757,
        "longitude": 99.7957505,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=11.8009757,99.79575050000001&query_place_id=ChIJ54GfVQmE_jARDwMXLeU49Ro"
    },
    {
        "province": "ประจวบคีรีขันธ์",
        "type": "รัฐ",
        "name": "โรงพยาบาลหัวหิน (สธ)",
        "latitude": 12.6080685,
        "longitude": 99.9479176,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.6080685,99.9479176&query_place_id=ChIJgR5yTn2q_TAR_ZGJyFuRTGo"
    },
    {
        "province": "ปราจีนบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลกบินทร์บุรี (สธ)",
        "latitude": 13.9575753,
        "longitude": 101.7266016,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.9575753,101.7266016&query_place_id=ChIJuQ9sV96KHDER-u4XUi_BVS0"
    },
    {
        "province": "ปราจีนบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายจักรพงษ์",
        "latitude": 14.0737973,
        "longitude": 101.371845,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.0737973,101.371845&query_place_id=ChIJrQpUyVZUHDERMRDpYGKfxs0"
    },
    {
        "province": "ปราจีนบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลเจ้าพระยาอภัยภูเบศร (สธ)",
        "latitude": 14.0543455,
        "longitude": 101.3957653,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.0543455,101.3957653&query_place_id=ChIJmUE2665VHDERtAiGDrVVO-g"
    },
    {
        "province": "ปราจีนบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ ปราจีนบุรี",
        "latitude": 13.8990979,
        "longitude": 101.5957656,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8990979,101.5957656&query_place_id=ChIJO6De0UbxHDERwGqQ2dQEZ0o"
    },
    {
        "province": "ปราจีนบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลจุฬารัตน์ 304 อินเตอร์",
        "latitude": 13.8970193,
        "longitude": 101.6050383,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8970193,101.6050383&query_place_id=ChIJv70sfkTxHDERi3LDw3tjCBU"
    },
    {
        "province": "ปัตตานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลปัตตานี (สธ)",
        "latitude": 6.8689243,
        "longitude": 101.2487972,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=6.8689243,101.2487972&query_place_id=ChIJMXV3fXcFszERhQBj6_w5Vo0"
    },
    {
        "province": "พระนครศรีอยุธยา",
        "type": "รัฐ",
        "name": "โรงพยาบาลพระนครศรีอยุธยา (สธ)",
        "latitude": 14.3437123,
        "longitude": 100.5604679,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.3437123,100.5604679&query_place_id=ChIJvZWQpjt04jARgFQ1JDiSAQ8"
    },
    {
        "province": "พระนครศรีอยุธยา",
        "type": "รัฐ",
        "name": "โรงพยาบาลเสนา (สธ)",
        "latitude": 14.321138,
        "longitude": 100.388113,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.321138,100.388113&query_place_id=ChIJG3EowY5u4jARGodTqarjYr8"
    },
    {
        "province": "พระนครศรีอยุธยา",
        "type": "เอกชน",
        "name": "โรงพยาบาลการุญเวช อยุธยา",
        "latitude": 14.2115476,
        "longitude": 100.608053,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.2115476,100.608053&query_place_id=ChIJicBPpnJ44jARBe5qRCxmKoU"
    },
    {
        "province": "พระนครศรีอยุธยา",
        "type": "เอกชน",
        "name": "โรงพยาบาลราชธานี โรจนะ",
        "latitude": 14.2999999,
        "longitude": 100.6553859,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.2999999,100.6553859&query_place_id=ChIJafJ97qKJHTERPMvMA2oG8kM"
    },
    {
        "province": "พระนครศรีอยุธยา",
        "type": "เอกชน",
        "name": "โรงพยาบาลราชธานี",
        "latitude": 14.3429693,
        "longitude": 100.608986,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.3429693,100.608986&query_place_id=ChIJF6YXFOGIHTERlIwRkUYEpUg"
    },
    {
        "province": "พะเยา",
        "type": "รัฐ",
        "name": "โรงพยาบาลพะเยา (สธ)",
        "latitude": 19.1910684,
        "longitude": 99.8773951,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=19.1910684,99.8773951&query_place_id=ChIJE2RYwGnT2TAROT80OfEtfBI"
    },
    {
        "province": "พะเยา",
        "type": "รัฐ",
        "name": "โรงพยาบาลเชียงคำ (สธ)",
        "latitude": 19.5185887,
        "longitude": 100.2961361,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=19.5185887,100.2961361&query_place_id=ChIJWYCdh_vs1zARUWuKTtKsEuM"
    },
    {
        "province": "พะเยา",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาวิทยาลัยพะเยา",
        "latitude": 19.0323876,
        "longitude": 99.9199278,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=19.0323876,99.9199278&query_place_id=ChIJVQTK7kMz2DAR8eT3DSACvSc"
    },
    {
        "province": "พังงา",
        "type": "รัฐ",
        "name": "โรงพยาบาลตะกั่วป่า (สธ)",
        "latitude": 8.8638661,
        "longitude": 98.3338196,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.8638661,98.3338196&query_place_id=ChIJRS9CXwDbUDARuQksrW8Saqw"
    },
    {
        "province": "พังงา",
        "type": "รัฐ",
        "name": "โรงพยาบาลพังงา (สธ)",
        "latitude": 8.44861,
        "longitude": 98.5264259,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=8.44861,98.52642589999999&query_place_id=ChIJn_5Mo6cBUTAR5_vNSviZA-w"
    },
    {
        "province": "พัทลุง",
        "type": "รัฐ",
        "name": "โรงพยาบาลพัทลุง (สธ)",
        "latitude": 7.614924999999999,
        "longitude": 100.0736089,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.614924999999999,100.0736089&query_place_id=ChIJbWK4ntF8TTARNMA5mLfazuA"
    },
    {
        "province": "พิจิตร",
        "type": "รัฐ",
        "name": "โรงพยาบาลพิจิตร (สธ)",
        "latitude": 16.4350085,
        "longitude": 100.3448289,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.4350085,100.3448289&query_place_id=ChIJJXtY2nbm3zARa5636Seklcs"
    },
    {
        "province": "พิษณุโลก",
        "type": "รัฐ",
        "name": "โรงพยาบาลพุทธชินราช (สธ)",
        "latitude": 16.8087979,
        "longitude": 100.2635137,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.8087979,100.2635137&query_place_id=ChIJG2fPsteX3zARSwYOHk5KQUc"
    },
    {
        "province": "พิษณุโลก",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายสมเด็จพระนเรศวร",
        "latitude": 16.8255631,
        "longitude": 100.253634,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.8255631,100.253634&query_place_id=ChIJ7xO6D1y93zARe7JHu_RyqVg"
    },
    {
        "province": "พิษณุโลก",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาวิทยาลัยนเรศวร",
        "latitude": 16.7487985,
        "longitude": 100.1890293,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.7487985,100.1890293&query_place_id=ChIJpYADSaG-3zARsdY5gHoI1wE"
    },
    {
        "province": "พิษณุโลก",
        "type": "เอกชน",
        "name": "โรงพยาบาลพิษณุโลกฮอสพิทอล",
        "latitude": 16.8056604,
        "longitude": 100.2552002,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.8056604,100.2552002&query_place_id=ChIJC2pffXy93zARjKrANEQfr0c"
    },
    {
        "province": "เพชรบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพระจอมเกล้า (สธ)",
        "latitude": 13.1180938,
        "longitude": 99.938322,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.1180938,99.938322&query_place_id=ChIJR4rZQQEn_TAR9uE68sQhW9g"
    },
    {
        "province": "เพชรบูรณ์",
        "type": "รัฐ",
        "name": "โรงพยาบาลเพชรบูรณ์ (สธ)",
        "latitude": 16.4272651,
        "longitude": 101.1534343,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.4272651,101.1534343&query_place_id=ChIJcxa98Kw6IDERHui4f1Vlxwo"
    },
    {
        "province": "แพร่",
        "type": "รัฐ",
        "name": "โรงพยาบาลแพร่ (สธ)",
        "latitude": 18.1339366,
        "longitude": 100.154381,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.1339366,100.154381&query_place_id=ChIJ34ul-z3C2DARWukUdm-iqKk"
    },
    {
        "province": "ภูเก็ต",
        "type": "รัฐ",
        "name": "โรงพยาบาลวชิระภูเก็ต (สธ)",
        "latitude": 7.8967544,
        "longitude": 98.3838207,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.8967544,98.3838207&query_place_id=ChIJWfZgJe0xUDARUwGA-BqRp0E"
    },
    {
        "province": "ภูเก็ต",
        "type": "รัฐ",
        "name": "โรงพยาบาลป่าตอง (สธ)",
        "latitude": 7.895942499999999,
        "longitude": 98.3014684,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.895942499999999,98.30146839999999&query_place_id=ChIJeXJ0SKI6UDAR65xhAW-b_-A"
    },
    {
        "province": "ภูเก็ต",
        "type": "รัฐ",
        "name": "โรงพยาบาลองค์การบริหารส่วนจังหวัดภูเก็ต",
        "latitude": 7.881066000000001,
        "longitude": 98.404991,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.881066000000001,98.404991&query_place_id=ChIJ82zGzQUyUDARE35eP_OmGas"
    },
    {
        "province": "ภูเก็ต",
        "type": "เอกชน",
        "name": "โรงพยาบาลมิชชั่นภูเก็ต",
        "latitude": 7.906812500000001,
        "longitude": 98.3908125,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.906812500000001,98.3908125&query_place_id=ChIJvXHnU48xUDAR2HXgipVKiLk"
    },
    {
        "province": "ภูเก็ต",
        "type": "เอกชน",
        "name": "โรงพยาบาลดีบุก",
        "latitude": 7.871874099999999,
        "longitude": 98.3604183,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.871874099999999,98.36041829999999&query_place_id=ChIJ7amdFykuUDARROGutIU81GI"
    },
    {
        "province": "มหาสารคาม",
        "type": "รัฐ",
        "name": "โรงพยาบาลมหาสารคาม (สธ)",
        "latitude": 16.1811672,
        "longitude": 103.2992188,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.1811672,103.2992188&query_place_id=ChIJtdbSCe2mIjER_pFo4En9H8s"
    },
    {
        "province": "มหาสารคาม",
        "type": "รัฐ",
        "name": "โรงพยาบาลสุทธาเวช คณะแพทยศาสตร์ มหาวิทยาลัยมหาสารคาม",
        "latitude": 16.1994897,
        "longitude": 103.2851903,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.1994897,103.2851903&query_place_id=ChIJbcm_oaOmIjERYUfZ8rDFAQk"
    },
    {
        "province": "มุกดาหาร",
        "type": "รัฐ",
        "name": "โรงพยาบาลมุกดาหาร (สธ)",
        "latitude": 16.5418353,
        "longitude": 104.7268926,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.5418353,104.7268926&query_place_id=ChIJUxaxPELGPTERsTuH_iDZwCE"
    },
    {
        "province": "แม่ฮ่องสอน",
        "type": "รัฐ",
        "name": "โรงพยาบาลศรีสังวาลย์ (สธ)",
        "latitude": 19.2997442,
        "longitude": 97.9718655,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=19.2997442,97.97186549999999&query_place_id=ChIJEzCsIgim2jAR087lGaD9Tiw"
    },
    {
        "province": "ยโสธร",
        "type": "รัฐ",
        "name": "โรงพยาบาลยโสธร (สธ)",
        "latitude": 15.7812822,
        "longitude": 104.1615272,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.7812822,104.1615272&query_place_id=ChIJW89IEDPJFzERpjtamFsS55A"
    },
    {
        "province": "ยะลา",
        "type": "รัฐ",
        "name": "โรงพยาบาลเบตง (สธ)",
        "latitude": 5.773554,
        "longitude": 101.0821969,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=5.773554,101.0821969&query_place_id=ChIJkQQpB-bltDERacnnPU9XQgs"
    },
    {
        "province": "ยะลา",
        "type": "รัฐ",
        "name": "โรงพยาบาลยะลา (สธ)",
        "latitude": 6.5476549,
        "longitude": 101.2765045,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=6.5476549,101.2765045&query_place_id=ChIJT_ynPT10szER5_EJuwgVtsM"
    },
    {
        "province": "ร้อยเอ็ด",
        "type": "รัฐ",
        "name": "โรงพยาบาลร้อยเอ็ด (สธ)",
        "latitude": 16.0476019,
        "longitude": 103.6524306,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=16.0476019,103.6524306&query_place_id=ChIJi72kxC38FzERarYcVdC3M_E"
    },
    {
        "province": "ระนอง",
        "type": "รัฐ",
        "name": "โรงพยาบาลระนอง (สธ)",
        "latitude": 9.9635959,
        "longitude": 98.6429187,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=9.9635959,98.6429187&query_place_id=ChIJLybwsB5QVjAR_q-tP7Y7Bhk"
    },
    {
        "province": "ระยอง",
        "type": "รัฐ",
        "name": "โรงพยาบาลเฉลิมพระเกียรติสมเด็จพระเทพรัตนราชสุดาฯ (สธ)",
        "latitude": 12.7305694,
        "longitude": 101.1364029,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.7305694,101.1364029&query_place_id=ChIJDU-3hT_wAjERxKvxQbD8m90"
    },
    {
        "province": "ระยอง",
        "type": "รัฐ",
        "name": "โรงพยาบาลระยอง (สธ)",
        "latitude": 12.6821032,
        "longitude": 101.2764781,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.6821032,101.2764781&query_place_id=ChIJPVcI_mn8AjERhRVqJDoIRyQ"
    },
    {
        "province": "ระยอง",
        "type": "เอกชน",
        "name": "โรงพยาบาลกรุงเทพปลวกแดง",
        "latitude": 12.9785617,
        "longitude": 101.1967419,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.9785617,101.1967419&query_place_id=ChIJK-JHTiLdAjERhSJGClRoXM4"
    },
    {
        "province": "ระยอง",
        "type": "เอกชน",
        "name": "โรงพยาบาลปิยะเวชช์ ระยอง",
        "latitude": 12.9887275,
        "longitude": 101.1365593,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.9887275,101.1365593&query_place_id=ChIJ0-zEUxjDAjERu6qFVOlQLX0"
    },
    {
        "province": "ระยอง",
        "type": "เอกชน",
        "name": "โรงพยาบาลจุฬารัตน์ระยอง",
        "latitude": 12.6852329,
        "longitude": 101.2745722,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.6852329,101.2745722&query_place_id=ChIJ8e0__2n8AjER8VB49wK_uRg"
    },
    {
        "province": "ระยอง",
        "type": "เอกชน",
        "name": "โรงพยาบาลมงกุฎระยอง",
        "latitude": 12.7331929,
        "longitude": 101.1577706,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=12.7331929,101.1577706&query_place_id=ChIJJ5xougvwAjER82hn3WxUP68"
    },
    {
        "province": "ราชบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลบ้านโป่ง (สธ)",
        "latitude": 13.8172519,
        "longitude": 99.8709553,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8172519,99.87095529999999&query_place_id=ChIJV5tAAtsd4zAROgFb5tGbNJs"
    },
    {
        "province": "ราชบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลดำเนินสะดวก (สธ)",
        "latitude": 13.5365157,
        "longitude": 99.965853,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5365157,99.965853&query_place_id=ChIJ3zkiOdzZ4jARj5yX-kHNpHw"
    },
    {
        "province": "ราชบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลโพธาราม (สธ)",
        "latitude": 13.6946009,
        "longitude": 99.8516861,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6946009,99.8516861&query_place_id=ChIJG4ZgAsoh4zARDBywclQxJYg"
    },
    {
        "province": "ราชบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลราชบุรี (สธ)",
        "latitude": 13.5309561,
        "longitude": 99.8155114,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5309561,99.81551139999999&query_place_id=ChIJmf0sdKso4zARu-m0732P8ZA"
    },
    {
        "province": "ราชบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลซานคามิลโล",
        "latitude": 13.810396,
        "longitude": 99.8793049,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.810396,99.8793049&query_place_id=ChIJqZaT-8Yd4zAR81UP89HGjUs"
    },
    {
        "province": "ลพบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลบ้านหมี่ (สธ)",
        "latitude": 15.0441789,
        "longitude": 100.5419625,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.0441789,100.5419625&query_place_id=ChIJoaMEr-zj4TARmWntZsFk98A"
    },
    {
        "province": "ลพบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพระนารายณ์มหาราช (สธ)",
        "latitude": 14.8049099,
        "longitude": 100.6525809,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.8049099,100.6525809&query_place_id=ChIJfa9OmmMAHjERYcMVTD6g8XE"
    },
    {
        "province": "ลพบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลอานันทมหิดล",
        "latitude": 14.8491606,
        "longitude": 100.6651011,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.8491606,100.6651011&query_place_id=ChIJ8TybwKABHjER1iufPNVFZjo"
    },
    {
        "province": "ลำปาง",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายสุรศักดิ์มนตรี (กห)",
        "latitude": 18.2948244,
        "longitude": 99.5191083,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.2948244,99.5191083&query_place_id=ChIJMTvvyJls2TARNZMvMXQLeUI"
    },
    {
        "province": "ลำปาง",
        "type": "รัฐ",
        "name": "โรงพยาบาลลำปาง (สธ)",
        "latitude": 18.2869216,
        "longitude": 99.5059798,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.2869216,99.50597979999999&query_place_id=ChIJ8S4GAH5r2TARcj4b6LRQFvw"
    },
    {
        "province": "ลำพูน",
        "type": "รัฐ",
        "name": "โรงพยาบาลลำพูน (สธ)",
        "latitude": 18.5827899,
        "longitude": 98.9950659,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.5827899,98.9950659&query_place_id=ChIJnUfy3EjN2zARgGlckoLI-YI"
    },
    {
        "province": "ลำพูน",
        "type": "เอกชน",
        "name": "โรงพยาบาลพริ้นซ์ ลำพูน",
        "latitude": 18.5630387,
        "longitude": 99.0359934,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.5630387,99.0359934&query_place_id=ChIJBS1SA3fT2zAR0Tdk-Aew1jo"
    },
    {
        "province": "ลำพูน",
        "type": "เอกชน",
        "name": "โรงพยาบาลลำพูนใกล้หมอ",
        "latitude": 18.5962646,
        "longitude": 99.0422449,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.5962646,99.0422449&query_place_id=ChIJw2czfY8t2jARVl82XuX9a-M"
    },
    {
        "province": "ลำพูน",
        "type": "เอกชน",
        "name": "โรงพยาบาลหริภุญชัย เมโมเรียล",
        "latitude": 18.573606,
        "longitude": 99.004915,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=18.573606,99.004915&query_place_id=ChIJCbqFfFzN2zARSKmRxxTOxX0"
    },
    {
        "province": "เลย",
        "type": "รัฐ",
        "name": "โรงพยาบาลเลย (สธ)",
        "latitude": 17.487661,
        "longitude": 101.7226133,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.487661,101.7226133&query_place_id=ChIJZQMI8exHITERyrSRcAAkmv8"
    },
    {
        "province": "ศรีสะเกษ",
        "type": "รัฐ",
        "name": "โรงพยาบาลศรีสะเกษ (สธ)",
        "latitude": 15.1161149,
        "longitude": 104.3201394,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.1161149,104.3201394&query_place_id=ChIJAwDvx3zeFjER0drNd1LFuHE"
    },
    {
        "province": "สกลนคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลสกลนคร (สธ)",
        "latitude": 17.1633998,
        "longitude": 104.1582096,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.1633998,104.1582096&query_place_id=ChIJKwo6ni3zPDERolMp5fHD9NU"
    },
    {
        "province": "สกลนคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระยุพราชสว่างแดนดิน (สธ)",
        "latitude": 17.47724,
        "longitude": 103.4579026,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.47724,103.4579026&query_place_id=ChIJPSfv6ORTIzERdyPRODPDKKk"
    },
    {
        "province": "สงขลา",
        "type": "รัฐ",
        "name": "โรงพยาบาลสงขลา (สธ)",
        "latitude": 7.1421701,
        "longitude": 100.5664011,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.1421701,100.5664011&query_place_id=ChIJiZb2toctTTARsEpfC70jAg8"
    },
    {
        "province": "สงขลา",
        "type": "รัฐ",
        "name": "โรงพยาบาลสงขลานครินทร์",
        "latitude": 7.006915,
        "longitude": 100.4944626,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.006915,100.4944626&query_place_id=ChIJUzJZxK8pTTARJz1amTULRJ8"
    },
    {
        "province": "สงขลา",
        "type": "รัฐ",
        "name": "โรงพยาบาลหาดใหญ่ (สธ)",
        "latitude": 7.0167471,
        "longitude": 100.4674982,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.0167471,100.4674982&query_place_id=ChIJD1xaM18oTTARpnshgDri22A"
    },
    {
        "province": "สงขลา",
        "type": "เอกชน",
        "name": "โรงพยาบาล ศิครินทร์ หาดใหญ่",
        "latitude": 7.022423,
        "longitude": 100.4697785,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=7.022423,100.4697785&query_place_id=ChIJV9cC3fYoTTARgZ2yPZAC4C8"
    },
    {
        "province": "สตูล",
        "type": "รัฐ",
        "name": "โรงพยาบาลสตูล (สธ)",
        "latitude": 6.617899599999999,
        "longitude": 100.0711185,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=6.617899599999999,100.0711185&query_place_id=ChIJTyERj2WNTDARTZOuxjYo-Zk"
    },
    {
        "province": "สมุทรปราการ",
        "type": "รัฐ",
        "name": "โรงพยาบาลบางบ่อ (สธ)",
        "latitude": 13.56966,
        "longitude": 100.835684,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.56966,100.835684&query_place_id=ChIJV0UEfPVEHTERD_A8MyYTFoA"
    },
    {
        "province": "สมุทรปราการ",
        "type": "รัฐ",
        "name": "โรงพยาบาลบางพลี (สธ)",
        "latitude": 13.6038432,
        "longitude": 100.7061069,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6038432,100.7061069&query_place_id=ChIJzwc4y_hfHTERIasmzL9386k"
    },
    {
        "province": "สมุทรปราการ",
        "type": "รัฐ",
        "name": "โรงพยาบาลรามาธิบดีจักรีนฤบดินทร์",
        "latitude": 13.52597,
        "longitude": 100.7610614,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.52597,100.7610614&query_place_id=ChIJSXYBSZ5fHTER0fu_1yDq-tk"
    },
    {
        "province": "สมุทรปราการ",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมุทรปราการ (สธ)",
        "latitude": 13.583728,
        "longitude": 100.5973519,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.583728,100.5973519&query_place_id=ChIJk4HjL0in4jARt3ggjYC0l1Y"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลจุฬารัตน์ 3 อินเตอร์",
        "latitude": 13.5998401,
        "longitude": 100.7212443,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5998401,100.7212443&query_place_id=ChIJU31O1gxcHTERdVOPN69Ch6M"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลจุฬารัตน์ 9 แอร์พอร์ต",
        "latitude": 13.677462,
        "longitude": 100.7225039,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.677462,100.7225039&query_place_id=ChIJjR8jRFxnHTERvo3KgpwMGuk"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลเซ็นทรัล ปาร์ค",
        "latitude": 13.6155781,
        "longitude": 100.7440668,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6155781,100.7440668&query_place_id=ChIJVWkDXltcHTERDULAIdnypvo"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลบางนา 2",
        "latitude": 13.5940439,
        "longitude": 100.8049758,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5940439,100.8049758&query_place_id=ChIJ2Q5pLVJDHTERJi3hJmuRfpY"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลบางนา 5",
        "latitude": 13.6063793,
        "longitude": 100.6880253,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6063793,100.6880253&query_place_id=ChIJISAWsLteHTERyby6q3jpPWQ"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลเปาโล สมุทรปราการ",
        "latitude": 13.5983245,
        "longitude": 100.6145122,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5983245,100.6145122&query_place_id=ChIJyxWL7aug4jARr2WWBYgVikw"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลรวมชัยประชารักษ์",
        "latitude": 13.5836394,
        "longitude": 100.8541589,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5836394,100.8541589&query_place_id=ChIJq9fxbIVEHTERL6Wp0gLIYKc"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลศิครินทร์ สมุทรปราการ",
        "latitude": 13.5316243,
        "longitude": 100.6310251,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5316243,100.6310251&query_place_id=ChIJs-v3AW5YHTERPYJJfDCCc5c"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลสำโรงการแพทย์",
        "latitude": 13.6505089,
        "longitude": 100.5940993,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6505089,100.5940993&query_place_id=ChIJsQb64rqh4jARFYcnMNiFTcw"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลบางปะกอก 3",
        "latitude": 13.6343027,
        "longitude": 100.528285,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6343027,100.528285&query_place_id=ChIJhRaPydej4jAR06RCz1H7WKU"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลเปาโล พระประแดง",
        "latitude": 13.6084608,
        "longitude": 100.5514274,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6084608,100.5514274&query_place_id=ChIJw4uk_0eh4jARcWL09TmHLOg"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลเมืองสมุทรปากน้ำ",
        "latitude": 13.5951855,
        "longitude": 100.601198,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5951855,100.601198&query_place_id=ChIJvTJ0yLSg4jAR0EHI6kmKZ-4"
    },
    {
        "province": "สมุทรปราการ",
        "type": "เอกชน",
        "name": "โรงพยาบาลเมืองสมุทรปู่เจ้าฯ",
        "latitude": 13.6466956,
        "longitude": 100.5783807,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.6466956,100.5783807&query_place_id=ChIJBck2Ya-h4jARddRjyeahjKc"
    },
    {
        "province": "สมุทรสงคราม",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระพุทธเลิศหล้า (สธ)",
        "latitude": 13.4062425,
        "longitude": 99.9980347,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.4062425,99.9980347&query_place_id=ChIJHx2l7I7T4jARMcsQ6NpsyP8"
    },
    {
        "province": "สมุทรสาคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลกระทุ่มแบน (สธ)",
        "latitude": 13.654412,
        "longitude": 100.255064,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.654412,100.255064&query_place_id=ChIJTUk5r4DA4jARNb-ctZdb_Cg"
    },
    {
        "province": "สมุทรสาคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลบ้านแพ้ว",
        "latitude": 13.5904296,
        "longitude": 100.1047494,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5904296,100.1047494&query_place_id=ChIJP5xwwurE4jARD3eeO9loRVg"
    },
    {
        "province": "สมุทรสาคร",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมุทรสาคร (สธ)",
        "latitude": 13.5531654,
        "longitude": 100.2785698,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5531654,100.2785698&query_place_id=ChIJ3dKtXGa44jARthu-h46HMRk"
    },
    {
        "province": "สมุทรสาคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลวิชัยเวชฯ สมุทรสาคร",
        "latitude": 13.5757647,
        "longitude": 100.2719024,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5757647,100.2719024&query_place_id=ChIJ23ujw1K54jARTNK34_ybul8"
    },
    {
        "province": "สมุทรสาคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลวิชัยเวชฯ อ้อมน้อย",
        "latitude": 13.7106846,
        "longitude": 100.2915187,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7106846,100.2915187&query_place_id=ChIJicNJe2WV4jARVCZX_BIvs6k"
    },
    {
        "province": "สมุทรสาคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลมหาชัย 2",
        "latitude": 13.7073935,
        "longitude": 100.3011521,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.7073935,100.3011521&query_place_id=ChIJ33gHEnmV4jAR2a6WO1r2pH4"
    },
    {
        "province": "สมุทรสาคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลมหาชัย 3",
        "latitude": 13.5566692,
        "longitude": 100.2720623,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5566692,100.2720623&query_place_id=ChIJT8JEpmS44jARYCvdBfGpjIQ"
    },
    {
        "province": "สมุทรสาคร",
        "type": "เอกชน",
        "name": "โรงพยาบาลวิภาราม สมุทรสาคร",
        "latitude": 13.5388032,
        "longitude": 100.229287,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.5388032,100.229287&query_place_id=ChIJpRywqcfH4jAR7Ym_UMtCsbE"
    },
    {
        "province": "สระแก้ว",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระยุพราชสระแก้ว (สธ)",
        "latitude": 13.8168071,
        "longitude": 102.0722736,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=13.8168071,102.0722736&query_place_id=ChIJFSNiqFh9GzERmUvp_xcwjGo"
    },
    {
        "province": "สระบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลพระพุทธบาท (สธ)",
        "latitude": 14.7243162,
        "longitude": 100.801937,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.7243162,100.801937&query_place_id=ChIJ9whE2yzjHTERCtbwYR6kU4A"
    },
    {
        "province": "สระบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสระบุรี (สธ)",
        "latitude": 14.5341609,
        "longitude": 100.9157958,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.5341609,100.9157958&query_place_id=ChIJQd5gruLoHTERVh5nMsVxNR0"
    },
    {
        "province": "สระบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลเกษมราษฎร์ สระบุรี",
        "latitude": 14.5238673,
        "longitude": 100.9331322,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.5238673,100.9331322&query_place_id=ChIJO-UPMArpHTERaittA_6Ich0"
    },
    {
        "province": "สระบุรี",
        "type": "เอกชน",
        "name": "โรงพยาบาลราชธานี หนองแค",
        "latitude": 14.4094709,
        "longitude": 100.850132,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.4094709,100.850132&query_place_id=ChIJv8WqPlftHTER2pCNgMa3t3M"
    },
    {
        "province": "สิงห์บุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสิงห์บุรี (สธ)",
        "latitude": 14.8967085,
        "longitude": 100.3976201,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.8967085,100.3976201&query_place_id=ChIJlQiXtdTw4TAR52WvgzBOeIY"
    },
    {
        "province": "สิงห์บุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลอินทร์บุรี (สธ)",
        "latitude": 14.9882313,
        "longitude": 100.334323,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.9882313,100.334323&query_place_id=ChIJYzzcM_Tt4TARbNNn0Q2ASJs"
    },
    {
        "province": "สุโขทัย",
        "type": "รัฐ",
        "name": "โรงพยาบาลศรีสังวรสุโขทัย (สธ)",
        "latitude": 17.1662015,
        "longitude": 99.865098,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.1662015,99.86509799999999&query_place_id=ChIJb9yyLrb93jARQQ6gB3PzviM"
    },
    {
        "province": "สุโขทัย",
        "type": "รัฐ",
        "name": "โรงพยาบาลสุโขทัย (สธ)",
        "latitude": 17.0108475,
        "longitude": 99.7960459,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.0108475,99.7960459&query_place_id=ChIJFzwsYmFW3jARx75P7sgGUvA"
    },
    {
        "province": "สุพรรณบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลเจ้าพระยายมราช (สธ)",
        "latitude": 14.4665543,
        "longitude": 100.1160747,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.4665543,100.1160747&query_place_id=ChIJ_____1s44jAR3Ht1MnRe5ck"
    },
    {
        "province": "สุพรรณบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระสังฆราชองค์ที่ 17 (สธ)",
        "latitude": 14.225216,
        "longitude": 100.0279701,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.225216,100.0279701&query_place_id=ChIJ7_6gVtihERERZvzKBsh_nxY"
    },
    {
        "province": "สุพรรณบุรี",
        "type": "รัฐ",
        "name": "โรงพยาบาลอู่ทอง (สธ)",
        "latitude": 14.3491649,
        "longitude": 99.87218980000002,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.3491649,99.87218980000002&query_place_id=ChIJeUljmxuz4zARoqkVYJW0ItI"
    },
    {
        "province": "สุราษฎร์ธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลกาญจนดิษฐ์ (สธ)",
        "latitude": 9.1614985,
        "longitude": 99.4928772,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=9.1614985,99.4928772&query_place_id=ChIJP1PCTHoMVDARI8qCcnV7L-A"
    },
    {
        "province": "สุราษฎร์ธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลเกาะสมุย (สธ)",
        "latitude": 9.5218263,
        "longitude": 99.935496,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=9.521826299999999,99.935496&query_place_id=ChIJmWj8zUT2VDARz1OtWX_tDb4"
    },
    {
        "province": "สุราษฎร์ธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสุราษฎร์ธานี (สธ)",
        "latitude": 9.1237537,
        "longitude": 99.3100007,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=9.1237537,99.31000069999999&query_place_id=ChIJgUR82fkGVDARNEXrt8Cvs00"
    },
    {
        "province": "สุราษฎร์ธานี",
        "type": "เอกชน",
        "name": "โรงพยาบาลวัฒนแพทย์ สมุย",
        "latitude": 9.5120168,
        "longitude": 100.0135929,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=9.5120168,100.0135929&query_place_id=ChIJbyZmHFDxVDARMIN9Pb1a1e0"
    },
    {
        "province": "สุรินทร์",
        "type": "รัฐ",
        "name": "โรงพยาบาลสุรินทร์ (สธ)",
        "latitude": 14.8765646,
        "longitude": 103.5027463,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.8765646,103.5027463&query_place_id=ChIJ7WQiz0riGTERTLA6hpH6JTY"
    },
    {
        "province": "หนองคาย",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระยุพราชท่าบ่อ (สธ)",
        "latitude": 17.8476427,
        "longitude": 102.5766152,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.8476427,102.5766152&query_place_id=ChIJhRcGPctvJDERUttMN6mKl3Q"
    },
    {
        "province": "หนองคาย",
        "type": "รัฐ",
        "name": "โรงพยาบาลหนองคาย (สธ)",
        "latitude": 17.8815416,
        "longitude": 102.7415855,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.8815416,102.7415855&query_place_id=ChIJ1ROhqL5jJDERUfddZsRH4EI"
    },
    {
        "province": "หนองบัวลำภู",
        "type": "รัฐ",
        "name": "โรงพยาบาลหนองบัวลำภู (สธ)",
        "latitude": 17.1988785,
        "longitude": 102.4573085,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.1988785,102.4573085&query_place_id=ChIJZxT7b0a_IzER3k9Rj4h51Ug"
    },
    {
        "province": "อ่างทอง",
        "type": "รัฐ",
        "name": "โรงพยาบาลอ่างทอง (สธ)",
        "latitude": 14.584759,
        "longitude": 100.4521518,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.584759,100.4521518&query_place_id=ChIJY1vg0t0P4jARPw0Zpub6ddQ"
    },
    {
        "province": "อำนาจเจริญ",
        "type": "รัฐ",
        "name": "โรงพยาบาลอำนาจเจริญ (สธ)",
        "latitude": 15.863905,
        "longitude": 104.6238505,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.863905,104.6238505&query_place_id=ChIJVaKRMsMiFjERXqt5NJO1_Nk"
    },
    {
        "province": "อุดรธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลกุมภวาปี (สธ)",
        "latitude": 17.1046596,
        "longitude": 103.0210586,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.1046596,103.0210586&query_place_id=ChIJtX76ErMRIzER9oIlsvFLh_o"
    },
    {
        "province": "อุดรธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายประจักษ์ศิลปาคม",
        "latitude": 17.3699643,
        "longitude": 102.8118553,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.3699643,102.8118553&query_place_id=ChIJI2CrlBh2IzERveT7Rl1L6BI"
    },
    {
        "province": "อุดรธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระยุพราชบ้านดุง (สธ)",
        "latitude": 17.6915901,
        "longitude": 103.2587727,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.6915901,103.2587727&query_place_id=ChIJ1zWPpv2jJDERnzwS7I5wQwY"
    },
    {
        "province": "อุดรธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลอุดรธานี (สธ)",
        "latitude": 17.4148709,
        "longitude": 102.7804229,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.4148709,102.7804229&query_place_id=ChIJtzMTkBSdIzERT6IlV7TVbFw"
    },
    {
        "province": "อุตรดิตถ์",
        "type": "รัฐ",
        "name": "โรงพยาบาลอุตรดิตถ์ (สธ)",
        "latitude": 17.6191351,
        "longitude": 100.0869882,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=17.6191351,100.0869882&query_place_id=ChIJH7dN3xsw3zARkw_fit4NDZ0"
    },
    {
        "province": "อุทัยธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลอุทัยธานี (สธ)",
        "latitude": 15.3803419,
        "longitude": 100.0199671,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.3803419,100.0199671&query_place_id=ChIJ0WBZWm-v4TARWNPGVxbtU8s"
    },
    {
        "province": "อุบลราชธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลค่ายสรรพสิทธิประสงค์",
        "latitude": 15.1937294,
        "longitude": 104.8750159,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.1937294,104.8750159&query_place_id=ChIJoxCvUHGGFjERbzwXIK5gNhQ"
    },
    {
        "province": "อุบลราชธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลวารินชำราบ (สธ)",
        "latitude": 15.1937575,
        "longitude": 104.8380668,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.1937575,104.8380668&query_place_id=ChIJCQyXRwmGFjERCvxNeAxw8o4"
    },
    {
        "province": "อุบลราชธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสมเด็จพระยุพราชเดชอุดม (สธ)",
        "latitude": 14.9158526,
        "longitude": 105.0612916,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=14.9158526,105.0612916&query_place_id=ChIJv-wHpL0hFDERkpzf4QqOEwY"
    },
    {
        "province": "อุบลราชธานี",
        "type": "รัฐ",
        "name": "โรงพยาบาลสรรพสิทธิประสงค์ (สธ)",
        "latitude": 15.2360899,
        "longitude": 104.8654529,
        "google_maps_url": "https://www.google.com/maps/search/?api=1&query=15.2360899,104.8654529&query_place_id=ChIJu2cRrMuHFjERHCbiuV6CX4c"
    }
];
const dataLastUpdated = new Date('2026-01-31');
