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
    let firstPairWithSubject = [];
    firstPairWithSubject.push(pairsOfStudents[0].join(' і '));
    firstPairWithSubject.push(themes[0]);

    let secondPairWithSubject = [];
    pairsWithSubject.push(firstPairWithSubject)
    secondPairWithSubject.push(pairsOfStudents[1].join(' і '));
    secondPairWithSubject.push(themes[1]);

    let thirdPairWithSubject = [];
    pairsWithSubject.push(secondPairWithSubject)
    thirdPairWithSubject.push(pairsOfStudents[2].join(' і '));
    thirdPairWithSubject.push(themes[2]);

    pairsWithSubject.push(thirdPairWithSubject);
    return pairsWithSubject;
}

const pairsPlusSubject = addSubject(pairs, themes);
console.log(pairsPlusSubject);

function addMark(students, marks){
    let studentsWithMarks = [];
    studentsWithMarks.push([students[0], marks[0]], [students[1], marks[1]], [students[2], marks[2]], [students[3], marks[3]], [students[4], marks[4]], [students[5], marks[5]]);
    return studentsWithMarks;
}

const studentsPlusMarks = addMark(students, marks);
console.log(studentsPlusMarks);

function addRandomMark(pairsPlusSubject){
    let pairsWithMark = [];
    for (let i = 0; i < pairsPlusSubject.length; i++){
        const randomMark = Math.floor(1 + Math.random() * 5);
        pairsWithMark.push(pairsPlusSubject[i]);
        pairsWithMark[i].push(randomMark);
        
    }
    return pairsWithMark;
}

const pairsPlusMark = addRandomMark(pairsPlusSubject);
console.log(pairsPlusMark);