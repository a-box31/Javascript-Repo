

let months_ = document.getElementById('months')
let days_ = document.getElementById('days')
let hours_ = document.getElementById('hours')
let minutes_ = document.getElementById('minutes')
let seconds_ = document.getElementById('seconds')


let months = months_.firstElementChild.innerHTML
let days = days_.firstElementChild.innerHTML
let hours = hours_.firstElementChild.innerHTML
let minutes = minutes_.firstElementChild.innerHTML
let seconds = seconds_.firstElementChild.innerHTML




// calculate future time
const Bday = "Dec 31 2023";
const future = new Date(Bday);


const interval = setInterval( function() {

    // save current time
    const curr = new Date();

    //Get the Timestamp
    const date1_time_stamp = curr.getTime();
    const date2_time_stamp = future.getTime();

    
    //Check which timestamp is greater
    let calc = new Date(date2_time_stamp - date1_time_stamp);

    months_.firstElementChild.innerHTML = calc.getMonth()
    days_.firstElementChild.innerHTML = calc.getDate()
    hours_.firstElementChild.innerHTML = calc.getHours()
    minutes_.firstElementChild.innerHTML = calc.getMinutes()
    seconds_.firstElementChild.innerHTML = calc.getSeconds()

    
}, 1000);
 








