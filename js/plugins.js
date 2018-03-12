$(document).ready(function(){

   //porftolio
    $('.portfolio ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') ==="all"){
            $(".shuffle-images .col-md-3").css("opacity", 1);
          }
          else{
            $(".shuffle-images .col-md-3").css("opacity",0.3);
            $($(this).data('class')).parent().css("opacity",1);
          }

    })
    $('.portfolio ul li').hover(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })


    //counter
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 10000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
      
        });  
        
        
      
      });

      //brands
      $('#slider').bxSlider({
        ticker: true,
        tickerSpeed: 9000,
        tickerHover: true
      });
     
      //scrollToTop
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
      });
      
      //Click event to scroll to top
      $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},8000);
        return false;
      });

    

  

});