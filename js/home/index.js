console.log("myApp");

var mail_Path = "res/mail/mails/";
var mail_Filename = ['1.我是尼克歐', '1_Takao@77mail.com'];
var mail_Filetype = ".svg";

// var mail_address = [
// 				'1.我是尼克歐', 
// 				'1_Takao@77mail.com',
// 				'2.我是湯沐',
// 				'2_summertime@77mail.com',
// 				'3.我是阿拉丁',
// 				'3_paris@77mail.com',
// 				'4.我是辛蒂',
// 				'4_sanpo@77mail.com',
// 				'5.我叫伯利',
// 				'5_dayoff@77mail.com',
// 				'6.我叫火機',
// 				'6_unique@77mail.com',
// 				'7.我是22565',
// 				'7_luck@77mail.com',
// 				'8.我是芬',
// 				'8_coulour@77mail.com',
// 				'9.我是第172次扇形車庫',
// 				'9_xiguan@77mail.com',
// 				'10.我是他最忠實的僕人',
// 				'10_1109@77mail.com',
// 				'11.我是傑克孫',
// 				'11_AA@77mail.com',
// 				'12.我是狄嘉',
// 				'13.我是缺點',
// 				'14.我是秋天才',
// 				'15.我是羅羅'
// 				];

var mail_address = [
	'我是尼克歐', 
	'Takao@77mail.com',
	'我是辛蒂',
	'sanpo@77mail.com',
	'luck@77mail.com',
	'@@@ About the Exhibition @@@',
	'我是芬',
	'coulour@77mail.com',
	'我是第172次扇形車庫',
	'xiguan@77mail.com',
	'我是他最忠實的僕人',
	'我是湯沐',
	'summertime@77mail.com',
	'AA@77mail.com',
	'我是狄嘉',
	'morning@77mail.com',
	'@@@ About us @@@',
	'我叫伯利',
	'dayoff@77mail.com',
	'我叫火機',
	'unique@77mail.com',
	'我是22565',
	'我是缺點',
	'我是秋天才',
	'我是羅羅',
	'我是阿拉丁',
	'paris@77mail.com',
	'1109@77mail.com',
	'我是傑克孫'
	];

function addElementDiv(obj,i) {
	var parent = document.getElementById(obj);
	var a = document.createElement("a");
	//a.setAttribute("href", "page"+i+".html");
	a.setAttribute("href", "email.html?_Thank_you_for_your_email="+mail_address[i]);
	a.setAttribute("class", "ic_a");
	a.setAttribute("style", "color: black;");
	var div = document.createElement("div");
	// div.setAttribute("class", "index_container-mail_"+i%2);
	div.setAttribute("class", "gridbox email clickBox emailtag"+i%2);
	if(i == 5 || i == 16){
		div.setAttribute("style", "font-style: oblique;");
	}
	// div.setAttribute("class", "gridbox");
	// div.innerHTML = mail_address[i];

	var img = document.createElement("img");
	img.setAttribute("src", "res/home/Icons/email_icon.svg");
	img.setAttribute("style", "max-width:30%;max-height:30%;margin-left: 15px;margin-right: 6px;");
	var p = document.createElement("p");
	p.innerHTML = mail_address[i];
	if(i == 5 || i == 16){
		p.setAttribute("style", "color: #ffc331;;");
	}

	
	div.appendChild(img);
	div.appendChild(p);
	a.appendChild(div);
	parent.appendChild(a);
	console.log("112ss3");
}

function addss() {
	for (i = 0; i < mail_address.length; i++) { 
		addElementDiv("emails",i);
	}
}
addss();