class Student{
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.dismissed = false;
        this._marks = [5, 4, 4, 5];
    }
    getInfo(){
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
    get marks(){
        if(this.dismissed) {
            return null;
        }
        return this._marks;
    }
    set marks(newMark){
        if(this.dismissed) {
            return null;
        }
        this._marks = [...this._marks, newMark];
    }
    getAverageMark(){
        return this._marks.reduce((sum, currentMark) => sum += currentMark, 0) / this._marks.length;
    }
    dismiss(){
        this.dismissed = true;
    }
    recover(){
        this.dismissed = false;
    }
}

let student = new Student('KPI', 6, 'Теплицька Тетяна');
console.log(student);
student.marks = 5;
console.log('adding mark 5...');
console.log('Marks: ' + student.marks);
console.log('Average: ' + student.getAverageMark());
student.dismiss();
console.log('dismissing...');
console.log('adding mark 4...');
student.marks = 4;
student.recover();
console.log('recovering...');
student.marks = 3;
console.log('adding mark 3...');
console.log('Marks: ' + student.marks);

class BudgetStudent extends Student{
    constructor(university, course, fullName){
        super(university, course, fullName);
        setInterval(() => {
            if (super.getAverageMark() >= 4 && !this.dismissed) {
              this.getScholarship();
            }
          }, 2000);
    }
    getScholarship(){
            console.log('Ви отримали 1400 грн. стипендії');
    }
}

const budgetStudent = new BudgetStudent('KPI', 6, 'Іванов Іван');

