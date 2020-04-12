## 문제

Q1. 현재 DB 에는 약 1 억 건의 데이터가 존재합니다.

document 들의 모든 데이터 형식은 동일하며, 모두 다른 value 를 가지고 있습니다.

사용되고 있는 codnition 은 3 가지 이며, 한 개의 인덱스를 생성 후 기존의 성능보다 좋게 만들어 보시오.

```
db.collection.find({ hello: 1 })
```

```
db.collection.find({ hello: 1, text: 2, world: 3 })
```

```
db.collection.find({ text: 1, world: 2 })
```

Q2. 한 개의 인덱스를 걸어서 성능을 좋게 만들었나요?

이번에는 query condition 을 수정해 3 번 operation 을 좋게 해보세요.

## 정답

<details><summary>Q1. 답</summary>
<pre>
인덱스는 정의된 순서대로 탐색하기 때문에 다음과 같이 복합 인덱스를 사용하는게 최선입니다.
index: {
  hello: 1,
  text: 1,
  world: 1
}
</pre>
</details>
<details><summary>Q1. 답</summary>
<pre>
인덱스는 정의된 순서이므로 hello 가 없으면 text, world 의 인덱스 효과는 발휘하지 못합니다.
그렇기 때문에 조건에 아무 값이나 추가한 후 실행하면 확실히 좋아진 성능을 느끼실 수 있습니다.
db.collection.find({ hello: { $ne: null }, text: 2, world: 3 })
</pre>
</details>
