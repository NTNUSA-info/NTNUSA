 $(function() {
                $('#sdt_menu > li').bind('mouseenter',function(){
					var $elem = $(this);
					$elem.find('img')
						 .stop(true)
						 .animate({
							'width':'160px',
							'height':'118px',
							'left':'0px'
						 },400,'easeOutBack')
						 .andSelf()
						 .find('.sdt_wrap')
					     .stop(true)
						 .animate({'top':'70px'},500,'easeOutBack')  //sub text
						 .andSelf()
						 .find('.sdt_active')
					     .stop(true)
						 .animate({'height':'86px'},300,function(){
						var $sub_menu = $elem.find('.sdt_box');
						if($sub_menu.length){
							var left = '159px';
							if($elem.parent().children().length == $elem.index()+1)
								left = '-159px';
							$sub_menu.show().animate({'left':left},200);
						}	
					});
				}).bind('mouseleave',function(){
					var $elem = $(this);
					var $sub_menu = $elem.find('.sdt_box');
					if($sub_menu.length)
						$sub_menu.hide().css('left','0px');
					
					$elem.find('.sdt_active')
						 .stop(true)
						 .animate({'height':'0px'},300)
						 .andSelf().find('img')
						 .stop(true)
						 .animate({
							'width':'0px',
							'height':'0px',
							'left':'80px'},400) //the position of the img appeal
						 .andSelf()
						 .find('.sdt_wrap')
						 .stop(true)
						 .animate({'top':'8px'},500); //the text go back
				});
            });
