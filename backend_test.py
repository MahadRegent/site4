#!/usr/bin/env python3
"""
Backend API Testing Script
Tests all backend endpoints to ensure they work correctly after Emergent mentions removal
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

def test_root_endpoint(base_url):
    """Test GET /api/ endpoint"""
    print("\n=== Testing Root Endpoint (GET /api/) ===")
    try:
        response = requests.get(f"{base_url}/api/", timeout=30)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            # Check for any Emergent mentions in response
            response_text = json.dumps(data).lower()
            if 'emergent' in response_text:
                print("❌ FAIL: Found 'emergent' mention in response")
                return False
            print("✅ PASS: Root endpoint working, no Emergent mentions")
            return True
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {e}")
        return False

def test_create_status_check(base_url):
    """Test POST /api/status endpoint"""
    print("\n=== Testing Create Status Check (POST /api/status) ===")
    try:
        # Use realistic data instead of dummy data
        test_data = {
            "client_name": "minecraft_server_01"
        }
        
        response = requests.post(
            f"{base_url}/api/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Check for any Emergent mentions in response
            response_text = json.dumps(data).lower()
            if 'emergent' in response_text:
                print("❌ FAIL: Found 'emergent' mention in response")
                return False, None
                
            # Validate response structure
            required_fields = ['id', 'client_name', 'timestamp']
            for field in required_fields:
                if field not in data:
                    print(f"❌ FAIL: Missing required field '{field}' in response")
                    return False, None
            
            # Validate data values
            if data['client_name'] != test_data['client_name']:
                print(f"❌ FAIL: client_name mismatch. Expected: {test_data['client_name']}, Got: {data['client_name']}")
                return False, None
                
            print("✅ PASS: Status check created successfully, no Emergent mentions")
            return True, data['id']
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {e}")
        return False, None

def test_get_status_checks(base_url):
    """Test GET /api/status endpoint"""
    print("\n=== Testing Get Status Checks (GET /api/status) ===")
    try:
        response = requests.get(f"{base_url}/api/status", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: Found {len(data)} status checks")
            
            # Check for any Emergent mentions in response
            response_text = json.dumps(data).lower()
            if 'emergent' in response_text:
                print("❌ FAIL: Found 'emergent' mention in response")
                return False
            
            # Validate response is a list
            if not isinstance(data, list):
                print("❌ FAIL: Response should be a list")
                return False
                
            # If there are items, validate structure
            if data:
                first_item = data[0]
                required_fields = ['id', 'client_name', 'timestamp']
                for field in required_fields:
                    if field not in first_item:
                        print(f"❌ FAIL: Missing required field '{field}' in status check item")
                        return False
                        
            print("✅ PASS: Status checks retrieved successfully, no Emergent mentions")
            return True
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {e}")
        return False

def test_mongodb_connection(base_url):
    """Test MongoDB connection by creating and retrieving data"""
    print("\n=== Testing MongoDB Connection ===")
    
    # Create a test entry
    create_success, test_id = test_create_status_check(base_url)
    if not create_success:
        print("❌ FAIL: MongoDB connection test failed - could not create entry")
        return False
    
    # Retrieve entries to verify persistence
    get_success = test_get_status_checks(base_url)
    if not get_success:
        print("❌ FAIL: MongoDB connection test failed - could not retrieve entries")
        return False
        
    print("✅ PASS: MongoDB connection working - data persisted successfully")
    return True

def main():
    print("🚀 Starting Backend API Tests")
    print("=" * 50)
    
    # Get backend URL
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ FAIL: Could not get backend URL from frontend/.env")
        sys.exit(1)
    
    print(f"Backend URL: {backend_url}")
    
    # Run all tests
    test_results = []
    
    # Test 1: Root endpoint
    test_results.append(test_root_endpoint(backend_url))
    
    # Test 2: MongoDB connection (includes create and get tests)
    test_results.append(test_mongodb_connection(backend_url))
    
    # Summary
    print("\n" + "=" * 50)
    print("🏁 TEST SUMMARY")
    print("=" * 50)
    
    passed = sum(test_results)
    total = len(test_results)
    
    print(f"Tests Passed: {passed}/{total}")
    
    if passed == total:
        print("✅ ALL TESTS PASSED - Backend is working correctly")
        print("✅ No Emergent mentions found in any API responses")
        print("✅ MongoDB connection is working properly")
        sys.exit(0)
    else:
        print("❌ SOME TESTS FAILED - Backend has issues")
        sys.exit(1)

if __name__ == "__main__":
    main()