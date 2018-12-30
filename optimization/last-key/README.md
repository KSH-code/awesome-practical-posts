# 출제 의도
1. offset 의 안좋은점을 알고 있는가?
## 문제
Q1. 1억건의 데이터를 현재는 offset, limit 을 사용해서 paginate 하고 있습니다.

offset 이 어느정도 높아지면 느려지기 시작하는데 어떻게 개선할까요?
<details><summary>Q1. 답</summary>
<pre>
offset 대신 특수한 column 의 값을 사용해서 limit 만 사용하도록 하는 테크닉입니다.
날짜, 숫자 등 어떠한 것이 될 수 있으며, 인덱스가 설정돼있어야 합니다.

방법은
1. 20 개를 조회한다.
2. 20 개 중 마지막 lastKey(임의로 생각한 column name) 를 쿼리문에 비교식으로 삽입한다.
   limit and lastKey > curLastKey 와 같은 형식
1, 2 번을 반복해서 1 억까지 조회하면 순식간에 조회된다.

https://www.sitepoint.com/paginating-real-time-data-cursor-based-pagination/
설명을 잘 적지 못해서 value based paging 방법을 설명한 주소를 첨부합니다.
</pre>
</details>
