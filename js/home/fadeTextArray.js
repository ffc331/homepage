//fade text for bulletinboard
// https://stackoverflow.com/questions/31313589/how-to-add-fade-in-and-fade-out-when-changing-between-texts-in-javascript
var text = [];
var numbers = [];
var counter = 0;
var elem = document.getElementById("changeText");
var elem2 = document.getElementById("changeWriter");
boardset();

function boardset(){
    counter = 0;
    load();
    numberSet();
    change();
    setInterval(change, 9000);
}

function change() {
    elem.classList.add('hide');
    elem2.classList.add('hide');
    // counter = Math.floor(Math.random()*text.length/2);
    if(counter == 0){
        shuffle(numbers);
    }
    let _num = numbers[counter];
    setTimeout(function () {
        elem.innerHTML = text[_num*2];
        elem2.innerHTML = text[_num*2+1];
        elem.classList.remove('hide');
        elem2.classList.remove('hide');
    }, 500);

    counter +=1;
    counter = counter % (text.length/2);
}

function numberSet(){
    for(let i =0;i<text.length/2;i++){
        numbers[i] = i;
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function load(){
    var file = './res/home/bulletinboard/justalk.txt';
    readTextFile(file);
    // console.log(text);
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // console.log(allText);
                const allLines = allText.split(/\r\n|\n/);
                // Reading line by line
                for(var line = 0; line < allLines.length; line++){
                    // console.log(line);
                    // console.log(allLines[line]);
                    text.push(allLines[line]);
                }
            }
        }
    }
    rawFile.send(null);
}