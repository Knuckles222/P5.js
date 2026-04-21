let handPose;
let video;
function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);
}