coco =""

function preload()
{
img = loadImage("IMG1.jpg");
}

function setup()
{
canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(380, 380);
video.hide();
}