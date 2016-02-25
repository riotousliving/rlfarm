(function ($) {
    "use strict";
    $(document).ready(function(){

        // Progress Bar // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        //$('.progress-bar').progressbar();

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

    }); // /document.ready
})(jQuery);