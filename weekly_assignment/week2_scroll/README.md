
# js event listener
<br>
link : https://nouf-alabbasi.github.io/fall-2022_connection-lab/weekly_assignment/week2_scroll/index.html
The purpose of this website is to teach addition in a fun way where the user searches for the values scattered around the web page and adds them and increments in the value to win.
## Wireframe
I first used drew some wireframe ideas on sticky notes and lined them up to mimic scrolling and settled for this wireframe.
<p align="center">
  <img src="w1.png" height="300"/>
</p>

## creating the page
### challenge 1
There were a few challenges when it came to creating this page. I wanted to fade the darker part and the lighter part at the top. I tried to fade the div at the bottom into the lighter color. The issue here is that I needed to alter the color when the user clicks the botton at the end of the page, and I couldn't figure out how to reassign the gradient value as the background color. To solve this issue I used opacity and altered it as the user scrolled.  
<p align="center">
  <img src="website_1.png" height="300"/>
</p>


### challenge 2
there is also the issue of the bottom div not fitting the entire screen after I minimize and expand it. I made sure that the width of the div is 100% or 100vw. I also made sure that the body's padding=0 or margin=0. At the end I tried to change body's overflowY to hidden, but none of that worked.
<p align="center">
  <img src="website_4.png" height="300"/>
</p>

### challenge 3
I tried using removeEventListener for the + and - buttons, but that was challenging with the anonymous function. I tried a few ways to reference the function and decided to name my function but the n I had the issue of the functions being named localy(I believe) and I could't refernce it from the other event listener. I think for future purposes I would remove the - button since it has little use now or I would create functions and call in the events listner instead of defining them in the event listener.

### files being generated
I noticed after saving the files that a file called scroll.html was being generated which looked like the index.html file but had code in the text that seemed to indicate what was meant to happen to it(based on the css or js). I wasn't sure what this file was and couldn't remove it. 

### the final website
The website starts with a box at the bottom of the screen, the word "hello" appears once the user scrolls a bit. Confetti appears from under the box and the box leaves the screen by going down.
then the user is prompted to continue scrolling and the webpage becomes darker. at the end there is a button and if the user presses it the room/office is lit up and a person appears and instructs the user to add or subract by pressing the + or - button.
<p align="center">
  <img src="website_2.png" height="300"/>
</p>
<p align="center">
  <img src="website_6.png" height="300"/>
</p>
<p align="center">
  <img src="website_5.png" height="300"/>
</p>
<p align="center">
  <img src="website_3.png" height="300"/>
</p>

