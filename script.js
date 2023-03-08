const endDate = "08 March 2023 12:00:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll('input')


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;

    if(diff < 0) return;``

    //convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60)% 60;
    inputs[3].value = Math.floor(diff) % 60;
}
//initial call
clock()
/** 1 day = 24hrs 1hr = 60min 1min = 60sec */
setInterval(
    () => {
        clock()
    },
    1000
)