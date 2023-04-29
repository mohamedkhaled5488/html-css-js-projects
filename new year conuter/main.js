const the_days = document.querySelector('.days-c p');
const hours = document.querySelector('.hours-c p');
const mins = document.querySelector('.mins-c p');
const seconds = document.querySelector('.seconds-c p');


const new_year ='1 jan 2023'
function countdown (){
    const current_date = new Date()
const new_year_data = new Date(new_year)
const new_year_left = (new_year_data - current_date)/1000
const days_left =Math.floor((new_year_left/3600/24));
const hours_left =Math.floor((new_year_left/3600)%24);
const mins_left =Math.floor((new_year_left)/60%60);
const seconds_left =Math.floor((new_year_left)%60);
the_days.innerHTML=`${formatTime(days_left)}`
hours.innerHTML=`${formatTime(hours_left)}`
mins.innerHTML=`${formatTime(mins_left)}`
seconds.innerHTML=`${formatTime(seconds_left) }`
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
formatTime(countdown())

countdown()

setInterval(countdown,1000)