let count = 0;
let message = [];
let HTML = "";

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
    .then(response => response.json())
    .then(responseJson => 
      imageSrc(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function imageSrc(responseJson){
  message = responseJson.message;
  displayImages();
}

function displayImages() {
  for (i = 0; i < message.length; i++){
    HTML += `<img src="${message[i]}" class="results-img">`;
  }
  displayResults();
}

function displayResults() {
  $('.results-img').replaceWith(HTML);
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    count = $(":input").val();
    if (count > 50){
      alert("Please select 50 dogs or less!");
    }
    else if (count <= 50) {
    getDogImage();
    }
  });
}
//

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});