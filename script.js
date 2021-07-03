function show(str1) {
    if (document.getElementById(str1).style.visibility == 'visible')
        document.getElementById(str1).style.visibility = 'collapse'
    else {
        document.getElementById(str1).style.visibility = 'visible'
    }
}

setInterval(() => {
    let d = new Date();
    let hour = '';
    let minutes;
    let tag;
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    if (d.getHours() < 12 && d.getHours() >= 0) {
        tag = 'AM';
    }
    else {
        tag = 'PM';
    }
    if (d.getHours() == 0) {
        hour = '12';
    }
    else if (d.getHours() > 12) {
        hour = (d.getHours()) - 12;
    }
    else if (hours < 9 && hours > 0) {
        hour = '0' + d.getHours();
    }

    if (d.getMinutes() < 10) {
        minutes = '0' + d.getMinutes();
    }
    else {
        minutes = d.getMinutes();
    }
    let n = day + ' ' + date + ' ' + month + ' ' + hour + ':' + minutes + ' ' + tag;

    document.getElementById('time').innerHTML = n;
    console.log(n);
}, 1000);


setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

document.getElementById('time').addEventListener("click",animate);
function animate(){
    elem=document.getElementById('p2');
    elem.animation='slide 0.3s';
}