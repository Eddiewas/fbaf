rightX = 0;
leftX = 0;
differnec = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,300);
    canvas.position(600,200)
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);    
}

function modelLoaded() {
    console.log('POse net is on')

}

function gotPoses(result) {
    if (result.length>0) {
        console.log(result);
  leftX = result[0].pose.leftWrist.x;
  rightX = result[0].pose.rightWrist.x;
  differnec = floor(leftX - rightX)      
  }
}
function draw() {
 
    background("darkred")
  
    textSize(differnec)
        fill("red")
        text("edman", 40, 120)
}