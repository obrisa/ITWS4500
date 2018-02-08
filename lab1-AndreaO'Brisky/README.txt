Image sources:
https://www.dailydot.com/news/twitter-dick-costolo-isis-suspension-james-foley/
http://www.pngall.com/twitter-png

* Note tweet time would change with live data or data collected at different times but all of our data
in the json file was collected at the same time.

In class we discussed the inclusion or exclusion of unknown variables for front end.  After thinking 
about showing unknown or unfound variables to my user, I decided to show them.  My reasoning was that
I would want an unbiased twitter ticker if one was on a website.  If this was used for real live tweets,
it is possible that some tweets may have a hidden username or not have a profile picture.  I would want
the rest of the tweet information to still appear (content etc.) despite the missing information as the 
text of the tweet is really what I am interested in seeing.  Within my code, I approached this by
creating a series of if else statements that would add content from the json file if it existed
and add a generic message/image if it did not.  The first instance of this occurs on line 16.

This lab was fun!  It was enjoyable to delve back into front end development, which I like to do.  
I started off this lab with a basic format.  I initially wanted 2 rows, one for username, 
the other for text content.  I decided to use Bootstrap to create the columns.  This ended up being
a pretty good strategy as I ended up with 3 columns which showed how quickly and efficiently bootstrap
could be used over creating columns normally in CSS.

For creativity, I decided to make 5 tweets show up and switch all at once every 5 seconds.  This was 
more difficult by sliding up 1, the method I used originally.  When coding, I began representing 
the tweets as numbers before loading the JSON in.  By using numbers, I was able to create the pattern
and cause numbers to slide up how I wanted before putting data in.  This was a good practice that
I plan to continue.

I started off with one getjson request to get data from the file (line 9).  Within my getjson request,
I went through each item in the JSON and appended the features I wanted to the correct columns.
I.E. The tweet text was appended to the third column in line 16.

Using the elements that were all apended, it was next a matter of showing and hiding.  I initially hid
all elements before showing elements that had an id less than 6 (I put numbers in my ids to order the 
added elements).

After the elements are created, represented by a counter starting at 0, I hide elements that have an ID of less
than 6 starting on line 59.  After that, I subtract all of the IDS by 5 starting at line 56 to make the next rounds of hides
and shows work on the next round of 5 elements (starting on line 92).

I then loop and avoid reappending the elements using my counter.

When the counter reaches 21 (after 20 rounds of 5 elements for the 100 JSON elements), I set the counter to 0
and restart the cycle.  I also get the four ID areas I added JSON elements to and empty them
(in lines 112-114) to make sure the page does not continously add twitter elements every cycle.

For creativity, I made the twitter sound play every time new tweets were loaded (see line 97).
I also tried to imitate twitter's fonts (on the header and in the tweet text) as best as I could with 
google fonts.  I additionally made 5 tweets occur at a time rather than 1 as this was more complex
and I wanted to test my javascript skills.

