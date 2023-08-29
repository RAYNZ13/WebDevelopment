let userInput = document.getElementById("dob");
// console.log(userInput)
let result = document.getElementById("age-el");

function ageCalculate(){
    let birthDate = new Date(userInput.value);

    let b_date = birthDate.getDate();
    let b_month = birthDate.getMonth()+1;//coz month starts from 0
    let b_year = birthDate.getFullYear();

    let current_data = new Date();

    let today_date = current_data.getDate();
    let today_month = current_data.getMonth()+1;
    let today_year = current_data.getFullYear();

    //difference
    let year_diff,month_diff,day_diff;
    
    year_diff = today_year - b_year;

    if(today_month >= b_month){
        month_diff = today_month - b_month;
    }else{
        year_diff--
        month_diff = 12 + today_month - b_month;
    }
    
    if(today_date >= b_date){
        day_diff = today_date - b_date  ;  
    }else{
        month_diff--;
        day_diff = getDaysInMonth(b_year,b_month) + today_date - b_date;
    }

    if(month_diff < 0){
        month_diff = 11;
        year_diff--;
    }

    console.log(year_diff,month_diff,day_diff);
    result.innerHTML = `Your age is  <span> ${year_diff} </span> years, <span>${month_diff}</span> months, <span>${day_diff}</span> days`;
} 

function getDaysInMonth(month,year){
    return new Date(year,month,0).getDate();
}