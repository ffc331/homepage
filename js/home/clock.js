function clock(){
    document.getElementById("header-time-p").innerHTML = Date();
    setTimeout(current_time,1000); //每秒呼叫一次功能: current_time()
    function current_time(){
        document.getElementById("header-time-p").innerHTML = Date();
        setTimeout(current_time,1000); //每秒呼叫一次功能: current_time()
    }
}
clock();