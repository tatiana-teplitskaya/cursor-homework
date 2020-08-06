const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]; 
const marks = [4, 5, 5, 3, 4, 5];

function makePairs(students){
    let firstPair = [];
    firstPair.push(students[0], students[2]);
    let secondPair = [];
    secondPair.push(students[1], students[3]);
    let thirdPair = [];
    thirdPair.push(students[4], students[5]);
    let pairsOfStudents = [];
    pairsOfStudents.push(firstPair, secondPair, thirdPair);

    return pairsOfStudents;
}
const pairs = makePairs(students);
console.log(pairs);

function addSubject(pairsOfStudents, themes){
    let pairsWithSubject = [];
    for (let i = 0; i < pairsOfStudents.length; i++){
    let firstPairWithSubject = [];
    firstPairWithSubject.push(pairsOfStudents[i].join(' і '));
    firstPairWithSubject.push(themes[i]);
    pairsWithSubject.push(firstPairWithSubject);
    }
    return pairsWithSubject;
}

const pairsPlusSubject = addSubject(pairs, themes);
console.log(pairsPlusSubject);

function addMark(students, marks){
    let studentsWithMarks = [];
    for (let i = 0; i < students.length; i++){
        studentsWithMarks.push([students[i], marks[i]]);
    }
    return studentsWithMarks;
}

const studentsPlusMarks = addMark(students, marks);
console.log(studentsPlusMarks);

function addRandomMark(pairsWithSubject){
    let pairsWithMark = [];
    for (let i = 0; i < pairsWithSubject.length; i++){
        const randomMark = Math.floor(1 + Math.random() * 5);
        pairsWithMark.push([...pairsWithSubject[i], randomMark]);
    }
    return pairsWithMark;
}

const pairsPlusMark = addRandomMark(pairsPlusSubject);
console.log(pairsPlusMark);