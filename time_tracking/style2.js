const weekbtn = document.querySelector('#weekly');

const getDataWeekly = function(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let dataWeekly0 = data[0].timeframes.weekly;
         document.getElementById('hour0').innerText = `${dataWeekly0.current}hrs`;
        document.getElementById('previous0').innerText = `Last Week - ${dataWeekly0.previous}hrs`;
        
        let dataWeekly1 = data[1].timeframes.monthly;
         document.getElementById('hour1').innerText = `${dataWeekly1.current}hrs`;
        document.getElementById('previous1').innerText = `Last Week - ${dataWeekly1.previous}hrs`;

        let dataWeekly2 = data[2].timeframes.monthly;
         document.getElementById('hour2').innerText = `${dataWeekly2.current}hrs`;
         document.getElementById('previous2').innerText = `Last Week - ${dataWeekly2.previous}hrs`;

        let dataWeekly3 = data[3].timeframes.monthly;
         document.getElementById('hour3').innerText = `${dataWeekly3.current}hrs`;
        document.getElementById('previous3').innerText = `Last Week - ${dataWeekly3.previous}hrs`;

        let dataWeekly4 = data[4].timeframes.monthly;
         document.getElementById('hour4').innerText = `${dataWeekly4.current}hrs`;
        document.getElementById('previous4').innerText = `Last Week - ${dataWeekly4.previous}hrs`;

        let dataWeekly5 = data[5].timeframes.monthly;
         document.getElementById('hour5').innerText = `${dataWeekly5.current}hrs`;
        document.getElementById('previous5').innerText = `Last Week - ${dataWeekly5.previous}hrs`;
    })
    
}
    weekbtn.addEventListener('click', getDataWeekly);
