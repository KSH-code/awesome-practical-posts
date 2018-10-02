# 출제 의도
1. 라이프 사이클에 대해서 알고있는가?
2. Side effect 에 대해서 생각을 하는가?
# 정답 (주관적인 생각)
라이프 사이클에서는 `shouldComponentUpdate` 가 존재한다.

리턴값이 true, false 임에 따라서 re-rendering 이 진행되는데, nextProps, nextState 값을 paramter 로 받게된다.

근데 만약 state 가 mutable 값이라면 nextState 에서 비교가 힘들어진다.

왜나하면 객체 자체는 reference 를 비교하지 않지만 그 안의 값들은 reference 를 통해 값을 가지고 있기 때문에 공유가 된다.

만약 { a: 1 } 의 값을 a = 2 로 변경한다면 nextState 에서 a = 2 로 받게된다.

그래서 비교가 힘들어지므로 최적화에 힘들어지고 side effect 가 나올 확률이 크다.