/**
 * Created by createit on 2015-01-08.
 */


var $devicewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var $deviceheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

var $bodyel = jQuery("body");

var $navbarel = jQuery(".navbar");
var $topbarel = jQuery(".ct-topBar");

var snapper = new Snap({
    element: document.getElementById('ct-js-wrapper')
});


/* ========================== */
/* ==== HELPER FUNCTIONS ==== */

function validatedata($attr, $defaultValue) {
    "use strict";
    if ($attr !== undefined) {
        return $attr
    }
    return $defaultValue;
}

function parseBoolean(str, $defaultValue) {
    "use strict";
    if (str == 'true') {
        return true;
    } else if (str == "false") {
        return false;
    }
    return $defaultValue;
}

function setCookie(cname, cvalue, exdays) {
    "use strict";
    if(exdays != "default"){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    else{
        document.cookie = cname + "=" + cvalue;
    }

}

function getCookie(cname) {
    "use strict";
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}



//MAGNIFIC POPUP

$.fn.magnificinfinitescroll = function(options) {
    "use strict";
    if(jQuery().magnificPopup){

        $('.ct-js-magnificPopupGroup').magnificPopup({
            //disableOn: 700,
            type: 'image',
            mainClass: 'ct-magnificPopup--image',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false,
            gallery:{
                enabled: true
            },
            callbacks: {

                buildControls: function() {
                    // re-appends controls inside the main container
                    this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                }
            }
        });

        $('.ct-js-magnificPopupImage').magnificPopup({
            //disableOn: 700,
            type: 'image',
            mainClass: 'ct-magnificPopup--image',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false,
            gallery:{
                enabled: false
            }
        });
    }
};



var $maphelp = $('.ct-googleMap--accordion .ct-googleMap');
$(".ct-googleMap--accordion .ct-js-mapToogle").on("click", function () {
    "use strict";
    var $this = $(this);
    var $map = $this.parent().find('.ct-googleMap-container');
    $this.html($this.html() == '<i class="fa fa-map-marker"></i> Hide map' ? '<i class="fa fa-map-marker"></i> Show map' : '<i class="fa fa-map-marker"></i> Hide map');

    if ($map.height() != "0") {
        $map.animate({height: '0px'}, 500);
    } else {
        $map.animate({height: $maphelp.data("height") + "px"}, 500);
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $map.offset().top - 180
            }, 2000);
        }, 500);
    }
});
/* ============================================= */
/* ==== GOOGLE MAP ==== */

var mapStyles = [{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}];

function initmap() {

    "use strict";

    if (($(".ct-js-googleMap").length > 0) && (typeof google === 'object' && typeof google.maps === 'object')) {

        var draggable = true;

        if (device.mobile() || device.tablet()) {
            draggable = false;
        }

        $('.ct-js-googleMap--single').each(function () {
            var atcenter = "";
            var $this = $(this);
            var location = $this.data("location");
            var zoom = $this.data("zoom");
            var markerIcon = $this.data("icon");

            var offset = -30;

            if (validatedata($this.data("offset"))) {
                offset = $this.data("offset");
            }

            if (validatedata(location)) {
                $this.gmap3({
                    marker: {
                        //latLng: [40.616439, -74.035540],
                        address: location, options: {
                            //visible: false
                            icon: new google.maps.MarkerImage(markerIcon)
                        }, callback: function (marker) {
                            atcenter = marker.getPosition();
                        }
                    },
                    map: {
                        options: {
                            //maxZoom:11,
                            zoom: zoom,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                            scrollwheel: false,
                            disableDoubleClickZoom: false,
                            draggable: draggable,
                            //disableDefaultUI: true,
                            mapTypeControlOptions: {
                                //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                                //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                                //position: google.maps.ControlPosition.RIGHT_CENTER
                                mapTypeIds: []
                            },
                            styles: [

                                {
                                    "featureType": "landscape",
                                    "stylers": [
                                        {"saturation": -100},
                                        {"lightness": 65},
                                        {"visibility": "on"}
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "stylers": [
                                        {"saturation": -100},
                                        {"lightness": 51}, {"visibility": "simplified"}
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "stylers": [
                                        {"saturation": -100},
                                        {"visibility": "simplified"},

                                    ]
                                },
                                {
                                    "featureType": "road.arterial",
                                    "stylers": [
                                        {"saturation": -100},
                                        {"lightness": 30},
                                        {"visibility": "on"}
                                    ]
                                },
                                {
                                    "featureType": "road.local",
                                    "stylers": [
                                        {"saturation": -100},
                                        {"lightness": 40},
                                        {"visibility": "on"},

                                    ]
                                },
                                {
                                    "featureType": "transit",
                                    "stylers": [
                                        {"saturation": -100},
                                        {"visibility": "simplified"}
                                    ]
                                },
                                {
                                    "featureType": "administrative.province",
                                    "stylers": [
                                        {"visibility": "off"}
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "labels",
                                    "stylers": [
                                        {"visibility": "on"},
                                        {"lightness": -25}, {"saturation": -100}
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "geometry",
                                    "stylers": [{"hue": "#ffff00"},
                                        {"lightness": -25},
                                        {"saturation": -97}
                                    ]
                                }
                            ]

                        },
                        events: {
                            idle: function () {
                                if (!$this.data('idle')) {
                                    $this.gmap3('get').panBy(0, offset);
                                    $this.data('idle', true);
                                }
                            }
                        }
                    },
                    overlay: {
                        //latLng: [40.616439, -74.035540],
                        address: location,
                        options: {
                            //content: '<div class="customMarker"><div class="address">' + location + '</div><div class="marker"><img src="assets/images/custom-marker.png"></div></div>',
                            offset: {
                                y: -100,
                                x: -25
                            }
                        }
                    }
                    //},"autofit"
                });

                // center on resize
                google.maps.event.addDomListener(window, "resize", function () {
                    //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                    setTimeout(function () {
                        $this.gmap3('get').setCenter(atcenter);
                        $this.gmap3('get').panBy(0, offset);
                    }, 400);

                });

                // set height
                $this.css("min-height", $this.data("height") + "px");
            }

            if ($this.parent().parent().hasClass('hidemap')) {
                $this.parent().animate({height: '0px'}, 500);
            }

        })
        $('.ct-js-googleMap--group').each(function () {
            var $this = jQuery(this);
            var $display_desc = validatedata(parseBoolean($this.attr("data-display-desc")), false);
            var dataMarkers= [];

            if($display_desc == false){
                $this.gmap3({
                    map:{
                        options:{
                            center:[40.742803, -74.002424],
                            zoom: 14,
                            scrollwheel: false,
                            disableDoubleClickZoom: false,
                            draggable: draggable, //disableDefaultUI: true,
                            disableDefaultUI: true,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                            styles:mapStyles
                        }
                    },
                    marker:{
                        values: [
                            {
                                address:"301 w 4th Street, New York",
                                options:{
                                    icon: "assets/images/marker-villa.png"
                                }
                            },
                            {
                                address:"128 7th Ave S, New York",
                                options:{
                                    icon: "assets/images/marker-apartment.png"
                                }
                            },
                            {
                                address:"Eve 55 W 8th St, New York",
                                options:{
                                    icon: "assets/images/marker-commercial.png"
                                }
                            },
                            {
                                address:"21 W 16th St New York",
                                options:{
                                    icon: "assets/images/marker-flat.png"
                                }
                            },
                            {
                                address:"Washington Square Fountain, New York",
                                options:{
                                    icon: "assets/images/marker-house.png"
                                }
                            },
                            {
                                address:"Pinkberry - Chelsea 170 8th Ave, New York",
                                options:{
                                    icon: "assets/images/marker-land.png"
                                }
                            },
                            {
                                address:"8 Charles Ln New York",
                                options:{
                                    icon: "assets/images/marker-apartment.png"
                                }
                            },
                            {
                                address:"74 Green St Brooklyn",
                                options:{
                                    icon: "assets/images/marker-commercial.png"
                                }
                            },

                            {
                                address:"321 w 4th Street, New York",
                                options:{
                                    icon: "assets/images/marker-house.png"
                                }
                            }
                        ],
                        cluster:{
                            radius: 50,
                            0: {
                                content: "<div class='ct-markerCluster'>CLUSTER_COUNT</div>",
                                width: 53,
                                height: 52
                            },
                            2: {
                                content: "<div class='ct-markerCluster'>CLUSTER_COUNT</div>",
                                width: 56,
                                height: 55
                            },
                            50: {
                                content: "<div class='ct-markerCluster'>CLUSTER_COUNT</div>",
                                width: 66,
                                height: 65
                            }
                        }
                    }
                })
            } else{
                $this.gmap3({
                    map:{
                        options:{
                            center:[40.742803, -74.002424],
                            zoom: 14,
                            scrollwheel: false,
                            disableDoubleClickZoom: false,
                            draggable: draggable, //disableDefaultUI: true,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            //disableDefaultUI: true,
                            styles:mapStyles
                            // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                        },
                        events:{
                            click: function(map, event, context){
                                gmap_clear_markers();
                            }
                        }
                    }
                })

                //Ajax for JSon file
                $.ajax({
                    url: "assets/js/gmap/json/markers.json",
                    dataType: 'json',
                    type: 'POST',
                    success: function(data) {
                        dataMarkers = data.markers;
                        $.each(dataMarkers, function(key, val) {
                            $this.gmap3({
                                marker:{
                                    values:[{
                                        address:val.address,
                                        options:{
                                            icon: "assets/images/marker.png"
                                        },
                                        events: {
                                            click: function() {
                                                gmap_clear_markers();
                                                $this.gmap3({
                                                    overlay:{
                                                        address:val.address,
                                                        options:{
                                                            content:
                                                            "<div class='ct-itemProducts ct-hover ct-itemProducts--boxed ct-gmapProduct animated activate fadeInDownSmall'>"+
                                                            "<a href='#'>"+
                                                            "<div class='ct-main-content'>" +
                                                            "<div class='ct-imageBox'>"+
                                                            "<img src='"+val.image+"' alt=''>"+
                                                            "</div>"+
                                                            "<div class='ct-main-text'>"+
                                                            "<div class='ct-product--title'>"+
                                                            "<span>" + val.name + "</span>"+
                                                            "</div>"+
                                                            "<div class='ct-product--meta'>"+
                                                            "<div class='ct-address'>" +
                                                            "<h6 class='ct-fw-600'>Adress:</h6> "+
                                                            "<span>" + val.address + "</span>"+
                                                            "</div>"+
                                                            "<div class='ct-phone'>" +
                                                            "<h6 class='ct-fw-600'>Phone:</h6> "+
                                                            "<span>" + val.tel + "</span>"+
                                                            "</div>"+
                                                            "</div>"+
                                                            "</div>"+
                                                            "<div class='ct-bottomArrow'></div>"+
                                                            "</div>"+
                                                            "</a>"+
                                                            "</div>",
                                                            offset:{
                                                                y:-380,
                                                                x:-128
                                                            }
                                                        }
                                                    }

                                                });
                                            }
                                        }
                                    }],
                                    cluster:{
                                        radius: 20,
                                        0: {
                                            content: "<div class='ct-markerCluster'>CLUSTER_COUNT</div>",
                                            width: 53,
                                            height: 52
                                        },
                                        2: {
                                            content: "<div class='ct-markerCluster'>CLUSTER_COUNT</div>",
                                            width: 56,
                                            height: 55
                                        },
                                        50: {
                                            content: "<div class='ct-markerCluster'>CLUSTER_COUNT</div>",
                                            width: 66,
                                            height: 65
                                        }
                                    }
                                }
                            });
                        });

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                    }
                });

            };
            // Function Clear Markers
            function gmap_clear_markers() {
                $('.ct-gmapProduct').each(function() {
                    $(this).remove();
                });
            }


            var map = $(".ct-js-googleMap").gmap3({
                get: {
                    name:"map"
                }
            });

            // set height
            $this.css("min-height", $this.data("height") + "px");
        })
    }

}

initmap();


(function ($) {
    "use strict";
    $(document).ready(function(){

        //================================================== Slider ====================================================

        var $slider = $('.ct-js-slick');

        $slider.each(function(){
            var $this = $(this);

            if($this.hasClass('ct-slick-arrow--type1') || $this.hasClass('ct-slick-arrow--type6')){
                var $buttons = $this.find('> button');

                var topPosition = 136;

                if($this.hasClass('ct-slick-arrow--type6')){
                    topPosition = 605;
                }
                else{
                    topPosition = 117;
                }

                $buttons.each(function(){
                    $(this).css("top", topPosition + "px");
                });
            }
        });

        // Ignore Slick // ---------------------------------

        $slider.attr('data-snap-ignore', 'true');

        //============================================= Breadcrumbs ====================================================

        var $breadcrumbs = $('.ct-js-breadcrumbs');


        $breadcrumbs.each(function(){
            var $this = $(this);
            var $breadcrumbsHeight = $this.attr("data-height");
            var $breadcrumbsImage = $this.attr("data-bg-image");
            var $breadcrumbsScratchImage = $this.attr("data-bg-scratchImage");

            if($breadcrumbsScratchImage){
                $this.css({
                    "background-image": "url(\"" + $breadcrumbsScratchImage + "\"), url(\"" + $breadcrumbsImage + "\")",
                    "height": $breadcrumbsHeight + "px"
                });
            }

            else{
                $this.css({
                    "background-image": "url(\"" + $breadcrumbsImage + "\")",
                    "height": $breadcrumbsHeight + "px"
                });
            }
        });

        //======================================================== Form ================================================

        var $formRadio = $('.ct-js-radio');

        $formRadio.each(function(){

            var $this = $(this);

            var $radio = $this.find('input[type=radio]');

            var $radioInput = $this.find('.ct-js-radio-input');
            var $radioTarget = $this.find('.ct-js-radio-target');

            $radio.on("click", function(){
                if($radioInput.prop("checked")){
                    $radioTarget.prop("disabled", false).attr('name', 'field[]');
                }

                else{
                    $radioTarget.prop("disabled", true).attr('name', ' ');
                }
            });

        });

        // Progress Bar // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        // $('.progress-bar').progressbar();

        if (jQuery().appear && jQuery("body").hasClass("cssAnimate")) {
            jQuery('.progress').appear(function () {
                var $this = jQuery(this);
                $this.each(function () {
                    var $innerbar = $this.find(".progress-bar");
                    var percentage = $innerbar.attr("data-percentage");
                    $innerbar.addClass("animating").css("width", percentage + "%");

                    $innerbar.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function () {
                        $innerbar.find(".pull-right").fadeIn(900);
                    });

                });
            }, {accY: -100});
        } else {
            jQuery('.progress').each(function () {
                var $this = jQuery(this);
                var $innerbar = $this.find(".progress-bar");
                var percentage = $innerbar.attr("data-percentage");
                $innerbar.addClass("animating").css("width", percentage + "%");

                $innerbar.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function () {
                    $innerbar.find(".pull-right").fadeIn(900);
                });

            });
        }


        /* =================================== COUNT TO ===================================== */


        if (($().countTo) && ($().appear) && ($("body").hasClass("cssAnimate"))) {
            $('.ct-js-counter').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
                }
            }).appear(function () {
                $(this).each(function (options) {
                    var $this = $(this);
                    var $speed = validatedata($this.attr('data-ct-speed'), 700);
                    options = $.extend({}, options || {
                        speed: $speed
                    }, $this.data('countToOptions') || {});
                    $this.countTo(options);
                });
            });
        } else if(($().countTo)){
            $('.ct-js-counter').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
                }
            });
            $('.ct-js-counter').each(function (options) {
                var $this = $(this);
                var $speed = validatedata($this.attr('speed'), 1200);
                options = $.extend({}, options || {
                    speed: $speed
                }, $this.data('countToOptions') || {});
                $this.countTo(options);
            });
        }

        $('.ct-js-pieChart').each(function () {
            var $this = $(this);
            var $color = validatedata($this.attr('data-ct-firstColor'), "#2b8be9");
            var $color2 = validatedata($this.attr('data-ct-secondColor'), "#eeeeee");
            var $cutout = validatedata($this.attr('data-ct-middleSpace'), 90);
            var $stroke = validatedata($this.attr('data-ct-showStroke'), false);
            var $margin = validatedata($this.attr('data-ct-margin'), false);
            $this.parent().css('margin-left',$margin + 'px').css('margin-right',$margin + 'px');
            var options = {
                responsive: true, percentageInnerCutout: $cutout, segmentShowStroke: $stroke, showTooltips: false
            };
            var doughnutData = [{
                value: parseInt($this.attr('data-ct-percentage'), 10), color: $color, label: false
            }, {
                value: parseInt(100 - $this.attr('data-ct-percentage'), 10), color: $color2
            }];

            if (($().appear) && ($("body").hasClass("cssAnimate"))) {
                $('.ct-js-pieChart').appear(function () {
                    var ctx = $this[0].getContext("2d");
                    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, options);
                });
            } else {
                var ctx = $this[0].getContext("2d");
                window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, options);
            }
        })



        //=================================================== Add Color ================================================

        $(".ct-js-color").each(function(){

            var $this = $(this);
            $this.css("color", '#' + $this.attr("data-color"));
        });


        //======================================================== Tabs ================================================

        $('#productGuide a , #productGuide a').on("click", function (e) {
            e.preventDefault();
            $(this).tab('show');
            return false;
        })


        //======================================================== Menu ================================================


        // Onepager Close on click

        var $mobileOnepager = $('.ct-menuMobile .ct-menuMobile-navbar .onepage');

        $mobileOnepager.on("click", function(e){
            return false;
        });
        $mobileOnepager.on("click", function(e){
            snapper.close();
            return false;
        });


        // Snap Navigation in Mobile // --------------------------------------------------------------------------------



        if ($devicewidth < 768) {

            snapper.settings({
                disable: 'left',
                addBodyClasses: true,
                slideIntent: 20
            });
        }

        else{
            snapper.close();
            snapper.disable();
        }


        $(".navbar-toggle").on("click", function () {

            if($bodyel.hasClass('snapjs-right')){
                snapper.close();
            } else{
                snapper.open('right');
            }

        });

        $("#ct-js-wrapper").on("click", function () {

            if($bodyel.hasClass('snapjs-right')) {
                snapper.close();
            }

        });


        // Snap Navigation in Mobile open // ---------------------------------------------------------------------------

        var menuElementToClick = $('.ct-menuMobile .ct-menuMobile-navbar .dropdown > a');

        menuElementToClick.on("click", function() {
            return false; // iOS SUCKS
        });
        menuElementToClick.on("click", function(){
            var $this = $(this);
            if($this.parent().hasClass('open')){
                $this.parent().removeClass('open');
            } else{
                $('.ct-menuMobile .ct-menuMobile-navbar .dropdown.open').toggleClass('open');
                $this.parent().addClass('open');
            }

        });

        // To Top Button // --------------------------------------------------------------------------------------------


        $('.ct-js-btnScrollUp').on("click", function (e) {
            e.preventDefault();
            $("body,html").animate({scrollTop: 0}, 1200);
            $navbarel.find('.onepage').removeClass('active');
            $navbarel.find('.onepage:first-child').addClass('active');
            return false;
        });

        //================================================== Tooltip ===================================================

        // Tooltip init // ---------------------------------------------------------------------------------------------

        $("[data-toggle='tooltip']").tooltip();


        //================================================ Animations ==================================================

        // Animations Init // ------------------------------------------------------------------------------------------

        if ($().appear) {
            if (device.mobile() || device.tablet()) {
                $("body").removeClass("cssAnimate");
            } else {
                $('.cssAnimate .animated').appear(function () {
                    var $this = $(this);
                    $this.each(function () {
                        if ($this.data('time') != undefined) {
                            setTimeout(function () {
                                $this.addClass('activate').addClass($this.data('fx'));
                            }, $this.data('time'));
                        } else {
                            $this.addClass('activate').addClass($this.data('fx'));
                        }
                    });
                }, {accX: 50, accY: -350});
            }
        }

        //================================================ Modal ==================================================


        var $modal = $('.ct-modal');

        $modal.each(function(){
            var $this = $(this);
            var $modalDialog = $this.find('.ct-modalDialog');
            var $modalContent = $modalDialog.find('.ct-modalContent');
            var $modalContentHeight = $modalContent.height();
            var $footer = $modalContent.find('.ct-modalFooter');

            var $imageBG = $this.attr("data-bg-image");
            var $discountBG = $footer.attr('data-discount-image');

            $modalContent.css('background-image', 'url(\'' + $imageBG + '\')');
            $footer.css('background-image', 'url(\'' + $discountBG + '\')');

            $modalDialog.css("height", $modalContentHeight + "px");

            if($deviceheight < $modalContentHeight){
                $modalDialog.css({
                    "position": "static",
                    "padding-top": "17px"
                })
            }
        });


        var $neverAsk = $('#neverAsk');
        var $laterAsk = $('#laterAsk');
        var $close = $('#modal1 .close');

        var a1 = getCookie("subscribeLocal");
        var a2 = getCookie("subscribeSession");

        if((a1 !== "1") && (a2 !== "1")){
            $('#popup').click();
        }

        $neverAsk.on("click", function(e){
            e.preventDefault();

            setCookie("subscribeLocal", "1", 99999);
            $close.click();

            return false;

        });

        $laterAsk.on("click", function(e){
            e.preventDefault();

            setCookie("subscribeSession", "1", "default");
            $close.click();

            return false;
        });

    });


    $(window).on("load", function() {

        var $preloader = $('.ct-preloader');
        var $content = $('.ct-preloader-content');

        var $timeout = setTimeout(function(){
            $($preloader).addClass('animated').addClass('fadeOut');
            $($content).addClass('animated').addClass('fadeOut');
        }, 0);
        var $timeout2 = setTimeout(function(){
            $($preloader).css('display', 'none').css('z-index', '-9999');
        }, 500);

        $('.ct-js-magnificPopupImage').magnificinfinitescroll();

    });

    $(window).on('resize', function() {

        if ($(window).width() < 768) {
            snapper.enable();
        } else{
            snapper.close();
            snapper.disable();
        }
    });

    $(window).on("load resize", function(){


        //================================================== Slider ====================================================

        var $slider = $('.ct-js-slick');

        $slider.each(function(){
            var $this = $(this);

            if($this.hasClass('ct-slick-arrow--type1') || $this.hasClass('ct-slick-arrow--type6')){
                var $buttons = $this.find('> button');

                var $buttonHeight = $buttons.first().height();
                var $imageHeight = $this.find('.item figure .ct-imageBox-container').first().height();

                var topPosition = 136;

                if($this.hasClass('ct-slick-arrow--type6')){
                    topPosition = $imageHeight + 33;
                }
                else{
                    topPosition = ($imageHeight / 2) - ($buttonHeight / 2) + 7;
                }

                $buttons.each(function(){
                    $(this).css("top", topPosition + "px");
                });
            }
        });

        var $slickSyncedTypeTwo = $('.ct-slick--synced--type2');

        if ($slickSyncedTypeTwo.length > 0){
            var $sliderheight = $slickSyncedTypeTwo.find('.ct-js-slick-for').height();

            var $slickPrev = $slickSyncedTypeTwo.find('.slick-prev');
            var $slickNext = $slickSyncedTypeTwo.find('.slick-next');

            $slickPrev.css('top', $sliderheight/2 - 20 + 'px');
            $slickNext.css('top', $sliderheight/2 - 20 + 'px');
        }

    });

    $(window).on("scroll", function(){

        var scroll = $(window).scrollTop();

        if (scroll > 300) {
            jQuery('.ct-js-btnScrollUp').addClass('is-active');
        } else {
            jQuery('.ct-js-btnScrollUp').removeClass('is-active');
        }


        if($navbarel.find('.onepage').length <= 0){
            var isTransparent = false;

            if($bodyel.hasClass("navbar--transparent")){
                isTransparent = true;
            }


            if (scroll > 100) {
                $bodyel.removeClass("navbar--transparent");
            } else {
                $bodyel.addClass("navbar--transparent");
            }
        }

        else{
            if (scroll > 100) {
                $bodyel.addClass("navbar--makeSmaller");
            } else {
                $bodyel.removeClass("navbar--makeSmaller");
            }
        }

    });

}(jQuery));
