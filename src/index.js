const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrZeroNull = expr.match(/.{1,10}/g).map(item => item.split('00').join("").split(10).join('.').split(11).join('-')); //Разбиваем на элементы по 10 символов, убираем сплитом лишние нули и заменяем 10 и 11 на . и - соответственно
    MORSE_TABLE['**********'] = ' '; //Добавляем пробел в MORSE_TABLE
    return arrZeroNull.map(item => MORSE_TABLE[item]).join(''); //Декодируем точки-тире и объединяем элементы в строку
}

module.exports = {
    decode
}
