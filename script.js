

const myName = document.getElementsByClassName("myname");
const paragraph = document.getElementsByClassName("dev");

const text1 = 'Hello, I am Mandie Limbaga!';
const text2 = "Front-End Web Developer from Philippines.";

const textTypeWriter = (element, text, i = 0) => {
    element.textContent += text[i];

    if(i === text.length - 1){
        return;
    }

    setTimeout(() => textTypeWriter(element, text, i , + 1), 50)
}

textTypeWriter(myName, text1);
textTypeWriter(paragraph, text2);