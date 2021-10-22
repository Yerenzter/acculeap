OnResult = () => {
    getYear = document.getElementById("yr-text").value;
    prevLeapYear = getYear - 4;
    nextLeapYear = getYear + 4;
    document.getElementById("yr-result").innerHTML = getYear == '' ? '...' : getYear % 4 == 0 && getYear % 100 != 0 || getYear % 400 == 0 ? getYear + " is a leap year." : getYear + " is not a leap year.";
    document.getElementById("yr-result001").innerHTML = " previous leap year:" + prevLeapYear + " next leap year:" + nextLeapYear;
}
