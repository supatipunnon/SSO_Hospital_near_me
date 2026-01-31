#!/usr/bin/env python3
"""
Build script to convert sso 2026.csv to hospitals.js
Usage: python build.py
"""

import csv
import json
import os
from pathlib import Path
from datetime import datetime

def build_hospitals_js():
    """Convert CSV to hospitals.js"""
    
    # Get the directory of this script
    script_dir = Path(__file__).parent
    csv_file = script_dir / "data" / "sso 2026.csv"
    output_file = script_dir / "hospitals.js"
    
    if not csv_file.exists():
        print(f"❌ Error: {csv_file} not found!")
        return False
    
    hospitals = []
    
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                hospital = {
                    "province": row.get("จังหวัด", "").strip(),
                    "type": row.get("รัฐ/เอกชน", "").strip(),
                    "name": row.get("โรงพยาบาล", "").strip(),
                    "latitude": float(row.get("latitude", 0)),
                    "longitude": float(row.get("longitude", 0)),
                    "google_maps_url": row.get("google_maps_url", "").strip()
                }
                # Only add if name is not empty
                if hospital["name"]:
                    hospitals.append(hospital)
        
        # Write to hospitals.js
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("const hospitals = ")
            f.write(json.dumps(hospitals, ensure_ascii=False, indent=4))
            f.write(";\n")

            # update edit date
            now = datetime.now()
            f.write(f"const dataLastUpdated = new Date('{now.strftime('%Y-%m-%d')}');\n")
        
        print(f"✅ Success! Generated {len(hospitals)} hospitals")
        print(f"📁 Output: {output_file}")
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    success = build_hospitals_js()
    exit(0 if success else 1)
