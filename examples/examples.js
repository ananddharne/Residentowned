$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});
$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});$(document).ready(function() {
        var st = 0,
        fixThreshold = 20,
        numberOfItems = $('#fullpage .section').length;
        function reenableScroll(){
            $.fn.fullpage.setAutoScrolling(false);
            $(document.body).css('padding-right',0);
            st = $(window).scrollTop();
            $(window).on('scroll.fix', scrollHandler);
        }
        function scrollHandler(){
            if($(window).scrollTop() < st - fixThreshold){
                $.fn.fullpage.setAutoScrolling(true);
                $(document.body).css('padding-right',17);
                $(window).off('scroll.fix');
            };
        }
        $('#fullpage').fullpage({
            css3: true,
            afterLoad: function(anchorLink, index){
                console.log("afterLoad",anchorLink, index);
                if(index === numberOfItems)reenableScroll();
            }
        });
    });
});
