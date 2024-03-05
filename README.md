## 2024.03.05
- https://tech.devsisters.com/posts/cro-mysql-online-alter/
  - Online DDL을 하는 경우와는 무관한 내용들을 설명하는 거 같으나, index를 사용하는지 확인하는 것과 캐시를 어떻게 관리해야 리소스 효율적인지 설명하는 내용은 어디에서나 적용 가능하고 유익한 내용같다.
  - 핵심은 공통 캐시가 필요한 경우 적극 활용과 작성한 쿼리는 항상 explain해보는 것이다.
- https://techblog.lycorp.co.jp/ko/running-redis-at-scale
  - 글의 처음부터 끝까지 몰입하면서 읽게된 글이다. Redis와 같은 캐시 레이어는 보통 꾸준히 사용량 추적하지 않으면 사용자 입장에서는 단순히 scale-up을 선택할 수 있는데, 이를 추적하는 메트릭을 제공받는다면 너무 좋을 거 같았고, 메일로 피드백 받는 것도 인상깊었다.
  - 핵심은 공통 서비스 제공자 입장에서는 사용자들의 편리함을 위해 니즈를 잘 파악하는 것과 피드백을 잘 받는 것인거 같고, 사용자 입장에서는 주기적으로 공통 리소스 오남용하고 있는지 고민하는 것인거 같다.

## 2024.02.19
- https://aws.amazon.com/ko/blogs/tech/how-channel-talk-handles-high-volume-traffic-with-amazon-sqs/
  - 채널톡에서 Amazon SQS를 활용하여 traffic spike를 어떻게 점진적으로 개선했는지 소개합니다.
  - SQS의 내용을 예시로 소개하지만, Kafka와 같은 Queue System에서도 적용할 수 있는 내용들로 보입니다.
  - 예를 들어, 중복 제거를 위한 별도 키 추가, Distributed Lock으로써의 큐 시스템 활용, 로깅과 같은 부가적인 시스템은 별도 이벤트 스트리밍으로 분리 후 스팟 인스턴스로 비용 절감과 같은 내용입니다.

## 2024.02.16
- https://www.uber.com/en-SE/blog/uber-gc-tuning-for-improved-presto-reliability
  - https://luavis.me/server/g1-gc
  - g1gc에 대한 최적화가 필요할 때, 읽어보면 좋을 내용입니다.
  - 핵심은 어떤 곳에서 STW가 발생하는지, 어떤 이유들이 될 수 있는지를 파악하고 실험을 통해 개선하는 것입니다.
- https://toss.tech/article/cache-traffic-tip
  - 캐싱을 할 때, 발생할 수 있는 문제들에 대해 설명합니다.
  - 이외에도 떠오르는 여러 해결 책들이 있지만, 적절한 아티클을 찾지 못했습니다.
  - 그럼에도 핵심은 DB가 버틸 수 있는 트래픽을 인지하고 있기와 그것을 기반으로 트래픽을 컨트롤하는 것입니다.

## 2024.02.14
- https://ryanpark.dev/30
  - 특히 이전 작업들을 존중하자는 내용이 인상깊습니다. 내 결과도 남에게 안좋게 보일 수 있다는 것을 인지하고 겸손하자는 생각이 들었습니다.

## 2024.02.07
- https://techblog.woowahan.com/14041/
  - Elasticsearch를 직접 운영하던 환경에서 Cloud(Opensearch)로 마이그래이션 하는 과정을 설명합니다.
  - 부하테스트나 여러 인프라 세팅하는 과정을 소개해서 나중에 비슷한 작업이 진행될 때, 참고하면 도움될 거 같습니다.
- https://www.infoq.com/articles/saga-orchestration-outbox/
  - long-running business 트랜잭션을 유연하고 강력하게 구현할 수 있는 방법인 saga pattern에 대해 설명합니다.
  - Transactional Outbox Pattern, CDC(Debezium) 을 이용하고 있고, 여러 케이스에 대해 유의해야 될 사항들을 설명합니다.
  - 또한 모니터링 방법에 대한 설명까지 합니다.

## 2024.02.02
- https://plaid.com/blog/exploring-performance-differences-between-amazon-aurora-and-vanilla-mysql/
  - Aurora DB는 Primary, Secondary가 같은 Storage를 사용한다는 특징이 있습니다. 이로 인한 문제점을 설명하는 글이며, Secondary에서 long-running transaction이 발생하는 경우 Primary에서 문제가 생길 수 있는 것을 설명합니다.

## 2024.01.30
- https://suhwan.dev/2019/03/27/spring-test-context-management-and-caching/
  - 스프링 테스트 코드의 context에 대해 설명하며, 요는 MockkBean같은 것을 공통으로 적용하도록 해서 여러 개의 context를 만들지 않는 것이다.
- https://techblog.woowahan.com/15764/
  - 금칙어는 다국어가 될 수록 데이터가 많아지며 검색해야하는 양이 늘어나서 서버에 부하를 주게 됩니다. 하지만, 아호코라식 알고리즘을 활용하는 것과 글에서 설명하는 허용단어의 조합 마지막으로 숫자와 같이 우회 패턴을 정리하면 적은 작업으로도 큰 임팩트를 낼 수 있습니다.

## 2024.01.25
- https://medium.com/hongbeomi-dev/coroutines-basic-e32053f18fdf
  - 코루틴에 대한 공식 문서를 번역한 시리즈의 첫 글입니다. 현재는 코틀린 버전이 많이 올랐지만, 기초 내용은 큰 차이가 없을 거 같아 도움이 많이 되었습니다.

## 2024.01.24
- https://ridicorp.com/story/transactional-outbox-pattern-ridi/
  - Transactional Outbox Pattern 은 여러 개의 서비스의 데이터를 유기적으로 수정해야 되는 경우 필수처럼 활용되고 있습니다. 위 글은 Transactional Outbox Pattern 의 간단한 구현과 모니터링 방법에 대해 설명합니다.
  - https://microservices.io/patterns/data/transactional-outbox.html 를 참고하면 좋습니다.
- https://www.mongodb.com/blog/post/performance-best-practices-transactions-and-read-write-concerns
  - MongoDB 의 Transaction 및 Write/Read concern 에 대해 설명하는 글입니다. 대부분의 RDB와 마찬가지로 Transaction 의 실행시간을 짧으면 짧을수록 좋고, 수행되는 operation 도 적으면 좋다는 것을 설명합니다.
  - Write/Read Concern 들은 당연하게도 상황에 맞게 사용해야 되는 것을 안내하고 있습니다만 여러 옵션들에 대해 설명합니다.

## 2024.01.09
- https://techblog.woowahan.com/15236/
  - 장애 전파를 막기 위해 기존 결제 수단을 차단하는 방법이 제공되고 있고, 여러 팀에 slack workflow를 통해 정해진 양식으로 긴급 상황을 전파하는 것이 기억에 남는다.
  - 외부 업체에 API를 통해 status를 감지할 수 있는 통로 만드는 것도 설명되어 있는데, 이런 요청은 나도 언젠가 필요할 거 같다.
- https://dev.mysql.com/doc/refman/5.7/en/insert-optimization.html
  - https://www.happyjung.com/lecture/3145?sca=MySQL
  - bulk_insert_buffer_size 에 대한 내용을 찾다가 발견한 글 들인데, 나중에 큰 데이터를 insert할 때 참고할 만 하겠다.

## 2024.01.05
- https://blog.lastmind.io/archives/981
  - 아마존의 Debate, Disagree & Commit 의 내용이 생각나는 글이다. 여러 번 부탁하는 것은 여러 환경으로 인해 일이 잘 진행되지 않는 것을 의미하는데, 내가 생각했을 때의 좋은 결론은 논의를 결론내고 (어떤 방향으로 가든) 결과를 내는 것이다. 그 과정에서 disagree & commit이 필요해질 수 있는 것이다.
  - https://brunch.co.kr/@chuchupie/21
- https://blog.lastmind.io/archives/992
  - 글의 내용과는 살짝 다를 수 있지만, 규칙이 점점 많아지는 상황을 목격했던 적이 있다. 규칙은 복잡도를 증가시키고 환경을 경직시키는 경향이 있다고 생각한다.
  - 그래서 규칙을 없애는 것에 집중을 했었는데, 문득 그 때가 생각났다. 과연 많은 규칙이 좋을까? 규칙이 없어도 잘 진행되는 시스템이 중요하다고 본다.
- https://blog.lastmind.io/archives/593
  - 드라이퍼스 모델을 보며 든 생각은 해당 모델에서 설명하는 각 단계가 어떤 것인지를 아는 것도 좋지만, 결국은 본질적으로 모델이 어떤 것이든 현재의 상황보다 더 나은 다음 단계를 위해 어떤 것들이 필요한지 인지하고 훈련하는지 인 거 같다.

## 2024.01.14
- https://news.hada.io/topic?id=12683

open ai 매출이 벌써 연 2조라고 하네요.

- https://medium.com/idus-tech/kubernetes-pod-resources-cpu-limit-40626a4c235e

kubernetes의 cpu설정을 여러 케이스로 해서 개선하는 내용을 소개합니다.
레퍼런스들 까지 보면 도움이 많이 될 거 같아서 읽는 것을 추천합니다.

- https://medium.com/wantedjobs/%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81-%ED%94[…]C%A9%ED%8A%B8-%EC%82%B0%EC%A0%95%ED%95%98%EA%B8%B0-cfc2bf8574eb

엔지니어링 비용을 원화로 환산하는데, 임팩트를 산출하는 과정이 인상적입니다.

- https://sigridjin.medium.com/%EB%A7%88%ED%8B%B4-%ED%8C%8C%EC%9A%B8%EB%9F%AC%EA%B0%80-%E[…]EB%94%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-2077b894d5e3

마틴파울러 아저씨가 프롬프트 엔지니어링을 어떻게 하는지 설명하는 글입니다.
정답을 바로 알기 보다는, 문제 해결 과정을 같이 하는 것이 인상적이네요.

## 2023.
- https://sangminpark.blog/2017/06/21/%ec%bd%94%eb%94%a9-%ec%9d%b8%ed%84%b0%eb%b7%b0-part-4/
- https://devocean.sk.com/blog/techBoardDetail.do?ID=165557&boardType=techBlog
- https://tech.kakaopay.com/post/improve-service-performance/
- https://techblog.woowahan.com/14874/
- https://netmarble.engineering/jdbc-timeout-for-game-server/
- https://lawsofux.com/
- https://lawsofux.com/articles/2020/ux-psychology-google-search/
- https://www.cockroachlabs.com/blog/relational-database-entities/
- https://medium.com/29cm/%ED%91%B8%EC%8B%9C-%ED%81%B4%EB%A6%AD%EC%9C%A8-6%EB%B0%B0%EB%A5%BC-%EB%A7%8C%EB%93%A0-%EA%B3%A0%EA%B0%9D%EC%A7%91%EC%A4%91-2811bf0a15c7
- https://techblog.woowahan.com/13429/
- https://techblog.woowahan.com/13726/
- https://vladmihalcea.com/hide-jpa-entity-identifier/
- https://vladmihalcea.com/clustered-index/
- https://www.percona.com/blog/tuning-innodb-primary-keys/
- https://blogs.oracle.com/mysql/post/introducing-mysql-innovation-and-longterm-support-lts-versions
- https://tech.kakaopay.com/post/mock-test-code-part-2/
- https://www.baeldung.com/jvm-zgc-garbage-collector
- https://d2.naver.com/helloworld/0128759
- https://www.whatap.io/ko/blog/57/
- https://johngrib.github.io/wiki/java/gc/zgc/
- https://medium.com/paypal-tech/graphql-resolvers-best-practices-cd36fdbcef55
- https://medium.com/paypal-tech/graphql-a-success-story-for-paypal-checkout-3482f724fb53
- https://dzone.com/articles/why-and-when-to-use-graphql-1
- https://tech.kakaopay.com/post/kakaopay-growth-platform-abtest/
- https://blog.daftcode.pl/hype-driven-development-3469fc2e9b22
- https://netflixtechblog.com/seeing-through-hardware-counters-a-journey-to-threefold-performance-increase-2721924a2822
- https://tech.kakao.com/2016/04/07/innodb-adaptive-hash-index/
- https://debezium.io/blog/2019/10/01/audit-logs-with-change-data-capture-and-stream-processing/
- https://www.uber.com/en-SE/blog/mysql-to-myrocks-migration-in-uber-distributed-datastores/
- https://engineering.fb.com/2016/08/31/core-data/myrocks-a-space-and-write-optimized-mysql-database/
- https://aws.amazon.com/ko/blogs/database/increase-write-throughput-on-amazon-rds-for-mariadb-using-the-myrocks-storage-engine/
- https://jacking75.github.io/db-0524/
- https://jacking75.github.io/tech_20220414/
- https://www.mimul.com/blog/go-vs-java-thread/
- https://blog.devgenius.io/system-design-blueprint-the-ultimate-guide-e27b914bf8f1
- https://betterprogramming.pub/decoupling-a-core-service-from-your-monolith-the-right-way-ffa6b8e05f5c
- https://netflixtechblog.com/migrating-critical-traffic-at-scale-with-no-downtime-part-1-ba1c7a1c7835
- https://tech.kakaopay.com/post/martin-dev-honey-tip-2/
- https://www.scylladb.com/2022/06/30/preventing-data-resurrection-with-repair-based-tombstone-garbage-collection/
- https://discord.com/blog/how-discord-stores-billions-of-messages
- https://discord.com/blog/how-discord-maintains-performance-while-adding-features
- https://slack.engineering/a-faster-smarter-quick-switcher/
- https://university.scylladb.com/courses/data-modeling/lessons/basic-data-modeling-2/topic/primary-key-partition-key-clustering-key-part-two/
- https://dev.gmarket.com/46
- https://helloworld.kurly.com/blog/distributed-redisson-lock/
- https://medium.com/@RamLakshmanan/jvm-c1-c2-compiler-thread-high-cpu-consumption-b99acc604f1d
- https://hudi.blog/jvm-warm-up
- https://engineering.linecorp.com/ko/blog/reactive-streams-with-armeria-1
- https://engineering.linecorp.com/ko/blog/how-line-openchat-server-handles-extreme-traffic-spikes
- https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/
- https://world.hey.com/dhh/don-t-be-fooled-by-serverless-776cd730
- https://dev.mysql.com/blog-archive/contention-aware-transaction-scheduling-arriving-in-innodb-to-boost-performance/

## 2022.02.21. ~

### Testing
- [Smoke Testing](https://www.guru99.com/smoke-testing.html)

### Technique
- [BloomFilter](https://www.youtube.com/watch?v=V3pzxngeLqw)

### Principle
- https://www.chromium.org/developers/core-principles/

### Web
- https://chromium.googlesource.com/chromium/src/+/main/docs/idn.md

### Analytics
- https://understandlegacycode.com/blog/demine-codebase-with-exploratory-refactoring/
- https://css-tricks.com/send-an-http-request-on-page-exit/
- https://nickcraver.com/blog/2013/11/22/what-it-takes-to-run-stack-overflow/

### Ruby
- https://www.reddit.com/r/rails/comments/txny1b/what_are_the_best_resources_out_there_to_learn/
- https://nts.strzibny.name/gem-compare-1.0/

### Project
- https://www.atlassian.com/blog/productivity/how-to-write-smart-goals

### Web Accessibility
- https://www.craigabbott.co.uk/blog/using-the-language-attribute-to-make-your-website-accessible

## 2022.01.07. ~

### Security
- https://incolumitas.com/2016/06/08/typosquatting-package-managers/
- https://shopify.engineering/fixing-dependency-confusion-ruby-applications

### Test
- https://testing.googleblog.com/2021/04/mutation-testing.html
- https://testing.googleblog.com/2021/06/how-much-testing-is-enough.html

### Interview
- https://www.quora.com/What-is-the-hardest-thing-about-hiring-programmers/answer/John-Byrd-2?ch=10&oid=70250852&share=975c4ec0&target_type=answer

### Event Streaming
- https://itnext.io/contrasting-nats-with-apache-kafka-1d3bdb9aa767

### Scaling Productivity
- https://eng.lyft.com/scaling-productivity-on-microservices-at-lyft-part-1-a2f5d9a77813
- https://eng.lyft.com/scaling-productivity-on-microservices-at-lyft-part-2-optimizing-for-fast-local-development-9f27a98b47ee

### Ruby
- https://www.speedshop.co/2020/05/11/the-ruby-gvl-and-scaling.html
- https://www.bootrails.com/blog/ruby-strftime-short-and-long-story/

### Front-end
- https://joshcollinsworth.com/blog/introducing-svelte-comparing-with-react-vue

### Css
- https://www.aleksandrhovhannisyan.com/blog/writing-better-css/
- https://web.dev/css-is-and-where/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

## 2021.11.01. ~

### Rails Tips
- https://macarthur.me/posts/conditionally-rendering-templates-in-rails
- https://www.hexdevs.com/posts/learn-ruby-best-practices-with-one-exercise/
- https://rubyreferences.github.io/rubychanges/3.0.html
- about update
  - https://www.ruby-lang.org/en/news/2021/12/25/ruby-3-1-0-released/
  - https://gettalong.org/blog/2021/benchmarking-rubies.html
  - https://twitter.com/yahonda/status/1474289305158053893?t=o0YoDiudxQo5XntX7XWHGw&s=19
- csv
  - https://simpl1g.medium.com/handling-big-data-in-ruby-405111397d28

### Distributed System
- https://aws.amazon.com/builders-library/avoiding-fallback-in-distributed-systems/
- https://medium.com/google-cloud/understand-cloud-load-balancer-like-a-senior-engineer-d4f55f3111fc
- https://zonito.medium.com/everything-about-load-balancer-with-cheat-sheet-64b351f0f7b3

### Performance
- https://brunosutic.com/blog/async-ruby
- https://blog.peterzhu.ca/ruby-memcheck/
- https://instagram-engineering.com/dismissing-python-garbage-collection-at-instagram-4dca40b29172

### Inspection
- https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/
- https://developer.chrome.com/docs/devtools/recorder/
- https://www.hexdevs.com/posts/code-quality-ruby-on-rails/#rails-code-quality-checklist

### Upgrade
- https://engineering.skroutz.gr/blog/monolith-diaries-upgrading-rails/#working-for-the-upgrade

### Etc
- https://dev.to/vitaliipaprotskyi/what-does-class-self-actually-do-in-ruby-2on1
- https://betterprogramming.pub/avoiding-premature-software-abstractions-8ba2e990930a
- https://www.figma.com/blog/realtime-editing-of-ordered-sequences/
- https://v8.dev/features/top-level-await
- https://daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner/
- https://daedtech.com/how-software-groups-rot-legacy-of-the-expert-beginner/
- https://blog.codinghorror.com/we-hire-the-best-just-like-everyone-else/
- https://csstracking.dev/
- https://nystudio107.com/blog/the-css-background-image-property-as-an-anti-pattern

## 2021.09.01. ~
- https://nakabonne.dev/posts/depth-of-module/

### Ruby upgrade guide
- https://juanitofatas.com/ruby-3-keyword-arguments

### Tips for PS
- https://codeforces.com/blog/entry/57729

### Rewrite legacy systems with no downtime
- https://shopify.engineering/how-shopify-reduced-storefront-response-times-rewrite

### Caching strategy
- https://shopify.engineering/shop-app-custom-caching-solution

### SOLID
- https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html
- https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start

### Maximize developer productivity
- https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity
- https://shopify.engineering/shopify-monolith
- https://thoughtbot.com/blog/rubocop-custom-cops-for-custom-needs

### Rails upgrade guide
- https://shopify.engineering/upgrading-shopify-to-rails-5-0
- https://shopify.engineering/living-on-the-edge-of-rails

### Ruby internals
- https://blog.peterzhu.ca/ruby-str-mem-leak/

### Code smell
- https://www.codewithjason.com/bloated-rails-active-record-models/
- https://www.codewithjason.com/used-intelligently-rails-concerns-great/
- https://signalvnoise.com/posts/3372-put-chubby-models-on-a-diet-with-concerns

### To optimize performance for analytics
- https://towardsdatascience.com/stop-using-csvs-for-storage-this-file-format-is-150-times-faster-158bd322074e

### Software Test
- https://www.guru99.com/mutation-testing.html

### Package Design Principle
- https://devlead.io/DevTips/StableDependenciesPrinciple
- https://ganghee-lee.tistory.com/21

### Software Architecture
- https://karandhillon95.medium.com/the-morning-after-syndrome-4e49096156ed
- http://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html

### Philosophy of Software Design Series
- https://csruiliu.github.io/blog/20201115-a-philosophy-of-software-design-I/
- https://csruiliu.github.io/blog/20201218-a-philosophy-of-software-design-II/
- https://csruiliu.github.io/blog/20201221-a-philosophy-of-software-design-III/
- https://csruiliu.github.io/blog/20201222-a-philosophy-of-software-design-IV/

## 2021.07.27. ~
- https://azeynalli1990.medium.com/software-architecture-cheat-sheet-for-daily-usage-9923922ea75b
- https://eng.uber.com/postgres-to-mysql-migration/
- https://semaphoreci.com/blog/what-is-canary-deployment
- https://www.mail-archive.com/sqlite-users@mailinglists.sqlite.org/msg86235.html
- https://www.codeproject.com/Tips/1080308/An-Introduction-to-Integer-Compression
- https://www.nngroup.com/articles/response-times-3-important-limits/
- https://sorbet.org/blog/2021/07/30/open-sourcing-sorbet-compiler
- https://blog.nelhage.com/post/reflections-on-performance/
- https://mysqlserverteam.com/mysql-8-0-retiring-support-for-the-query-cache/
- https://www.mongodb.com/blog/post/what-about-durability
- https://en.wikipedia.org/wiki/CAP_theorem
- https://codahale.com/you-cant-sacrifice-partition-tolerance/
- https://www.programmersought.com/article/97893470229/
- https://debugged.it/blog/cap-theorem/
- https://mariadb.com/kb/en/query-cache/#limitations
- https://www.logianalytics.com/5-benefits-3-tier-architecture/
- https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/
- https://stackoverflow.com/a/59637676
- http://codebetter.com/gregyoung/2010/02/16/cqrs-task-based-uis-event-sourcing-agh
- https://martinfowler.com/bliki/CQRS.html
- https://markgreville.ie/2021/07/23/technical-debt-is-not-debt-its-not-even-technical
- https://nl.devoteam.com/expert-view/monitoring-driven-development-are-you-making-money
- https://world.hey.com/jorge/making-rails-run-just-a-few-tests-faster-2c82dc4b
- https://www.bigbinary.com/blog/rails-6-adds-parallel-testing


## 2021.07.15. ~
- https://gungor.github.io/article/2021/05/02/tdd-outsidein-vs-insideout.html
- https://betterprogramming.pub/the-art-of-choosing-the-right-index-in-mysql-968461bcabe8
- https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91
- https://medium.com/airbnb-engineering/building-an-inclusive-codebase-bbaa2315e5b8
- https://semaphoreci.com/community/tutorials/applying-bdd-to-ruby-on-rails-web-applications
- https://github.blog/2018-09-28-upgrading-github-from-rails-3-2-to-5-2/
- https://medium.com/paypal-tech/pre-mortem-technically-working-backwards-1724eafbba02

## 2021.07.15.
- Too many articles I read so far so I can't sum-up. I just share now.
- https://blog.saeloun.com/2020/02/10/rails-support-for-if_exists-if_not_exists-on-remove_column-add_column-in-migrations
- https://guides.rubyonrails.org/6_1_release_notes.html
- https://brilliant.org/wiki/cuckoo-filter/
- https://tech.flipkart.com/remodelling-flipkarts-serviceability-data-an-optimization-journey-from-300-gb-to-150-mb-in-memory-5c7e9c38bde
- https://medium.com/building-panorama-education/introducing-memowise-51a5f0523489
- https://www.bugsnag.com/blog/app-stability-overview-dashboard
- https://blog.appsignal.com/category/rails-patterns-and-anti-patterns.html
- https://longliveruby.com/articles/includes-method-in-rails
- https://betterprogramming.pub/why-github-copilot-will-not-change-programming-1bef41f35f6d
- https://developer.chrome.com/blog/renderingng/
- https://levelup.gitconnected.com/how-to-design-a-system-to-scale-to-your-first-100-million-users-4450a2f9703d
- https://medium.com/opendoor-labs/how-we-made-our-maps-10x-faster-e2fa1eaebc65
- https://web.dev/learn/css/
- https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction
- https://blog.kiprosh.com/rails-7-activerecord-relation-load_async/
- https://betterprogramming.pub/what-would-be-stack-overflows-future-after-this-1-8b-acquisition-607f50759699
- https://www.computerminds.co.uk/articles/class-naming-javascript-development-drupal
- https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html
- https://blog.close.com/saas-startups-why-your-free-trials-are-way-too-long/
- https://towardsdatascience.com/gpt-3-scared-you-meet-wu-dao-2-0-a-monster-of-1-75-trillion-parameters-832cd83db484
- https://dev.to/pragativerma18/confusing-terms-in-the-git-terminology-1578
- https://www.reddit.com/r/ruby/comments/nqlywb/yjit_building_a_new_jit_compiler_inside_cruby/
- https://semver.org/
- https://medium.com/google-developer-experts/how-to-pull-request-d75ac81449a5
- https://javascript.plainenglish.io/9-hidden-features-of-chrome-devtools-78856b2a96de
- https://www.bigbinary.com/blog/rails-6-1-adds-invert_where
- and so on..

## 2021.05.31.

- [What Is MJIT in Ruby 2.6 & How Does It Work?](https://www.rubyguides.com/2018/11/ruby-mjit/)
  - It explains that MJIT is method based just in time compiler as simple.
  - [A look at how Ruby interprets your code](https://blog.appsignal.com/2017/08/01/ruby-magic-code-interpretation.html)
    - If you do not know about MJIT how it works, read this first. and you are into optimization, next up is [Tail Call Optimization in Ruby](https://nithinbekal.com/posts/ruby-tco/)
      - TCO is really intersting to me.
      - If you are intersted in algorithm problems, you may know TCO, is because stack overflow is occured in many recursion problems.
  - Get back to MJIT, Koichi Sasada's report is intersting "YARV: Yet Another RubyVM". I don't know its copyright so I just share the title.
  - Finally, we should know about MJIT. So what?
  - The real important thing is Ruby may not be used without any library such as Rails.
  - Ultimately, I was wondering if Ruby uses JIT, then RoR performance is better than that without JIT.
  - [Ruby 3 JIT can make Rails faster](https://k0kubun.medium.com/ruby-3-jit-can-make-rails-faster-756310f235a) Here is helper to solve my problem.
  - My conclusion is that we should not use RoR with JIT yet. Because it is unstable. However I think that metric of method usage would be better that it without JIT in the future.

## 2021.04.29.

- [Flaky Tests at Google and How We Mitigate Them](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html)
  - Most of developers will probabaly be facing flaky test.
  - this is about google's story that how they migrate.
  - it is saying that system to monitor and for fast solve are important.
- [Test Flakiness - One of the main challenges of automated testing](https://testing.googleblog.com/2020/12/test-flakiness-one-of-main-challenges.html)
  - following post is saying about flaky causes.
- [Test Flakiness - One of the main challenges of automated testing (Part II)](https://testing.googleblog.com/2021/03/test-flakiness-one-of-main-challenges.html)
  - in now, last following post, is saying flaky causes.
  - how to solve that and suggest guidelines.

## 2021.04.08.

- [Beware of “service objects” in Rails](https://www.codewithjason.com/rails-service-objects/)
  - today, I did not read articles about GC. but I was interested in.
  - because I misbelieve service object in Rails, as you know too many classes created.
  - to break down fat model is good for readability. but too many files incur similar problems.
  - anyway, it says service object is not solution.
  - and include good links to understand background.
  - [Don't Create Objects That End With -ER](https://www.yegor256.com/2015/03/09/objects-end-with-er.html)
  - [AnemicDomainModel](https://martinfowler.com/bliki/AnemicDomainModel.html)
    - I used to be hard to understand this. because of unfarmiliar terms.
    - but the point is like service object is bad one.
  - [Enough With the Service Objects Already](https://avdi.codes/service-objects/)
  - [Martin Fowler on Service Objects via the Ruby Rogues Parley mailing list](https://gist.github.com/blaix/5764401)
  - [How I code without service objects](https://www.codewithjason.com/code-without-service-objects/)
  - [What is a Rails model?](https://www.codewithjason.com/what-is-a-rails-model/)
  - too long, I can not sum-up.

## 2021.04.04.

- [Ruby Garbage Collection Deep Dive: Generational Garbage Collection](https://jemma.dev/blog/gc-generational)
  - Again, this is saying GC.
  - It explains GC generational such as young object and old object. I've not heared ever.
  - Anyway, that also include many terms be good.
  - I've understood what Minor GC is and Major GC is. However I want to know write barriers how actully works.
  - so I did surf using many terms to know it. and finally I found [Peter's Adventures in Ruby: Garbage Collection in Ruby](https://blog.peterzhu.ca/notes-on-ruby-gc/).
  - intersting! this explains a little about compaction and write barriers in detail. and also include another article [Incremental Garbage Collection in Ruby 2.2](https://blog.heroku.com/incremental-gc).
  - sum-up, the first article is to summerize about GC, and the second article explains GC in detail using GC and many figures. the final article explains.
  - the next step is reading [Copying Garbage Collection](https://www.cs.cornell.edu/courses/cs312/2003fa/lectures/sec24.htm) and understanding ruby GC.start how works.

## 2021.03.22.

- [Ruby Garbage Collection Deep Dive: GC::INTERNAL_CONSTANTS](https://jemma.dev/blog/gc-internal)
  - Technically, I don't think it that is saying as deep. but it is helpful to understand how GC works in basic.
  - In this post, also has good link [Visualizing Your Ruby Heap](https://tenderlovemaking.com/2017/09/27/visualizing-your-ruby-heap.html).
    - It says Ruby is using page address and its position. it is same idea OS how to manage memory.
    - so I remind that I have learned about OS. and I realize why Ruby uses HEAP_PAGE_OBJ_LIMIT as 409.
  - Finally, I can read [Ruby Garbage Collection Deep Dive: Tri-Color Mark and Sweep](https://jemma.dev/blog/gc-mark-and-sweep).
  - so those are not actul helpful coding technique now. but I think that are helpful in the future when I learn new technique.

## 2021.03.05.

- [What does the other user using Ruby thinks of harder test](https://anthonysciamanna.com/2016/02/14/should-private-methods-be-tested.html)
  - Private method tested means to be complicated software and might be violated SRP. It says that to solve method is refactoring. But test would then be test still complicated. Hence says again that could be solved by stub or mock.
  - By the way, it may make following question. What are stub and mock? so is it appropriate solution? and in TDD can use that? does?
  - Martin Fowler(a.k.a Unkle Bob) introduces [what is the unit test?](https://martinfowler.com/bliki/UnitTest.html) and differences between [classical testing and mockist testing](https://martinfowler.com/articles/mocksArentStubs.html).
    - It is helpful to understand that to use mock and stub might be appropriate in TDD.
    - What I'm saying is that in tranditional TDD, test is only concerned about input and output. However to use stub and mock means that test code knows how such implemented. But mockist testing is allowed mock and stub in test code since unit test must be isolated.
    - So, How am I supposed to choose? my answer is that it depends on.

## 2021.02.01.

- [Ruby on Rails about Predicate](https://github.com/rails/rails/pull/5329)
  - [Further article](https://github.com/rails/rails/commit/3756a3fdfe8d339a53bf347487342f93fd9e1edb)
  - It does not post. but it is important to think what rails core developers' think.
  - And make a deep think predicate methods.
  - [Official Ruby FAQ](https://www.ruby-lang.org/en/documentation/faq/6/)
    - However, this post says predicate methods can return true or false. so I'm confused now.
    - Finally, I've realized good to use predicate method'd be return only true and false because of usability and for documenting. as you know nil is unexpected value.

## 2021.01.13.

- [Mocking in Ruby with Minitest](https://semaphoreci.com/community/tutorials/mocking-in-ruby-with-minitest)
  - You guys know what the test doubles are? If no, this post explains simple examples.
  - [Behavior-driven Development](https://semaphoreci.com/community/tutorials/behavior-driven-development)
    - If you are intersted in to improve test code, would be good to read along with it. I recommend.

## 2021.01.07.

- [How Can We Measure Our Software’s Modularity and Dependencies?](https://medium.com/better-programming/inside-software-modularity-and-related-metrics-2e5af2b447dc)
  - It makes me to think about modularity via discrete mathematics.
  - Since cohesive and coupling are important to maintain, I should use method that explaind by post.
- [Microservices Architecture From A to Z](https://medium.com/swlh/microservices-architecture-from-a-to-z-7287da1c5d28)
  - Microservice architecture is one of the most shared techinique and hot nowdays maybe.
  - The post explains how to use simple and detail.

## Before

### Ruby

- [JIT and Ruby's MJIT](https://engineering.appfolio.com/appfolio-engineering/2019/7/18/jit-and-rubys-mjit)
  - Simple introduction how ruby implemenets JIT. More details are going to be explained another link.
- [Ruby 3 is released - The list of Ruby 3 features](https://bigbinary.com/blog/ruby-3-features)
  - Ruby 3 was released and introduced new features.
- [MJIT Support in Ruby 2.6](https://bigbinary.com/blog/mjit-support-in-ruby-2-6)
  - Since ruby 2.6, it supports MJIT which is called JIT. JIT of Ruby is too important to optimmize.
- [Hidden cost of string indexing in Ruby](https://www.greyblake.com/blog/2020-12-21-hidden-cost-of-string-indexing-in-ruby/)
  - Actually, ruby is not always O(1) to use index of string.
- [Refactoring checklist for beautiful Ruby code](https://dev.to/junko911/refactoring-checklist-for-beautiful-ruby-code-175c)
- [Encapsulating Ruby on Rails views](https://github.blog/2020-12-15-encapsulating-ruby-on-rails-views/)
- [The Evolution of Ruby Strings from 1.8 to 2.7](https://medium.com/rubycademy/the-evolution-of-ruby-strings-from-1-8-to-2-5-8b2ed8f39fad)
- [Fun with Ruby method argument defaults](https://zverok.github.io/blog/2020-11-19-arg_defaults.html)
- [Peter's Adventures in Ruby: The Ruby inplace bug](https://blog.peterzhu.ca/ruby-inplace-bug/)
- [Currency Calculations in Ruby](https://www.honeybadger.io/blog/ruby-currency/)
- [Rails 6.1 deprecates rails db:structure:dump and rails db:structure:load](https://blog.bigbinary.com/2020/09/22/rails-6-1-deprecates-rails-db-structure-dump.html)
- [Ruby 2.8 adds endless method definition](https://blog.bigbinary.com/2020/09/15/ruby-2-8-adds-endless-method-definition.html)

### JS

- [JavaScript Interview Questions: Functions](https://codeburst.io/javascript-interview-questions-functions-5a3081c1f3f5)
- [npm vs Yarn — Choosing the right package manager](https://medium.com/javascript-in-plain-english/npm-vs-yarn-choosing-the-right-package-manager-a5f04256a93f)
- [JavaScript Under The Hood Pt. 4: Bind(), Call(), and Apply()](https://codeburst.io/javascript-under-the-hood-pt-4-bind-call-and-apply-22e2b46b3882)
- [Avoid These Common JavaScript Mistakes](https://codeburst.io/avoid-these-common-javascript-mistakes-11f5311c9ec3)
  - Basic of JS.
- [Maintainable JavaScript — Throwing Errors](https://medium.com/dev-genius/maintainable-javascript-throwing-errors-e6c2ccf90c71)
  - How to throw error.
  - Need to know what the difference between exception and unexcpected situation.
- [4 Reasons to Avoid Using Array.reduce](https://medium.com/better-programming/think-again-before-you-use-array-reduce-28f785b5aea9)
  - Explain how to use Array.reduce clarify
- [Frameworks will never be as fast as Vanilla JavaScript](https://medium.com/javascript-in-plain-english/javascript-frameworks-performance-60f71d321693)
  - Explain why Vanilla JS has not been used alone.

### Architecture

- [Avoiding Double Payments in a Distributed Payments System](https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb)
  - Using idempotency key which idea is good solution for me now. and to seperate internal logics into three phases using RPC is good. isn't it?
- [System Design 101](https://towardsdatascience.com/system-design-101-b8f15162ef7c)
  - This article makes me to remind what is the important things construct architecture such as network bandwidth and etc..
- [You Aren’t Gonna Need Microservices](https://blog.ttulka.com/you-are-not-gonna-need-microservices)
  - Explain why modern architecture does not need MSA with YANGI.
- [Microservice Architecture — Communication & Design Patterns](https://medium.com/dev-genius/microservice-architecture-communication-design-patterns-70b37beec294)
- [Everything A Developer Must Know About Microservices](https://medium.com/dev-genius/everything-a-developer-must-know-about-microservices-dae854782ab)

  - SDLC: Software Development Life Cycle
  - [SOA vs. MSA](https://www.ibm.com/cloud/blog/soa-vs-microservices)
  - [ESB](https://www.ibm.com/cloud/learn/esb)
  - [SOAP](https://www.redhat.com/ko/topics/integration/whats-the-difference-between-soap-rest)
    - [Security](https://www.redhat.com/ko/topics/security/api-security)

- [Modern-Day Architecture Design Patterns for Software Professionals](https://medium.com/better-programming/modern-day-architecture-design-patterns-for-software-professionals-9056ee1ed977)

### Data Science

- [Understanding ReLU: The Most Popular Activation Function in 5 Minutes!](https://towardsdatascience.com/understanding-relu-the-most-popular-activation-function-in-5-minutes-459e3a2124f)
  - Pros and Cons of ReLU
- [Backpropagation paper from scratch](https://towardsdatascience.com/backpropagation-paper-from-scratch-796793789248)
  - The post generalizes backpropagation using delta rule.
- [The Facebook Data Engineer Interview](https://towardsdatascience.com/the-facebook-data-engineer-interview-345235afaac0)
- [Understanding Markov Chains and Stationary Distribution](https://www.reddit.com/r/learnmachinelearning/comments/jhtbqk/understanding_markov_chains_and_stationary)

### Basic CS

- Parallelism
  - [Wikipedia Green Thread](https://en.wikipedia.org/wiki/Green_threads)
  - [D langauge fiber explanation](https://tour.dlang.org/tour/kr/multithreading/fibers)
  - [Ruby fiber explanation](https://weicomes.tistory.com/100)
  - [Wikipedia Coroutine](https://en.wikipedia.org/wiki/Coroutine#Implementations_for_Scala)

### Refactoring

- [소프트웨어 개발 3대 원칙 : KISS, YAGNI, DRY](https://m.blog.naver.com/PostView.nhn?blogId=complusblog&logNo=221163007357)
  - Korean post is 3 principles of software development.
- [5 Rules to Improve Code Readability](https://medium.com/better-programming/5-rules-to-improve-code-readability-83eda50ca780)
  - All of posts about refactoring are going to be read.
- [4 Principles When Refactoring Your Functions](https://medium.com/better-programming/4-principles-when-refactoring-your-functions-81ce7f365e6d)
  - Four princples when refactoring, but real technology is complicate. so we need to select method empirically.
- [50 Quotes for Better Coding](https://codeburst.io/50-quotes-for-better-coding-76bdac3fc234)
- [6 Tips to Improve Your Conditional Statements for Better Readability](https://medium.com/javascript-in-plain-english/6-tips-to-improve-your-conditional-statements-for-better-readability-56256c5a5245)
  - The post explains I naturally use method of refactoring if..elsif
- [Software Architectural Thinking for Developers [Part 1]](https://dev.to/edisonnpebojot/software-architectural-thinking-for-developers-part-1-2a34)
  - In my opinion, I don't know what he's saying but it was intersting.

### Web

- [Prevent unnecessary network requests with the HTTP Cache](https://web.dev/http-cache/)
  - Basic ways to optimize http request cost.
- [Back/forward cache](https://web.dev/bfcache/#optimize-your-pages-for-bfcache)
  - Bfcache is important for usability. it explains how to use bfcache simple.
- [Detached window memory leaks](https://web.dev/detached-window-memory-leaks/)
  - Intersting things of Vaninlla JS about memory leak occurs.
- [How to View Your Live Localhost From Your Laptop on Your Mobile Device](dev.to/brendamichellle/how-to-view-your-localhost-from-your-laptop-on-your-mobile-device-516c)
  - Easy way to test mobile web using local server on VSCode.
- [Goodbye Nginx, hello Caddy](https://blog.bigbinary.com/2020/09/22/rails-6-1-deprecates-rails-db-structure-dump.html)
  - [Caddy vs. Nginx](https://stackshare.io/stackups/caddy-vs-nginx) summary: performanec or usability.

### Others

- [MVC vs MVP vs MVVM](https://levelup.gitconnected.com/mvc-vs-mvp-vs-mvvm-35e0d4b933b4)
  - The fun fact is most application codes do not use that clear. so just to know what that mean is not important.
- [Web Developers Outlook](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm#tab-6)
  - From 2019 to 2029, employing web developer will be grwoing 8 percents.
- [The XY Problem](https://xyproblem.info/)
  - How to question a problem clear.
- [THERE'S ALWAYS MORE HISTORY](https://www.hillelwayne.com/post/always-more-history)
  - Deep dive into the funny histories.
- [3 Books to Improve Your Coding Skills](https://medium.com/better-programming/3-books-to-improve-your-coding-skills-afa67621192)
  - Recommended books about Algoirthm, Engineering and Functional Thinking
- [5 Signs of a Senior Developer](https://levelup.gitconnected.com/5-signs-of-a-senior-developer-7f5c59093c73)
  - The difference between senior developer and junior developer.

### [이전 문서](archive/README.md)
