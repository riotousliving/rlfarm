/*
By Lucas Fajger
With this script we need:

{{CSS}}
.navbar-scroll-top {
position: fixed;
left: 0;
top: 0;
width: 100%;
z-index: 9999;
}

//headroom styles for fixed headers and menus
.headroom {
transition: transform 200ms linear;
z-index: 9998;
}
.headroom--pinned {
transform: translateY(0%);
display: block;
}
.headroom--unpinned {
transform: translateY(-100%);
display: none;
}

{{CLASSES inside tags}}
For topBar - ct-topBar
For menu - navbar


if you dont have in your main.js $topbarel and $navbarel variables then copy them at the beggining in this function:

var $navbarel = jQuery(".navbar");
var $topbarel = jQuery(".ct-topBar");

*/


$(document).ready(function () {

    "use strict";

    if($devicewidth > 768){
        var $headroomStr = "ct-js-headroom";
        var $headroomCla = ".ct-js-headroom";

        if($bodyel.hasClass("ct-headroom--scrollUpMenu")){
            $navbarel.addClass($headroomStr);
        }
        else if($bodyel.hasClass("ct-headroom--scrollUpTopBar")){
            $topbarel.addClass($headroomStr);
        }
        else if($bodyel.hasClass("ct-headroom--scrollUpBoth")){
            $topbarel.addClass($headroomStr);
            $navbarel.addClass($headroomStr);
        }
        else if($bodyel.hasClass("ct-headroom--fixedTopBar")){
            var $fixedTopBar = true;
            $topbarel.addClass($headroomStr);
        }
        else if($bodyel.hasClass("ct-headroom--fixedMenu")){
            var $fixedMenu = true;
            $navbarel.addClass($headroomStr);
        }
        else if($bodyel.hasClass("ct-headroom--fixedBoth")){
            var $fixedBoth = true;
            $topbarel.addClass($headroomStr);
            $navbarel.addClass($headroomStr);
        }
        else if($bodyel.hasClass("ct-headroom--hideMenu")){
            var $fixedScrollUpTopBar = true;
            $topbarel.addClass($headroomStr);
            $navbarel.addClass($headroomStr);
        }
        else{
            return;
        }

        var $navbarMenu = $('nav.navbar');
        var $navbarNav = $navbarMenu.find('.navbar-nav');
        var $navbarMenuContainer = $('nav.navbar .ct-navbar-container');
        var $topBar = $('.ct-topBar');
        var $topBarHeihgt = $topBar.height();
        var $logo = $('.navbar-brand');
        var $main = $('main');



        var menuPaddingTop = 22,
            menuMarginTop = -22,
            px = "px",
            colorBG = "#99CD4D";


        if($($headroomCla).length > 0){
            $($headroomCla).each(function(){
                var $this = $(this);
                $(window).on("scroll", function(){
                    var scrollPos = $(window).scrollTop();

                    if($navbarMenu.hasClass('navbar--type1'))
                    {
                        if ($bodyel.hasClass("ct-headroom--scrollUpMenu")){
                            if(scrollPos > 200){
                                $navbarel.css('top', "-120px");
                                $navbarMenu.addClass("ct-headroomNavFixed").addClass("animatedDif");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "margin-top": 3 * menuMarginTop + px
                                });

                                $navbarMenu.css("background-color", "#fff");
                                $logo.css("opacity", "0");

                                $main.css("padding-top", "250" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarel.css('top', "0");
                                $navbarMenu.removeClass("ct-headroomNavFixed").removeClass("animatedDif").removeClass("fadeInDown");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "margin-top": "0"
                                });

                                $navbarMenu.css("background-color", "transparent");
                                $logo.css("opacity", "1");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--scrollUpTopBar")){
                            if (scrollPos > 0){
                                $this.addClass("navbar-scroll-top");
                            }
                            else{
                                $this.removeClass("navbar-scroll-top");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--scrollUpBoth")){
                            if(scrollPos > 0){
                                $topBar.addClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", $topBarHeihgt + px);
                            }
                            else{
                                $topBar.removeClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", "0");
                            }

                            if(scrollPos > 165){
                                $navbarMenu.addClass("ct-headroomNavFixed").addClass("animatedDif").removeClass("fadeInDown");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "margin-top": 3 * menuMarginTop + px
                                });
                                $navbarMenu.css("background-color", "#fff");
                                $logo.css("opacity", "0");
                                $main.css("padding-top", "200" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarMenu.removeClass("ct-headroomNavFixed").removeClass("animatedDif");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "margin-top": "0"
                                });
                                $navbarMenu.css("background-color", "transparent");
                                $logo.css("opacity", "1");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--fixedTopBar")){
                            if(scrollPos > 0){
                                $topBar.addClass("navbar-scroll-top");
                            }
                            else{
                                $topBar.removeClass("navbar-scroll-top");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--fixedMenu")){
                            if(scrollPos > 200){
                                $navbarel.css('top', "-120px");
                                $navbarMenu.addClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "margin-top": 3 * menuMarginTop + px
                                });

                                $navbarMenu.css("background-color", "#fff");
                                $main.css("padding-top", "250" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarel.css('top', "0");
                                $navbarMenu.removeClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "margin-top": "0"
                                });

                                $navbarMenu.css("background-color", "transparent");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--fixedBoth")){
                            if(scrollPos > 0){
                                $topBar.addClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", $topBarHeihgt + px);
                            }
                            else{
                                $topBar.removeClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", "0");
                            }

                            if(scrollPos > 165){
                                $navbarMenu.addClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "margin-top": 3 * menuMarginTop + px
                                });
                                $navbarMenu.css("background-color", "#fff");
                                $main.css("padding-top", "300" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarMenu.removeClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "margin-top": "0"
                                });
                                $navbarMenu.css("background-color", "transparent");
                            }
                        }
                    }




                    else if($navbarMenu.hasClass('navbar--type2'))
                    {
                        if ($bodyel.hasClass("ct-headroom--scrollUpMenu")){
                            if(scrollPos > 140){
                                $navbarel.css('top', "-186px");
                                $navbarMenu.addClass("ct-headroomNavFixed").addClass("animatedDif");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "bottom": "-66" + px,
                                    "background-color": colorBG,
                                    "padding-left": "15px"
                                });

                                $main.css("padding-top", "200" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarel.css('top', "0");
                                $navbarMenu.removeClass("ct-headroomNavFixed").removeClass("animatedDif");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "bottom": "33px",
                                    "background-color": "transparent",
                                    "padding-left": "0"
                                });
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--scrollUpTopBar")){
                            if (scrollPos > 0){
                                $this.addClass("navbar-scroll-top");
                            }
                            else{
                                $this.removeClass("navbar-scroll-top");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--scrollUpBoth")){
                            if(scrollPos > 0){
                                $topBar.addClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", $topBarHeihgt + px);
                            }
                            else{
                                $topBar.removeClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", "0");
                            }

                            if(scrollPos > 89){
                                $navbarMenu.addClass("ct-headroomNavFixed").addClass("animatedDif");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "bottom": "-2" + px,
                                    "background-color": colorBG,
                                    "padding-left": "15px"
                                });

                                $logo.css("opacity", "0");
                                $main.css("padding-top", "200" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarMenu.removeClass("ct-headroomNavFixed").removeClass("animatedDif");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "bottom": "33px",
                                    "background-color": "transparent",
                                    "padding-left": "0"
                                });
                                $logo.css("opacity", "1");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--fixedTopBar")){
                            if(scrollPos > 0){
                                $topBar.addClass("navbar-scroll-top");
                            }
                            else{
                                $topBar.removeClass("navbar-scroll-top");
                            }
                        }

                        else if ($bodyel.hasClass("ct-headroom--fixedMenu")){
                            if(scrollPos > 140){
                                $navbarel.css('top', "-186px");
                                $navbarMenu.addClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "bottom": "-66" + px,
                                    "background-color": colorBG,
                                    "padding-left": "15px"
                                });

                                $navbarMenu.css("background-color", "#fff");
                                $main.css("padding-top", "200" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarel.css('top', "0");
                                $navbarMenu.removeClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "bottom": "33px",
                                    "background-color": "transparent",
                                    "padding-left": "0"
                                });

                                $navbarMenu.css("background-color", "transparent");
                            }
                        }


                        else if ($bodyel.hasClass("ct-headroom--fixedBoth")){
                            if(scrollPos > 0){
                                $topBar.addClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", $topBarHeihgt + px);
                            }
                            else{
                                $topBar.removeClass("navbar-scroll-top");
                                $navbarMenu.css("margin-top", "0");
                            }

                            if(scrollPos > 89){
                                $navbarMenu.addClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": menuPaddingTop + px,
                                    "bottom": "-3" + px,
                                    "background-color": colorBG,
                                    "padding-left": "15px"
                                });
                                $logo.css("opacity", "0");
                                $main.css("padding-top", "200" + "px");
                            }
                            else{
                                $main.css("padding-top", "0" + "px");
                                $navbarMenu.removeClass("ct-headroomNavFixed");
                                $navbarNav.css({
                                    "padding-top": "0",
                                    "bottom": "33px",
                                    "background-color": "transparent",
                                    "padding-left": "0"
                                });
                                $logo.css("opacity", "1");
                            }
                        }
                    }
                });

                var ctoffset = validatedata($this.attr("data-offset"), 200);

                var cttolerance = validatedata($this.attr("data-tolerance"),5) ;
                var ctinitiial = validatedata($this.attr("data-initial"), "animatedDif");
                var cttop = validatedata($this.attr("data-top"), "headroom--top");
                var ctnotTop = validatedata($this.attr("data-top"), "headroom--not-top");

                if($fixedScrollUpTopBar){
                    if($this.hasClass("ct-topBar")){
                        var $fixedScrollUpTopBarConfirmed = true;
                    }
                }

                if($fixedBoth || $fixedTopBar || $fixedMenu || $fixedScrollUpTopBarConfirmed){
                    //if you want to fix elements for good, then we should change variables so that they are with the same name, no matter what
                    var ctpinned = validatedata($this.attr("data-pinned"), "IAmFixed");
                    var ctunpinned = validatedata($this.attr("data-unpinned"), "IAmFixed");
                }
                else{
                    var ctpinned = validatedata($this.attr("data-pinned"), "fadeInDown");
                    var ctunpinned = validatedata($this.attr("data-unpinned"), "fadeOutUp");
                }

                $this.headroom({ //do this for each element use  add .ct-js-headroom

                    "offset": ctoffset,// vertical offset in px before element is first unpinned
                    "tolerance": cttolerance, // scroll tolerance in px before state changes
                    "top": cttop, // when above offset
                    "notTop": ctnotTop, // when below offset

                    "classes": {
                        "initial": ctinitiial, // when element is initialised
                        "pinned": ctpinned, // when scrolling up
                        "unpinned": ctunpinned // when scrolling down
                    }
                });
            });
        }
    }
});
