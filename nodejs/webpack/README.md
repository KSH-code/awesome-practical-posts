# 출제 의도
1. Webpack 을 사용 해보았는가?
2. 사용하는 이유를 아는가?
## 문제
Q1. 웹팩은 무엇인가요?
Q2. 웹팩은 왜 사용 하나요?
## 정답
<details><summary>Q1. 답</summary>
<pre>
웹팩은 최신의 Javascript application 을 static module bundler 입니다.
내부적으로 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들 파일을 생성하는 의존성 그래프를 만든다.
</pre>
</details>
<details><summary>Q2. 답</summary>
<pre>
1. 파일을 하나로 묶는다면 용량이 줄거나 또는 웹에서의 요청 횟수가 줄기 때문에 비용 절감이 된다.
2. 로더: 이미지, 스타일 시트 등 같은 비자바스크립트 파일을 자바스크립트로 로드하는 기능이 있다.
3. 플러그인: 위의 로더가 모듈 단위라면 플러그인은 번들 파일 단위다. 그렇기 때문에 UglifyJsPlugin 와 같은 난독화 플러그인을 적용하면 쉽게 된다.
</pre>
</details>