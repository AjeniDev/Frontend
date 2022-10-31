const dailybtn = document.querySelector('#daily');
const hours = document.getElementById('#hour');
const previous = document.getElementById('#previous');

const getData = function(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let dataDaily0 = data[0].timeframes.daily;
         document.getElementById('hour0').innerText = `${dataDaily0.current}hrs`;
        document.getElementById('previous0').innerText = `Last Week - ${dataDaily0.previous}hrs`;
        
        let dataDaily1 = data[1].timeframes.daily;
         document.getElementById('hour1').innerText = `${dataDaily1.current}hrs`;
        document.getElementById('previous1').innerText = `Last Week - ${dataDaily1.previous}hrs`;

        let dataDaily2 = data[2].timeframes.daily;
         document.getElementById('hour2').innerText = `${dataDaily2.current}hrs`;
         document.getElementById('previous2').innerText = `Last Week - ${dataDaily2.previous}hrs`;

        let dataDaily3 = data[3].timeframes.daily;
         document.getElementById('hour3').innerText = `${dataDaily3.current}hrs`;
        document.getElementById('previous3').innerText = `Last Week - ${dataDaily3.previous}hrs`;

        let dataDaily4 = data[4].timeframes.daily;
         document.getElementById('hour4').innerText = `${dataDaily4.current}hrs`;
        document.getElementById('previous4').innerText = `Last Week - ${dataDaily4.previous}hrs`;

        let dataDaily5 = data[5].timeframes.daily;
         document.getElementById('hour5').innerText = `${dataDaily5.current}hrs`;
        document.getElementById('previous5').innerText = `Last Week - ${dataDaily5.previous}hrs`;
    })
}
dailybtn.addEventListener('click', getData);
//monthly button










