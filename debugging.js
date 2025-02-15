const pi = 3.14;
//let radius = 3;
let area = 0;
console.log("Pi is " +pi);
//console.log("Radius is " + radius);
console.log("Area is initially set to " + area);
function circleArea(radius) {
    const area = radius * pi;
    return area;
}

area = circleArea(3);
console.log("Area is " + area);
//radius = 4;
//console.log("Now, we set radius to " + radius);
area = circleArea(4);
console.log("Now, area is " + area);