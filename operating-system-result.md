# 알아야 되는 내용

1. Virtualizing memory 를 Paging 방식을 이용하고 별다른 캐싱을 이용하지 않을 때 발생하는 문제점은 무엇이며 이를 극복하기 위해 MMU 에 어떠한 Chip 을 이용하는지 설명해주세요.
2. File 을 실행 중일 때 해당 파일을 수정할 수 없는 이유는 무엇인가요?: 현대 운영체제는 메모리 공유를 매우 중요하게 생각한다. 만약 excutable file 인 A 를 100 번 실행한다면 어떨까? 우리는 Data(static), Code 메모리 영역을 공유함으로써 수많은 메모리를 절약할 수 있다. 하지만 문제는 여기서 발생하는 것이 아닌 다음에서 발생한다. Paging 기법을 이용해서 메모리를 관리하는 경우를 예를 들면 우리는 알맞은 페이지들의 크기를 사용할 수 없는 상황이 발생한다. daemon 이용해서 특정 페이지들을 HW 까지 swap out 을 시켜야되는데 executable file 은 항상 Disk(다른 것이 될 수 있음)에 해당 코드의 내용이 존재한다는 점을 이용할 수 있게하기 위함이다. 그러면 swap out(Disk I/O)가 없어서 성능 향상에 도움된다. Present bit 로 인한 Page fault 만 처리하면 되니까!

# 알면 좋은 내용

1. Segment 를 사용하는 환경이며 c 또는 c++ 를 이용할 때 segmentation fault(violation) 가 발생하는 상황과 이유를 설명해주세요.
2. malloc(10) 은 왜 10 bytes 만 사용하는 것이 아닌 need size more than 10 bytes 인지 설명해주세요.
3. Segment Register values 의 Protection bit 이 Read-Execute 인 경우는 어떠한 영역인지 뜻하며, code sharing 을 하는지 설명해주세요.
   1. 왜 Read-Execute 만 허용할까요?
4. Paging 방식을 이용하고 TLB 를 이용한다면 context switch 를 하게될 때 어떤 overhead 발생하게 될까요?
   1. 해결하기 위해서는 어떠한 기법들이 있을까요?

# 몰라도 되는 내용

1. Turnaround Time 과 Response Time 의 차이는 무엇인가요?
2. 각 값을 최적화하기 위한 알고리즘을 아는대로 설명하세요. 단 Multi Level Feed-Back Queue 는 제외해주세요.
3. Multi Level Feed-Back Queue 의 Basic Rules 를 설명하세요.
4. Baisc Rules 로 인해 발생하는 문제는 무엇이며 어떻게 해결할 수 있을까요?
5. Lottery Scheduling 과 Stride Scheduling 의 차이점은 무엇인가요?
