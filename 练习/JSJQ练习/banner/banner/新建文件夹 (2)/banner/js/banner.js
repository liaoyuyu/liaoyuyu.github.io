var dw = $(document).outerWidth(true)
var li_leng = $('.banner').find('li').length

window.onresize = function() {
	dw = $(document).outerWidth(true)
	
	$('.banner').find('li').width(dw)
	
	$('.banner').find('ul').width(dw * li_leng)
}

$('.banner').find('li').width(dw)
$('.banner').find('ul').width(dw * li_leng)

var xyd_div = '<div class="xyd-div clearfix">'

for(var i = 0; i < li_leng; i++) {
	if(i == 0) {
		xyd_div += '<span class="click"></span>'
	}else {
		xyd_div += '<span></span>'
	}
}
xyd_div += '</div>'

$('.banner').find('.xyd-warp').append(xyd_div)
console.log($('.banner').find('.xyd-div').find('span').css('border-right-width'))
var eC
$('.banner').on('touchstart', function(e) {
	var that = this
	var eS = e.originalEvent.targetTouches[0].pageX
	$(that).find('li').eq(li_leng - 1).prependTo($(that).find('ul'))
	$(that).find('ul').css('margin-left', -dw + 'px')
	eC = 0
	$(that).on('touchmove', function(e) {
		var eE = e.originalEvent.targetTouches[0].pageX
		eC = eE - eS
		$(that).find('ul').css('margin-left', eC-dw + 'px')
	})
	
})

$('.banner').on('touchend', function(e) {
	var that = this
	var index =  $(that).find('.xyd-div').find('span.click').index()
	if(eC < 0) {
		if(Math.abs(eC) < 100) {
			$(that).find('ul').animate({
				'margin-left': -dw + 'px'
			},500,function() {
				$(that).find('li').eq(0).appendTo($(that).find('ul'))
				$(that).find('ul').css('margin-left', 0)
			})
		}else {
			if(index == li_leng -1) {
				index = -1
			}
			index++
			$(that).find('ul').animate({
				'margin-left': -dw * 2 + 'px'
			},500,function() {
				$(that).find('li').eq(0).appendTo($(that).find('ul'))
				$(that).find('li').eq(0).appendTo($(that).find('ul'))
				$(that).find('ul').css('margin-left', 0)
			})
		}
	}else if(eC > 0) {
		if(Math.abs(eC) < 100) {
			$(that).find('ul').animate({
				'margin-left': -dw + 'px'
			},500,function() {
				$(that).find('li').eq(0).appendTo($(that).find('ul'))
				$(that).find('ul').css('margin-left', 0)
			})
		}else {
			if(index == 0) {
				index = li_leng
			}
			index--
			$(that).find('ul').animate({
				'margin-left': 0
			},500,function() {
				
			})
		}
	}else {
		$(that).find('li').eq(0).appendTo($(that).find('ul'))
	}
	$(that).find('.xyd-div').find('span').removeClass('click')
	$(that).find('.xyd-div').find('span').eq(index).addClass('click')
})

