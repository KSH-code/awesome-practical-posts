## 문제
Q1. 철수와 영희가 있습니다.

철수는 현재 A 살 입니다.

영희는 B 살 입니다.

철수의 나라는 이상하게도 1 년이 지나면 2 살이 증가하는 나라인데요.

영희의 나라는 정상적으로 1 년 마다 1 살이 증가합니다.

영희의 나이(B + x)의 배수가 되는 철수의 나이 A(A + 2x)가 되려면 몇년이 지나야 될까요?

입력

1 2
<details><summary>Q1. 답</summary>
<pre>
StringTokenizer st = new StringTokenizer(br.readLine());
int A = Integer.parseInt(st.nextToken());
int B = Integer.parseInt(st.nextToken());
int year = 0;
while (A >= B && A % B == 0) {
  year++;
  A += 2;
  B++;
}
</pre>
</details>