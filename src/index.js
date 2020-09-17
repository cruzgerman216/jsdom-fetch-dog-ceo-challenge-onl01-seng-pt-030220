const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function getImages() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images){
  const main = document.querySelector('main')
  images.forEach(image => {
    const img = document.createElement('img')
    img.src = image;
    main.appendChild(img);
  })
}


document.addEventListener('DOMContentLoaded', function() {
  getImages()
})
