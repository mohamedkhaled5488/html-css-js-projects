const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    lastDateofMonth = new Date(currYear, currMonth, 0).getDate(); 
    // console.log(`firstDayofMonth${firstDayofMonth}`)
    // console.log(`lastDateofMonth${lastDateofMonth}`)
    // console.log(`lastDayofMonth${lastDayofMonth}`)
    // console.log(`lastDateofMonth${lastDateofMonth}`)
    let litag ="";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        
        litag += `<li class="inactive">${lastDateofMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
                     litag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        litag
         += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; 
    daysTag.innerHTML=litag


}
// console.log(new Date(currYear,currMonth+1,0))
renderCalendar()
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            // console.log(icon)
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
        // creating a new date of current year & month and pass it as date value
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        // updating current year with new date year
        currMonth = date.getMonth();
         // updating current month with new date month
    } else {
        date = new Date(); // pass the current date as date value
    }
    renderCalendar()
          })
})


       