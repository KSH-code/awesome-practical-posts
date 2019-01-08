# 출제 의도
1. 기본적인 이해도가 있는가?
2. 또는 창의력
## 문제
Q1. 서버의 환경과 구성은 자유롭게 생각하시고, CPU 의 부하만 있다고 가정합니다.

해결 방법을 알고 계신가요?
<details><summary>Q1. 답</summary>
<pre>
같은 요청이 1000 개 중 약 999 개 라고 가정합시다.
그러면 결국 2 개의 요청만 처리를 하게 되면 될 것 이라고 가정합니다.

왜냐하면, CPU 의 부하는 연산이 많다는 증거인데 같은 요청의 결과는 항상 같은게 맞죠. (뭔가 데이터가 들어왔다던가 그런 환경은 제외합니다.)
그렇기 때문에 결과를 in memory database 같은 곳 또는 memory 에 저장하면 처리가 가능합니다.

이외에도 여러 가지 상황이 많지만, 대표적인 문제를 적어봤습니다.
</pre>
</details>