let age = 33;
let userNmae = 'Hardy';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
    title: 'Developer',
    place: 'New York',
    salary: 50000 
};

let totalAduletYears;

function clacuateAdultYears(userAge) {
    let result
    result = userAge - 18;
    return  result;
// 가독성을 위해서 들여쓰기를 하는 것이 좋다.
}

totalAduletYears = clacuateAdultYears(age);
console.log(totalAduletYears);

age = 45;
totalAduletYears =  clacuateAdultYears(age);

console.log(totalAduletYears);

let person = {
    name: 'Max', //property
    greet() { //Method
        console.log('Hello');
        // 객체 안의 함수를 메서드라고 부른다.
    }
};

// 함수 실행 방법
person.greet();