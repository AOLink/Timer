const testDate = "01 April 2022";

function countDown() {     

    const dateOfTest = new Date(testDate);
    const currentDate = new Date();
    const seconds = ( dateOfTest - currentDate * 1000)
    //const days = (dateOfTest - currentDate * 24000)
    const days = (seconds / 3600 / 2)
    console.log(dateOfTest - currentDate);

};    

// 1st Call 

countDown();

//setInterval(countDown, 1000);

