document.getElementById('time').innerHTML = new Date().toLocaleString();

function pink() {
  document.body.style.backgroundColor = 'pink';
}
function blue() {
  document.body.style.backgroundColor = 'blue';
}
function black() {
  document.body.style.backgroundColor = 'black';
}
function white() {
  document.body.style.backgroundColor = 'white';
}

function showhtml() {
  document.getElementById('fig').src = 'img/html.png';
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>는 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.';
}
function showcss() {
  document.getElementById('fig').src = 'img/css.png';
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.';
}
function showjava() {
  document.getElementById('fig').src = 'img/java.png';
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다.';
}
function showdada() {
  document.getElementById('fig').src = 'img/이차는 이제 제껍니다.jpg';
  document.getElementById('desc').innerHTML =
    '이돈은 이제 제껍니다 제 맘대로 할 수 있습니다.';
}
function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
