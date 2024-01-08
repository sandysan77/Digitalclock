function getTime(){
    let currentDateTime = new Date();
    let hrs = currentDateTime.getHours();
    let min = currentDateTime.getMinutes();
    let sec = currentDateTime.getSeconds();

    if(hrs>12){
        document.getElementById('ampm').innerHTML ='PM'
    }

    document.getElementById('hours').innerHTML =zeroBefore(hrs);
    document.getElementById('min').innerHTML = zeroBefore(min);
    document.getElementById('sec').innerHTML = zeroBefore(sec);

}


function zeroBefore(value){
        if(value<10){
                value = "0"+value;
        }
        return value;
}

setInterval(getTime,500);


let clickMe = document.getElementById('but');
clickMe.onclick = function(){
    document.getElementById('getValues').innerHTML = new Date().getDay();
} 


