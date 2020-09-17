const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

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


document.addEventListener('DOMContentLoaded', function() {
  getImages();
})
