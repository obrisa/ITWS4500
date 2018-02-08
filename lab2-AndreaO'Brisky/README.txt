For background:
https://giphy.com/gifs/reactionseditor-l0Iy5fjHyedk9aDGU
https://giphy.com/gifs/snow-christmas-weather-7Bgpw7PwdxoDC
https://www.tumblr.com/search/sun%20rays%20gif
https://giphy.com/gifs/clouds-lightning-imagine-dragons-SbOnutVyWJznG

For sound:
https://www.soundjay.com/rain-sound-effect.html
http://soundbible.com/1661-Sunny-Day.html
http://soundbible.com/1810-Wind.html
http://soundbible.com/2015-Thunder-Strike-1.html

I enjoyed this lab.  APIs have always been a technology I had always heard of but never used.  For this 
lab, I used 2 seperate APIS from openweathermap.org.  The first provided a daily forecast the second 
provided a 10 day forecast.  For the 10 day forecast, I made the assumption that the first value
in the array from the API (marked as 0) represented today's data.

First, I used geolocation to get longitude and latitude to place into the URL of the GET request for the
API.  This began with an if statement to see if a location could be found on line 6 before the next
function currentweather(position) starting on line 22 got the latitude and longitude themselves using
lat= position.coords.latitude;.

I used AJAX to get the data from each API (see lines 26 and 65).  Each time, I completed a console.log(data)
initially (as shown in line 70) to make sure data was being received from the API.  Using console.log
also allowed me to figure out how the data was structured to allow navigation similar to the effects it has
when you console.log data from a JSON file.  Looking at the structure, I could find an element I wanted
to display and access it.  For example, data.list[a].temp.day provided me the overall temperature of the day
in line 90. 

I structured the information how I wanted it in javascript as HTML code and added this code to different
IDs within the body of my html (see lines 32, 88, 90).

For future forecast, I decided to display the data as 10 days in advance with two rounds of 5.
To complete this, I used code from my last lab, a twitter ticker that followed a similar format,
and used bootstrap to display them horizontally.  I also needed to create a loop to get each day
out of the API's array and change get date to get that day to be listed.  This is completed on line 72
with the stackoverflow links that helped me figure out how to list dates of the next 10 days.

Finally, creativity was added in lines 38-61.  Everytime the 5 days of future weather cycled, I made
it so the background and sound randomly switched between 4 different weather types.  The randomness
was completed by Math.floor(Math.random() * 4) + 1 on line 45 which created a random number between
1 and 4.  A series of if statements changed the background and sound by the number generated.  This
was a fun way to be creative and I believe really added to the application.

