
const defaults={lang:'ko',place:'경복궁',interest:0,group:0,duration:2,budget:0};
let state={...defaults};

const I={
  ko:{
    userInfoEyebrow:'TRAVEL SETUP', userInfoTitle:'사용자 정보', areaLabel:'여행 지역', interestLabel:'관심사', groupLabel:'동행 유형', durationLabel:'기간', budgetLabel:'예산', applyBtn:'실행', freeInputPlaceholder:'예: 홍대 근처 혼자 먹기 좋은 저녁 추천해줘', sendBtn:'전송', freeAnswerTitle:'요청 반영 결과',
    mustVisit:'Must Visit', map:'지도', translateShort:'번역', shortcutLabel:'바로가기', officialHomepage:'홈페이지 연결', featuredTitle:'대표 추천 장소', featuredSub:'대표 3곳', morePlaceTitle:'추가 장소 선택', morePlaceSub:'선택 버튼으로 변경',
    itineraryEyebrow:'CURATED JOURNEY', foodEyebrow:'CURATED', transportEyebrow:'NAVIGATION GUIDE',
    transportTitle:'교통편 안내', subway:'지하철', bus:'버스', phraseTitle:'상황별 한국어 표현', translateTitle:'실시간 통역 & 번역기', translatePlaceholder:'번역할 문장을 입력하세요 (Type here...)', googleTranslate:'구글번역기 열기',
    navHome:'Home', navSchedule:'Schedule', navFood:'Food', navTransit:'Transit', navExpression:'Expressions',
    review:'리뷰', routeNote:'실시간 도착 정보와 요금은 해당 앱에서 최종 확인해 주세요.',
    subwayRoute:'Kakao Map', subwayMap:'지하철 노선도', busStop:'버스 정류장', taxiTitle:'택시 (Taxi Service)', foodTitle:'맛집 추천 3곳', cafeTitle:'카페 추천 3곳',
    foodIntro:'Seoul의 대표 지역에서 즐길 수 있는 추천 장소를 담았어요.', tipText:'대부분의 문장 끝에 “요”를 붙이면 더 공손한 표현이 됩니다.',
    dayBadge1:'Cultural Heart', dayBadge2:'Local Living', dayBadge3:'Urban Nature',
    itineraryPattern:'{place} {days}일 맞춤 일정', itineraryIntro:'서울의 분위기를 더 자연스럽게 즐길 수 있도록 동선 중심으로 구성했어요.',
    foodHeroTitle:'맛집 추천 3곳', cafeHeroTitle:'카페 추천 3곳',
    foodHeroIntro:'선택한 장소 주변에서 즐길 수 있는 추천 스폿을 카드 형태로 보여드려요.'
  },
  en:{
    userInfoEyebrow:'TRAVEL SETUP', userInfoTitle:'Traveler Info', areaLabel:'Travel Area', interestLabel:'Interest', groupLabel:'Travel Type', durationLabel:'Duration', budgetLabel:'Budget', applyBtn:'Apply', freeInputPlaceholder:'Ex: Recommend a solo dinner spot near Hongdae', sendBtn:'Send', freeAnswerTitle:'Request Applied',
    mustVisit:'Must Visit', map:'Map', translateShort:'Translate', shortcutLabel:'Shortcut', officialHomepage:'Official Website', featuredTitle:'Featured Places', featuredSub:'Top 3 picks', morePlaceTitle:'More Places', morePlaceSub:'Switch by button',
    itineraryEyebrow:'CURATED JOURNEY', foodEyebrow:'CURATED', transportEyebrow:'NAVIGATION GUIDE',
    transportTitle:'Transit Guide', subway:'Subway', bus:'Bus', phraseTitle:'Useful Korean Phrases', translateTitle:'Live Interpreter & Translator', translatePlaceholder:'Type a sentence to translate', googleTranslate:'Open Google Translate',
    navHome:'Home', navSchedule:'Schedule', navFood:'Food', navTransit:'Transit', navExpression:'Expressions',
    review:'reviews', routeNote:'Please double-check live arrivals and fares in the linked app.',
    subwayRoute:'Kakao Map', subwayMap:'Subway Map', busStop:'Bus Stop', taxiTitle:'Taxi Service', foodTitle:'Top 3 Food Picks', cafeTitle:'Top 3 Cafe Picks',
    foodIntro:'Explore recommended spots around Seoul’s most popular districts.', tipText:"Add 'yo' to the end of many Korean sentences to sound more polite.",
    dayBadge1:'Cultural Heart', dayBadge2:'Local Living', dayBadge3:'Urban Nature',
    itineraryPattern:'{days}-Day Customized Itinerary for {place}', itineraryIntro:'A location-based plan designed to help travelers move smoothly through Seoul.',
    foodHeroTitle:'Top 3 Food Picks', cafeHeroTitle:'Top 3 Cafe Picks',
    foodHeroIntro:'A curated selection of nearby spots presented in polished card layouts.'
  }
};

const places=[
 {id:'경복궁',ko:'경복궁',en:'Gyeongbokgung',type:'featured',tagKo:'전통문화',tagEn:'Tradition',descKo:'조선 왕실의 분위기를 가장 잘 느낄 수 있는 서울 대표 궁궐이에요.',descEn:'A signature royal palace where you can experience classic Seoul heritage.',img:'assets/gyeongbokgung.svg'},
 {id:'남산서울타워',ko:'남산서울타워',en:'Namsan Seoul Tower',type:'featured',tagKo:'야경',tagEn:'Night View',descKo:'서울 야경과 전망을 함께 즐기기 좋은 랜드마크예요.',descEn:'A landmark best known for panoramic city views and night scenery.',img:'assets/namsan.svg'},
 {id:'한강공원',ko:'한강공원',en:'Hangang Park',type:'featured',tagKo:'피크닉',tagEn:'Picnic',descKo:'피크닉과 한강 산책을 즐기기 좋은 서울의 대표 휴식 공간이에요.',descEn:'A popular Seoul spot for riverside walks, picnics, and easy outdoor relaxation.',img:'assets/hangang.svg'},
 {id:'홍대',ko:'홍대',en:'Hongdae',type:'more',tagKo:'트렌드',tagEn:'Trend',descKo:'거리문화, 쇼핑, 카페를 한 번에 즐기기 좋은 젊은 지역이에요.',descEn:'A lively district known for street culture, cafes, shopping, and nightlife.',img:'assets/hongdae.svg'},
 {id:'성수동',ko:'성수동',en:'Seongsu-dong',type:'more',tagKo:'카페',tagEn:'Cafe',descKo:'감성 카페와 편집숍이 모여 있는 서울의 트렌디한 지역이에요.',descEn:'A trendy area filled with stylish cafes, boutiques, and creative spaces.',img:'assets/seongsu.svg'},
 {id:'서울숲',ko:'서울숲',en:'Seoul Forest',type:'more',tagKo:'공원',tagEn:'Park',descKo:'도심 속 자연을 느낄 수 있는 산책 명소예요.',descEn:'A green urban park ideal for walking, relaxing, and nearby cafe hopping.',img:'assets/seoulforest.svg'},
 {id:'익선동',ko:'익선동',en:'Ikseon-dong',type:'more',tagKo:'한옥',tagEn:'Hanok',descKo:'한옥 골목과 디저트 카페 감성을 즐기기 좋은 곳이에요.',descEn:'A charming hanok neighborhood loved for dessert cafes and photogenic alleys.',img:'assets/ikseondong.svg'},
 {id:'코엑스 별마당도서관',ko:'코엑스 별마당도서관',en:'Starfield Library COEX',type:'more',tagKo:'실내명소',tagEn:'Indoor',descKo:'실내에서 여유롭게 둘러보기 좋은 포토 스팟이에요.',descEn:'A photogenic indoor attraction that pairs well with shopping and easy travel.',img:'assets/starfield.svg'},
 {id:'광장시장',ko:'광장시장',en:'Gwangjang Market',type:'more',tagKo:'시장',tagEn:'Market',descKo:'한국 시장 음식을 다양하게 체험하기 좋은 곳이에요.',descEn:'A classic market destination famous for iconic Korean street food.',img:'assets/gwangjang.svg'},
 {id:'DDP',ko:'DDP',en:'DDP',type:'more',tagKo:'디자인',tagEn:'Design',descKo:'전시, 야경, 건축미를 함께 즐기기 좋은 복합문화공간이에요.',descEn:'A design landmark known for exhibitions, city lights, and futuristic architecture.',img:'assets/ddp.svg'}
];

const interestOptions={ko:['맛집 / Food','카페 / Cafe','K-pop','K-drama 촬영지','전통문화 / Tradition'],en:['Food','Cafe','K-pop','K-drama Spots','Tradition']};
const groupOptions={ko:['혼자 여행 / Solo','친구와 여행 / Friends','가족 여행 / Family','커플 여행 / Couple'],en:['Solo','Friends','Family','Couple']};
const durationOptions={ko:['1일','2일','3일'],en:['1 Day','2 Days','3 Days']};
const budgetOptions={ko:['보통 / Medium','낮음 / Low','높음 / High'],en:['Medium','Low','High']};

const itineraryData={
'홍대':{ko:[['홍대입구역 9번 출구','연남동 골목 산책','혼밥 라멘 또는 분식','홍대 거리공연 구경'],['망원시장 또는 합정 카페','상수 편집숍','한강공원 노을','홍대 야간 포토존'],['경의선숲길 브런치','연희동 카페','명동 쇼핑 연계','남산서울타워 야경']],
en:[['Hongik Univ. Station Exit 9','Walk through Yeonnam-dong alleys','Solo ramen or Korean snack meal','Watch Hongdae street performances'],['Mangwon Market or Hapjeong cafe','Sangsu concept stores','Hangang sunset','Hongdae night photo spots'],['Gyeongui Line Forest brunch','Yeonhui-dong cafe','Myeong-dong shopping add-on','Namsan Seoul Tower night view']]},
'경복궁':{ko:[['경복궁 관람','한복 대여 체험','서촌 한식 점심','인사동 전통찻집'],['북촌한옥마을 산책','안국 카페','광장시장 먹거리','청계천 산책'],['창덕궁 또는 익선동','명동 쇼핑','남산서울타워 야경','호텔 복귀']],
en:[['Visit Gyeongbokgung Palace','Try hanbok rental','Seochon Korean lunch','Traditional tea in Insadong'],['Walk Bukchon Hanok Village','Cafe near Anguk','Street food at Gwangjang Market','Cheonggyecheon stream walk'],['Changdeokgung or Ikseon-dong','Myeong-dong shopping','Namsan Seoul Tower night view','Return to hotel']]},
'남산서울타워':{ko:[['명동역 출발','남산 케이블카','서울타워 전망대','명동 저녁 식사'],['남대문시장','덕수궁 돌담길','정동 카페','청계천 야경'],['이태원 또는 해방촌','한강공원 피크닉','홍대 거리 산책','야식 코스']],
en:[['Start from Myeong-dong Station','Namsan Cable Car','N Seoul Tower observatory','Dinner in Myeong-dong'],['Namdaemun Market','Deoksugung Stonewall Walkway','Cafe in Jeong-dong','Cheonggyecheon night walk'],['Itaewon or Haebangchon','Hangang picnic','Hongdae evening walk','Late-night food route']]},
'한강공원':{ko:[['여의나루역 도착','한강 산책','치킨 또는 푸드트럭','노을 감상'],['더현대 서울','여의도 카페','한강 자전거','반포대교 야경'],['성수동 카페','서울숲 산책','뚝섬 한강공원','홍대 이동']],
en:[['Arrive at Yeouinaru Station','Walk along Hangang','Chicken or food truck meal','Enjoy the sunset'],['The Hyundai Seoul','Yeouido cafe','Hangang bicycle ride','Banpo Bridge night view'],['Seongsu cafe','Seoul Forest walk','Ttukseom Hangang Park','Move to Hongdae']]},
'성수동':{ko:[['성수역 카페거리','편집숍 구경','브런치 카페','서울숲 산책'],['뚝섬 한강공원','성수 베이커리','건대 또는 왕십리 이동','저녁 식사'],['익선동 한옥 골목','광장시장 먹거리','DDP 야경','숙소 복귀']],
en:[['Seongsu Cafe Street','Concept stores','Brunch cafe','Seoul Forest walk'],['Ttukseom Hangang Park','Seongsu bakery','Move to Konkuk Univ. or Wangsimni','Dinner'],['Ikseon-dong hanok alleys','Gwangjang Market food','DDP night view','Return to hotel']]},
'서울숲':{ko:[['서울숲 산책','감성 카페','성수 편집숍','뚝섬 한강공원'],['성수 브런치','서울숲 포토존','한강 자전거','홍대 이동'],['경복궁 전통 코스','북촌한옥마을','익선동 카페','명동 쇼핑']],
en:[['Walk in Seoul Forest','Aesthetic cafe','Seongsu concept stores','Ttukseom Hangang Park'],['Seongsu brunch','Photo spots in Seoul Forest','Hangang bicycle ride','Move to Hongdae'],['Gyeongbokgung traditional route','Bukchon Hanok Village','Ikseon-dong cafe','Myeong-dong shopping']]},
'익선동':{ko:[['익선동 한옥 골목','디저트 카페','종로 산책','청계천 야경'],['경복궁','북촌한옥마을','인사동 전통찻집','광장시장'],['DDP 전시','동대문 쇼핑','남산서울타워','명동']],
en:[['Ikseon-dong hanok alleys','Dessert cafe','Jongno walk','Cheonggyecheon night view'],['Gyeongbokgung','Bukchon Hanok Village','Traditional tea in Insadong','Gwangjang Market'],['DDP exhibition','Dongdaemun shopping','Namsan Seoul Tower','Myeong-dong']]},
'코엑스 별마당도서관':{ko:[['별마당도서관','코엑스 쇼핑','봉은사 산책','삼성역 저녁'],['서울스카이','롯데월드몰','석촌호수','잠실 카페'],['성수동 카페','서울숲','한강공원','홍대']],
en:[['Starfield Library','COEX shopping','Bongeunsa Temple walk','Dinner near Samseong Station'],['Seoul Sky','Lotte World Mall','Seokchon Lake','Jamsil cafe'],['Seongsu cafe','Seoul Forest','Hangang Park','Hongdae']]},
'광장시장':{ko:[['광장시장 먹거리','청계천 산책','익선동 카페','종로 야경'],['경복궁','북촌한옥마을','인사동','명동'],['DDP','동대문 쇼핑','남산서울타워','한강공원']],
en:[['Gwangjang Market food','Cheonggyecheon walk','Ikseon-dong cafe','Jongno night view'],['Gyeongbokgung','Bukchon Hanok Village','Insadong','Myeong-dong'],['DDP','Dongdaemun shopping','Namsan Seoul Tower','Hangang Park']]},
'DDP':{ko:[['DDP 전시','동대문 디자인거리','야경 포토존','동대문 저녁'],['광장시장','청계천','익선동 카페','종로 산책'],['성수동','서울숲','한강공원','홍대']],
en:[['DDP exhibition','Dongdaemun design street','Night photo spot','Dinner in Dongdaemun'],['Gwangjang Market','Cheonggyecheon','Ikseon-dong cafe','Jongno walk'],['Seongsu-dong','Seoul Forest','Hangang Park','Hongdae']]}
};

const foodMap={
'경복궁':[['토속촌 삼계탕','Tosokchon Samgyetang','삼계탕','Samgyetang','궁궐 관람 후 가기 좋은 전통 한식이에요. 진한 국물과 담백한 닭고기가 특징입니다.','A beloved traditional chicken soup spot near the palace.',4.4,12840],['황생가칼국수','Hwangsaengga Kalguksu','칼국수','Kalguksu','따뜻한 국물 메뉴로 유명하고, 든든하게 식사하기 좋습니다.','Known for warm noodle soup and an easy, comforting meal.',4.3,6420],['서촌계단집','Seochon Gyedan-jip','해산물','Seafood','서촌 분위기를 느끼기 좋은 숨은 해산물 맛집입니다.','A hidden seafood spot with local Seochon vibes.',4.2,5280]],
'남산서울타워':[['목멱산방','Mokmyeoksanbang','비빔밥','Bibimbap','남산 코스와 잘 어울리는 한식 식당입니다.','A Korean restaurant that pairs well with a Namsan route.',4.3,5650],['남산돈까스거리','Namsan Pork Cutlet Street','돈까스','Pork Cutlet','남산 대표 메뉴를 즐길 수 있는 식사 코스예요.','A classic Namsan dining choice famous for pork cutlet.',4.1,8890],['더플레이스 다이닝','The Place Dining','이탈리안','Italian','전망과 함께 식사를 즐길 수 있어요.','Dining with a view near Namsan.',4.2,3210]],
'한강공원':[['여의도 한강공원 푸드트럭','Yeouido Hangang Food Trucks','간식','Snacks','피크닉 분위기와 잘 어울리는 간편 식사예요.','A casual snack option perfect for a riverside picnic.',4.1,4100],['더현대 서울 맛집존','The Hyundai Seoul Food Zone','푸드코트','Food Court','비 오는 날 대안 코스로도 좋아요.','A good indoor alternative for rainy days.',4.2,9800],['반포 치킨 배달존','Banpo Chicken Delivery Zone','치킨','Chicken','한강 피크닉 대표 메뉴예요.','A classic Hangang picnic food option.',4.0,7300]],
'홍대':[['연남동 라멘집','Yeonnam Ramen House','라멘','Ramen','혼밥하기 좋은 라멘 맛집입니다.','A ramen favorite for solo travelers.',4.2,6100],['홍대 오코노미야끼','Hongdae Okonomiyaki Spot','일식','Japanese','젊은 거리 분위기와 잘 어울리는 메뉴예요.','A casual Japanese spot that matches Hongdae’s vibe.',4.3,7200],['홍대 분식바','Hongdae Snack Bar','분식','Snack Bar','가볍게 즐기기 좋은 로컬 메뉴입니다.','A casual local snack bar for a quick bite.',4.1,4500]],
'성수동':[['성수 브런치 카페','Seongsu Brunch Cafe','브런치','Brunch','감성적인 인테리어와 브런치 메뉴가 매력적이에요.','Stylish brunch and interiors in Seongsu.',4.4,8300],['서울숲 파스타 바','Seoul Forest Pasta Bar','파스타','Pasta','데이트 코스로도 잘 어울리는 식당입니다.','A pasta spot that also works well for dates.',4.2,4700],['성수 베이커리','Seongsu Bakery','베이커리','Bakery','빵과 커피로 가볍게 즐기기 좋아요.','A well-known stop for bread and coffee.',4.3,3900]],
'서울숲':[['서울숲 피크닉 카페','Seoul Forest Picnic Cafe','카페','Cafe','공원 산책 후 쉬기 좋은 식사 겸 카페입니다.','A nice stop after a park walk.',4.2,3100],['뚝섬 수제버거','Ttukseom Burger Spot','버거','Burger','가볍고 캐주얼하게 먹기 좋습니다.','An easy casual meal near the park.',4.1,2600],['성수 수프 전문점','Seongsu Soup Kitchen','수프','Soup','편안한 분위기의 가벼운 식사예요.','A cozy place for a light meal.',4.0,2100]],
'익선동':[['익선동 파스타하우스','Ikseon Pasta House','파스타','Pasta','분위기 좋은 골목 식당입니다.','An alley restaurant with a warm atmosphere.',4.2,4100],['한옥 한식집','Hanok Korean Table','한식','Korean','한옥 분위기에서 식사를 즐길 수 있어요.','Korean dining in a hanok setting.',4.3,3700],['종로 만두집','Jongno Dumpling House','만두','Dumplings','가볍게 즐기기 좋은 로컬 메뉴입니다.','A casual dumpling place with local charm.',4.1,3300]],
'코엑스 별마당도서관':[['코엑스 브런치 카페','COEX Brunch Cafe','브런치','Brunch','실내 코스로 편하게 들르기 좋아요.','An easy indoor brunch option.',4.2,5200],['삼성역 한식당','Samseong Korean Table','한식','Korean','가족 여행자도 편하게 방문 가능해요.','Comfortable for families and visitors.',4.1,4400],['스타필드 디저트샵','Starfield Dessert Shop','디저트','Dessert','가볍게 들르기 좋은 달콤한 스팟입니다.','A sweet dessert stop after the library.',4.0,2900]],
'광장시장':[['빈대떡 명가','Bindaetteok House','전','Pancake','광장시장 대표 메뉴를 맛볼 수 있어요.','Try one of the market’s signature dishes.',4.4,11800],['마약김밥 전문점','Mayak Gimbap Spot','김밥','Gimbap','간단하게 즐기기 좋은 시장 음식입니다.','An easy and iconic market snack.',4.2,9300],['칼국수 골목집','Noodle Alley Shop','칼국수','Noodles','시장 분위기를 즐기며 식사할 수 있어요.','Enjoy noodles in a lively market mood.',4.1,6400]],
'DDP':[['DDP 루프탑 카페','DDP Rooftop Cafe','카페','Cafe','전시 후 잠시 쉬기 좋은 스팟이에요.','A good break spot after exhibitions.',4.2,3500],['동대문 닭한마리','Dongdaemun Dakhanmari','닭한마리','Chicken Soup','동대문 대표 식사 메뉴예요.','A well-known Dongdaemun meal.',4.3,8700],['야식 분식집','Late-night Snack Bar','분식','Snack Bar','야간 동선에도 잘 어울리는 메뉴입니다.','Works well on evening routes.',4.0,2800]]
};

const cafeMap={
'경복궁':[['인사동 전통찻집','Insadong Tea House','찻집','Tea House','전통 차 분위기를 느끼기 좋아요.','Great for a traditional tea break.',4.2,3500],['서촌 감성 카페','Seochon Aesthetic Cafe','카페','Cafe','궁궐 코스 뒤 쉬어가기 좋습니다.','A relaxed cafe stop after the palace route.',4.1,2900],['북촌 디저트 카페','Bukchon Dessert Cafe','디저트','Dessert','한옥 감성과 디저트를 함께 즐겨요.','Desserts with hanok vibes nearby.',4.3,2700]],
'홍대':[['홍대 디저트 카페','Hongdae Dessert Cafe','카페','Cafe','디저트와 사진 포인트가 좋은 곳이에요.','Popular for desserts and photogenic interiors.',4.1,5400],['연남동 브런치 카페','Yeonnam Brunch Cafe','브런치','Brunch','감성 인테리어와 브런치 메뉴가 인기예요.','Known for stylish brunch.',4.3,4900],['홍대 루프탑 카페','Hongdae Rooftop Cafe','루프탑','Rooftop','도심 뷰를 즐기기 좋아요.','A rooftop cafe with city views.',4.2,3100]],
'성수동':[['성수 감성 카페','Seongsu Aesthetic Cafe','카페','Cafe','사진 찍기 좋은 대표 카페 거리예요.','A photogenic cafe option in Seongsu.',4.4,8300],['서울숲 브런치 카페','Seoul Forest Brunch Cafe','브런치','Brunch','서울숲 산책 전후로 좋아요.','Good before or after Seoul Forest.',4.3,4700],['성수 베이커리 카페','Seongsu Bakery Cafe','베이커리','Bakery','빵과 커피가 인기예요.','Popular for bread and coffee.',4.2,3900]],
'서울숲':[['서울숲 뷰 카페','Seoul Forest View Cafe','카페','Cafe','공원 산책 후 쉬기 좋아요.','A nice cafe after a walk.',4.2,3100],['성수 로스터리','Seongsu Roastery','커피','Coffee','커피 애호가에게 추천해요.','Recommended for coffee lovers.',4.3,2600],['피크닉 디저트 카페','Picnic Dessert Cafe','디저트','Dessert','피크닉 전후 들르기 좋아요.','Good before or after a picnic.',4.1,2100]],
'익선동':[['익선동 한옥카페','Ikseon Hanok Cafe','카페','Cafe','한옥 감성이 살아 있는 카페예요.','A cafe with hanok aesthetics.',4.4,9500],['디저트 다방','Dessert Dabang','디저트','Dessert','달콤한 디저트가 인기예요.','A popular dessert cafe.',4.3,3600],['익선 루프탑 카페','Ikseon Rooftop Cafe','루프탑','Rooftop','골목 뷰를 즐기기 좋아요.','Enjoy the alley view from above.',4.1,2800]],
'코엑스 별마당도서관':[['별마당 라운지 카페','Starfield Lounge Cafe','카페','Cafe','도서관 관람 후 쉬기 좋습니다.','Good after visiting the library.',4.2,5200],['코엑스 디저트 카페','COEX Dessert Cafe','디저트','Dessert','실내 동선이 편해서 좋아요.','Convenient indoor route and sweet break.',4.1,2900],['삼성역 커피바','Samseong Coffee Bar','커피','Coffee','짧은 휴식에 잘 어울려요.','Good for a short coffee break.',4.0,2500]],
'광장시장':[['광장시장 전통차 카페','Gwangjang Tea Cafe','찻집','Tea Cafe','시장 투어 후 쉬기 좋아요.','Good after a market tour.',4.1,2200],['종로 디저트 카페','Jongno Dessert Cafe','디저트','Dessert','청계천과 함께 들르기 좋아요.','Good with a Cheonggyecheon walk.',4.2,2700],['을지로 커피바','Euljiro Coffee Bar','커피','Coffee','로컬 감성이 좋은 커피 스팟이에요.','A coffee spot with local charm.',4.3,3200]],
'DDP':[['DDP 루프탑 카페','DDP Rooftop Cafe','카페','Cafe','전시 후 잠시 쉬기 좋아요.','Great for a break after exhibitions.',4.2,3500],['동대문 디저트 카페','Dongdaemun Dessert Cafe','디저트','Dessert','쇼핑 중 쉬기 좋아요.','A nice dessert stop during shopping.',4.1,2500],['청계천 카페','Cheonggyecheon Cafe','카페','Cafe','산책 코스와 연결하기 좋아요.','Good with a stream walk.',4.0,2300]]
};

const phrases={
'경복궁':[['입장권 한 장 주세요.','ip-jang-gwon han jang ju-se-yo','One ticket, please.'],['사진 찍어주실 수 있나요?','sa-jin jji-geo-ju-sil su in-na-yo','Could you take a picture for me?'],['한복 대여점이 어디예요?','han-bok dae-yeo-jeom-i eo-di-ye-yo','Where is the hanbok rental shop?']],
'남산서울타워':[['케이블카 타는 곳이 어디예요?','ke-i-beul-ka ta-neun got-i eo-di-ye-yo','Where can I take the cable car?'],['전망대 표 주세요.','jeon-mang-dae pyo ju-se-yo','A ticket for the observatory, please.'],['야경 보기 좋은 곳이 어디예요?','ya-gyeong bo-gi jo-eun got-i eo-di-ye-yo','Where is a good spot for the night view?']],
'한강공원':[['돗자리 빌릴 수 있나요?','dot-ja-ri bil-lil su in-na-yo','Can I rent a picnic mat?'],['치킨 배달 받을 수 있어요?','chi-kin bae-dal ba-deul su i-sseo-yo','Can I get chicken delivered here?'],['화장실이 어디예요?','hwa-jang-sil-i eo-di-ye-yo','Where is the restroom?']],
'홍대':[['이 근처에 유명한 카페가 어디예요?','i geun-cheo-e yu-myeong-han ka-pe-ga eo-di-ye-yo','Where is a famous cafe around here?'],['공연장은 어디예요?','gong-yeon-jang-eun eo-di-ye-yo','Where is the performance venue?'],['사진 찍기 좋은 곳 추천해 주세요.','sa-jin jji-gi jo-eun got chu-cheon-hae ju-se-yo','Please recommend a good photo spot.']],
'성수동':[['이 근처 편집숍이 어디예요?','i geun-cheo pyeon-jip-syop-i eo-di-ye-yo','Where is a concept store nearby?'],['브런치 먹기 좋은 곳이 어디예요?','beu-reon-chi meok-gi jo-eun got-i eo-di-ye-yo','Where is a good place for brunch?'],['서울숲까지 걸어갈 수 있나요?','seo-ul-sup-kka-ji geo-reo-gal su in-na-yo','Can I walk to Seoul Forest from here?']],
'서울숲':[['산책로 입구가 어디예요?','san-chaek-ro ip-gu-ga eo-di-ye-yo','Where is the walking trail entrance?'],['자전거를 빌릴 수 있나요?','ja-jeon-geo-reul bil-lil su in-na-yo','Can I rent a bicycle?'],['피크닉하기 좋은 곳이 어디예요?','pi-keu-nik-ha-gi jo-eun got-i eo-di-ye-yo','Where is a good picnic spot?']],
'익선동':[['조용한 카페 추천해 주세요.','jo-yong-han ka-pe chu-cheon-hae ju-se-yo','Please recommend a quiet cafe.'],['이 골목이 맞나요?','i gol-mok-i mat-na-yo','Is this the right alley?'],['웨이팅이 있나요?','we-i-ting-i in-na-yo','Is there a waiting line?']],
'코엑스 별마당도서관':[['도서관은 몇 층이에요?','do-seo-gwan-eun myeot cheung-i-e-yo','What floor is the library on?'],['사진 찍어도 돼요?','sa-jin jji-geo-do dwae-yo','Can I take pictures?'],['가까운 식당이 어디예요?','ga-kka-un sik-dang-i eo-di-ye-yo','Where is a nearby restaurant?']],
'광장시장':[['빈대떡 하나 주세요.','bin-dae-tteok ha-na ju-se-yo','One bindaetteok, please.'],['이거 맵나요?','i-geo maem-na-yo','Is this spicy?'],['포장해 주세요.','po-jang-hae ju-se-yo','Please make it to-go.']],
'DDP':[['전시 입구가 어디예요?','jeon-si ip-gu-ga eo-di-ye-yo','Where is the exhibition entrance?'],['야경 보기 좋은 곳이 어디예요?','ya-gyeong bo-gi jo-eun got-i eo-di-ye-yo','Where is a good night-view spot?'],['지하철역이 가까워요?','ji-ha-cheol-yeok-i ga-kka-wo-yo','Is the subway station nearby?']]
};

const dayBadges=['dayBadge1','dayBadge2','dayBadge3'];

function t(k){return I[state.lang][k]}
function placeById(id){return places.find(p=>p.id===id) || places[0]}
function interestKind(){return state.interest===1?'cafe':'food'}

const links={
  subwayMapKo:'https://www.seoulmetro.co.kr/kr/cyberStation.do',
  subwayMapEn:'https://english.visitseoul.net/subway',
  uberKo:'https://m.uber.com/',
  uberEn:'https://www.uber.com/kr/en/',
  kakaoKo:'https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=ko',
  kakaoEn:'https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=ko'
};

function linkForMap(place){
  const p=placeById(place);
  return state.lang==='en'
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.en+', Seoul')}&hl=en`
    : `https://map.kakao.com/link/search/${encodeURIComponent(p.ko)}`;
}
function linkForTranslate(text=''){
  const mode=document.getElementById('translateMode')?.value || 'en-ko';
  const sl=mode==='ko-en'?'ko':'en', tl=mode==='ko-en'?'en':'ko';
  return `https://translate.google.com/?hl=${state.lang==='en'?'en':'ko'}&sl=${sl}&tl=${tl}&text=${encodeURIComponent(text)}&op=translate`;
}
function getFoodMapUrl(queryKo, queryEn){
  return state.lang==='en'
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(queryEn+', Seoul')}&hl=en`
    : `https://map.kakao.com/link/search/${encodeURIComponent(queryKo)}`;
}

function fillSelect(selectId, options, selected){
  document.getElementById(selectId).innerHTML=options.map((v,i)=>`<option value="${i}" ${i===selected?'selected':''}>${v}</option>`).join('');
}
function fillAreaSelect(){
  document.getElementById('areaSelect').innerHTML=places.map(p=>`<option value="${p.id}" ${p.id===state.place?'selected':''}>${state.lang==='ko'?`${p.ko} / ${p.en}`:p.en}</option>`).join('');
}
function applyI18n(){
  document.documentElement.lang=state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder)});
  document.getElementById('koBtn').classList.toggle('active',state.lang==='ko');
  document.getElementById('enBtn').classList.toggle('active',state.lang==='en');
  fillAreaSelect();
  fillSelect('interestSelect',interestOptions[state.lang],state.interest);
  fillSelect('groupSelect',groupOptions[state.lang],state.group);
  fillSelect('durationSelect',durationOptions[state.lang],state.duration);
  fillSelect('budgetSelect',budgetOptions[state.lang],state.budget);
  document.getElementById('travelTipText').textContent=t('tipText');
}
function renderHero(){
  const p=placeById(state.place);
  document.getElementById('heroImage').style.backgroundImage=`url('${p.img}')`;
  document.getElementById('heroTitle').textContent=state.lang==='ko'?p.ko:p.en;
  document.getElementById('heroDesc').textContent=state.lang==='ko'?p.descKo:p.descEn;
  const officialLink = state.lang==='ko'
    ? 'https://www.heritage.go.kr/heri/html/HtmlPage.do?pg=/palaces/palacesHistory.jsp&pageNo=3_1_1_1'
    : 'https://english.khs.go.kr/cha/idx/SubIndex.do?mn=EN';
  document.getElementById('heroOfficialLink').href=officialLink;
}
function renderPlaceLists(){
  const featured=places.filter(p=>p.type==='featured');
  const more=places.filter(p=>p.type==='more');
  document.getElementById('featuredPlaces').innerHTML=featured.map(p=>`
    <button class="feature-card ${p.id===state.place?'active':''}" onclick="selectPlace('${p.id}')">
      <div class="feature-thumb" style="background-image:url('${p.img}')"></div>
      <div class="feature-body">
        <div class="feature-tag">${state.lang==='ko'?p.tagKo:p.tagEn}</div>
        <div class="feature-name">${state.lang==='ko'?p.ko:p.en}</div>
        <p class="feature-desc">${state.lang==='ko'?p.descKo:p.descEn}</p>
      </div>
    </button>`).join('');
  document.getElementById('morePlaces').innerHTML=more.map(p=>`<button class="chip ${p.id===state.place?'active':''}" onclick="selectPlace('${p.id}')">${state.lang==='ko'?`${p.ko} (${p.en})`:p.en}</button>`).join('');
}

function renderMiniRouteMap(steps){ return ''; }


function mapLinksForSchedule(query){
  const q = encodeURIComponent(query);
  const googleQ = encodeURIComponent(query + ' Seoul');
  return {
    kakao:`https://map.kakao.com/link/search/${q}`,
    naver:`https://map.naver.com/p/search/${q}`,
    google:`https://www.google.com/maps/search/?api=1&query=${googleQ}&hl=${state.lang==='en'?'en':'ko'}`
  };
}

function renderItinerary(){
  const p=placeById(state.place);
  const days=state.duration+1;
  const langKey=state.lang==='ko'?'ko':'en';
  const rows=(itineraryData[p.id]&&itineraryData[p.id][langKey]) || itineraryData['경복궁'][langKey];
  const title=t('itineraryPattern').replace('{place}',state.lang==='ko'?p.ko:p.en).replace('{days}',String(days));
  document.getElementById('itineraryMainTitle').textContent=title;
  document.getElementById('itineraryIntro').textContent=t('itineraryIntro');
  document.getElementById('itineraryCards').innerHTML=Array.from({length:days}).map((_,i)=>{
    const steps=rows[i]||rows[0];
    const firstPlace=steps[0];
    const mapLinks=mapLinksForSchedule(firstPlace);
    return `<article class="card itinerary-card ${i===2?'outline-card':''}">
      <div class="itinerary-card-head">
        <h3>Day ${i+1}</h3>
        <span class="small-pill">${t(dayBadges[i])}</span>
      </div>
      <div class="route-list">
        ${steps.map((step,idx)=>`<div class="route-step"><span>${idx+1}</span><p>${step}</p></div>`).join('')}
      </div>
      <div class="map-row schedule-map-row">
        <a class="small-btn map-provider" target="_blank" href="${mapLinks.kakao}">Kakao Map</a>
        <a class="small-btn map-provider" target="_blank" href="${mapLinks.naver}">Naver Map</a>
        <a class="small-btn map-provider" target="_blank" href="${mapLinks.google}">Google Map</a>
      </div>
    </article>`;
  }).join('');
}

function foodPreviewDataUri(title, category, idx){
  const palettes=[
    ['#e8c7a2','#7b4a2d','#fff7ea'],
    ['#d9e5c3','#496d46','#fffaf1'],
    ['#e9d2c1','#6b4335','#fff8ef'],
    ['#c7d8ea','#28496c','#f8fbff']
  ];
  const p=palettes[idx%palettes.length];
  const safeTitle=String(title).replace(/[&<>]/g,'');
  const safeCategory=String(category).replace(/[&<>]/g,'');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="420" viewBox="0 0 720 420">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient></defs>
    <rect width="720" height="420" rx="28" fill="url(#g)"/>
    <circle cx="360" cy="214" r="132" fill="${p[2]}" opacity=".94"/>
    <circle cx="360" cy="214" r="92" fill="none" stroke="${p[1]}" stroke-width="12" opacity=".25"/>
    <ellipse cx="360" cy="238" rx="165" ry="46" fill="rgba(0,0,0,.12)"/>
    <path d="M260 200c55-38 145-38 200 0M255 230c58 34 152 34 210 0" fill="none" stroke="${p[1]}" stroke-width="16" stroke-linecap="round" opacity=".72"/>
    <circle cx="300" cy="178" r="16" fill="#d94b43" opacity=".9"/>
    <circle cx="420" cy="176" r="14" fill="#5a9b55" opacity=".9"/>
    <rect x="48" y="42" width="156" height="34" rx="17" fill="rgba(255,255,255,.72)"/>
    <text x="66" y="64" font-size="16" font-family="Arial, sans-serif" fill="${p[1]}" font-weight="700">${safeCategory}</text>
    <text x="48" y="360" font-size="34" font-family="Arial, sans-serif" fill="#fff" font-weight="800">${safeTitle}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderFood(){
  const kind=interestKind();
  const data=(kind==='cafe'?cafeMap:foodMap)[state.place] || (kind==='cafe'?cafeMap['홍대']:foodMap['경복궁']);
  document.getElementById('foodMainTitle').textContent=kind==='cafe'?t('cafeHeroTitle'):t('foodHeroTitle');
  document.getElementById('foodIntro').textContent=t('foodHeroIntro');
  const altClass=['','alt2','alt3'];
  document.getElementById('foodCards').innerHTML=data.map((r,i)=>`
    <article class="card food-card">
      <div class="food-photo ${altClass[i%3]}" style="background-image:url('${foodPreviewDataUri(state.lang==='ko'?r[0]:r[1], state.lang==='ko'?r[2]:r[3], i)}')">
        <div class="food-badge-num">${i+1}</div>
      </div>
      <div class="food-card-body">
        <div class="food-title-row">
          <div>
            <div class="food-title">${state.lang==='ko'?r[0]:r[1]}</div>
            <div class="food-meta">
              <span class="food-chip">${state.lang==='ko'?r[2]:r[3]}</span>
              <span>★ ${r[6]}</span>
              <span>${r[7].toLocaleString()} ${t('review')}</span>
            </div>
          </div>
          <div class="food-bookmark"><span class="material-symbols-outlined">bookmark</span></div>
        </div>
        <p class="food-desc">${state.lang==='ko'?r[4]:r[5]}</p>
        <div class="food-actions single-action">
          <a class="small-btn primary" target="_blank" href="${getFoodMapUrl(r[0],r[1])}">${t('map')}</a>
        </div>
      </div>
    </article>`).join('');
}
function renderTransport(){
  const p=placeById(state.place);
  const name=state.lang==='ko'?p.ko:p.en;
  const subwayLink=`https://map.kakao.com/link/search/${encodeURIComponent(p.ko)}%20지하철역`;
  const busLink=state.lang==='en'?`https://www.google.com/maps/search/${encodeURIComponent(name+' bus stop Seoul')}?hl=en`:`https://map.kakao.com/link/search/${encodeURIComponent(p.ko)}%20버스정류장`;
  const subwayMapLink=state.lang==='en'?links.subwayMapEn:links.subwayMapKo;
  const uberLink=state.lang==='en'?links.uberEn:links.uberKo;
  const kakaoLink=state.lang==='en'?links.kakaoEn:links.kakaoKo;
  document.getElementById('transportCards').innerHTML=`
    <article class="card transport-card">
      <div class="transport-top">
        <div class="transport-icon"><span class="material-symbols-outlined">subway</span></div>
        <div><h3>${t('subway')} (${state.lang==='ko'?'Subway':'Subway'})</h3><div class="transport-desc">${state.lang==='ko'?`${name} 주변 지하철역과 환승 경로를 안내합니다.`:`Shows nearby subway stations and transfer routes for ${name}.`}</div></div>
      </div>
      <div class="transport-visual"><div class="transit-illustration">🚇</div></div>
      <div class="food-actions">
        <a class="small-btn transit-action" target="_blank" href="${subwayLink}">${t('subwayRoute')}</a>
        <a class="small-btn transit-action" target="_blank" href="${subwayMapLink}">${t('subwayMap')}</a>
      </div>
    </article>
    <article class="card transport-card">
      <div class="transport-top">
        <div class="transport-icon"><span class="material-symbols-outlined">directions_bus</span></div>
        <div><h3>${t('bus')} (${state.lang==='ko'?'Bus':'Bus'})</h3><div class="transport-desc">${state.lang==='ko'?`${name} 근처 버스 정류장과 실시간 도착 정보를 안내합니다.`:`Shows nearby bus stops and live arrival information for ${name}.`}</div></div>
      </div>
      <div class="transport-visual bus"><div class="transit-illustration bus-ill">🚌</div><div class="overlay-text">${state.lang==='ko'?`${name} 정류장`:name+' Stop'}</div></div>
      <div class="food-actions"><a class="small-btn transit-action" target="_blank" href="${busLink}">${t('busStop')}</a></div>
    </article>
    <article class="card transport-card">
      <div class="transport-top">
        <div class="transport-icon"><span class="material-symbols-outlined">local_taxi</span></div>
        <div><h3>${t('taxiTitle')}</h3><div class="transport-desc">${state.lang==='ko'?'앱 연결 버튼을 눌러 택시를 간편하게 호출할 수 있습니다. 외국어 지원 앱 연동이 가능해요.':'Use the app links below to call a taxi. Foreign-language friendly app connections are available.'}</div></div>
      </div>
      <div class="food-actions"><a class="small-btn transit-action" target="_blank" href="${uberLink}">Uber</a><a class="small-btn transit-action" target="_blank" href="${kakaoLink}">Kakao T</a></div>
    </article>
  `;
}
function renderPhrases(){
  const p=placeById(state.place);
  const data=phrases[p.id] || [[`${state.lang==='ko'?p.ko:p.en}까지 어떻게 가요?`,'eotteoke ga-yo',`How do I get to ${p.en}?`],['사진 찍어도 돼요?','sa-jin jji-geo-do dwae-yo','Can I take pictures?'],['이 근처에 추천할 곳이 있나요?','i geun-cheo-e chu-cheon-hal got-i in-na-yo','Is there a recommended place nearby?']];
  document.getElementById('phraseCards').innerHTML=data.map(item=>`
    <article class="phrase-card">
      <div class="phrase-accent"></div>
      <div class="phrase-main">
        <div class="phrase-ko">${item[0]}</div>
        <div class="phrase-ro">${item[1]}</div>
        <div class="phrase-en">${item[2]}</div>
      </div>
      <div class="phrase-audio"><span class="material-symbols-outlined">volume_up</span></div>
    </article>
  `).join('');
}

function handleFreeInput(){
  const input=document.getElementById('freeInput');
  const box=document.getElementById('freeAnswer');
  if(!input || !box) return;
  const text=input.value.trim();
  if(!text) return;

  const lower=text.toLowerCase();
  const foundPlace=places.find(p =>
    lower.includes(p.ko.toLowerCase()) ||
    lower.includes(p.en.toLowerCase()) ||
    lower.includes(p.en.toLowerCase().split(' ')[0])
  );
  if(foundPlace) state.place=foundPlace.id;

  if(text.includes('카페') || lower.includes('cafe')) state.interest=1;
  if(text.includes('맛집') || text.includes('먹') || text.includes('저녁') || text.includes('점심') || lower.includes('food') || lower.includes('dinner') || lower.includes('lunch')) state.interest=0;

  if(text.includes('1일') || lower.includes('1 day')) state.duration=0;
  if(text.includes('2일') || lower.includes('2 day')) state.duration=1;
  if(text.includes('3일') || lower.includes('3 day')) state.duration=2;

  renderAll();

  const place=placeById(state.place);
  const kind=interestKind()==='cafe' ? (state.lang==='ko'?'카페':'cafe') : (state.lang==='ko'?'맛집':'food');
  const summary=state.lang==='ko'
    ? `${place.ko} 기준으로 ${kind} 추천과 일정 정보를 업데이트했습니다. 아래 하단 메뉴에서 일정, 맛집, 교통, 표현을 확인할 수 있습니다.`
    : `Updated recommendations for ${place.en} with ${kind} preferences. Use the bottom menu to check Schedule, Food, Transit, and Expressions.`;

  box.innerHTML=`<div class="free-answer-title">${t('freeAnswerTitle')}</div><p>${summary}</p>`;
  box.classList.add('show');
  input.value='';
  if(text.includes('일정') || lower.includes('plan') || lower.includes('itinerary') || lower.includes('schedule')){
    showSection('itinerarySection');
  }else{
    showSection('foodSection');
  }
}

function renderAll(){
  applyI18n();
  renderHero();
  renderPlaceLists();
  renderItinerary();
  renderFood();
  renderTransport();
  renderPhrases();
}
function syncStateFromInputs(){
  state.place=document.getElementById('areaSelect').value;
  state.interest=parseInt(document.getElementById('interestSelect').value,10);
  state.group=parseInt(document.getElementById('groupSelect').value,10);
  state.duration=parseInt(document.getElementById('durationSelect').value,10);
  state.budget=parseInt(document.getElementById('budgetSelect').value,10);
}
function selectPlace(id){
  state.place=id;
  renderAll();
}
function showSection(id){
  document.querySelectorAll('.bottom-nav button').forEach(btn=>btn.classList.toggle('active', btn.dataset.target===id));
  const target=document.getElementById(id);
  if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
}
function resetHome(){
  showSection('homeSection');
}

document.getElementById('koBtn').onclick=()=>{state.lang='ko';renderAll();};
document.getElementById('enBtn').onclick=()=>{state.lang='en';renderAll();};
document.getElementById('applyBtn').onclick=()=>{syncStateFromInputs();renderAll();showSection('itinerarySection');};

const freeSendBtn=document.getElementById('freeSendBtn');
const freeInput=document.getElementById('freeInput');
if(freeSendBtn) freeSendBtn.onclick=handleFreeInput;
if(freeInput) freeInput.addEventListener('keydown',e=>{if(e.key==='Enter') handleFreeInput();});

document.getElementById('googleTranslateBtn').onclick=()=>{window.open(linkForTranslate(document.getElementById('translateInput').value.trim()),'_blank');};
document.querySelectorAll('.bottom-nav button').forEach(btn=>btn.addEventListener('click',()=>{
  if(btn.dataset.role==='home'){resetHome();return;}
  showSection(btn.dataset.target);
}));
window.selectPlace=selectPlace;

renderAll();
