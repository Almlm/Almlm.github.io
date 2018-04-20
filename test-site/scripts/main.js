// 画像をクリックすると画像が変化する
var myImage = document.querySelector("img");

myImage.onclick = function(){
  var mySrc = myImage.getAttribute("src");
  if(mySrc === "images/ocean_night.png"){
    myImage.setAttribute("src","images/sky_night.png");
  }else{
    myImage.setAttribute("src","images/ocean_night.png");
  }
}

//
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
  var myName = prompt("あなたの名前を入力してください。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "V-R.Yakumo Project," + myName;
}

if(!localStorage.getItem("name")){
  setUserName();
}else{
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "V-R.Yakumo Project," + storedName;
}

myButton.onclick = function() {
  setUserName();
}
