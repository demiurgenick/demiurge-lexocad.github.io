jQuery(document).ready(function() {
    $('#fullpage').fullpage({
         afterLoad: function () {
//            scrollOverflow; false,
            $('#video')[0].play();
        },
        anchors: ['home','catalog','textures','tutorials','support','download'],
        scrollOverflow: true,
        loopBottom: true,
        afterLoad: function (link, index) {
            this.addClass('anim');
        },
        onLeave: function(link, index) {
            
            if (index != 1) {
                $('.top-menu').css('visibility','hidden');
                if($('.top-menu').hasClass('nextMenu')) {
                    
                }else {
                    $('.top-menu').addClass('nextMenu');
                }
            } else {
                $('.top-menu').css('visibility','visible');
                if($('.top-menu').hasClass('nextMenu')) {
                    $('.top-menu').removeClass('nextMenu');
                }
            }
        }
    });
    
    
    
    //header
    var heigth = $('.head-contant').css('height');
    var margin = parseInt(heigth) / 2;
    var newMargin = margin + 'px';
    $('.head-contant').css('margin-top', -margin);

    
    $(window).resize(function() {
        var heigth = $('.head-contant').css('height');
        var margin = parseInt(heigth) / 2;
        var newMargin = margin + 'px';
        $('.head-contant').css('margin-top', -margin);

    });
    

});