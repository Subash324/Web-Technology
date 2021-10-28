function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    }
    else {
        alert("no cookies are set")
    }
}
function getCookie(cname) {
    let name = cname + "=";
    var decodedcookie = decodeURIComponent(document.cookie);
    var ca = decodedcookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1); //starting index 1
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function cookieSet(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));// cookies set for 24 hours
    var expires = "expires="+d.toUTCString();//toGMTString()....is deprecated now
    document.cookie = cname +"=" +cvalue+";"+expires+";path=http://127.0.0.1:5500/";//live servers path
    alert("Cookie with "+cvalue+"is set");
}
function setCookie(){
    var user = getCookie("username");
    if(user==""){
        user = prompt("Please enter your name:","");
        if(user!="" && user!= null ){
            cookieSet("username",user,30); //name-value pair
        }
    }
    else{
        alert("Cookie already set with: "+user);
    }
}
function deleteCookie(){
    var user = getCookie("username");
    if(user==""){
        alert("No cookies are set yet");
    }
    else{
        alert(user+"Cookie is goind to be deleted");

    }
    document.cookie="username="+user+";expires=Tue, 03 Aug 2020 00:00:00 UTC;path=127.0.0.1:5500/"
}