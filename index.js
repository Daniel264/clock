setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let Hours = time.getHours();
    let Mins = time.getMinutes();
    let Secs = time.getSeconds();

    Hours = Hours < 10 ? "0" + Hours : Hours;
    Mins = Mins < 10 ? "0" + Mins : Mins;
    Secs = Secs < 10 ? `0${Secs}` : Secs;

    let string = `${Hours}     :     ${Mins}     :     ${Secs}`;

    document.getElementById("Timer").innerHTML = string;
}
showTime(); 