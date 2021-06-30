# <a href="https://kr123manish.github.io/Analog_clock.github.io/">Overview</a>
<img src="https://github.com/kr123Manish/Analog_clock.github.io/blob/main/alarm_clock.png" width="20%"></img>
<img src="https://github.com/kr123Manish/Analog_clock.github.io/blob/main/download.png" width="25%"></img>
<img src="https://github.com/kr123Manish/Analog_clock.github.io/blob/main/2.PNG" width="30%"></img>
- Hour hand, minute hand , second hand are created by css and it's movement are added with the help of javascript.
#### Prerequisite
- HTML-5
- CSS 
- Javascript
# Let's begins
## HTML Code
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Analog Clock</title> 
    <link rel="stylesheet" href="index.css"> //link css file
    <script src="index.js"></script>  // link js file
</head>
<body>
    <div class="clockContainer">
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
    </div>


</body>
</html>
```
## CSS Code
``` css
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.clockContainer{
    height:600px;
    width:600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:url(alarm_clock.png);
    background-repeat: no-repeat;
    background-position: center;
    /*background-attachment: fixed;*/
    
}  


#hour,#minute,#second{
    position: absolute;;
    border-radius:10px;
    transform-origin: bottom;
}
#hour {
    width:10px;
    height:105px;
    margin-top:-32px;
    margin-left:5px;
    background:black;
}
#minute{
    width:5.5px;
    height:140px;
    margin-top:-73px;
    margin-left:5px;
    background:blue;
}
#second{
    width:2px;
    height:170px;
    margin-top:-112px;
    margin-left:5px;
    background:red;
}
.clockContainer:after{
    content: '';
    border-radius:50%;
    width: 17px;
    height:17px;
    margin-top:56px;
    margin-left:4px;
    background:red;
    position: absolute;
}
```
## Javascript code
```javascript
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
```
### <a href="https://kr123manish.github.io/Analog_clock.github.io/">Click here for demo...</a>
