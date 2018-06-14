# 출제 의도
1. Promise 객체에서의 에러 핸들링을 잘 알고있는가?
2. Context 가 어떤식으로 이루어져있는지 알고 있는가?
## 문제
```javascript
async function test () {
  try {
    await a()
  } catch (err) {
    console.log('1')
  }
  try {
    await b()
  } catch (err) {
    console.log('2')
  }
  try {
    await c()
  } catch (err) {
    console.log('3')
  }
  console.log('4')
}

function a () {
  return new Promise(resolve => {
    throw new Error()
  })
}

function b () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject()
    }, 0)
  })
}

function c () {
  return new Promise(resolve => {
    setTimeout(() => {
      throw new Error()
    }, 0)
  })
}
```
의 출력값을 알아보시오.
[답](result.js)