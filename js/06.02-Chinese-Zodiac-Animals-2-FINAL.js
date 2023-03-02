// Lesson 06.02 - FINAL
// Chinese Zodiac Animals Pt. 2

const section = document.querySelector('section');

// We need to define the **playSound** function before reloading the page in the browser, or else we will get an error. But first, we need an **Audio** object to play the sound.

// 10. Above the loop, in the global scope, instantiate an instance of the **Audio** object. It's the same syntax as the **Image** object, with the **new** keyword:
const sound = new Audio();

// 11. Below that, also in the global scope, write the function. 

function playSound() {
    sound.pause();
    sound.src = `audio/${this.eng}.mp3`;
    sound.play();
}

// 12. Reload the browser. The sound icon should be back. Click one to play that animal's mp3 file.

for(let i = 0; i < 12; i++) {

    let animal = animals[i];

    const divvy = document.createElement('div');
    divvy.className = 'divvy';
    divvy.textContent = 'div number ' + i;
    section.appendChild(divvy);

    let pic = new Image();
    pic.src = `images/animals/${animal.eng}.jpg`;
    pic.className = 'animal-pic';

    divvy.textContent = '';
    divvy.appendChild(pic);

    const inputBox = document.createElement('input');
    inputBox.type = 'search';
    inputBox.placeholder = 'name';
    inputBox.eng = animal.eng;
    inputBox.chi = animal.chi;
    inputBox.also = animal.also;

    // 33. Assign an **i** property to the **input**. This associates the loop index with each text box. We need the index, because the **english** and **pinyin** text boxes have ids that end in the index: 
    inputBox.i = i;

    inputBox.addEventListener('search', checkSpelling);

    // 34. While we're in the vicinity, add a 'blur' event function call, so that the function runs when the user hits Tab:
    inputBox.addEventListener('blur', checkSpelling);

    divvy.appendChild(inputBox);

    // 5. In the **START.js** file, inside the loop, make an image and set its source to **sound-icon.png**:
    let soundIcon = new Image();
    soundIcon.src = 'images/sound-icon.png';

    // 6. Assign the **sound-icon** class to the image. The class uses absolute positioning, which will park the icon in the upper right corner of the div:
    soundIcon.className = 'sound-icon';

    // 7. Assign the **eng** proprety of the current animal object to be the **eng** property of the image. This way, when the image is clicked, the function can identify the animal as **this.eng**. This is used to concatenate the **mp3** file name:
    soundIcon.eng = animal.eng;

    // 8. Make the clicking of the sound icon call the **playSound** function:
    soundIcon.addEventListener('click', playSound);

    // 9. Output the sound icon to the div:
    divvy.appendChild(soundIcon);

    // 14. Still inside the loop, make an image and set its source to the character jpg for the animal. The **chi** property has the pinyin (sans tone markings) that we need to concatenate the file name:

    let chineseChar = new Image();
    chineseChar.src = `images/chars/char-${animal.chi}.jpg`;

    // 15. Assign the chinese-char class to the image:
    chineseChar.className = 'chinese-char';

    // 16. Output the Chinese character to the div:

    divvy.appendChild(chineseChar);

    // 17. Reload the page. The application is really starting to shape up: we have the animal and character pics, as well as the sound and input box--and everything so far works.

    // 18. Still in the big loop, make a **p** tag to hold the years and assign it its class.  The css sets the width narrow, so that only one year can fit per line.
    let year = document.createElement('p');
    year.className = 'zodiac-year';

    // 19. We will concatenate the year series as a string. Declare a variable **yearsSeries** and assign it an initial value of the current year, minus 168. This takes us back 14 cycles, to the mid-19th century. Add a space after the year:
    let yearsSeries = (animal.year - 168) + ' ';

    // 20. Run a for loop that starts at 156, continues until the counter reaches -12 and goes down by 12 each time: 
    for(let y = 156; y > -12; y-=12) {

        // 21. Each time through the loop, **y**, which is decremented by 12. The expression **animal.year - y** gives us the next year in the series, which is concatenated **yearsSeries**: 
        yearsSeries += (animal.year - y) + ' ';
    }

    // 22. Below the loop, output **yearSeries** to the **year** element, and then output that **year** to the div:
    year.textContent = yearsSeries;
    divvy.appendChild(year);

    // 23. Reload the browser. Viola--we should have 15 years at 12-year intervals running down the left hand side of each div. The last year is the next future one in the cycle.

    // 24. Still in the big loop, make a **span** tag to hold the English name:
    let english = document.createElement('span');
    english.className = 'english';

    // 25. Apply its class, which has **display: none** to hide the tag on page load:
    english.className = 'english';

    // 26. Set its text to be the English name ("cow", "dog", etc.): 
    english.innerHTML = animal.eng;

    // 27. Assign the tag a dynamic id that uses the current index: **eng0, eng1**, etc. The element needs an id, so that we can get -- and show -- the element in the **checkSpelling** function:
    english.id = 'eng' + i;

    // 28. Output the span tag to the div:
    divvy.appendChild(english);

    // 29. Still in the big loop, make a span tag to hold the pinyin and its tone number. The process is the same as for making the span to hold the English name, so we will do this all one step:
    let pinyin = document.createElement('span');
    pinyin.innerHTML = animal.pin + '<br>' + animal.tone;
    pinyin.pin = animal.pin;
    pinyin.className = 'pinyin';
    pinyin.id = 'pin' + i;
    divvy.appendChild(pinyin);

    // 30. Reload the page. The text does not appear, nor do we have any functionality yet to make it appear.

    // 31. In the CSS, in the **.english** and **.pinyin** classes, comment out the **display: none** properties:
    /*
    .english {
        top: 5px;
        right: 50%;
        /* display: none; */

    // 32. Reload the page. Now the text appears. 

    // 33. Restore the **display: none** in the CSS so that the text is hidden again.
        
} // end loop

function checkSpelling() {
    let input = this.value;

     if(input == this.eng || input == this.chi || input == this.also) {

        this.style.backgroundColor = '#0B0';
        this.style.color = '#fff';

        // 34. In the **checkSpelling** function, in the **if** part, get the English and pinyin elements by id. The first animal's English and pinyin span tags have ids of **eng0** and **pin0**. To get the elements by id, we need to first concatenate the ids using the index:
        let pinID = 'pin' + this.i;
        let pinSpan = document.getElementById(pinID);

        let engID = 'eng' + this.i;
        let engSpan = document.getElementById(engID);

        // 35. Once we've gotten the elements, set the display to 'inline': with that, the hidden elements should appear when the correct spelling is entered into an input box:
        engSpan.style.display = 'inline';
        pinSpan.style.display = 'inline';

    } else {

        this.style.backgroundColor = '#921';
        this.style.color = '#fff';
    }

} // end function checkSpelling()

// 36. Reload the page and enter an animal name in the text box. Hit Enter or Tab. The English and pinyin should appear.


// END: Lesson 06.02
// NEXT: Lesson 06.03