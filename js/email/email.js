var mail_Path = "res/email/emails/";
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
    '我是湯沐',
    'summertime@77mail.com',
    '我是阿拉丁',
    'paris@77mail.com',
    '我是辛蒂',
    'sanpo@77mail.com',
    '我叫伯利',
    'dayoff@77mail.com',
    '我叫火機',
    'unique@77mail.com',
    '我是22565',
    'luck@77mail.com',
    '我是芬',
    'coulour@77mail.com',
    '我是第172次扇形車庫',
    'xiguan@77mail.com',
    '我是他最忠實的僕人',
    '1109@77mail.com',
    '我是傑克孫',
    'AA@77mail.com',
    '我是狄嘉',
    'morning@77mail.com',
    '我是缺點',
    '我是秋天才',
    '我是羅羅'
    ];

function getURLtag(){
    //先取得網址字串，假設此頁網址為「diary_test.html?year=2015」
    var url = location.href;
  
    //再來用去尋找網址列中是否有資料傳遞(QueryString)
    if(url.indexOf('?')!=-1)
    {
        var id = "";
        //在此直接將各自的參數資料切割放進ary中
        var ary = url.split('?')[1].split('&');
        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
        
        //下迴圈去搜尋每個資料參數
        for(i=0;i<=ary.length-1;i++)
        {
            //如果資料名稱為id的話那就把他取出來
            if(ary[i].split('=')[0] == '_Thank_you_for_your_email')
                id = ary[i].split('=')[1];
        }
        return id;
    }
  }

function loadtest(){
    var diaryfile = getURLtag();
    let imgURL = mail_Path + diaryfile + mail_Filetype;
    console.log(decodeURIComponent(diaryfile));
    addElement("emails",imgURL);
    addTitle("header-title",decodeURIComponent(diaryfile));
}
loadtest();

function addElement(obj,index) {
    var parent = document.getElementById(obj);
    var diaryBox = document.createElement("img");
    diaryBox.setAttribute("class", "mailImg");
    diaryBox.setAttribute("src", index);
    parent.appendChild(diaryBox);
}

function addTitle(obj,index) {
    var parent = document.getElementById(obj);
    var diaryBox = document.createElement("p");
    // diaryBox.setAttribute("class", "mailImg");
    diaryBox.innerText = index;
    // diaryBox.setAttribute("src", index);
    parent.appendChild(diaryBox);
}