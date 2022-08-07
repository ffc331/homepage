
function getBase64(url){
    //通過建構函式來建立的 img 例項，在賦予 src 值後就會立刻下載圖片，相比 createElement() 建立 <img> 省去了 append()，也就避免了文件冗餘和汙染
    var Img = new Image(),
    dataURL='';
    Img.src=url;
    // Img.setAttribute("crossOrigin",'Anonymous')
    Img.onload=function(){ //要先確保圖片完整獲取到，這是個非同步事件
        var canvas = document.createElement("canvas"), //建立canvas元素
        width=Img.width, //確保canvas的尺寸和圖片一樣
        height=Img.height;
        canvas.width=width;
        canvas.height=height;
        canvas.getContext("2d").drawImage(Img,0,0,width,height); //將圖片繪製到canvas中
        dataURL=canvas.toDataURL('image/jpeg'); //轉換圖片為dataURL
        changeImgSRC(dataURL);
    };
}

function changeImgSRC(dataURL){
    document.getElementById("imgid").src=dataURL;
}

// getBase64('img.png');

// Canvas DOM 元素 
const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
// ctx.fillStyle = "#ffc53125";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

//起始點座標
let x1= 0
let y1= 0

// 終點座標
let x2= 0
let y2= 0

// 宣告一個 hasTouchEvent 變數，來檢查是否有 touch 的事件存在
const hasTouchEvent = 'ontouchstart' in window ? true : false

// 透過上方的 hasTouchEvent 來決定要監聽的是 mouse 還是 touch 的事件
const downEvent = hasTouchEvent ? 'ontouchstart' : 'mousedown'
const moveEvent = hasTouchEvent ? 'ontouchmove' : 'mousemove'
const upEvent = hasTouchEvent ? 'touchend' : 'mouseup'

// 宣告 isMouseActive 為滑鼠點擊的狀態，因為我們需要滑鼠在 mousedown 的狀態時，才會監聽 mousemove 的狀態
let isMouseActive = false

canvas.addEventListener(downEvent, function(e){
  isMouseActive = true
})

canvas.addEventListener(downEvent, function(e){
  isMouseActive = true  
  x1 = e.offsetX
  y1 = e.offsetY

  ctx.lineWidth = 5
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
})

canvas.addEventListener(moveEvent, function(e){
      if(!isMouseActive){
        return
      }
      // 取得終點座標
      x2 = e.offsetX
      y2 = e.offsetY

      // 開始繪圖
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()

      // 更新起始點座標
      x1 = x2
      y1 = y2
})

canvas.addEventListener(upEvent, function(e){
  isMouseActive = false
})

const saveObj = document.getElementsByClassName("save");
for (var i=0; i < saveObj.length; i++) {
  saveObj[i].onclick = function(){
    var _msg = $("#saysth").val();
    var _url = canvas.toDataURL();
    //利用toDataURL() 把canvas轉成data:image
    this.href = _url;
    //再把href載入上面的Data:image
    doPost(_msg,_url);
    resetSubmit(_msg);
  }
};
// saveObj.onclick = function(){
//     var _msg = $("#saysth").val();
//     var _url = canvas.toDataURL();
//     //利用toDataURL() 把canvas轉成data:image
//     this.href = _url;
//     //再把href載入上面的Data:image
//     doPost(_msg,_url);
//     resetSubmit(_msg);
//     confirm.log("256");
// };


function resetSubmit(_msg){
  saveObj.download = _msg + ".png";

  var textContent = "thank you";
  $("#saysth").val(textContent);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function doPost(msg,dataURL){
  $.ajax({
    type: "post",
    data: {
    "name": msg,
    "remark": dataURL
    },
    url: "https://script.google.com/macros/s/AKfycbwzATp1sqA6U-VHnzgwJ1EeybrNkWsIZt7aZhyyZVOHqFNyXw5MbAq2g9_0bpvpcoaz/exec"
    // url: "https://script.google.com/macros/s/AKfycbzwclg7IAB98aaq0zhiMMqjQPwOHWz3RgI3AU1CvCS_RHc4f8KahAzGW-Oj3frXuJfj/exec" // 填入網路應用程式網址
    });
    console.log(dataURL);
}