var $dadiv = $('.dadiv'),
    $ul = $('.dadiv > ul'),
    $ol = $('.dadiv > ol'),
    len = $ul.find('li').length,
    width = $ul.find('li').width(),
    ulWidth = len * width,
    timer;
$ul.width(ulWidth);
$('.dadiv > a').on('click',function(){
    var $this = $(this);
        currIndex = $ol.find('li.active').index(); 
     

    if ($('ul:animated').length > 0 ) {
        return;
    }

        
    if($this.hasClass('right')) {
        currIndex++;
        currIndex = (currIndex == len) ? 0 : currIndex;
        //(currIndex == len) && (currIndex = 0);
        /*if (currIndex == len) {
            currIndex = 0;
        }*/
        /*$ol.find('li').eq(currIndex).trigger('click');*/
    } else {
        currIndex--;
        if (currIndex < 0) {
            currIndex = len - 1;
        }
        /*$ol.find('li').eq(currIndex).trigger('click');*/
    }
    $ol.find('li').eq(currIndex).trigger('click');
  
});


$ol.find ('li').on('click',function(){
    var $this = $(this),
        index = $this.index();
    $this.addClass('active').siblings('.active').removeClass('active'); 
    $ul.animate({marginLeft: - width * index}, 2000,function(){
       // $this.addClass('active').siblings('.active').removeClass('active');

    });
    /*$ul
        .find('li:eq('+index+')')
        .show()
        .siblings()
        .hide();*/
   /* console.log(index);*/
});
$dadiv
        .on('mouseover',function() {
            clearInterval(timer);
        })
        .on('mouseout',function() {
            runner();
        })


function runner() {
    timer = setInterval(function() {
        $('.dadiv > a.right').trigger('click');
    },200);

}
 runner();