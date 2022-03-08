const testDate = "01 April 2022";

function countDown() {     

    const dateOfTest = new Date(testDate);
    const currentDate = new Date();
   
      const seconds = (dateOfTest - currentDate) / 1000; /* convert to seconds */
         // const seconds = ( dateOfTest - currentDate * 1000)
    //const days = (dateOfTest - currentDate * 24000)
    //const days = (seconds / 3600 / 24);** Understand this Logic!
   //console.log(dateOfTest - currentDate);
      const days = Math.floor(seconds / 3600 / 24); /*convert to / hours/ days*/
      const hours = Math.floor(seconds / 3600) % 24
      console.log(days)        
};    

// 1st Call 

countDown();

setInterval(countDown, 1000);

