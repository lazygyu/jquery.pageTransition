(function($){
				$.fn.pageTransition = function(opt){
					var set = $.extend({
							horizontal:40,
							vertical:20,
							max:1000,
							bgColor:'black'
						}, opt);
					return this.each(function(){
						
						var tw = $(this).width();
						var th = $(this).height();

						var w = tw/set.horizontal;
						var h = th/set.vertical;

						var els = [];

						var totalCnt = set.horizontal*set.vertical;
						var hided = 0;
						var that = this;

						for(var i=0;i<totalCnt;i++){
							els.push($("<span></span>"));
							els[i].css({
								backgroundColor:set.bgColor,
								width:w + 'px',
								height:h + 'px',
								display:'block',
								float:'left'
							});
							$(this).append(els[i]);
							
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
						$(this).css({backgroundColor:'transparent'});
					});
				};
			})(jQuery);
