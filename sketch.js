var student1;
function setup() {
  createCanvas(400,400);
 student1 = new Student("Kartik", 12,7)
 
}

function draw() 
{
  background(30);
  student1.show()
}