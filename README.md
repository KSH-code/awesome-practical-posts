# 목적

- 2020.11.22. 목적이 완전히 변경되어 내가 읽은 글들을 한 줄 요약해서 정리해서 공유, 기본적인 글부터 현업에서 사용되는 기술들도 포함될 예정이라 다양한 분야를 접해볼 수 있을 것으로 추측
- 두 번째 변경 목적: 내가 면접관이라면 할만한 질문들, 전공자들이 수업에서 배우는 내용들을 정리해서 공유
- 첫 번째 생성 목적: 내가 직접 면접을 보며 받은 질문 및 질문으로 낼만한 질문들을 정리해서 공유

## Ruby

- [Refactoring checklist for beautiful Ruby code](https://dev.to/junko911/refactoring-checklist-for-beautiful-ruby-code-175c)
  - 루비의 기본적인 다른 언어들과는 다른 문법 이용해서 리팩토링하는 방법 소개
- [Encapsulating Ruby on Rails views](https://github.blog/2020-12-15-encapsulating-ruby-on-rails-views/)
  - 깃허브가 어떻게 Ruby on Rails 를 이용하며 view test 를 했는가? 와 레일즈 버전 변경에 대한 소개
- [The Evolution of Ruby Strings from 1.8 to 2.7](https://medium.com/rubycademy/the-evolution-of-ruby-strings-from-1-8-to-2-5-8b2ed8f39fad)
  - 루비 문자열의 변천사
- [Fun with Ruby method argument defaults](https://zverok.github.io/blog/2020-11-19-arg_defaults.html)
  - default argument 를 활용할 수 있는 다양한 사례 소개
- [Peter's Adventures in Ruby: The Ruby inplace bug](https://blog.peterzhu.ca/ruby-inplace-bug/)
  - 루비의 문자열 inplace change 에 대한 버그가 있었는데 고친 내용
  - 루비가 어떻게 동작하는지 잘 이해하지 못해서 잘 이해하지 못했다.
- [Currency Calculations in Ruby](https://www.honeybadger.io/blog/ruby-currency/)
  - 실제 수와 통화에는 오차가 있으니 이를 해결하는 여러가지의 방법을 소개한다.
- [Rails 6.1 deprecates rails db:structure:dump and rails db:structure:load](https://blog.bigbinary.com/2020/09/22/rails-6-1-deprecates-rails-db-structure-dump.html)
  - 레일즈 버전하며 제거된 기능 소개
- [Ruby 2.8 adds endless method definition](https://blog.bigbinary.com/2020/09/15/ruby-2-8-adds-endless-method-definition.html)
  - Ruby 가 버전 2.8 로 되면서 생긴 문법

## JS

- [JavaScript Interview Questions: Functions](https://codeburst.io/javascript-interview-questions-functions-5a3081c1f3f5)
  - js 관련한 면접질문들, 어려움.
- [npm vs Yarn — Choosing the right package manager](https://medium.com/javascript-in-plain-english/npm-vs-yarn-choosing-the-right-package-manager-a5f04256a93f)
  - npm 과 yarn 의 차이를 소개함
  - yarn 이 좋다고 소개하는 글 같음
- [JavaScript Under The Hood Pt. 4: Bind(), Call(), and Apply()](https://codeburst.io/javascript-under-the-hood-pt-4-bind-call-and-apply-22e2b46b3882)
  - 굳이 몰라도 되는 내용들같지만 흥미로움
- [Avoid These Common JavaScript Mistakes](https://codeburst.io/avoid-these-common-javascript-mistakes-11f5311c9ec3)
  - JS 를 이해하고 사용해본 사람이라면 알아야 될 지식들
- [Maintainable JavaScript — Throwing Errors](https://medium.com/dev-genius/maintainable-javascript-throwing-errors-e6c2ccf90c71)
  - 에러를 JavaScript 에서 어떻게 throwing 하는지 설명이 있다.
  - 단순히 문법만 보는 것이 아닌 unexpected situation 에 throwing 하는 것을 이해해야 된다.
- [4 Reasons to Avoid Using Array.reduce](https://medium.com/better-programming/think-again-before-you-use-array-reduce-28f785b5aea9)
  - JavaScript 에서 reduce 는 오용되는 경우가 많은데, 이는 filter, map, forEach 등 더 적합한 메서드가 많다는 것을 소개한다.
- [Frameworks will never be as fast as Vanilla JavaScript](https://medium.com/javascript-in-plain-english/javascript-frameworks-performance-60f71d321693)
  - Vanilla JS 를 사용하지 않는 이유들에 대해 설명

## Architecture

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

## Data Science

- [Understanding ReLU: The Most Popular Activation Function in 5 Minutes!](https://towardsdatascience.com/understanding-relu-the-most-popular-activation-function-in-5-minutes-459e3a2124f)
  - Pros and Cons of ReLU
- [Backpropagation paper from scratch](https://towardsdatascience.com/backpropagation-paper-from-scratch-796793789248)
  - The post generalizes backpropagation using delta rule.
- [The Facebook Data Engineer Interview](https://towardsdatascience.com/the-facebook-data-engineer-interview-345235afaac0)
- [Understanding Markov Chains and Stationary Distribution](https://www.reddit.com/r/learnmachinelearning/comments/jhtbqk/understanding_markov_chains_and_stationary)

## Basic CS

- Parallelism
  - [Wikipedia Green Thread](https://en.wikipedia.org/wiki/Green_threads)
  - [D langauge fiber explanation](https://tour.dlang.org/tour/kr/multithreading/fibers)
  - [Ruby fiber explanation](https://weicomes.tistory.com/100)
  - [Wikipedia Coroutine](https://en.wikipedia.org/wiki/Coroutine#Implementations_for_Scala)

## Refactoring

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

## Web

- [How to View Your Live Localhost From Your Laptop on Your Mobile Device](dev.to/brendamichellle/how-to-view-your-localhost-from-your-laptop-on-your-mobile-device-516c)
  - Easy way to test mobile web using local server on VSCode.
- ## [Goodbye Nginx, hello Caddy](https://blog.bigbinary.com/2020/09/22/rails-6-1-deprecates-rails-db-structure-dump.html)
  - [Caddy vs. Nginx](https://stackshare.io/stackups/caddy-vs-nginx) summary: performanec or usability.

## Others

- [The XY Problem](https://xyproblem.info/)
  - How to question a problem clear.
- [THERE'S ALWAYS MORE HISTORY](https://www.hillelwayne.com/post/always-more-history)
  - Deep dive into the funny histories.
- [3 Books to Improve Your Coding Skills](https://medium.com/better-programming/3-books-to-improve-your-coding-skills-afa67621192)
  - Recommended books about Algoirthm, Engineering and Functional Thinking
- [5 Signs of a Senior Developer](https://levelup.gitconnected.com/5-signs-of-a-senior-developer-7f5c59093c73)
  - The difference between senior developer and junior developer.

## [이전 문서](archive/README.md)
