// bg slide
setInterval(function(){
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft: '-1920px'
    },1000)
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft: '-3840px'
    },1000)
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft: '-5760px'
    },1000)
    $("#slide ul").animate({
        marginLeft: '0px'
    },0)
});
// popup
$("#popup").hide();
$(".popup_open_btn").click(function () {
    $("#popup").fadeIn(300)
});
$(".popup_close_btn").click(function () {
    $("#popup").fadeOut(0)
});