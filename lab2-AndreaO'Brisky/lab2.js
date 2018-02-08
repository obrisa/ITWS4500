$(document).ready(function(){
    alert("Please turn on your sound.  This forecast shows 10 days of weather with 5 at a time.  Every time the next 5 shows, the background and sound will represent a new weather type.");
    //need the date
    var date = new Date();
    //get the current location of the machine
    //using geolocation as seen on https://www.w3schools.com/html/html5_geolocation.asp
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentweather);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    //create sounds to switch through
    var rainsound = document.createElement('audio');
    rainsound.setAttribute('src', 'rainsound.mp3');
    var snowsound = document.createElement('audio');
    snowsound.setAttribute('src', 'snowsound.wav');
    var cloudsound = document.createElement('audio');
    cloudsound.setAttribute('src', 'cloudsound.wav');
    var sunsound = document.createElement('audio');
    sunsound.setAttribute('src', 'sunsound.wav');
    function currentweather(position){
        //need latitue and longitude to get the weather at location
        lat= position.coords.latitude;
        long= position.coords.longitude
        $.ajax({
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=Imperial&APPID=08e205654d11f3e5a9b964cfcdb7c3bb",
            dataType: 'json',
            success: function (data) {
                //console.log(data); 
                $("#current").append("<p><h2>" + data.name + "</h2></p><p><h3>"+ date +"</p><p><img src='http://openweathermap.org/img/w/" + data.weather[0].icon +".png'>" + data.main.temp +"</p><p>" + data.weather[0].description + "</p><p>Minimum Temperature: " + data.main.temp_min + "</p><p>Maximum Temperature: " + data.main.temp_max + "</p></h3>");  
            }
        });
        var count=0;
        //to scroll through next 10 days of weather
        function forecastscroll(){
            //stop the sound from continuing before changing the sound
            rainsound.pause();
            snowsound.pause();
            cloudsound.pause();
            sunsound.pause();            
            var date = new Date();
            //change background & sound randomly every time days shown changes - creativity!
            //create a random number between 1 and 4 to switch
            var num = Math.floor(Math.random() * 4) + 1;
            if (num==1){
                document.body.style.backgroundImage = "url('rain.gif')";
                rainsound.play();
            }
            if (num==2){
                document.body.style.backgroundImage = "url('snow.gif')";
                snowsound.play();
            }
            if (num==3){
                document.body.style.backgroundImage = "url('cloud.gif')";
                cloudsound.play();
            }
            if (num==4){
                document.body.style.backgroundImage = "url('sun.gif')";
                sunsound.play();
            }
            //begins the get request to make the scroll
            if (count==0){
                $.ajax({
                    type: 'GET',
                    url: "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + long + "&units=Imperial&cnt=10&APPID=ad9da40570b660bc0f312e97324278b4",
                    dataType: 'jsonp',
                    success: function (data) {
                        console.log(data); 
                        //only 10 days total in data
                        for (a = 0; a <= 9; a++){
                            //to get day of the week used recommendation from stackoverflow
                            //https://stackoverflow.com/questions/5741632/javascript-date-7-days
                            var date = new Date();
                            date.setDate(date.getDate() + a);
                            var cdate = date.getDate();
                            var cmonth = (date.getMonth()+1);
                            var cday  = (date.getDay());
                            //to turn .getDay into weekday used recommendation from stackoverflow
                            //https://stackoverflow.com/questions/9677757/how-to-get-the-day-of-the-week-from-the-day-number-in-javascript
                            function dayOfWeekAsInteger(day) {
                                return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][day];
                            }
                            cday = dayOfWeekAsInteger(cday);
                            //bootstrap to create 5 items in a row (first element needs to be offset)
                            if ((a==0)||(a==5)){
                                $("#future").append("<div class='col-md-2 col-md-offset-1' id='"+a+"'><p>" + cday + " " + cmonth + "/" + cdate + "</p><p><img src='http://openweathermap.org/img/w/" + data.list[a].weather[0].icon +".png'>" + data.list[a].temp.day +"</p><p>" + data.list[a].weather[0].description + "</p><p>Minimum Temperature: " + data.list[a].temp.min + "</p><p>Maximum Temperature: " + data.list[a].temp.max + "</p></div>");                                     
                            } else{
                                $("#future").append("<div class='col-md-2' id='"+a+"'><p>" + cday + " " + cmonth + "/" + cdate + "</p><p><img src='http://openweathermap.org/img/w/" + data.list[a].weather[0].icon +".png'>" + data.list[a].temp.day +"</p><p>" + data.list[a].weather[0].description + "</p><p>Minimum Temperature: " + data.list[a].temp.min + "</p><p>Maximum Temperature: " + data.list[a].temp.max + "</p></div>");
                            }
                            //show first 5 rounds of tweets
                            if (a<5){
                                $("#"+a).show();
                            } else{
                                $("#"+a).hide();
                            }
                        }
                    }
                });
            }
            //from lab 1...
            for (m = 0; m <= 10; m++) { 
                if (m<5){
                    $("#"+m).hide();
                }
            }
            for (k = 0; k <= 10; k++) {
                //need to make 5 disappear every time
                var numberforid = k-5;
                var e = document.getElementById(k);
                if (e != null){
                    e.id = numberforid; 
                }
            }
            for (j = 0; j <= 10; j++) {  
                if (j>4){
                    $("#" + j).hide();
                } else {
                    $("#" + j).show();
                }
            }
            for (j = -5; j < 0; j++) {  
                $("#" + j).remove();
            }
            count+=1;
            //will always have 10, so 10/5=2 rounds 
            if (count==2){
                count=0;
            }
        }
        forecastscroll();
        setInterval(function() {
            forecastscroll();
        },7000);
    }
});