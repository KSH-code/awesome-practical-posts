# 출제 의도
1. 평소에 꼼꼼하거나 성능 개선을 위해 노력하는가?
## 문제
Q1. 사진이 많고 애니메이션이 많은 페이지에서의 성능을 css 만 사용해서 개선해야 됩니다.

어떻게 하실건가요?
## 정답
<details><summary>Q1. 1안</summary>
<pre>
GPU 의 가속화를 위해서 꼼수를 쓸 수 있습니다.

transform: translate3d(0, 0, 0);

GPU 를 사용함으로서 빨라지지만, RAM 이나 GPU 의 메모리 사용량이 커지며 하드웨어 가속은 많은 노드를 사용할수록 악영향을 끼칠 수 있습니다.
</pre>
</details>
<details><summary>Q1. 2안</summary>
<pre>
will-change: transform;
will-change 를 지원하는 브라우저라면 핵(1안)을 사용하지 않으면 좋습니다.
명확하게 브라우저에게 이 엘리먼트와 컨탠츠는 어떤 행위에 대해서 가속화를 진행해라 하기 때문입니다. 
하지만 많은 엘리먼트에 대해 일어날 변경을 전부 브라우저에게 최적화하라고 시킨다면 실제로는 악영향을 받을 수 있습니다.
will-change 는 그렇기 때문에 남용이 되면 안되고 사용하고 지워주는것이 성능에 좋습니다. (e.g A 에게 hover 시에 will-change 를 주고 hover 가 끝나면 auto 로 변경하거나 지운다.)
</pre>
</details>