//friend amount
doGet();
var getValue ;
function doGet(){
  $.ajax({
    crossDomain: true,
    type: "get",
    data: {
    },
    url: "https://script.google.com/macros/s/AKfycbwzATp1sqA6U-VHnzgwJ1EeybrNkWsIZt7aZhyyZVOHqFNyXw5MbAq2g9_0bpvpcoaz/exec", // 填入網路應用程式網址
    success: function (e) {
      getValue = e;
      // console.log(getValue);
      // console.log(getValue.todayValue);
      var _p = document.getElementById("footer-friendAmount");
      _p.innerText = getValue.todayValue + " / " + getValue.sumValue;
    }
    });
    console.log("get");
}