# Benefits
1. 코드의 가독성을 향상시킨다.
    - 기존 코드보다 훨씬 더 목적을 이해하기 쉬워진다는 말입니다.
## 문제
```
def set_value(key, value)
  if key == 'height'
    character[:height] = value
  elsif key == 'weight'
    character[:weight] = value
  else
    raise "not contains #{key} of character"
  end
end
```
- 위 코드를 어떻게 리팩토링 할까요?
<details><summary>Q1. 답</summary>
<pre>
# 준비
1. 기존 #set_value 를 기반해서 각각의 method 를 제작하세요.
2. #set_values 를 호출하는 모든 코드를 (1) 에서 제작한 method 를 호출하도록 변경하세요.
3. (2) 를 완료했으면 삭제하세요.
</pre>
</details>
