// 1) ფუნქცია, რომელიც ქმნის სტუდენტების Map-ს
function createStudentMap(students) {
    const studentMap = new Map();
    
    students.forEach(student => {
        studentMap.set(student.name, student.score);
    });

    return studentMap;
}

// 2) ფუნქცია, რომელიც შლის დუპლიკატ ელემენტებს მასივიდან
function removeDuplicates(array) {
    const uniqueSet = new Set(array);
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

// 3) ფუნქცია, რომელიც ქმნის Map-ის ასლს და თითოეული სტუდენტის ქულას 5-ით ზრდის
function increaseScores(studentMap) {
    const newMap = new Map(studentMap);
    
    newMap.forEach((score, name) => {
        newMap.set(name, score + 5);
    });

    return newMap;
}
