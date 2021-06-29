setInterval(() => {
    date=new Date();
    hrtime=date.getHours();//get hr ;
    mntime=date.getMinutes();//get minutes;
    sctime=date.getSeconds();//get seconds;
    hrrot=30*hrtime + mntime/2;
    mnrot=6*mntime;
    scrot=6*sctime;
    hour.style.transform=`rotate(${hrrot}deg)`;
    minute.style.transform=`rotate(${mnrot}deg)`;
    second.style.transform=`rotate(${scrot}deg)`;

}, 1000); 