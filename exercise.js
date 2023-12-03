// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseName = '유데미 Javascript Text'
let coursePrice = 77;
let courseGoals = ['Javascript 공부', 'Web 공부', '할 수 있다!'];

// 2) Output ("alert") the three variable values

alert(courseName);
alert(coursePrice);
alert(courseGoals);
// 3) Try "grouping" the three variables together and still output their values thereafter

let onlineCourse = {
name: '유데미 Javascirpt Text',
price: 77,
goals: ['Javascript 공부', 'Web 공부', '할 수 있다!']
};

alrert(onlineCourse.name)
alrert(onlineCourse.price)
alrert(onlineCourse.goals)

// 4) Also output the second element in your "main goals" variable

alert(onlineCourse.goals[1]);
// 컴퓨터는 0,1,2,3,4로 인식을 해서 0 = Learn Web Devlopmet, 1 = 'Become a web developer'로 인식을 한다.

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getListIrem(array, arrayIndex) {
let arrayElment = array[arrayIndex];
return arrayElment;
}

// 6) Execute your custom command from (5) and output ("alert") the result

let firstGoal = getListIrem(onlineCourse.goals, 0);