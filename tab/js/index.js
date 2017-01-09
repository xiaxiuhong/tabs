// JavaScript Document
window.onload=function(){
	function MyTab(div_id,autoRun){
		//切换所有的li  li选项卡与div内容对应切换
		//1.找对象
		var oTab=document.getElementById(div_id);
		var oUl_list=oTab.getElementsByTagName("ul")[0];
		var aLi=oUl_list.getElementsByTagName("li");//通过标签名找对象
		
		var oTabItem=oTab.getElementsByClassName("tabItem");//通过class名称找对象
		var n=0;
		var timer;
		
		//2.给每个li绑上点击切换事件
		for(var i=0;i<aLi.length;i++){
			//绑点击事件
			aLi[i].onclick=function(){
				//关掉所有的li的ac  隐藏所有的div
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";//关掉所有的li上的ac
					oTabItem[j].style.display="none";//隐藏所有的div
				};
				//打开自己的ac 打开指定div
				this.className="ac";//打开自己的ac
				oTabItem[this.index].style.display="block";//显示对应编号的div
				n=this.index;
			};
			//发牌照
			aLi[i].index=i;
		};
		//6.tab01盒自动切换，tab02盒点击切换
		if(autoRun){
			  //3.打开间隔定时器
			function skip(){
				timer=setInterval(function(){
					n++;
					  //判断当n等于aLi.length时 返回循环
				    if(n==aLi.length){
						n=0;
					};
					
				  //所有的li都关掉ac，自己第n加上ac
					for(var j=0;j<aLi.length;j++){
						  aLi[j].className="";//关掉所有li上的ac
						  oTabItem[j].style.display="none";//隐藏所有的div
					};
					aLi[n].className="ac";//自己第n加上ac
				    oTabItem[n].style.display="block";//显示对应编号的div
					
				 },1000);
		    }
		 skip();

		//4.鼠标移入oTab盒时 动画停下
		    oTab.onmouseover=function(){
				clearInterval(timer);
			};
		//5.鼠标移出的oTab盒时 动画继续
			oTab.onmouseout=function(){
				skip();
			};

		};
	};
	MyTab("tab01",true);
	MyTab("tab02",0);
}


