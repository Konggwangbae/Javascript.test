let age = 33;
let userNmae = 'Hardy';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
    title: 'Developer',
    place: 'New York',
    salary: 50000 
};

let totalAduletYears;

function clacuateAdultYears() {
    return  age - 18;
// 가독성을 위해서 들여쓰기를 하는 것이 좋다.
}

totalAduletYears = clacuateAdultYears();
alert(totalAduletYears);

age = 45;
totalAduletYears =  clacuateAdultYears();

alert(totalAduletYears);