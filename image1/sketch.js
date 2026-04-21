// 이미지 불러오기 실습

let img1, img2;

// preload(): 강제적으로 먼저 실행 -> setup()의 경우 이미지를 불어오기도 전에 draw()가 실행될 수 있음
function preload(){
    img1 = loadImage('assets/rimworld-wallpapers.png');
    img2 = loadImage('assets/01.png');
}
// 파일의 이름은 되도록 영어로 하자.

function setup(){
    createCanvas(1920, 1080);
}

function draw(){

    // 배경을 계속 새로 칠해야 전에 불러온 이미지가 그대로 남지 않는다!
    background(220)

    if ((keyIsPressed)&&(key === 'r')){
        image(img1, 0, 0);
    }
    else{
        image(img2, 0, 0);
    }
}