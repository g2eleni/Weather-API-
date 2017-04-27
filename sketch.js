var apikey = "&appid=3c0233eb728bb3f2315843fc64ca422a";
var url = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "New York";
var units = "&units=metric";
var icon;
var request = url + city + units + apikey;
var dataSet;
var input;
var button;


function preload(){
  loadJSON(request,getData);
}

function getData(data){
  dataSet = data;
  //img = createImg("http://openweathermap.org/img/w/"+dataSet.weather[0].icon+".png");
}


function setup() {
  createCanvas(800,600);
  input = createInput();
  button = createButton("Submit");
  button.mousePressed(getInfo);
  console.log(dataSet);
}

function draw() {
  background(200, 180, +dataSet.main.temp);
  textSize(40);
  fill(0);
  if(dataSet){
  icon = dataSet.weather[0].icon;
  text(city + " forecast according to my mom", 10, 150);
  text("Don't stay cooped up in your room all day.", 10, 250);
  text("Happiness Percentage: " + dataSet.main.temp, 10, 300);
  text("Jacket Need Level: " +(100/dataSet.main.temp_min), 10, 350);
  text("It's looking like: " +dataSet.weather[0].description + " out there.", 10, 400);
  text("Better stay inside.", 10, 450);
  
  }
}

function getInfo(){
  city = input.value();
  request = url + city + units + apikey;
  loadJSON(request,getData);
}