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
    let result = '';
    let letter = '';
    let res = expr.replace(/([*\d]{10})/g, '$1 ').trim().split(' '); //separate string on parts by 10 symbols and split them

    for (let i=0; i < res.length; i++){
        let code = res[i].replace(/^0+/, '').replace(/(\d{2})/g, '$1 ').replace(/10 /g, '.').replace(/11 /g, '-'); //delete lead 000, separate on parts by 2, 10 replace by '.', 11 -> '-'
        if (code === '**********') {
        letter = ' ';
        } else {
        letter = MORSE_TABLE[code];
        }
        result= result + letter;
    }
    return result;
}

module.exports = {
    decode
}