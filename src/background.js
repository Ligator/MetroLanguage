
$( document ).ready(function() {
    var cadFinal = [" **~ xD", " -- <3", " ***", ",.-~ :D", " **_- ;)", " *+..", "... *-*", ""];

    $('body :not(:has(*))').text(function(i, str) {
        if(str != ""){
            str = str.toLowerCase();
            str = str.replace(/a/g,"A");
            str = str.replace(/e/g,"eE");
            str = str.replace(/i/g,"ii");
            str = str.replace(/o/g,"0o");
            str = str.replace(/b/g,"B");
            str = str.replace(/g/g,"G");
            str = str.replace(/h/g,"H");
            str = str.replace(/k/g,"Q");
            str = str.replace(/q/g,"k");
            str = str.replace(/n/g,"ñ");
            str = str.replace(/z/g,"zh");
            str = str.replace(/s/g,"zh");
            str = str.replace(/t/g,"T");
            str = "** " + str + cadFinal[Math.floor(Math.random() * 7)];
            return str;
        }
    });

});
