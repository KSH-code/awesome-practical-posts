try {
  for (let i = 0; i < 1; i++); console.log(i) // let 은 block scope 여서 i 를 없는 변수로 인식합니다.
} catch (err) {
  console.error(err)
}
for (var j = 0; j < 1; j++); console.log(j) // 1 이 출력됩니다. 0++ -> 1 < 1 x
try {
  for (const k = 0; k < 1; k++); console.log(k) // const 는 변하지 않는 상수여서 애초에 for-loop 에서 오류가 나타납니다.
} catch (err) {
  console.error(err)
}