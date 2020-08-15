 const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

function getSubjects(student){
    let formattedSubjects = [];
    let subjectWithoutUnderscore;
    for (subject in student.subjects){
        if (subject.indexOf('_') != -1){
            subjectWithoutUnderscore = subject.slice(0, subject.indexOf('_')) + ' ' + subject.slice(subject.indexOf('_')  + 1);
            formattedSubjects = [...formattedSubjects, subjectWithoutUnderscore[0].toUpperCase() + subjectWithoutUnderscore.slice(1)];
        }
        else 
            formattedSubjects = [...formattedSubjects, subject[0].toUpperCase() + subject.slice(1)]
    }

    return formattedSubjects;
}

function getAverage(...numbers){ // функция из предыдущего дз
    const sum = numbers.reduce((function(currentSum, currentNumber) {
        return currentSum + currentNumber;
    }), 0);
    return sum / numbers.length;
}

function getAverageMark(student){
    let arraysOfMarks = [];
    for (let arr of Object.values(student.subjects)){
        arraysOfMarks = [...arraysOfMarks, ...arr];
    }
    return getAverage(...arraysOfMarks).toFixed(2);
}

function getStudentInfo(student){
    const studentInfo = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    }
    return studentInfo;
}

function getStudentsNames(students){
    let names = [];
    for (let student of students){
        names = [...names, student.name];
    }
    names.sort();
    return names;
}

function getBestStudent(students){
    let bestMark = 0;
    let bestStudent;
    for (let student of students){
        if (+getAverageMark(student) > bestMark){
            bestMark = +getAverageMark(student);
            bestStudent = student.name;
        }
    }
    return bestStudent;
}

function calculateWordLetters(word){
    let letters = {};
    for (let i = 0; i < word.length; i++){
        if (letters.hasOwnProperty(word[i])){
            letters[word[i]]++;
        }
        else
            letters[word[i]] = 1;
    }
    return letters;
}

console.log(`getSubjects: ${getSubjects(students[0])}`);
console.log(`getAverageMark:  ${getAverageMark(students[0])}`);
console.log(`getStudentInfo: ${JSON.stringify(getStudentInfo(students[0]))}`);
console.log(`getStudentsNames: ${getStudentsNames(students)}`);
console.log(`getBestStudent: ${getBestStudent(students)}`);
console.log(`calculateWordLetters: ${JSON.stringify(calculateWordLetters('test'))}`);