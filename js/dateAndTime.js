var timedate = new Date();
        var day = timedate.getDay();
        var date = timedate.getDate();
        var month = timedate.getMonth();
        var hour = timedate.getHours();
        var minutes = timedate.getMinutes();
        var dayName;
        if (day == 1 ){
            dayName = 'Mon';
        }
        else if(day == 2){
                dayName = 'Tues';
            }
            else if (day == 3) {
            dayName = 'Wed';
        }
        else if (day == 4) {
            dayName = 'Thur';
        }
        else if (day == 5) {
            dayName = 'Fri';
        }
        else if (day == 6) {
            dayName = 'Sat';
        }
        else if (day == 0) {
            dayName = 'Sun';
        }
        var monthName;
        switch (month){
            case 0:
                monthName = 'Jan';
                break;
            case 1:
                monthName = 'Feb';
                break;
            case 2:
                monthName = 'Mar';
                break;
            case 3:
                monthName = 'Apr';
                break;
            case 4:
                monthName = 'May';
                break;
            case 5:
                monthName = 'Jun';
                break;
            case 6:
                monthName = 'Jul';
                break;
            case 7:
                monthName = 'Aug';
                break;
            case 8:
                monthName = 'Sep';
                break;
            case 9:
                monthName = 'Oct';
                break;
            case 10:
                monthName = 'Nov';
                break;
            case 11:
                monthName = 'Dec';
                break;
        }
        var timeampm;
        if(hour>12){
            hour=hour%12;
            timeampm = 'PM';
        }
        else if(hour==12){
            timeampm = 'PM';
        }
        else
        {
            timeampm = 'AM';
        }
function getTimeandDate(){
    return dayName+' '+monthName+' '+date+' '+hour+':'+minutes+' '+timeampm;
}