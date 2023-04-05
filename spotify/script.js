/* Spotify API
import requests
import json

# Set the authorization header with the access token
headers = {'Authorization': 'Bearer <your-access-token>'}

# Make a GET request to retrieve the user's profile information
response = requests.get('https://api.spotify.com/v1/me', headers=headers)

# Parse the response JSON to extract the profile picture URL
profile_data = json.loads(response.text)
profile_pic_url = profile_data['images'][0]['url']

# Use the profile picture URL to retrieve the actual image
response = requests.get(profile_pic_url)

# Save the image to a file
with open('profile_pic.jpg', 'wb') as f:
    f.write(response.content)

*/ 

const slider = document.querySelector('.slider__input');
const value = document.querySelector('.slider__value');

slider.addEventListener('input', (event) => {
  value.textContent = event.target.value;
});