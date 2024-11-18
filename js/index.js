// Завдання 1

function checkFields() {
    const field1 = document.getElementById('field1').value.trim();
    const field2 = document.getElementById('field2').value.trim();
    const message = document.getElementById('message');

    if (field1 && field2) {
        message.textContent = "Обидва поля заповнені";
        message.style.color = "green";
    } else {
        message.textContent = "Не всі поля заповнені";
        message.style.color = "red";
    }
}

// Завдання 2

function checkSum() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const sum = num1 + num2;
    const numberMessage = document.getElementById('numberMessage');

    if (sum > 10) {
        numberMessage.textContent = "Сума більша за 10";
        numberMessage.style.color = "green";
    } else {
        numberMessage.textContent = "Сума менша або дорівнює 10";
        numberMessage.style.color = "red";
    }
}

// Завдання 3

function checkForJavaScript() {
    const text = document.getElementById('textField').value;
    const jsMessage = document.getElementById('jsMessage');

    if (text.includes("JavaScript")) {
        jsMessage.textContent = "Текст містить слово JavaScript";
        jsMessage.style.color = "green";
    } else {
        jsMessage.textContent = "Текст не містить слово JavaScript";
        jsMessage.style.color = "red";
    }
}

// Завдання 4

function checkNumber() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const resultMessage = document.getElementById('resultMessage');

    if (number > 10 && number < 20) {
        resultMessage.textContent = "Число входить в діапазон від 10 до 20";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Число не входить в діапазон від 10 до 20";
        resultMessage.style.color = "red";
    }
}

// Завдання 5

function checkForm() {
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    const formMessage = document.getElementById('formMessage');

    const nameValid = name.length >= 3;
    const emailValid = email.includes('@') && email.includes('.');
    const passwordValid = password.length >= 6;

    if (nameValid && emailValid && passwordValid) {
        formMessage.textContent = "Дані заповнені правильно!";
        formMessage.style.color = "green";
        window.location.href = "https://www.example.com"; // Заміни на свою URL-сторінку
    } else {
        formMessage.textContent = "Перевірте правильність заповнення форми.";
        formMessage.style.color = "red";
    }
}