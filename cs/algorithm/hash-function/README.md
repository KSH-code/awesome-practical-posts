# 출제 의도
1. 기본 지식이 있는가?
2. 자신이 알고있는 정보에 대해서 설명을 원할하게 할 수 있는가?
## 문제
Q1. Hash function 이 무엇인지에 대해서 설명해주세요.
## 정답
<details><summary>Q1. 답</summary>
<pre>
Hash function 은 임의의 데이터를 항상 같은 결과를 출력하는 함수입니다.
여기서 항상 같다는 말은 같은 input data 가 있는 경우에만 해당됩니다.
하지만 Hash function 에서 도출되는 hash value 는 대부분 고정된 길이를 사용하기 때문에 비둘기집의 원리에 의해서 충돌이 날 수 있습니다.

보통 Hash function 에서는
1. 곱셈
2. 나눗셈 (대부분 소수(prime number))
를 이용한 연산이 대부분이며, 다른 방법도 많이 존재합니다.

--- 요약 ---
1. Hash function 은 키(key)를 매핑해서 Hash value 로 매핑한다.
2. 비둘기집 원리에 의해서 Hash value 는 동일한 값이 생성될 수 있다.
3. Hash value 는 보통 index 로 사용하기 때문에 integer 형식이 많고 곱셈과 나눗셈을 이용한다.(대부분 소수를 사용하고 2의 제곱수는 피한다.)
</pre>
</details>