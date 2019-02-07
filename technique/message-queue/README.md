# 출제 의도
1. 문제 파악이 빠른가?
## 문제
Q1. 현재 로그 서버는 많은 요청을 받고 있습니다. 너무 많은 요청이 일어나서 서버 포트가 고갈되면 어떻게 해결하는게 좋을까요?
<details><summary>Q1. 답</summary>
<pre>
너무 많은 요청이 온다 = 현재 처리 속도가 느림

내가 생각한 해결법
요청 받음 -> 해당 Cache DB에 저장(Redis, MessageQueue) -> Close connection
저장된 DB 를 바라보며 처리하는 prcoess 저장

결론
로그를 Cache DB 에 단순 저장하는건 overhead 별로 없음 = 빠른 연결 종료 가능
</pre>
</details>
