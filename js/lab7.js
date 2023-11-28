function message(){
    alert("Увесь вміст сторінки завантажено!");
}

function doubleClick(){
    var heading = document.querySelector("h3");
    heading.style.color = "pink";
    heading.style.fontSize = "22px";
    alert("Подвійний клік виконаний!");
}

function mouseOver(el){
    el.innerHTML = "Magic!";
    el.style.color = "black";
}

function mouseOut(el){
    el.innerHTML = "Наведіть курсор!";
    el.style.color = "white";
}

function displayTextarea(elements) {
    var textarea = document.getElementById('resultTextarea');
    textarea.value = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        console.log('Element Name: ' + element.name);
        textarea.value += 'Element Name: ' + element.name + '\n';
    }
}

function searchInformation() {
    var textInput = document.getElementById('textInput').value;
    var digitCount = (textInput.match(/\d/g) || []).length;

    document.getElementById('result').innerText = 'Кількість цифр у тексті: ' + digitCount;
}