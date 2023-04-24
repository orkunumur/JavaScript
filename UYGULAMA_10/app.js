let myName = prompt("Adınızı giriniz"); //User was asked for a name.
let names = document.querySelector("#myName"); //The location of the name is assigned to the variable.

myName = myName.charAt(0).toUpperCase() + myName.slice(1);  //Capitalization of the first letter of the name

names.innerHTML = myName; //The Html name of the location assigned to the variable has been changed.

function showTime() {
    let myClock = document.querySelector("#myClock"); //To show on the homepage;
    let now = new Date(); //assigning a date property to a variable
    let day = now.getDate(); 
    let month = now.getMonth() +1; //The +1 converts the month from digital (0-11) to normal.
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`; //Template Literals

    myClock.innerHTML = time //changing variable name via html

    setTimeout(showTime, 1000); //increasing the second by 1

}
 showTime(); //starting function
 const HOURHAND = document.querySelector("#hour");
 const MINUTEHAND = document.querySelector("#minute");
 const SECONDHAND = document.querySelector("#second");
 
 var date = new Date();
 let hr = date.getHours();
 let min = date.getMinutes();
 let sec = date.getSeconds();
 
 let hrPosition = (hr*360/12) + (min*(360/60)/12);
 let minPosition = (min*360/60) + (sec*(360/60)/60);
 let secPosition = sec*360/60;
 
 
 function runTheClock() {
   
   hrPosition = hrPosition + (3/360);
   minPosition = minPosition + (6/60);
   secPosition = secPosition + 6;
  
   HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
   MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
   SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
 }
 
 
 var interval = setInterval(runTheClock, 1000);

  