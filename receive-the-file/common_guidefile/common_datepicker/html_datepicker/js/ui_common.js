$(document).ready(function(){

	commonUI.init();

});

const commonUI = {
	init(){

		this.useDatepicker();
		this.useMonthpicker();

	},
	useDatepicker: function(){
		const input = document.querySelectorAll('.useDatepicker');
		if(input.length < 1) return;

		var holidayData = [
			{'mmdd':'1-1','title':'신정'},
			{'mmdd':'3-1','title':'3.1절'},
			{'mmdd':'5-5','title':'어린이날'},
			{'mmdd':'5-10','title':'석가탄신일'},
			{'mmdd':'6-6','title':'현충일'},
			{'mmdd':'8-15','title':'광복절'},
			{'mmdd':'10-3','title':'개천절'},
			{'mmdd':'10-9','title':'한글날'},
			{'mmdd':'12-25','title':'크리스마스'}
		];

		$(input).each(function(){
			if(!$(this).hasClass(".hasDatepicker")){
				var minDate = $(this).attr("data-minDate");
				var maxDate = $(this).attr("data-maxDate");
				var dateFormat = "yy-mm-dd";
				if($(this).attr("data-format")){
					dateFormat = $(this).attr("data-format");
				}
				$(this).datepicker({
					prevText: '이전 달',
					nextText: '다음 달',
					monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
					monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
					dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
					dayNamesShort: ['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					dateFormat: dateFormat,
					showMonthAfterYear: true,
					yearSuffix: '&nbsp;/',
					minDate: minDate,
					maxDate: maxDate,
					changeMonth: true,
					changeYear: true,
					yearRange: 'c-80:c+1',
					beforeShowDay: function(date){
						var holidayCheck = false;
						var mmdd = (date.getMonth() + 1)+"-"+date.getDate();
						for(var i=0; i<holidayData.length; i++){
							if(holidayData[i].mmdd == mmdd){
								holidayCheck = true;
								return [true, "date-holiday", holidayData[i].title];
								break;
							}
						}
						if(holidayCheck == false){
							return [true, ""];
						}
					},
					onSelect: function(selectedDate){
					},
					onClose: function (selectedDate) {
                        if ($(this).hasClass('dateFrom')) {
							let dateTo = $(this).parent().find('.dateTo');
							if(dateTo.length < 1){
								dateTo = $($(this).attr('data-to'));
							}
                            if (selectedDate != '' && dateTo.val() != '') {
                                if (selectedDate > dateTo.val()) {
                                    //alert("시작날짜는 종료날짜보다 작아야 합니다.");
									checkVailds.vaildMsg(this, '시작날짜는 종료날짜보다 작아야 합니다.');
                                    $(this).val('');
                                    return;
                                }
                            }
                        } else if ($(this).hasClass('dateTo')) {
							let dateFrom = $(this).parent().find('.dateFrom');
							if(dateFrom.length < 1){
								dateFrom = $($(this).attr('data-from'));
							}
                            if(selectedDate != '' && dateFrom.val() != ''){
                                if(dateFrom.val() > selectedDate){
                                    //alert("종료날짜는 시작날짜보다 커야 합니다.");
									checkVailds.vaildMsg(this, '종료날짜는 시작날짜보다 커야 합니다.');
                                    $(this).val('');
                                    return;
                                }
                            }
                        }
                    },
				});

				$(window).resize(()=>{
					$(this).datepicker('hide');
				});

			}
		});

		input.forEach(el=>{
			el.addEventListener('click', ()=>{
				$('.ui-datepicker-year').attr('title', '연도 선택');
				$('.ui-datepicker-month').attr('title', '월 선택');
				$('.ui-datepicker-calendar').prepend('<caption>'+ $('.ui-datepicker-month [selected]').text() +'월 달력 - 날짜선택</caption>');
			});
		});

	},
	useMonthpicker: function(){
		const input = document.querySelectorAll('.useMonthpicker');
		if(input.length < 1) return;

		$(input).each(function(){
			$(this).monthpicker({
				showOn: "focus",
				monthNames: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
				monthNamesShort: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
				changeYear: true,
				yearRange: 'c-2:c+2',
				dateFormat: 'yy-mm',
				//buttonImage: "images/calendar.png",
				//buttonImageOnly: true,
				onSelect: function(){
				},
				onClose: function(selectedMonth){
					if($(this).hasClass("dateFrom")) {
						if(selectedMonth != "" && $(this).parent().children(".dateTo").val() != ""){
							if(selectedMonth > $(this).parent().children(".dateTo").val()){
								checkVailds.vaildMsg(this, '시작월은 종료월보다 작아야 합니다.');
								$(this).val("");
								return;
							}
						}
					}else if($(this).hasClass("dateTo")) {
						if(selectedMonth != "" && $(this).parent().children(".dataFrom").val() != ""){
							if($(this).parent().children(".dateFrom").val() > selectedMonth){
								checkVailds.vaildMsg(this, '종료월은 시작월보다 커야 합니다.');
								$(this).val("");
								return;
							}
						}
					}
				},
			});

			$(window).resize(()=>{
				$(this).monthpicker('hide');
			});
		});

		input.forEach(el=>{
			el.addEventListener('click', ()=>{
				$('.ui-datepicker-year').attr('title', '연도 선택');
			});
		});

	},

};


const checkVailds = {
	vaildMsg: function(input, msg){

		document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="vaildToastPop">${msg}</div>`);

		const msgPop = $('.vaildToastPop');
		msgPop.css({
            'top' : $(input).offset().top + $(input).height() + 5,
            'left' : $(input).offset().left
        });

		clearTimeout(this._vaildMsgTimer);
		this._vaildMsgTimer = setTimeout(()=>{
			msgPop.fadeOut(200, function() {
                msgPop.remove();
            });
		},1500);

	},
}