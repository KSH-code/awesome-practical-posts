# 알아야 되는 내용

1. Virtualizing memory 를 Paging 방식을 이용하고 별다른 캐싱을 이용하지 않을 때 발생하는 문제점은 무엇이며 이를 극복하기 위해 MMU 에 어떠한 Chip 을 이용하는지 설명해주세요.
2. File 을 실행 중일 때 해당 파일을 수정할 수 없는 이유는 무엇인가요?
3. a = a + 1 이 race condition 을 발생시키는 이유는 무엇인가요? 레지스터는 여유가 없는 상황 즉, volatile variable 임을 가정합니다.
4. semaphore 가 condition variable 이 해결하지 못하는 문제를 해결할 수 있는 상황은 무엇인가요?

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
