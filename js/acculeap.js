//I Love Programming but I love MY GIRLFRIEND/WIFEY more but in most of among in all things and time.
//I'm getting good at programming because I'm inspired with one person which is my GIRLFRIEND/WIFEY.

OnResult = () => {
    getYear = document.getElementById("yr-text").value;
    prevLeapYear = getYear - 4;
    nextLeapYear = Number(getYear) + 4;
    document.getElementById("yr-result").innerHTML = getYear == '' ? '...' : getYear % 4 == 0 && getYear % 100 != 0 || getYear % 400 == 0 ? getYear + " is a leap year." : getYear + " is not a leap year.";
    document.getElementById("yr-result001").innerHTML = getYear % 4 != 0 && getYear % 100 != 1 || getYear % 400 != 0 ? "Oops! seems the frog aren't leaping yet!" : getYear == '' ? '...' :  "previous leap year: " + prevLeapYear + " next leap year: " + nextLeapYear;
}
