$(document).ready(function(){
    //notification about tweet noise
    alert("Turn your sound on!  Every time new tweets pop up, the twitter iPhone notification sound will play");
    var tweets = [];
    var counter=0;
    function tweetMo () {
        if (counter==0){
            tweets = [];
            //gets all data from json file and appends it to the body attached to different ids within 4 seperate columns made using bootstrap.  All items are hidden except the first 6
            $.getJSON("TwitterTweets17.json", function(data) {
                $.each(data, function(i, tweet) {
                    //for tweet content
                    i=i+1;
                    tweets.push(tweet);
                    //for tweet text column
                    if (tweet.user && tweet.text){
                        $("#text").append("<ul style ='padding: 3%; background:white; height: 100px;' id = " + i + ">" + tweet.text + "</ul>");
                    } else {
                        $("#text").append("<ul style ='padding: 3%; background:white; height: 100px;' id = " + i + ">Tweet could not be found</ul>");
                    }
                    $("#"+i).hide();
                    //for tweet times column
                    if  (tweet.user && tweet.created_at){
                        $("#times").append("<ul style ='padding: 3%; background:white; height: 100px;' id = 'times" + i + "'>" + tweet.created_at + "</ul>");
                    } else{
                        $("#times").append("<ul style ='padding: 3%; background:white; height: 100px;' id = 'times" + i + "'>Unknown Time</ul>");
                    }
                    $("#times"+i).hide();
                    //twitter usernames column
                    if  (tweet.user && tweet.user.name){
                        $("#usernames").append("<ul style ='padding: 3%; background:white; height: 100px; font-weight: bold;' id = 'user" + i + "'>" + tweet.user.name + "</ul>");  
                    } else{
                        $("#usernames").append("<ul style ='padding: 3%; background:white; height: 100px; font-weight: bold;' id = 'user" + i + "'>Twitter User</ul>");
                    }
                    $("#user"+i).hide();
                    //user photos column
                    if(tweet.user&&tweet.user.profile_image_url){
                        $("#photo").append("<ul style ='padding: 3%; background:white; height: 100px; font-weight: bold;' id = 'userp" + i + "'><img style ='height:80px; width:80px;' src= '" + tweet.user.profile_image_url+"'></ul>");
                        //to recognize when error occurs loading image
                        $("img").on('error',function(){
                            $(this).unbind("error").attr("src","unknownproimage.png");
                        });
                    } else {
                        $("#photo").append("<ul style ='padding: 3%; background:white; height: 100px; font-weight: bold;' id = 'userp" + i + "'><img style ='height:80px; width:80px;' src= 'unknownproimage.png'></ul>");
                    }
                    $("#userp"+i).hide();            
                    //show first 5 rounds of tweets
                    if (i<6){
                        $("#"+i).show();
                        $("#user"+i).show();
                        $("#userp"+i).show();
                        $("#times"+i).show();
                    }
                });
            });
        }
        //hides 5 elements to make them disapear
        for (m = 0; m <= tweets.length; m++) { 
            if (m<6){
                $("#"+m).hide();
                $("#user"+m).hide();
                $("#userp"+m).hide();
                $("#times"+m).hide();
            }
        }
        //subtracts the id by 5 so the next 5 can be shown
        for (k = 0; k <= tweets.length; k++) {
            var numberforid = k-5;
            //gets the old ids
            var e = document.getElementById(k);
            var f = document.getElementById("user"+k);
            var l = document.getElementById("userp"+k);
            var b = document.getElementById("times"+k);
            //changes every element to have an id of 5 less than previously
            if (e != null){
                e.id = numberforid; 
            }
            if (f != null){
                f.id = "user" + numberforid.toString(); 
            }
            if (l != null){
                l.id = "userp" + numberforid.toString(); 
            }
            if (b != null){
                b.id = "times" + numberforid.toString(); 
            }
        }
        //with the new ids provided, must now manipulate so new ones show and hide
        for (j = 1; j <= tweets.length; j++) {  
            if (j>5){
                //hiding anything greater than the next 5
                $("#" + j).hide();
                $("#user" + j).hide();
                $("#userp" + j).hide();
                $("#times" + j).hide();
            } else{
                //showing the next 5
                $("#" + j).show();
                $("#user" + j).show();
                $("#userp" + j).show();
                $("#times" + j).show();
            }
        }
        counter+=1;
        //this is to make the tweets regenerate after they have all been cycled through;
        //resets so it can begin again (we know we have 100 tweets every time in JSON file)
        if (counter==21){
            counter=0;
            tweetMo();
            //makes so elements disapear from DOM after circulating one round so the ticker does not cause lag
            document.getElementById("photo").innerHTML="";
            document.getElementById("usernames").innerHTML="";
            document.getElementById("text").innerHTML="";
            document.getElementById("times").innerHTML="";
        }    
    }
    //twitter phone notification noise will sound when tweets pop up in groups of 5
    var twi = document.createElement('audio');
    twi.setAttribute('src', 'twitterso.mp3');
    twi.play();
    //to make sure first instance is not delayed play at once
    tweetMo();
    //every instance after wait 3 seconds
    setInterval(function() {
		tweetMo();
        //twitter phone notification noise will sound when tweets pop up in groups of 5
        var twi = document.createElement('audio');
        twi.setAttribute('src', 'twitterso.mp3');
        twi.play();
	}, 3000);//sets the interval to every three seconds
});