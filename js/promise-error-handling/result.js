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
    // reject 한 효과를 받을 수 있다.
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
      // setTimeout 은 글로벌 객체이므로 글로벌에서 throw 한 것과 동일하다. (Node.js 인 경우 서버가 종료됨)
      throw new Error()
    }, 0)
  })
}

test()

// 서버가 꺼지지 않기 위해서
setTimeout(() => {}, 1e10)