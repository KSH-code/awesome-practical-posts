# 출제 의도
1. 가독성이 높은 코드를 지향하는가?
2. 추후에 유지보수를 쉽게할 수 있는 방법을 알고 있는가?
## 문제
```
def a?
  10.times {p 1}
  true
end
def b?
  15.times {p 1}
  false
end
```
<details><summary>Q1. 답</summary>
<pre>
동일한 logic 은 별도의 method(function) 으로 추출한다.
def a?
  c(10)
  true
end
def b?
  c(10)
  true
end
def c(i)
  i.times {p 1}
end

이런 형태로 리팩토링을 진행하면 수정해야 될 branch 가 줄어든다.
</pre>
</details>
