# 출제 의도
1. 가독성이 높은 코드를 지향하는가?
## 문제
Q1.
```
if condition1
  if condition2
    return 2
  return 1
  else
    return something
  end
end
```
위의 코드는 복잡하게 작성된 코드를 최대한 단순하게 변경한 코드입니다.

더 가독성이 높게 만들 수 있을까요?
<details><summary>Q1. 답</summary>
<pre>
명확한 답은 아니지만 통상적으로 많이 사용하는 방법은 guard code 를 상단에 배치하는 방법입니다.
일단 코드는 conditino(N) 일 때, `return n` 을 하기 때문에

return 1 if condition1
return 2 if condition2
를 해주면 하단의 코드는
return something 만 존재하면 되기 때문에 간단해집니다.
</pre>
</details>
