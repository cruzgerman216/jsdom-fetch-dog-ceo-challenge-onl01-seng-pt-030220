const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImages() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images){
  console.log(images.message);
  const main = document.querySelector('body');
  images.message.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    main.appendChild(img);
  })
}


function getBreeds() {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(breeds){
  const main = document.getElementById('dog-breeds');
  breeds.message.forEach(breed => {
    const text = document.createElement('ul');
    text.innerHTML = breed;
    main.appendChild(text);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  getImages();
  getBreeds();
})
