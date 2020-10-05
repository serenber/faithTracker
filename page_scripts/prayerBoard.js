//creates the row of the table to display a saved prayer note
function showPrayer(prayer) {
    var tr = $("<tr>");
    tr.addClass("mdc-data-table__row");
    var td2 = $("<td>");
    td2.addClass("mdc-data-table__cell mdc-data-table__cell--numeric");
    td2.text(prayer.date);
    tr.append(td2);
    var td1 = $("<td>");
    td1.addClass("mdc-data-table__cell");
    td1.text(prayer.prayer);
    tr.append(td1);
    $("#prayerList").append(tr);
}

//save the prayer note
function savePrayer(date, prayer) {
    db.prayers.add({
        date: date,
        prayer: prayer
    }).then(function() {
        alert("Prayer added!");
    });
}

//to check whether or not a year is a leap year
function leapyear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

//check that the user entered date is valid
function dateCheck(date) {
    var splitDate = date.split("/");
    
    var check = true;
    if(splitDate.length == 3){
        var month = parseInt(splitDate[0]);
        var day = parseInt(splitDate[1]);
        var year = parseInt(splitDate[2]);
        
        //if any are 0 or less then the date is invalid
        if(month < 1 || day < 1 || year < 1){
            check = false;
        }
        
        //check that the month and year are valid
        //(I assume that no one is going to want to enter notes from before 2000)
        if(month > 12 || year < 2000 ){
            check = false;
        }
        
        //check that the day is valid for it's month
        switch(month){
            //April, June, September, November
            case 4:
            case 6:
            case 9:
            case 11:
                console.log("30 days");
                if(day > 30){
                    check = false;
                }
                break;
            //January, March, May, July, August, October, December
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                console.log("31 days");
                if(day > 31){
                    check = false;
                }
                break;
            //February    
            case 2:
                if( leapyear(year) && day > 29){
                    check = false;
                }
                else if(!(leapyear(year)) && day > 28){
                    check = false;
                }
                break;
                
        }
    }
    //date wasn't entered correctly
    else{
        check = false;
    }
    return check;
}