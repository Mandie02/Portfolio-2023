
document.addEventListener('DOMContentLoaded', () => {
    const myName = document.querySelector(".myname");
    const paragraph = document.querySelector(".dev");
    const text1 = 'Hello, I am Mandie Limbaga!';
    const text2 = "Front-End Web Developer from Philippines.";

    const typeWritterEffect = (element, text, i = 0) => {
        element.textContent += text[i];

    if(i === text.length - 1){
        return;
    }

    setTimeout(() => typeWritterEffect(element, text, i + 1), 60);
    }

    typeWritterEffect(myName, text1);
    typeWritterEffect(paragraph, text2);

    const aboutBtn = document.querySelector(".about");
    const MandieName = document.getElementsByClassName("mandie");

    aboutBtn.addEventListener('click', () => {

        let nameText = "Mandie";
        typeWritterEffect(MandieName, nameText);
    })
});