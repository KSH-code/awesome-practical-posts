# 출제 의도
1. var, let, const 의 차이점을 아는가?
2. 자세히 알고 있는가?
## 문제
```javascript
for (let i = 0; i < 1; i++); console.log(i) // 의 출력값이 무엇일까요?
for (var j = 0; j < 1; j++); console.log(j) // 의 출력값이 무엇일까요?
for (const k = 0; k < 1; k++); console.log(k) // 의 출력값이 무엇일까요?
```
```javascript
// 각각의 출력값은 무엇일까요?
for (var i = 0; i < 2; i++) setTimeout(() => { console.log(i) }, 100)
for (let j = 0; j < 2; j++) setTimeout(() => { console.log(j) }, 100)
```
[답1](result1.js)
[답2](result2.js)