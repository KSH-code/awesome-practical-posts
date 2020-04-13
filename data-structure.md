# ArrayList 의 add 의 단점

ArrayList 는 element 를 추가할 때 이미 추가된 요소들을 뒤로 밀어주는 작업이 필요하다.

또한 배열의 크기가 부족하다면 새로 만들어서 복사하는 작업이 필요하다.

## 보완법

옮겨야되는 요소들의 메모리영역을 copy and paste 하면 O(1) 로 해결 가능하다.

그렇게되면 메모리의 used space 가 일시적으로 증가하겠지만 LinkedList 를 사용하는 것보다 locality 가 좋기 때문에 성능상으로 좋을 것이라고 판단된다.

실제로 c++ 는 realloc 을 통해 위와같은 방법으로 내부 구현이 돼있다.
