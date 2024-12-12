$(function(){
	skipPrint();
	headerPrint();
	sidePrint();
	footerPrint();
	satisPrint();
});

function skipPrint(){
	const html = `<ul class="skip-nav">
		<li><a href="#contents">본문 바로가기</a></li>
		<li><a href="#gnav">주메뉴 바로가기</a></li>
		<li><a href="#sideNav">서브메뉴 바로가기</a></li>
		<li><a href="#footer">푸터 바로가기</a></li>
	</ul>`;
	document.querySelector("body").insertAdjacentHTML('afterbegin', html);
}

function headerPrint(){
	const header = document.querySelector("#header");
	if(!header) return;

	const html = `<div class="header-top">
	<h1><a href="#"><img src="../images/common/top_logo.png" alt="국민연금연구원"></a></h1>
	<div class="zoom-control">
		<button type="button" class="zoomin" onclick="zoomInOut('#wrap', 'in')">글자크기 확대</button> 
		<button type="button" class="zoomout" onclick="zoomInOut('#wrap', 'out')">글자크기 축소</button>
	</div>
	<div class="top-links">
		<a href="#" class="go-eng" target="_blank" title="새창열림">ENG</a>
		<a href="#" class="go-guide" target="_blank" title="새창열림">이용자 가이드</a>
		<a href="#" class="go-nps" target="_blank" title="새창열림">국민연금공단</a>
	</div>                
	<!-- 모바일용 메뉴 -->
	<button class="btn-menu-mobile"><span>메뉴</span></button>
</div>
<div class="header-nav">
	<div class="gnav-inner">
		<nav id="gnav">
			<ul class="gnav-dep1">
				<li class="active"><a href="#">연구원 소개</a>
					<ul class="gnav-dep2">
						<li><a href="#">원장인사말</a></li>
						<li><a href="#">일반현황</a></li>
						<li><a href="#">조직 및 인원현황</a>
							<ul class="gnav-dep3">
								<li><a href="#">조직도</a></li>
								<li><a href="#">직원 및 연락처 찾기</a></li>
							</ul>
						</li>
						<li><a href="#">찾아오시는 길</a></li>
						<li><a href="#">연구수행과제</a>
							<ul class="gnav-dep3">
								<li><a href="#">연구수행과제</a></li>
								<li><a href="#">연구과제제안</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><a href="#">연구원 소식</a>
					<ul class="gnav-dep2">
						<li><a href="#">새소식</a></li>
						<li><a href="#">채용공고</a></li>
						<li><a href="#">회의록</a></li>
						<li><a href="#">해외통신원</a></li>
						<li><a href="#" target="_blank" title="새창열림">제5차 재정계산</a></li>
					</ul>
				</li>
				<li><a href="#">연구원 발간물</a>
					<ul class="gnav-dep2">
						<li><a href="#">연구원 발간물</a></li>
						<li><a href="#">조사통계</a></li>
						<li><a href="#">자료실</a></li>
					</ul>
				</li>
				<li><a href="#">외국의 연금제도</a>
					<ul class="gnav-dep2">
						<li><a href="#">해외 연금제도</a></li>
						<li><a href="#">해외 연금제도 동향</a></li>
						<li><a href="#">해외 연금기금 운용현황</a></li>
					</ul>
				</li>
				<li><a href="#">국민노후보장패널조사</a>
					<ul class="gnav-dep2">
						<li><a href="#">전체</a></li>
						<li><a href="#">소개</a></li>
						<li><a href="#">공지사항</a></li>
						<li><a href="#">조사설계</a></li>
						<li><a href="#">DATA</a>
							<ul class="gnav-dep3">
								<li><a href="#">DATA</a></li>
								<li><a href="#">유저가이드</a></li>
								<li><a href="#">코드북</a></li>
							</ul>
						</li>
						<li><a href="#">조사표</a></li>
						<li><a href="#">보고서</a>
							<ul class="gnav-dep3">
								<li><a href="#">기초분석 보고서</a></li>
								<li><a href="#">테크니컬 리포트</a></li>
								<li><a href="#">리서치 브리프</a></li>
								<li><a href="#">자료 활용 리스트</a></li>
							</ul>
						</li>
						<li><a href="#">학술대회</a></li>
						<li><a href="#">FAQ</a></li>
					</ul>
				</li>
			</ul>
		</nav>
		<a href="#" class="btn-menu-all">전체메뉴 열기</a>
	</div>
</div>                
<div class="mobile-nav">
	<div class="mobile-top-links">
		<a href="#" class="go-guide" target="_blank" title="새창열림">이용자 가이드</a>
		<a href="#" class="go-nps" target="_blank" title="새창열림">국민연금공단</a>
	</div>
	<nav id="gnav-m">
		<ul class="gnav-dep1">
			<li><a href="#">연구원 소개</a>
				<ul class="gnav-dep2">
					<li><a href="#">원장인사말</a></li>
					<li><a href="#">일반현황</a></li>
					<li><a href="#">조직 및 인원현황</a>
						<ul class="gnav-dep3">
							<li><a href="#">조직도</a></li>
							<li><a href="#">직원 및 연락처 찾기</a></li>
						</ul>
					</li>
					<li><a href="#">찾아오시는 길</a></li>
					<li><a href="#">연구수행과제</a>
						<ul class="gnav-dep3">
							<li><a href="#">연구수행과제</a></li>
							<li><a href="#">연구과제제안</a></li>
						</ul>
					</li>
				</ul>
			</li>
			<li><a href="#">연구원 소식</a>
				<ul class="gnav-dep2">
					<li><a href="#">새소식</a></li>
					<li><a href="#">채용공고</a></li>
					<li><a href="#">회의록</a></li>
					<li><a href="#">해외통신원</a></li>
					<li><a href="#" target="_blank" title="새창열림">제5차 재정계산</a></li>
				</ul>
			</li>
			<li><a href="#">연구원 발간물</a>
				<ul class="gnav-dep2">
					<li><a href="#">연구원 발간물</a></li>
					<li><a href="#">조사통계</a></li>
					<li><a href="#">자료실</a></li>
				</ul>
			</li>
			<li><a href="#">외국의 연금제도</a>
				<ul class="gnav-dep2">
					<li><a href="#">해외 연금제도</a></li>
					<li><a href="#">해외 연금제도 동향</a></li>
					<li><a href="#">해외 연금기금 운용현황</a></li>
				</ul>
			</li>
			<li><a href="#">국민노후보장패널조사</a>
				<ul class="gnav-dep2">
					<li><a href="#">전체</a></li>
					<li><a href="#">소개</a></li>
					<li><a href="#">공지사항</a></li>
					<li><a href="#">조사설계</a></li>
					<li><a href="#">DATA</a>
						<ul class="gnav-dep3">
							<li><a href="#">DATA</a></li>
							<li><a href="#">유저가이드</a></li>
							<li><a href="#">코드북</a></li>
						</ul>
					</li>
					<li><a href="#">조사표</a></li>
					<li><a href="#">보고서</a>
						<ul class="gnav-dep3">
							<li><a href="#">기초분석 보고서</a></li>
							<li><a href="#">테크니컬 리포트</a></li>
							<li><a href="#">리서치 브리프</a></li>
							<li><a href="#">자료 활용 리스트</a></li>
						</ul>
					</li>
					<li><a href="#">학술대회</a></li>
					<li><a href="#">FAQ</a></li>
				</ul>
			</li>
		</ul>
	</nav>
</div>`;
	header.innerHTML = html;
}

function footerPrint(){
	const footer = document.querySelector("#footer");
	if(!footer) return;

	const html = ` <div class="footer-inner">
	<div class="footer-links">
		<ul class="inner-links">
			<li><a href="#" class="privacy">개인정보처리방침</a></li>
			<li><a href="#">이용약관</a></li>
			<li><a href="#">홈페이지 이용안내</a></li>
			<li><a href="#">RSS</a></li>
		</ul>
	</div>
	<div class="footer-info">
		<address>54870 전라북도 전주시 덕진구 기지로 180(만성동, 국민연금)</address>
		<p class="footer-notice">매월 마지막 토요일 00:00 ~ 04:00까지는 정기적인 서비스 점검으로 서비스 이용이 일시 중단됩니다. <br>
			본 홈페이지에 게시된 이메일 주소가 자동수집되는 것을 허용하지 않으며, 위반시 정보통신망법에 의해 처벌될 수 있습니다.</p>
		<p class="footer-copyright">Copyright. nps.or.kr. All rights reserved.</p>
	</div>
</div>`;
	footer.innerHTML = html;
}

function sidePrint(){
	const sideNav = document.querySelector("#sideNav");
	if(!sideNav) return;

	let menus = [];
	let html = '';
	const num = document.querySelector("#sideNav").getAttribute('data-num');
	const num2 = document.querySelector("#sideNav").getAttribute('data-num2');

	menus[0] = `<li class="dep2"><button type="button">원장인사말</button>
		<ul class="depth-list">
			<li><a href="#">원장인사말</a></li>
			<li><a href="#">일반현황</a></li>
			<li><a href="#">조직 및 인원현황</a></li>
			<li><a href="#">찾아오시는 길</a></li>
			<li><a href="#">연구수행과제</a></li>
		</ul>
	</li>
	<li class="dep3 sub3"><button type="button">조직도</button>
		<ul class="depth-list">
			<li><a href="#">조직도</a></li>
			<li><a href="#">직원 및 연락처 찾기</a></li>
		</ul>
	</li>
	<li class="dep3 sub5"><a href="#">연구수행과제</a>
		<ul class="gnav-dep3">
			<li><a href="#">연구수행과제</a></li>
			<li><a href="#">연구과제제안</a></li>
		</ul>
	</li>`;

	menus[1] = `<li class="dep2"><button type="button">새소식</button>
		<ul class="depth-list">
			<li><a href="#">새소식</a></li>
			<li><a href="#">채용공고</a></li>
			<li><a href="#">회의록</a></li>
			<li><a href="#">해외통신원</a></li>
			<li><a href="#" target="_blank" title="새창열림">제5차 재정계산</a></li>
		</ul>
	</li>`;

	menus[2] = `<li class="dep2"><button type="button">연구원 발간물</button>
		<ul class="depth-list">
			<li><a href="#">연구원 발간물</a></li>
			<li><a href="#">조사통계</a></li>
			<li><a href="#">자료실</a></li>
		</ul>
	</li>`;

	menus[3] = `<li class="dep2"><button type="button">해외 연금제도</button>
		<ul class="depth-list">
			<li><a href="#">해외 연금제도</a></li>
			<li><a href="#">해외 연금제도 동향</a></li>
			<li><a href="#">해외 연금기금 운용현황</a></li>
		</ul>
	</li>`;

	menus[4] = `<li class="dep2"><button type="button">전체</button>
		<ul class="depth-list">
			<li><a href="#">전체</a></li>
			<li><a href="#">소개</a></li>
			<li><a href="#">공지사항</a></li>
			<li><a href="#">조사설계</a></li>
			<li><a href="#">DATA</a></li>
			<li><a href="#">조사표</a></li>
			<li><a href="#">보고서</a></li>
			<li><a href="#">학술대회</a></li>
			<li><a href="#">FAQ</a></li>
		</ul>
	</li>
	<li class="dep3 sub5"><button type="button">DATA</button>
		<ul class="depth-list">
			<li><a href="#">DATA</a></li>
			<li><a href="#">유저가이드</a></li>
			<li><a href="#">코드북</a></li>
		</ul>
	</li>
	<li class="dep3 sub7"><a href="#">기초분석 보고서</a>
		<ul class="gnav-dep3">
			<li><a href="#">기초분석 보고서</a></li>
			<li><a href="#">테크니컬 리포트</a></li>
			<li><a href="#">리서치 브리프</a></li>
			<li><a href="#">자료 활용 리스트</a></li>
		</ul>
	</li>`;

	menus.forEach((el, index)=>{
		if(index == (Number(num)-1)){
			html = menus[index];
		}		
	});

	const side = `<div class="side-inner">
		<nav class="side-nav">
			<ul class="snav-list">
				<li class="home"><span>home</span></li>
				<li class="dep1"><button type="button">연구원 소개</button>
					<ul class="depth-list">
						<li><a href="#">연구원 소개</a></li>
						<li><a href="#">연구원 소식</a></li>
						<li><a href="#">연구원 발간물</a></li>
						<li><a href="#">외국의 연금제도</a></li>
						<li><a href="#">국민노후보장패널조사</a></li>
					</ul>
				</li>
				${html}			
			</ul>
		</nav>
		<button class="btn-search-view">통합검색 바로가기</button>
	</div>
	<div class="top-search">
		<div class="top-search-inner">
			<fieldset>
				<legend>통합검색</legend>
				<input type="text" class="txt-keyword" id="searchTop" name="query" title="검색어 입력" placeholder="검색어를 입력하세요">
				<input type="submit" value="검색" class="btn-search">
			</fieldset>
			<button type="button" class="btn-search-close">통합검색 닫기</button>
		</div>
	</div>`;

	sideNav.innerHTML = side;

	const dep3 = document.querySelectorAll('.snav-list .dep3');
	dep3.forEach((el)=>{
		el.style.display = 'none';
	});
	if(num2){
		document.querySelector(`.snav-list .dep3.sub${num2}`).style.display = 'block';
	}else{
		document.querySelector(`.snav-list .dep2 button`).style.color = '#314EB4';
		document.querySelector(`.snav-list .dep2 button`).style.fontWeight = 'bold';
	}

}

function satisPrint(){
	const contents = document.querySelector(".contents-bottom");
	if(!contents) return;

	const html = `<div class="page-satisfaction">                            
		<div class="satisfaction-header">
			<p class="slogan">“국민을 든든하게 연금을 튼튼하게”</p>
			<div class="person-info"><span class="label">담당:</span> 연금급여실 연금기획부 홍길동(063-713-0000)</div>
		</div>
		<div class="satisfaction-survey">    
			<fieldset>
			<legend>현재페이지 만족도 조사</legend>                        
			<div class="survey-form">                                
				<div class="survey-item">                                    
					<p class="qustion">현재 페이지의 내용과 사용 편의성에 대해 만족하십니까?</p>
					<ul class="options">
						<li><label class="inp-radio"><input type="radio" name="stat"><span>매우만족</span></label></li>
						<li><label class="inp-radio"><input type="radio" name="stat"><span>만족</span></label></li>
						<li><label class="inp-radio"><input type="radio" name="stat"><span>보통</span></label></li>
						<li><label class="inp-radio"><input type="radio" name="stat"><span>불만족</span></label></li>
						<li><label class="inp-radio"><input type="radio" name="stat"><span>매우불만족</span></label></li>
					</ul>                                    
				</div>
				<input type="button" value="확인" class="btn btn-submit">                               
			</div>      
			</fieldset>                      
		</div>
	</div>
	<div class="nps-callcenter">
		<h2 class="callcenter-title">국민연금 고객센터</h2>
		<div class="callcenter-number"><img src="../images/common/call_number.png" alt="상담전화는 국번없이 1355"></div>
	</div>`;

	if(document.querySelector('body').classList.contains('main')) return;
	//contents.insertAdjacentHTML('beforeend', html);
	contents.innerHTML = html;

}