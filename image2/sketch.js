// 반복문, 배열 활용 연습
// ***나머지 연산자를 이용해서 숫자를 루프하기***
let current = 0;

// 실수 주의. 프리로드 안에서 정의하면 프리로드 안에서만 쓸 수 있다!
let images = [];

function preload(){
    images.push(loadImage('assets/1.png'));
    images.push(loadImage('assets/2.webp'));
    images.push(loadImage('assets/3.png'));
}

function setup(){
    frameRate(4);
    createCanvas(1080, 1080);
}

function draw(){
    background(255);
    image(images[current], 0, 0);
    current = frameCount % images.length;
    // '배열의 수 + 1'의 숫자의 나머지를 이용해야 한다!
}