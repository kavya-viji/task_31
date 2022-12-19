var d =  prompt("Enter the date yyyy-mm-dd")
var givenDate=new Date(d);
var currentDay = givenDate.getDay();
var dateIsInWeekend = (currentDay == 0) || (currentDay == 6);
if(dateIsInWeekend==true)
{
   console.log("The given date "+givenDate+" and its a Weekend");
}
else
{
   console.log("The given date " +givenDate+"and its not a Weekend");
}

