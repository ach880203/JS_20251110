let tv = new Object();

tv.color = "white";
tv.price = 300000;
tv.info = function(){
    document.write("TV색상 : " + this.color + "<br>")
        document.write("TV색상 : " + this.price + "<br>")
}


document.write(tv.color + " <br>");
document.write(tv.price + " <br>");
tv.info();

tv.tire = 4;

document.write("tv타이어 개수 : " + tv.tire + "<br>");

document.write("------------------" + "<br>");

let car = { 
    color : "black",
    price : 5000000,
    info: function(){
        document.write("car의 색상 : " + this.color + "<br>");
        document.write("car의 색상 : " + this.price + "<br>");


    }
};

document.write(car.color + "<br>");
document.write(car.price + "<br>");
car.info();

car.tire = 4;
document.write("car의 타이어 개수 : " +car.tire + "<br>");

let today = new Date();

document.write("오늘 날짜: " + today + "<br>");

let nowMonth = today.getMonth()+1;
document.write("오늘 월:" + nowMonth + "<br>");

let nowDate = today.getDate();
document.write("오늘 일:" + nowDate + "<br>");

let nowDay = today.getDay();  
switch(nowDay){
    
        case 0:
        nowDay="일요일";
        break;
        case 1:
        nowDay="월요일";
        break;
        case 2:
        nowDay="화요일";
        break;
        case 3:
        nowDay="수요일";
        break;
        case 4:
        nowDay="목요일";
        break;
        case 5:
        nowDay="금요일";
        break;
        case 6:
        nowDay="토요일";
        break;
       }  


document.write("오늘 요일: " + nowDay + "<br>");