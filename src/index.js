const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function getImages() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderImages(json){

}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
