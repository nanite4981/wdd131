//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
    return <li>${step}</li>;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHTML.join();

const grades = ["A", "B", "A"];

const letterGPA(grade){
    let points = 0;
    if (grade === "A"){
        points = 4;
    }
    else if (grade === "B"){
        points = 3;
    }
    else if (grade === "C"){
        points = 2;
    }
    else if (grade === "D"){
        points = 1;
    }
    else{
        points = 0;
    }
    return points;
}

const gradesGPA = grades.map(letterGPA);
const pointsTotal = gradesGPA.reduce(function(total,item){
    return total + item;
})
const averageGPA = pointsTotal / gradesGPA.length;

const fruits =["watermelon", "peach", "apple", "tomato", "grape"];
const fruitsSix = fruits.filter(function(fruits){
    return fruits.length < 6;
});

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = numbers.indexOf(luckyNumber);