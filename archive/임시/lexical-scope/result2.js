// 각각의 출력값은 무엇일까요?
// setTimeout 은 외부 스코프로 a function 를 참조한다.
function a () {
  // 출력 당시에 (console.log) a 함수에게 i 의 값을 물어본다.
  // i 는 2 까지 증가가 됐다. 0 1 2
  for (var i = 0; i < 2; i++) setTimeout(() => { console.log(i) }, 100) // 2, 2
  // block level scope 여서 a function 에게 물어보지 않고, 그 상황에 맞는 값을 출력할 수 있다. 
  for (let j = 0; j < 2; j++) setTimeout(() => { console.log(j) }, 100) // 0, 1
}
a()