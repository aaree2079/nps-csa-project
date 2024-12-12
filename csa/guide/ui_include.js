$(function(){
	headerPrint();
});

function headerPrint(){
	if(!document.querySelector(".guideHeader")) return;

	const headerHtml = `<h1>UI</h1>
	<nav>
		<ul class="guideNav">
			<li><a href="standard.html">기본환경</a></li>
			<li><a href="class.html">class name</a></li>
			<li><a href="button.html">Elements</a>
				<ul class="nav-dep2">
					<li><a href="button.html">버튼</a></li>
					<li><a href="text.html">텍스트</a></li>
					<!--<li><a href="labels.html">Labels</a></li>-->
					<li><a href="bullets.html">리스트 타입</a></li>
					<li><a href="images.html">이미지(반응형)</a></li>			
					<li><a href="section.html">단락(예시)</a></li>
					<li><a href="icon.html">아이콘</a></li>
				</ul>
			</li>
			<li><a href="form_elements.html">Forms</a>
				<ul class="nav-dep2">
					<li><a href="form_elements.html">폼 요소</a></li>
					<li><a href="form_patterns.html">폼 패턴</a></li>
				</ul>
			</li>
			<li><a href="text.html">Patterns</a>
				<ul class="nav-dep2">
					<li><a href="table.html">Tables</a></li>
					<li><a href="tab.html">Tab</a></li>
					<!--<li>Tooltip</li>-->
					<li><a href="accordion.html">accordion</a></li>
					<li><a href="modal.html">modal</a></li>
					<li><a href="swiper.html">swiper</a></li>
					<li><a href="board_list.html">Board List</a></li>
					<li><a href="board_view.html">Board view</a></li>
					<li><a href="board_regist.html">Board regist</a></li>					
				</ul>
			</li>

		</ul>
	</nav>`;
	document.querySelector(".guideHeader").innerHTML = headerHtml;
}