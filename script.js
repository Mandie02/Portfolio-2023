

const myName = document.getElementsByClassName("myname")[0];
const paragraph = document.getElementsByClassName("dev")[0];
const text1 = 'Hello, I am Mandie Limbaga!';
const text2 = "Front-End Web Developer from Philippines.";

const textTypeWriter = (element, text, i = 0) => {
    element.textContent = text.substring(0, i +1);

    if(i === text.length - 1){
        return;
    }

    setTimeout(() => textTypeWriter(element, text, i , + 1), 50);
}

textTypeWriter(myName, text1);
textTypeWriter(paragraph, text2);