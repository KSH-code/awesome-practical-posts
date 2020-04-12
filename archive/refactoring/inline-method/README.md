# Benefits
1. 불필요한 method 를 최소하 할 수 있다.
2. 코드를 직관적으로 만든다.
## 문제
```
def a
  b? ? 1 : 2
end
def b?
  true 또는 false (한 줄)
end
```
<details><summary>Q1. 답</summary>
<pre>
b? 가 반환하는 logic 은 아주 simple 하기 때문에, inline method 를 해도 된다.

def a
  (b? 의 한 줄 코드) ? 1 : 2
end
</pre>
</details>
