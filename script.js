const daysE1 =document.getElementById("days");

const hoursE1 =document.getElementById("hours")

const minsE1 =document.getElementById("mins")

const secondsE1 =document.getElementById("seconds")

const testDate = "01 April 2022";

function countDown() {     

    const dateOfTest = new Date(testDate);
    const currentDate = new Date();
      const totalSeconds = (dateOfTest - currentDate) / 1000; /* convert to seconds */
      ///console.log(Math.floor(seconds / 3600)%24);

         // const seconds = ( dateOfTest - currentDate * 1000)
    //const days = (dateOfTest - currentDate * 24000)
    //const days = (seconds / 3600 / 24);** Understand this Logic!
   //console.log(dateOfTest - currentDate);
      const days = Math.floor(totalSeconds / 3600 / 24); /*convert to / hours/ days*/
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) %60; 
      //const mins = Math.floor(seconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    
    daysE1.innerHTML = days;

    hoursE1.innerHTML = hours;
    
    minsE1.innerHTML = mins;
    
    secondsE1.innerHTML = secs;

};    

// 1st Call 

countDown();

setInterval(countDown, 1000);

