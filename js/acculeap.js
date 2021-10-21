OnResult = () => {
    getYear = document.getElementById("yr-text").value;
    document.getElementById("yr-result").innerHTML = getYear == '' ? '...' : getYear % 4 == 0 && getYear % 100 != 0 || getYear % 400 == 0 ? getYear + " is a leap year." : getYear + " is not a leap year.";
}
