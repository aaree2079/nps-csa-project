// 전역변수
var isMobile;

// 실행
$(document).ready(function(){

	commonUI.init();

});

const commonUI = {
	init(){

		this.deviceWidthCheck();
		this.deviceCheck();

		this.gnav.init();
		this.mobileNav.init();
		this.sideNav.init();
		this.topSearch.init();

		this.accordion();

		//this.relatedSite();
		this.tableScrollMarking();

	},
	deviceCheck: function(){
		var UserAgent = navigator.userAgent;
		if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
			isMobile = true;
			document.querySelector('html').classList.add('mobile');
		} else {
			isMobile = false;
			document.querySelector('html').classList.add('pc');
		}
	},
	deviceWidthCheck: function(){
		const $html = document.querySelector('html');
		widthCheck();

		let timer = null;
		window.addEventListener('resize', ()=>{
			clearTimeout(timer);
			timer = setTimeout(function () {
				widthCheck();
			}, 300);
		});           

        function widthCheck(){
            const winWidth = document.querySelector('html').offsetWidth;
            if(winWidth > 1024){
                $html.classList.remove("w-mobile");
				$html.classList.add("w-pc");
            }else{
				$html.classList.remove("w-pc");
				$html.classList.add("w-mobile");
            }               
        }       
	},
	gnav: {
		init: function () {
			this._initElements();
			this._initEvents();
		},
		_initElements: function () {
			this.headerNav = document.querySelector(".header-nav");
			this.gnav = document.querySelector("#gnav");
			this.dep1 = document.querySelectorAll(".header-nav .gnav-dep1 > li > a");
			this.btnMenu = document.querySelector('.btn-menu-all');
			this.activeName = "active";
			this.all_focus = document.querySelectorAll('#gnav a');
			
		},
		_initEvents: function () {

			if(!this.gnav) return;

			this.dep1.forEach(item =>{
				item.addEventListener("click", (e) => {
					e.preventDefault();
					if(this.headerNav.classList.contains(this.activeName)){
						this.navCloseAll();
					}else{
						this.navOpen();
					}		
				});
			});
			
			this.headerNav.addEventListener("mouseleave", () => {
				this.navCloseAll();
			});

			this.btnMenu.addEventListener('click', ()=>{
				if(this.btnMenu.classList.contains('close')){					
					this.navCloseAll();
				}else{					
					this.navOpenAll();
				}            
			});
	
			this.btnMenu.addEventListener('keydown', (e)=>{
				if(this.btnMenu.classList.contains('close')){
					if(e.key=='Tab'){
						this.gnav.setAttribute('tabIndex','0');
						this.gnav.focus();
					}
				}            
			});
			
			this.all_focus[this.all_focus.length-1].addEventListener('blur', ()=>{
				this.navCloseAll();
			});
		},
		navOpen: function(){
			this.headerNav.classList.add(this.activeName);
		},
		navOpenAll: function(){
			this.headerNav.classList.add(this.activeName);
			this.headerNav.classList.add('all');
			this.btnMenu.classList.add('close');
			this.btnMenu.textContent = '전체메뉴 닫기';
		},
		navCloseAll: function(){
			this.headerNav.classList.remove(this.activeName);
			this.headerNav.classList.remove('all');
			this.btnMenu.classList.remove('close');
			this.btnMenu.textContent = '전체메뉴 열기';
		},
	},
	mobileNav:{
		init: function () {
			this._initElements();
			this._initEvents();
		},
		_initElements: function () {
			this.btnMenu = document.querySelector('.btn-menu-mobile');
			this.headerNav = document.querySelector(".mobile-nav");
			this.gnav = document.querySelector("#gnav-m");			
			this.html = document.querySelector('html');
			this.dep1 = document.querySelectorAll(".mobile-nav .gnav-dep1 > li > a");
			this.dep2 = document.querySelectorAll('.mobile-nav .gnav-dep2');
			this.selectedItem = document.querySelector('.mobile-nav .gnav-dep1 > .active');
			this.activeName = "active";
	
		},
		_initEvents: function () {

			if(!this.headerNav) return;

			this.dep2.forEach((item)=>{
				item.parentElement.classList.add('is-sub');
			});

			this.btnMenu.addEventListener('click', (e)=>{
				if(e.target.classList.contains('active')){
					this.navClose();
				}else{
					this.navOpen();
					commonUI.topSearch.close();
				}
			});

			this.headerNav.addEventListener('click', (e)=>{	
				[...this.dep1].forEach(item =>{	
					//dep1.parentElement.classList.toggle('active', dep1===e.target);
					if(item===e.target) {
						if(!e.target.parentElement.classList.contains('active')){
							if(this.selectedItem) this.selectedItem.classList.remove('active');
						}
						item.parentElement.classList.toggle('active');
						this.selectedItem = e.target.parentElement;
					}
				});
				//this.dep1 = e.target.parentElement;
			});

		},
		navOpen: function(){
			this.btnMenu.classList.add('active');
			this.html.style.overflow = "hidden";
			this.headerNav.classList.add('active');			
		},
		navClose: function(){
			this.btnMenu.classList.remove('active');
			this.html.style.overflow = "auto";
			this.headerNav.classList.remove('active');
		},

	},
	sideNav:{
		init: function () {
			this._initElements();
			this._initEvents();
		},
		_initElements: function () {

			this.sideNav = document.querySelector('.side-nav');
			this.btn = document.querySelectorAll('.side-nav button');
			//this.dep2 = document.querySelectorAll('.side-nav .depth-list');
			//this.selectedItem = document.querySelector('.side-nav .snav-dep1 > .active');
			this.activeName = "active";
	
		},
		_initEvents: function () {

			if(!this.sideNav) return;
			
			[...this.btn].forEach(item =>{
				item.addEventListener('click', (e)=>{
					item.parentElement.classList.toggle('active');
				});
				item.parentElement.addEventListener('mouseleave', (e)=>{
					item.parentElement.classList.remove('active');
				});					
			});

		}

	},
	topSearch: {
		init: function () {
			this._initElements();
			this._initEvents();
		},
		_initElements: function (){
			this.form = document.querySelector('.top-search');
			this.btnOpen = document.querySelector('.btn-search-view');
			this.btnClose = document.querySelector('.btn-search-close');
		},
		_initEvents: function () {
			if(this.btnOpen){
				this.btnOpen.addEventListener('click', ()=>{
					this.open();
				});
			}
			if(this.btnClose){
				this.btnClose.addEventListener('click', ()=>{
					this.close();					
				});
			}
		},
		open: function(){
			this.form.classList.add('active');
		},
		close: function(){
			this.form.classList.remove('active');
		}		
	},
	tabNav: function(target, viewNum){
		const tab = document.querySelector(target);
		const optIndex = viewNum;		

		const tabFun = {
			init: function () {
				this._initElements();
				this._initEvents();
			},
			_initElements: function () {
				this.tabNav_a = tab.querySelectorAll(".tabNav a");
				this.tabContent = tab.querySelectorAll(".tabContent");
				this.activeName = "active";

				if(optIndex != undefined && optIndex <= this.tabNav_a.length && 0 < optIndex ){
					this.optIndex = optIndex -1;
				}else{
					this.optIndex = 0;
				}
				this.selectedTab = this.tabNav_a[this.optIndex];
			},
			_initEvents: function () {
				this.setSelectItem(this.selectedTab, this.optIndex);
				this.tabNav_a.forEach((el, index) => {					
					el.addEventListener("click", (e) => {						
						e.preventDefault();
						this.setSelectItem(el, index);
					});
				});
			},
			setSelectTab: function (el) {
				this.selectedTab.classList.remove(this.activeName);
				this.selectedTab = el;
				this.selectedTab.classList.add(this.activeName);
			},
			setSelectContents: function (num) {
				this.tabContent.forEach((el, index) => {
					if (index == num) {
						el.classList.add(this.activeName);
						el.setAttribute('title', '선택됨');
					} else {
						el.classList.remove(this.activeName);
						el.removeAttribute('title');
					}
				});
			},
			setSelectItem: function (el, index){
				this.setSelectTab(el);
				this.setSelectContents(index);
			}
		}
		tabFun.init();

	},
	slider: function(target, opt, perView){

		const sliderTarget = document.querySelector(target);
		const sliderName = target;
		const sliderOption = opt;

		const siderFun = {
			_init: function(){
				this._initElements();
				this._initEvents();
			},
			_initElements: function(){			

				this.sliderTarget = `${sliderName} .swiper-container`;

				this.sliderBtnStop = sliderTarget.querySelector(".btn-stop");
				this.sliderBtnStart = sliderTarget.querySelector(".btn-start");
				this.sliderBtnPrev = sliderTarget.querySelector(".btn-prev");
				this.sliderBtnNext = sliderTarget.querySelector(".btn-next");				

			},
			_initEvents: function(){

				this.swiperSlider = new Swiper( this.sliderTarget , sliderOption );

				//포커스
				let lastItem = perView ? perView : 1;			
				
				//포커스될 아이템
				newSliderChanage();	

				this.swiperSlider.on("transitionStart", ()=>{					
					newSliderChanage();
				});
				
				function newSliderChanage(){

					let slides = sliderTarget.querySelectorAll('.swiper-slide');
					var activeSlide = sliderTarget.querySelector(".swiper-slide-active");

					slides.forEach(el=>{
						if(el.querySelector('a')){
							if(el.classList.contains('swiper-slide-active')){
								el.querySelector('a').setAttribute('tabIndex', '0');
							}else{
								el.querySelector('a').setAttribute('tabIndex', '-1');
							}							
						}						
					});
					
					//배너가 여러개일때
					
					if(1 < perView){
						for(var i=1; i<=perView-1 ; i++){
							activeSlide = activeSlide.nextElementSibling;
							activeSlide.querySelector('a').setAttribute("tabIndex", "0");
						}
					}else{
						
					}
					lastItem = activeSlide.getAttribute('data-swiper-slide-index');
				}
				
				const all_a = `${sliderName} .swiper-slide a`;

				$(document).on("focus", all_a , ()=>{
					this.sliderStop();
				});
				
				$(document).on("blur", all_a , (e)=>{
					if($(e.target).parent().attr("data-swiper-slide-index") == lastItem){
						this.sliderStart();
					}
				});				

				if(this.sliderBtnPrev){
					this.sliderBtnPrev.addEventListener("click", ()=>{
						this.sliderPrev();
					});
				};
				if(this.sliderBtnNext){
					this.sliderBtnNext.addEventListener("click", ()=>{
						this.sliderNext();
					});
				};
				if(this.sliderBtnStop){
					this.sliderBtnStop.addEventListener("click", ()=>{
						if(this.sliderBtnStop.classList.contains('active')){
							this.sliderStart();
							this.sliderBtnStop.classList.remove("active");
							this.sliderBtnStop.querySelector('.toggle').innerHTML = "자동움직임 멈춤";
						}else{
							this.sliderStop();
							this.sliderBtnStop.classList.add("active");
							this.sliderBtnStop.querySelector('.toggle').innerHTML = "자동움직임 시작";
						}						
					});
				};
				if(this.sliderBtnStart){
					this.sliderBtnStart.addEventListener("click", ()=>{
						this.sliderStart();
					});
				};

			},
			sliderStart: function(){
				this.swiperSlider.autoplay.start();
			},
			sliderStop: function(){
				this.swiperSlider.autoplay.stop();	
			},
			sliderNext: function(){
				this.swiperSlider.slideNext();
			},
			sliderPrev: function(){
				this.swiperSlider.slidePrev();
			}
		}
		siderFun._init();
	},
	modal: function(target, backObj){
		const modal = document.querySelector(target);
		const modalWrap = modal.querySelector('.modalWrap');
		const btns = modal.querySelectorAll('.btn-close');

		function modalOpen(){
			modal.classList.add('active');
			modalWrap.setAttribute('tabindex', '0');
			modalWrap.focus();			
		}
		function modalClose(){
			modal.classList.remove('active');
			modalWrap.removeAttribute('tabIndex');
			if(backObj) document.querySelector(backObj).focus();
		}

		modalOpen();
		btns.forEach((btn)=>{
			btn.addEventListener('click',()=>{
				modalClose();
			});
		});

		const focusItems = modal.querySelectorAll("input, select, textarea, button, a");
		focusItems[focusItems.length-1].addEventListener('blur', function(){			
			modalWrap.focus();
		});

	},
	accordion: function(){

		const target = document.querySelectorAll('.accWrap');
		if(target.length < 1) return;

		target.forEach((el, index)=>{
			const list = el.querySelectorAll('.accItem');
			let selectedItem = el.querySelector('.accItem.active');

			[...list].forEach((item)=>{

				const btn = item.querySelector('.accSummary');

				item.querySelector('.accSummary').addEventListener('click', (e)=>{
					e.preventDefault();
	
					if(item.classList.contains('active')){
						close(item);
						selectedItem = null;
					}else{
						if(selectedItem) {
							close(selectedItem);
						}
						item.classList.add('active');
						btn.setAttribute('title', '선택됨');
						selectedItem = item;
					}
	
				});
			});

		});
		function close(el){
			el.classList.remove('active');
			el.querySelector('.accSummary').removeAttribute('title');
		}

	},
	relatedSite: function(){
		const relatedSite = document.querySelector('.related-links');
        const relatedSiteList = document.querySelectorAll('.related-links a');
        relatedSiteList.forEach((el, index)=>{
           el.addEventListener('blur', ()=>{
            if(index == relatedSiteList.length-1) relatedSite.removeAttribute('open');
           });            
        });
	},
	tableScrollMarking: function(){
		const table = document.querySelectorAll('.con-table');
		const handIcon = `<span class="ic-handle"></span>`;

		if(table.length < 1) return;
		
		handleSet();
		window.addEventListener('resize', ()=>{
			handleSet();
		});

		//생성
		function handleSet(){		
			table.forEach(item => {
				scrolledCheck(item);
			});
		}
		//스크롤체크
		function scrolledCheck(item){
			if(item.scrollWidth > item.offsetWidth){
				if(item.scrollLeft < 1){
					item.classList.add('table-scrolled');

					if(!item.querySelector('.ic-handle')){
						item.insertAdjacentHTML('afterbegin', handIcon);
						item.addEventListener('scroll', ()=>{
							scrolledCheck(item);
						});
					}

				}else{
					item.classList.remove('table-scrolled');
				}					
			}else{
				item.classList.remove('table-scrolled');
			}
		}
        
	},
};