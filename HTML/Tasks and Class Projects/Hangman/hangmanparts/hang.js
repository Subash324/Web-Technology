const words = new Array("apple", "banana", "orange", "kiwi", "guava", "mango", "avocado", "peach", "pear", "plum", "papaya", "pomegranate", "watermelom");//0-5
const wordLen = words.length; //6

let ranindex = Math.floor(Math.random() * wordLen); //values from 0 to 5 randomnly, 3
let ranword = words[ranindex];
var a = ranword.length; //Kiwi


function generateWord() {
    //hides all parts of hangman from head to foot
    for (var j = 0; j < 7; j++) { document.getElementById("imageid" + j).style.visibility = "hidden"; }

    var s = ranword; //fruits name are randomnly generated and assigned to s
    for (var i = 0; i < s.length; i++) { //s=Apple it runs from 0 to 4 in case of apple
        var input = document.createElement("input");
        input.type = "text";
        input.id = "optionid" + i;
        input.className = "test";
        input.value = s.charAt(i); //it gives letter
        inputarea.appendChild(input);
        //making word hidden from users <input type="text" id="optionid0" class="test" value="A">
        //<input type="text" id="optionid1" class="test" value="p"></input>
        input.style.visibility = 'hidden';
        // input.style.textDecoration = "underline";
    }
}
function hint() {
    document.getElementById("sizeid").innerHTML = "Fruit name of "+ a + " letters";
}


function guessMe() {

    let guess = document.getElementById("guessid").value; //a
    if (guess != "") { //true
        for (var i = 0; i < ranword.length; i++) {
            if (guess == ranword[i]) { //false for i=0,1,2,3,4 a=ranword[2]=a
                document.getElementById("optionid" + i).innerHTML = guess;
                document.getElementById("optionid" + i).style.visibility = 'visible';
                document.getElementById("optionid" + i).style.textAlign = 'center';
                document.getElementById("optionid" + i).style.backgroundColor = 'rgb(176, 231, 103)';
            
            }
        }
        //select visible elements
        var size =
             $('#inputarea > input:not([style*="visibility: hidden"])').length;
        if (size == ranword.length) {
            var y = document.getElementById("wonorlooseid");
            y.innerHTML = "🎉🎊✨!!!Congratulations!!!✨🎊🎉<br> You have won";
           
            // y.style.color = "blue";
           y.style.color = "red";
            y.style.fontSize='xx-larger';
            y.style.zIndex='354';
            y.style.position='absolute';
            y.style.top='27%';
            y.style.bottom='55%';
            y.style.left='28%';
           // y.style.backgroundColor='yellow'
            return;
        }
        noMatch(guess); 
    } else {
        alert("Enter your Guess");
        document.getElementById("guessid").focus(); //it gives focus on textbox
    }
}

var count = 0;

function noMatch(guess) { //b
    for (i = 0; i < ranword.length; i++) {
        if (guess == ranword[i]) {
            return;
        }
    }
    if (count < 7) {
        document.getElementById("imageid" + count).style.visibility = "visible";
        document.getElementById("incorrectid").innerHTML += guess;
        count++;
    } else {
        var y = document.getElementById("wonorlooseid");
        y.innerHTML = 'Sorry!!!😔😔You lost the game😔😔<br> "Try again"';
        y.style.color = "	#05314b ";
        y.style.fontSize='xx-larger';
        y.style.zIndex='354';
        y.style.position='absolute';
        y.style.top='27%';
        y.style.bottom='55%';
        y.style.left='28%';
        // y.style.backgroundColor='yellow'

        

        



    }
}