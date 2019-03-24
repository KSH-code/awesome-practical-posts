# Benefits
1. Tell-Don't-Ask principle 을 준수한다.
2. 중복된 코드들을 제거할 수 있다.
3. 새로운 기능을 추가하는 경우, 기존 코드를 건드리지 않고 하위 클래스만 생성해주면 된다.
## 문제
```
class Bird
  def getSpeed
    if type == EUROPEAN
      getBaseSpeed()
    elsif type == AFRICAN
      getBaseSpeed() - getLoadFactor() * numberOfCoconuts
    elsif type == NORWEGIAN_BLUE
      (isNailed) ? 0 : getBaseSpeed(voltage)
    end
  end
end
```
<details><summary>Q1. 답</summary>
<pre>
# 준비
계층 구조가 존재하지 않다면, EUROPEAN, AFRICAN, NORWEGIAN_BLUE 을 위한 계층 구조를 만들어야 한다.
- Replace Type Code with Subclasses
- Replace Type Code with State/Strategy
# 리팩토링 시작
1. 각각의 조건별로 실행하는 분기 코드들을 하위 클래스로 extract method 한다.
2. 상위 클래스에 존재하던 분기 코드를 삭제한다.
3. 1 ~ 2 번을 반복해서 모든 코드를 하위클래스로 옮긴다.
</pre>
</details>
