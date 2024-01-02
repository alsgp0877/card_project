# 체크카드의 캐시백 대상 가맹점 정보 전달 사이트
나는 소비습관이 들쭉날쭉이다. 그래서 신용카드를 아직은 지양하고 체크카드만 사용 중이다.
체크카드는 캐시백 이벤트가 많은데 저마다 적용되는 가맹점들이 다르고 조건도 꽤나 구체적인 편이다.
결제를 하려고 할때 '이 카드는 어디에 얼만큼 결제해야 캐시백이 되더라?' 하는 생각이 들고 그럴때면 항상 앱으로 확인을 해야했다.
체크카드 갯수도 다양하다보니 항상 앱을 열고 페이지를 타고타고 들어가 확인하려니 너무 귀찮았다..
그래서 이걸 모아서 보여주는 사이트를 하나 만들면 좋겠다고 생각이 들어서 프로젝트를 시작했다.

2023-12-26 *작업시간 3시간 소요 <br>
코딩애플 유튜브에서 카드이미지에 css를 코딩하여 멋나게 작업한걸 봤다. 저거다 저걸 내 사이트의 카드에 css로 적용하면 되겠다 싶었다.
이미지를 수집해서 대충 비슷하게 만들어 봤는데 카드만 기깔나게 css 넣으면 어쩌냐고 .. 텍스트로 정보를 넣으려니 전체적인 페이지가 난장판이였다.
그래서 급하게 무료 템플릿 찾아보니 괜찮은 템플릿이 많이 있었다. 세상엔 능력자들이 많다.  
그래서 템플릿을 바탕으로 카드와 텍스트를 다시 배치하였다. 버튼 또한 무료 템플릿들이 존재했다. 적용하니 한층 보기 좋아졌다. 반응형까지!..

1. 카드 이미지 표출 
2. 정보 제공
   - 실적 정보 제공
   - 캐시백 매장 정보 제공(이거같은 경우는 데이터가 너무길게나와서 스크로롤 했는데..음..)

퍼블리싱이랑 디자인은 얼추했는데 데이터를 계속 추가하다보니 동적표현이 너무 절실했다..cms 코딩이 편하긴 했어
백엔드 구축만 해놓으면 다른 아이디어가 나왔을때도 디자인만 추가해서 내면되니 백엔드 구축할 프레임워크를 알아보면 좋을것 같다


2023-12-29 *작업시간 1시간 소요 <br>
사용한 템플릿 사이트 https://startbootstrap.com/template/heroic-features <br>
css를 조금 수정했다. 이전 css는 너무 아닌것 같아서..
2. 정보제공의 경우 1)실적 유무 2) 주의사항 3) 캐시백 대상 가맹점 확인하기 이렇게 카테고리를 나눠서 표출할 수 있도록 수정했다.
for문이 절실하다 백엔드는 어떤것으로 구축하면 좋을려나
css를 번역해주는 앱?

2024-01-03
생활코딩 유튜브의 node.js express 강의 듣기

