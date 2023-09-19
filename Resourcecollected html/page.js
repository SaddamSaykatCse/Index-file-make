// @@ -0, 0 + 1, 6 @@
$(".input_text").focus(function () {
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function () {
    $(this).prev('.fa').removeclass('glowIcon')
})