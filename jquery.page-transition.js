(function($){
	$.pageTransition = function(opt){
		var set = $.extend({
				horizontal:40,
				vertical:20,
				max:1000,
				bgColor:'black'
			}, opt);

		var blinder = $("<div></div>");
		blinder.css({
			position:'fixed',
			top:0,
			left:0,
			right:0,
			bottom:0,
			background:set.bgColor,
			zIndex:99999
		});
		blinder.appendTo("body");
		
		
			
			var tw = $(blinder).width();
			var th = $(blinder).height();

			var w = tw/set.horizontal;
			var h = th/set.vertical;

			var els = [];

			var totalCnt = set.horizontal*set.vertical;
			var hided = 0;
			var that = blinder;

			for(var i=0;i<totalCnt;i++){
				els.push($("<span></span>"));
				els[i].css({
					backgroundColor:set.bgColor,
					width:w + 'px',
					height:h + 'px',
					display:'block',
					float:'left'
				});
				$(blinder).append(els[i]);
				
				setTimeout((function(v){
					return function(){
						els[v].css({backgroundColor:'transparent'});
						hided++;
						if( hided >= totalCnt ){
							$(that).remove();
						}
					}
				})(i), Math.floor(Math.random()*set.max));
			}
			$(blinder).css({backgroundColor:'transparent'});
		
	};
})(jQuery);
