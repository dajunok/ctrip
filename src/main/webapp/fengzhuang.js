var CarouselCenter = (function(){

    var carouselList = [];


    function init($carousel){
        $carousel.each(function(){
            var $cal = $(this);
            if($cal.hasClass('init')){
                return;
            }
            carouselList.push( new Carousel($cal) );
            $cal.addClass('init')
        });

    }

    function getList(){
        return carouselList;
    }

    function Carousel($carousel){
    }

    Carousel.prototype = {

        bind: function(){
            var _this = this;
            this.$pre.on('click', function(){
                _this.showPre();
            });
            this.$next.on('click', function(){
                _this.showNext();
            });
        },

        showPre: function(){
            this.$ct.prepend(this.$ct.children().last());
            this.$ct.css('left', 0-this.imgWidth);
            this.$ct.animate({'left': 0});
        },

        showNext: function(){
            var $ct = this.$ct;
            $ct.animate({'left': 0-this.imgWidth},function(){
                $ct.append($ct.children().first());
                $ct.css('left', 0);
            });
        }
    };


    return {
        init: init,
        getList: getList
    }

})(); 

// 调用   
// CarouselCenter.init($('#c1'))
// CarouselCenter.init($('#c2'))
// CarouselCenter.init($('#c2')) //不会重复绑定

// CarouselCenter.init($('.carousel')) 