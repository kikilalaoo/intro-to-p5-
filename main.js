function preload()
{
      
}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();


    tint_color = "";
}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
    stroke(142,30,29);
    fill(255,0,0);
    circle(30,30,80);
    circle(615,30,80);
    circle(30,450,80);
    circle(615,450,80);
    fill(0,100,0)
    rect(60, 0, 530, 55, 19);
    rect(60, 430, 530, 55, 19);
    rect(0, 65, 55, 350, 19);
    rect(585, 65, 55, 350, 19);
}

function take_snapshot()
{
  save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}