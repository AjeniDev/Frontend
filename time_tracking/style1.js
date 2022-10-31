
const monthlybtn = document.querySelector('#monthly');


const getDataMonthly = function(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let dataMonthly0 = data[0].timeframes.monthly;
         document.getElementById('hour0').innerText = `${dataMonthly0.current}hrs`;
        document.getElementById('previous0').innerText = `Last Week - ${dataMonthly0.previous}hrs`;
        
        let dataMonthly1 = data[1].timeframes.monthly;
         document.getElementById('hour1').innerText = `${dataMonthly1.current}hrs`;
        document.getElementById('previous1').innerText = `Last Week - ${dataMonthly1.previous}hrs`;

        let dataMonthly2 = data[2].timeframes.monthly;
         document.getElementById('hour2').innerText = `${dataMonthly2.current}hrs`;
         document.getElementById('previous2').innerText = `Last Week - ${dataMonthly2.previous}hrs`;

        let dataMonthly3 = data[3].timeframes.monthly;
         document.getElementById('hour3').innerText = `${dataMonthly3.current}hrs`;
        document.getElementById('previous3').innerText = `Last Week - ${dataMonthly3.previous}hrs`;

        let dataMonthly4 = data[4].timeframes.monthly;
         document.getElementById('hour4').innerText = `${dataMonthly4.current}hrs`;
        document.getElementById('previous4').innerText = `Last Week - ${dataMonthly4.previous}hrs`;

        let dataMonthly5 = data[5].timeframes.monthly;
         document.getElementById('hour5').innerText = `${dataMonthly5.current}hrs`;
        document.getElementById('previous5').innerText = `Last Week - ${dataMonthly5.previous}hrs`;
    })
    
}
    monthlybtn.addEventListener('click', getDataMonthly);

