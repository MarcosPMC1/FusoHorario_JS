function gtime(val){
    var time = new Date();
    var h = time.getUTCHours();
    var m = time.getUTCMinutes();
    var s = time.getUTCSeconds();

    var fh = val + h;

    if (h <= val) {
        fh = 24 - fh;
    }
    if (fh > 24) {
        fh = fh - 24; 
    }
    if (val === 0) {
        var id = "time0";
    }if (val !== 0) {
        var id  = "time" + val;
    }
    if (s<10) {
        s = "0" + s;
    }
    if (m<10) {
        m = "0" + m;
    }
    if (fh<10) {
        fh = "0" + fh;
    }
    var cont = "<span>" + fh + "h" + m + "m" + s + "s" + "</span><h2>" + val + "</h2>";
    document.getElementById(id).innerHTML = cont;
}
