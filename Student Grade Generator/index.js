const marks = promt('please enter the marks between 0-100');
const marksNumber = Number(marks);
if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
    console.log(`invalid input`);    
}
else {
    let grade;
    if (marksNumber >= 80) {
        grade = `A`
    } else if (marksNumber >=60) {
        grade = `B`;
    } else if (marksNumber >= 50) {
        grade = `C`; 
    } else if (marksNumber >=40) {
        grade = `D`;
    } else {
        grade = `E`;
    }
    console.log(`The students grade is ${grade}`);
}