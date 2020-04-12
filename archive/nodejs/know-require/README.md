## 문제

### 1.js

```javascript
require('./2').hello();
```

### 2.js

```javascript
require('./3');
module.exports = (function() {
  let str;
  return {
    setPrintString(tempStr) {
      str = tempStr;
    },
    hello() {
      console.log(str);
    }
  };
})();
```

### 3.js

```javascript
require('./2').setPrintString('correct');
module.exports = {};
```

Q1. 해당 코드가 실행되면 어떤 결과가 나오는지 예측하시오.

## 정답

<details><summary>Q1. 답</summary>
<pre>
에러가 납니다.
Q2. 1.js 만 수정하여 에러가 없게 해보시오.
</pre>
</details>

<details><summary>Q2. 답</summary>
<pre>
require('./2') 위에 require('./3') 를 추가하면 됩니다.
--- 이유 ---
1.js 에서는 require('./2') 를 실행하면서 캐싱합니다.
2.js 에서는 require('./3') 를 실행하면서 캐싱합니다.
그 결과 3.js 에서는 캐싱된 2.js 를 사용하기 때문에 아직 module.exports 가 되지 않은 상태입니다. (2.js 는 현재 require('./3') 를 실행중)
2.js 는 {} 와 같은 빈 값을 반환하고, 그렇기 때문에 hello function 을 찾지 못하게 되는겁니다.
--- 정답 설명 ---
3.js 를 2.js 를 불러오기 전에 실행하게 된다면, 1.js 에서는 이미 3.js 를 캐싱해서 실행하고 3.js 에서 2.js 를 불러오기 때문에 2.js 에서의 3.js 는 캐싱된 값을 사용하기 때문입니다.
--- 다른 정답 ---
3.js 에서의 require.cache 에 들어있는 2.js 를 삭제하면 됩니다.
</pre>
</details>
