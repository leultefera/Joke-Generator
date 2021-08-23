// Grab the button 
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes (e) {
  // Get the amount of jokes requested 
  let number = document.querySelector("#num").value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if(this.status === 200) {

      const response = JSON.parse(this.responseText);
      // Loop through the list of arrays inside the returned object and concatinate the jokes inside output

      output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>"${joke.joke}"</li>`;
        });
      }else {
        output += '<h2>There is an issue processing the jokes, please try again later.</h2>'
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  e.preventDefault();
}