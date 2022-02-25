const testDay = "01 April 2022";

function countDown() {

    const dateOfTest = new Date(testDate);
    const currentDate = new Date();

    console.log(dateOfTest - currentDate)
}

countDown();