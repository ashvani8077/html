  # Task1:  Iterate the json country state file
'''

    1.ID
    2.Name
    3.State_Code
    4.Latitude
    5.Longitude
    6.type
'''
    


import json
with open('python/countryState.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Iterate through the countries
import json
with open('python/countryState.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
for country in data:
    timezones = country.get("timezones", [])
    for timezone in timezones:
        print(timezone["zoneName"])

print("/n")
print("Task2")

# Task2:  print countries and states
import json
with open('python/countryState.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
for country in data:
    print(f"Country: {country['name']}")
    states = country.get('states', [])
    for state in states:
        print(f"    State ID: {state['id']}, Name: {state['name']}, State_Code: {state['state_code']}, Latitude: {state['latitude']}, Longitude: {state['longitude']}, Type: {state.get('type', 'N/A')}")
print("/n")
print("Task3")

#Task3:  iterate country and iterate translation and list the translations both key and value
import json
with open('python/countryState.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
for country in data:
    print(f"Country: {country['name']}")
    translations = country.get('translations', {})
    for lang, translation in translations.items():
        print(f"    Language: {lang}, Translation: {translation}")

print("/n")
print("Task4")

#Task4:  Instead of hard coding in json data inside the python read json file and iterate the countries and list the states along with state properties
import json
with open('python/countryState.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
for country in data:
    print(f"Country: {country['name']}")
    states = country.get('states', [])
    for state in states:
        print(f"    State ID: {state['id']}, Name: {state['name']}, State_Code: {state['state_code']}, Latitude: {state['latitude']}, Longitude: {state['longitude']}, Type: {state.get('type', 'N/A')}")

print("/n")
print("Task5")
print("Using While Loop")


#Task5 : Do the all the above using while

import json
with open('python/countryState.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
i = 0
while i < len(data):
    country = data[i]
    print(f"Country: {country['name']}")
    j = 0
    while j < len(country.get('states', [])):
        state = country['states'][j]
        print(f"    State ID: {state['id']}, Name: {state['name']}, State_Code: {state['state_code']}, Latitude: {state['latitude']}, Longitude: {state['longitude']}, Type: {state.get('type', 'N/A')}")
        j += 1
    k = 0
    translations = country.get('translations', {})
    while k < len(translations):
        lang = list(translations.keys())[k]
        translation = translations[lang]
        print(f"    Language: {lang}, Translation: {translation}")
        k += 1

    i += 1


#Task6: Create a function and move this code inside the function and call for 5 times using loop
def call():
    import json
    with open('python/countryState.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
        for key, value in enumerate (data):
            print(key, value)
for i in range(6):
    call()
    print("\n")
    print("PRINTED")