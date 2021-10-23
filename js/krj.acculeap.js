//I Love Programming but I love MY GIRLFRIEND/WIFEY more but in most of among in all things and time.
//I'm getting good at programming because I'm inspired with one person which is my GIRLFRIEND/WIFEY.

OnResult = () => {
    getYear = document.getElementById("yr-text").value;
    prevLeapYear = getYear - 4;
    nextLeapYear = Number(getYear) + 4;
    document.getElementById("yr-result").innerHTML = getYear == '' ? '...' : getYear % 4 == 0 && getYear % 100 != 0 || getYear % 400 == 0 ? getYear + " ay amu ra ang leap year." : getYear + " ay bukon tana ra ang leap year.";
    document.getElementById("yr-result001").innerHTML = getYear == '' ? '...' : getYear % 4 == 0 && getYear % 100 != 0 || getYear % 400 == 0 ? "Kang ligad nga leap year: " + prevLeapYear + " Sunod nga leap year: " + nextLeapYear : "Ay! daw wara pa ga lumpat ang mga pangka haw.";
}
