let englishKeys = [
  tilde = {
    keyCode: 192,
    lowerCase: '`',
    upperCase: '~',
    className: 'single symbol',
    row: 'firstRow',
  },
  one = {
    keyCode: 49,
    lowerCase: '1',
    upperCase: '!',
    className: 'single numeral',
    row: 'firstRow',
  },
  two = {
    keyCode: 50,
    lowerCase: '2',
    upperCase: '@',
    className: 'single numeral',
    row: 'firstRow',
  },
  three = {
    keyCode: 51,
    lowerCase: '3',
    upperCase: '#',
    className: 'single numeral',
    row: 'firstRow',
  },
  four = {
    keyCode: 52,
    lowerCase: '4',
    upperCase: '$',
    className: 'single numeral',
    row: 'firstRow',
  },
  five = {
    keyCode: 53,
    lowerCase: '5',
    upperCase: '%',
    className: 'single numeral',
    row: 'firstRow',
  },
  six = {
    keyCode: 54,
    lowerCase: '6',
    upperCase: '^',
    className: 'single numeral',
    row: 'firstRow',
  },
  seven = {
    keyCode: 55,
    lowerCase: '7',
    upperCase: '&',
    className: 'single numeral',
    row: 'firstRow',
  },
  eigth = {
    keyCode: 56,
    lowerCase: '8',
    upperCase: '*',
    className: 'single numeral',
    row: 'firstRow',
  },
  nine = {
    keyCode: 57,
    lowerCase: '9',
    upperCase: '(',
    className: 'single numeral',
    row: 'firstRow',
  },
  zero = {
    keyCode: 48,
    lowerCase: '0',
    upperCase: ')',
    className: 'single numeral',
    row: 'firstRow',
  },
  minus = {
    keyCode: 173,
    lowerCase: '-',
    upperCase: '_',
    className: 'single numeral',
    row: 'firstRow',
  },
  equally = {
    keyCode: 61,
    lowerCase: '=',
    upperCase: '+',
    className: 'single numeral',
    row: 'firstRow',
  },
  backspace = {
    keyCode: 8,
    lowerCase: '<-Bacspace',
    upperCase: '<-Bacspace',
    className: 'service backspace',
    row: 'firstRow',
  },
  tab = {
    keyCode: 9,
    lowerCase: '---> Tab',
    upperCase: '<--- Tab',
    className: 'service tab',
    row: 'secondRow',
  },
  q = {
    keyCode: 81,
    lowerCase: 'q',
    upperCase: 'Q',
    className: 'single letter',
    row: 'secondRow',
  },
  w = {
    keyCode: 87,
    lowerCase: 'w',
    upperCase: 'W',
    className: 'single letter',
    row: 'secondRow',
  },
  e = {
    keyCode: 69,
    lowerCase: 'e',
    upperCase: 'E',
    className: 'single letter',
    row: 'secondRow',
  },
  r = {
    keyCode: 82,
    lowerCase: 'r',
    upperCase: 'R',
    className: 'single letter',
    row: 'secondRow',
  },
  t = {
    keyCode: 84,
    lowerCase: 't',
    upperCase: 'T',
    className: 'single letter',
    row: 'secondRow',
  },
  y = {
    keyCode: 89,
    lowerCase: 'y',
    upperCase: 'Y',
    className: 'single letter',
    row: 'secondRow',
  },
  u = {
    keyCode: 85,
    lowerCase: 'u',
    upperCase: 'U',
    className: 'single letter',
    row: 'secondRow',
  },
  i = {
    keyCode: 73,
    lowerCase: 'i',
    upperCase: 'I',
    className: 'single letter',
    row: 'secondRow',
  },
  o = {
    keyCode: 79,
    lowerCase: 'o',
    upperCase: 'O',
    className: 'single letter',
    row: 'secondRow',
  },
  p = {
    keyCode: 80,
    lowerCase: 'p',
    upperCase: 'P',
    className: 'single letter',
    row: 'secondRow',
  },
  brOpen = {
    keyCode: 219,
    lowerCase: '[',
    upperCase: '{',
    className: 'single symbol',
    row: 'secondRow',
  },
  brClose = {
    keyCode: 221,
    lowerCase: ']',
    upperCase: '}',
    className: 'single symbol',
    row: 'secondRow',
  },
  backslash = {
    keyCode: 220,
    lowerCase: '\\',
    upperCase: '|',
    className: 'single symbol',
    row: 'secondRow',
  },
  del = {
    keyCode: 46,
    lowerCase: 'del',
    upperCase: 'del',
    className: 'single service',
    row: 'secondRow',
  },
  caps = {
    keyCode: 20,
    lowerCase: 'Caps Lock',
    upperCase: 'Caps Lock',
    className: 'service cupsLock',
    row: 'thirdRow',
  },
  a = {
    keyCode: 65,
    lowerCase: 'a',
    upperCase: 'A',
    className: 'single letter',
    row: 'thirdRow',
  },
  s = {
    keyCode: 83,
    lowerCase: 's',
    upperCase: 'S',
    className: 'single letter',
    row: 'thirdRow',
  },
  d = {
    keyCode: 68,
    lowerCase: 'd',
    upperCase: 'D',
    className: 'single letter',
    row: 'thirdRow',
  },
  f = {
    keyCode: 70,
    lowerCase: 'f',
    upperCase: 'F',
    className: 'single letter',
    row: 'thirdRow',
  },
  g = {
    keyCode: 71,
    lowerCase: 'g',
    upperCase: 'G',
    className: 'single letter',
    row: 'thirdRow',
  },
  h = {
    keyCode: 72,
    lowerCase: 'h',
    upperCase: 'H',
    className: 'single letter',
    row: 'thirdRow',
  },
  j = {
    keyCode: 74,
    lowerCase: 'j',
    upperCase: 'J',
    className: 'single letter',
    row: 'thirdRow',
  },
  k = {
    keyCode: 75,
    lowerCase: 'k',
    upperCase: 'K',
    className: 'single letter',
    row: 'thirdRow',
  },
  l = {
    keyCode: 76,
    lowerCase: 'l',
    upperCase: 'L',
    className: 'single letter',
    row: 'thirdRow',
  },
  semicolon = {
    keyCode: 59,
    lowerCase: ';',
    upperCase: ':',
    className: 'single symbol',
    row: 'thirdRow',
  },
  apostrophe = {
    keyCode: 222,
    lowerCase: "'",
    upperCase: '"',
    className: 'single symbol',
    row: 'thirdRow',
  },
  enter = {
    keyCode: 13,
    lowerCase: 'Enter',
    upperCase: 'Enter',
    className: 'service enter',
    row: 'thirdRow',
  },
  leftShift = {
    keyCode: 16,
    lowerCase: 'shift',
    upperCase: 'SHIFT',
    className: 'service shift',
    row: 'fourthRow',
  },
  z = {
    lowerCase: 'z',
    upperCase: 'Z',
    className: 'single letter',
    row: 'fourthRow',
  },
  x = {
    lowerCase: 'x',
    upperCase: 'X',
    className: 'single letter',
    row: 'fourthRow',
  },
  c = {
    lowerCase: 'c',
    upperCase: 'C',
    className: 'single letter',
    row: 'fourthRow',
  },
  v = {
    lowerCase: 'v',
    upperCase: 'V',
    className: 'single letter',
    row: 'fourthRow',
  },
  b = {
    lowerCase: 'b',
    upperCase: 'B',
    className: 'single letter',
    row: 'fourthRow',
  },
  n = {
    lowerCase: 'n',
    upperCase: 'N',
    className: 'single letter',
    row: 'fourthRow',
  },
  m = {
    lowerCase: 'm',
    upperCase: 'M',
    className: 'single letter',
    row: 'fourthRow',
  },
  comma = {
    lowerCase: ',',
    upperCase: '<',
    className: 'single symbol',
    row: 'fourthRow',
  },
  dot = {
    lowerCase: '.',
    upperCase: '>',
    className: 'single symbol',
    row: 'fourthRow',
  },
  slash = {
    lowerCase: '/',
    upperCase: '?',
    className: 'single symbol',
    row: 'fourthRow',
  },
  up = {
    lowerCase: '˄',
    upperCase: '˄',
    className: 'navigation single',
    row: 'fourthRow',
  },
  rightShift = {
    keyCode: 16,
    lowerCase: 'shift',
    upperCase: 'SHIFT',
    className: 'service single',
    row: 'fourthRow',
  },
  leftCtrl = {
    lowerCase: 'ctrl',
    upperCase: 'CTRL',
    className: 'service double',
    row: 'fifthRow',
  },
  win = {
    lowerCase: 'win',
    upperCase: 'WIN',
    className: 'service double',
    row: 'fifthRow',
  },
  leftAlt = {
    lowerCase: 'alt',
    upperCase: 'ALT',
    className: 'service double',
    row: 'fifthRow',
  },
  space = {
    lowerCase: ' ',
    upperCase: ' ',
    className: 'service space',
    row: 'fifthRow',
  },
  rightAlt = {
    lowerCase: 'alt',
    upperCase: 'ALT',
    className: 'service double',
    row: 'fifthRow',
  },
  rightCtrl = {
    lowerCase: 'ctrl',
    upperCase: 'CTRL',
    className: 'service double',
    row: 'fifthRow',
  },
  left = {
    lowerCase: '˂',
    upperCase: '˂',
    className: 'navigation single',
    row: 'fifthRow',
  },
  down = {
    lowerCase: '˅',
    upperCase: '˅',
    className: 'navigation single',
    row: 'fifthRow',
  },
  right = {
    lowerCase: '˃',
    upperCase: '˃',
    className: 'navigation single',
    row: 'fifthRow',
  },
];

let form = document.createElement('form');
form.className = 'form';
document.body.append(form);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
form.appendChild(textarea);

let fieldset = document.createElement('fieldset');
fieldset.className = 'fieldset';
form.appendChild(fieldset);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
fieldset.appendChild(keyboard);

for (let i = 1; i <= 5; i++) {
  let row = document.createElement('div');
  if (i == 1) {
    row.className = 'firstRow';
  } else if (i == 2) {
    row.className = 'secondRow';
  } else if (i == 3) {
    row.className = 'thirdRow';
  } else if (i == 4) {
    row.className = 'fourthRow';
  } else {
    row.className = 'fifthRow';
  };
  keyboard.appendChild(row);
};

englishKeys.forEach(function (item) {
  let key = document.createElement('button');
  key.id = item['lowerCase'];
  key.className = item['className'] + ' key';
  key.type = 'button';
  key.appendChild(document.createTextNode(item['lowerCase']));
  if (item['row'] == 'firstRow') {
    document.getElementsByClassName('firstRow')[0].appendChild(key);
  } else if (item['row'] == 'secondRow') {
    document.getElementsByClassName('secondRow')[0].appendChild(key);
  } else if (item['row'] == 'thirdRow') {
    document.getElementsByClassName('thirdRow')[0].appendChild(key);
  } else if (item['row'] == 'fourthRow') {
    document.getElementsByClassName('fourthRow')[0].appendChild(key);
  } else {
    document.getElementsByClassName('fifthRow')[0].appendChild(key);
  };
});

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('click',onClickButton);










function keyDown(e) {
  e.preventDefault;
  console.log(e)
  document.getElementById(e['key']).style.backgroundColor = '#000000';
};
function keyUp(e) {
  e.preventDefault;
  document.getElementById(e['key']).style.backgroundColor = '#f4f4f4';
};
function onClickButton(e) {
  e.preventDefault;
  console.log(e.target['id'])
  textarea.value = textarea.value + e.target['id']
 // console.log(e.['id'])
};


