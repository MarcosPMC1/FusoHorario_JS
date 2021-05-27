function gtime(val){
    var time = new Date();
    
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    
    if (val === 0) {
        var id = "time0";
    }if (val !== 0) {
        var id  = "time" + val;
    } 
    if (s<10) {
        s = "0" + s;
    }else if (m<10) {
        m = "0" + m;
    }else if (h<10) {
        h = "0" + Math.abs(h);
    }
    console.log(h);
    var cont = "<span>" + h + "h" + m + "m" + s + "s"// + "</span><h2>" + val + "</h2>";
    document.getElementById(id).innerHTML = cont;
}
