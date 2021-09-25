
let name1 = prompt("Lütfen isminizi giriniz:");
document.querySelector("#myName").innerHTML= name1;
function showTime() {
    let date = new Date();
    var stringDay;
    var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();	
	var day=date.getDay();
    switch(day){
        case 1:
            stringDay="Pazartesi";
            break;
        case 2:
            stringDay="Salı"; 
            break;
        case 3:
            stringDay="Çarşamba";
            break; 
        case 4:
            stringDay="Perşembe";
            break;
        case 5:
            stringDay="Cuma";
            break;
        case 6:
            stringDay="Cumartesi";
            break;
        case 7:
            stringDay="Pazar"; 
            break;
        default:

    }
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
	
	let willType= hour+":"+minute+":"+second+" "+stringDay;
	var elementIChoose = document.getElementById("myClock");
    
    elementIChoose.innerHTML = willType;

}



setInterval("showTime()", 1000);