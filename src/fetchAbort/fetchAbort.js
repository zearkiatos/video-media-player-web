import fetch from 'node-fetch';

async function getImage() {
  const url = 'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
  const fetchUrl = new URL(url);

  const response = await fetch(fetchUrl);
  const blob = await response.blob();
  return blob;
}

export default {
    getImage
}