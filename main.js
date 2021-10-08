let text = document.querySelector('.text');
let add = document.querySelector('.add');
let reset = document.querySelector('.reset');
let words = document.querySelector('.words');
let textarea = document.querySelector('.area');
let update = document.querySelector('.update');
let added = document.querySelector('.words');
let resets = document.querySelector('.reset');
let badWords = [];
add.addEventListener('click', function () {
    if (text.value === '') {
        alert('Write some text');
    }
    else {
        badWords.push(text.value);
        text.value = '';
        words.innerHTML = `Bad words: <span class="added"> ${badWords}</span>`;
    }
});
resets.addEventListener('click', function () {
    badWords.length = 0;
    words.innerHTML = 'Bad words: ';
});
update.addEventListener('click', function () {
    badWords.forEach(element => {
        let el = element;
        let newTextArea = textarea.value.toString();
        let reg = new RegExp(`\\b${el}\\b`, 'g');
        textarea.value = newTextArea.replace(reg, "!!!");
        console.log(el);
    });
});
