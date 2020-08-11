function getRandomArray(length, min, max){
    let randomArray = [];
    for (let i = 0; i < length; i++){
        const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
        randomArray = [...randomArray, randomNumber];
    }
    return randomArray;
}

console.log('getRandomArray(15, 1, 100): ' + getRandomArray(15, 1, 100));

function getAverage(...numbers){
    let countOfFractional = 0;
    const sum = numbers.reduce((function(currentSum, currentNumber) {
        if (!Number.isInteger(currentNumber)) {
            countOfFractional++; // считаем количество дробных чисел
            return currentSum; // и пропускаем дробные
        }
        return currentSum + currentNumber;
    }), 0);
    return sum / (numbers.length - countOfFractional); // из общего количества чисел вычитаем дробные, чтобы они не влияли на среднее
}

console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ' + getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

function filterEvenNumbers(...numbers){
    return numbers.filter(number => number % 2 != 0);
}

console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6): ' + filterEvenNumbers(1, 2, 3, 4, 5, 6));

function countPositiveNumbers(...numbers){
    let counter = 0;
    numbers.forEach(number => number > 0 ? counter++ : counter);
    return counter;
}

console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6): ' + countPositiveNumbers(1, -2, 3, -4, -5, 6));

function divideByThree(word){
    let formattedWord = '';
    for (let k = 0; k < word.length; k++){
        if (word[k] == ' '){
            continue;
        }
        formattedWord += word[k].toLowerCase();
    }
    let parts = [];
    for (let i = 0; i < formattedWord.length; i++){
        if ((i + 1) % 3 == 0){
            parts = [...parts, formattedWord[i - 2] + formattedWord[i - 1] + formattedWord[i]];
        }
        else
            if (i == formattedWord.length - 1){ 
                const lastWordLength = formattedWord.length % 3;
                let lastWord = '';
                for (let j = formattedWord.length - lastWordLength; j < formattedWord.length; j++){
                    lastWord = lastWord + formattedWord[j];
                }
                parts = [...parts, lastWord];
            }
    }
    return parts;
}

console.log('divideByThree("Commander"): ' + divideByThree('Commander'));

function getModa(...numbers){
    numbers.sort((a, b) => a - b); //после сортировки получаем массив , в котором одинаковые цифры стоят рядом
    let uniqueArrays = []; //массив, каждый элемент которого - массив, состоящий из одинаковых цифр
    let sameNumbers = []; // временный массив для собрания одинаковых цифр и последующей записи их в uniqueArrays 
    for (let i = 0; i < numbers.length; i++){
        if (Number.isInteger(numbers[i])){ 
            sameNumbers = [...sameNumbers, numbers[i]];
            if (i == numbers.length - 1 || numbers[i] != numbers[i + 1]){
                uniqueArrays = [...uniqueArrays, sameNumbers];
                sameNumbers = [];
            }
        }
    }
    let maxCount = 0;
    let moda = 0;
    for (let i = 0; i < uniqueArrays.length; i++){
        if (uniqueArrays[i].length > maxCount){
            maxCount = uniqueArrays[i].length;
            moda = uniqueArrays[i][0];
        }
        if (i == uniqueArrays.length - 1){
            return moda;
        }
    }
}

console.log('getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): ' + getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));