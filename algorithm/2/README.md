# 10진법으로 표현된 수 N 을 x진법으로 변환해 출력하는 알고리즘을 작성하시오.

1. 조건문은 사용할 수 없습니다.
   - if, switch, ternary operator 등 모두 안됨
2. 제한
   - N 은 문자열입니다.
   - N 은 꼭 숫자가 아닐 수 있습니다. 숫자가 아닌 경우 `숫자를 입력해주세요.` 를 출력하세요.
   - 의사코드로 작성해도 괜찮습니다.

<details><summary>Q1. 답</summary>
<pre>
try {
  N = to_int(N)
} catch (error) {
  return '숫자를 입력해주세요.'
}

str = ''
X = x
while (N > X) {
X \*= x
}
X /= x
while (X >= x) {
str.append(N / X)
N %= X
X /= x
}

return str.reverse()

</pre>
</details>
