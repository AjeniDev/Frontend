const fetchData = document.querySelector('#fetchData');
const title = document.getElementById('#title');
const content = document.getElementById('#content');


const getData = function(){
    fetch('https://api.adviceslip.com/advice')
   .then(response => response.json())
   .then(data => {
    let data1 = data.slip;
    document.getElementById('content').innerText = data1.advice;
    document.getElementById('title').innerText = `ADVICE# ${data1.id}`;
   })
   .catch(error => console.log(error));
  }
  
  fetchData.addEventListener('click', getData);
  