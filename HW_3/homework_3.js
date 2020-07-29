function getMaxDigit(number){
    let maxDigit = 0;
    const digits = number.toString().split('');
    for (let i = 0; i < digits.length; i++){
        if  (+digits[i] > maxDigit) {
            maxDigit = +digits[i];
        }
    }
    return maxDigit;
}

function getPow(number, pow){
    if (pow < 1) {
        return 1;
    }
    let result = number;
    while (pow > 1){
        result *= number;
        pow--;
    }
    return result;
}

function formatName(name){
    let splittedWord = name.toLowerCase().split('');
    splittedWord[0] = splittedWord[0].toUpperCase();
    const formattedName = splittedWord.join('');
    return formattedName;
}

function getIncome(salary){
    if (salary <= 0){
        return 0;
    }
    const tax = 19.5 / 100;
    return salary - salary * tax;
}

function countLetter(letter, word){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if (word[i] == letter){
            count++;
        }
    }
    return count;
}

function convertCurrency(amount){
    const regexpForUsd = /^\d+\$$/;
    const regexpForUah = /^\d+uah$/;
    if (amount.toLowerCase().match(regexpForUsd)) {
        return parseInt(amount) * 25 + 'UAH';
    }
    else
        if (amount.toLowerCase().match(regexpForUah)){
            return parseInt(amount) / 25 + '$';
        }
        else
            return 'Input value is not correct!';
}

function isPalyndrom(word){
    let formattedWord = '';
    for (let i = 0; i < word.length; i++){
        if (word[i] == ' ')
            continue;
            else
                formattedWord += word[i].toLowerCase();
    }
    for (let i = formattedWord.length - 1, j = 0; i >= 0 && j < formattedWord.length - 1; i--, j++){
            if(formattedWord[i] != formattedWord[j]){
                return false;
            }
        }
return true;
}


console.log(`Функція №1: ${getMaxDigit(597)}
Функція №2: ${getPow(2, 3)}  
Функція №3: ${formatName('влад')}  
Функція №4: ${getIncome(2000)}  
Функція №6: ${countLetter('а', 'абрикос')}
Функція №7: ${convertCurrency('2500uah')}  
Функція №10: ${isPalyndrom('Я несу гусеня')} `);
