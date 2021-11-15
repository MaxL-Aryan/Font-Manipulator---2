function setup()
{
    video=createCapture(VIDEO);
    video.size(530,400);
    video.position(20,150);
    canvas = createCanvas(550,500);
    canvas.position(600,100);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#c02ad1');
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
    }
}