document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
function pink() {
  document.body.style.backgroundColor = 'pink';
}
function blue() {
  document.body.style.backgroundColor = 'blue';
}

function black() {
  document.body.style.backgroundColor = 'black';
}

function red() {
  document.body.style.backgroundColor = 'red';
}
function 흰색() {
  document.body.style.backgroundColor = 'white';
}
function showhtml() {
  document.getElementById('fig').src = 'img/html.png';
  document.getElementById('desc').innerHTML =
    'HTML은 구조적 웹문서를 작성하는데 사용하는 마크업언어이다';
}
function showcss() {
  document.getElementById('fig').src = 'img/css.png';
  document.getElementById('desc').innerHTML =
    'css는 HTML 문서의 스타일을 지정하기 위한 언어이다.';
}
function showjava() {
  document.getElementById('fig').src = 'img/java.png';
  document.getElementById('desc').innerHTML =
    'Javascript는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다.';
}
function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}

function naver() {
  <a href="https://www.naver.com">Html</a>;
}
