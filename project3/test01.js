// 반복문으로 그라데이션 그리기
let lx = 0;

function setup(){
    createCanvas(255,255);
    noLoop(); // 이건 뭐지?
}

function draw(){
    while (lx < 255){
        stroke(255 - lx); // lx: 검정 -> 하양
        line(lx, 0, lx, 255);
        lx++;
    }
}