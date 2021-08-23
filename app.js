// Grab the button 
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes (e) {
  let number = document.querySelector("#num").value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if(this.status === 200) {

      const response = JSON.parse(this.responseText);
      // Loop 

      output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      }else {
        output += '<li> Something Went wrong</li>'
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }


  xhr.send();


  e.preventDefault();
}