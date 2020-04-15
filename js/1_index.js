let russianKeyboard

document.title = 'Virtual Keyboard';

let header = document.createElement('header');
header.className = 'header';
document.body.append(header);

let title = document.createElement('h1');
title.className = 'header-title';
title.textContent = 'RSS Виртуальная клавиатура';
header.appendChild(title);



let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
main.appendChild(wrapper);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
wrapper.appendChild(textarea);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.appendChild(keyboard);

let key = document.createElement('input');
key.className = 'key';
key.textContent = 'someText';
keyboard.appendChild(key);
keyboard.appendChild(key);
keyboard.appendChild(key);
keyboard.appendChild(key);
keyboard.appendChild(key);
keyboard.appendChild(key);
keyboard.appendChild(key);





let footer = document.createElement('footer');
footer.className = 'footer';
document.body.append(footer);
