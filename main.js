let radius = 300;
let divisions = 150;
let divAngle;
let multiplier = 1;
let increment = 0.01;
let direction = 1;

function setup() {
    createCanvas(640, 640);
    divAngle = TWO_PI / divisions;
}

function draw() {
    background(20);
    translate(width / 2, height / 2);

    noFill();
    stroke(166, 42, 251);
    ellipse(0, 0, radius * 2);

    for (let i = 0; i < divisions; i++) {
        let x = i;
        let y = x * multiplier;

        let startPos = xyPosition(x);
        let endPos = xyPosition(y);

        line(startPos.x, startPos.y, endPos.x, endPos.y);
    }

    multiplier += increment * direction;

    if (multiplier >= 12 || multiplier <= 1) {
        direction *= -1;
    }
}

function xyPosition(n) {
    let x = cos(divAngle * n) * radius;
    let y = sin(divAngle * n) * radius;
    return createVector(x, y);
}