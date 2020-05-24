// var x= $('h1')
// undefined
// x.css('color','red')
// E.fn.init [h1, prevObject: E.fn.init(1)]
// x.css('background','blue')
// E.fn.init [h1, prevObject: E.fn.init(1)]
// var newCSS={
//     'color':'white',
//     'background':'blue',
//     'border':'red'}
// undefined
// newCSS
// {color: "white", background: "blue", border: "red"}
// x.css(newCSS)
// E.fn.init [h1, prevObject: E.fn.init(1)]

//var newCSS={
//     'color':'white',
//     'background':'lightgreen',
//     'border':'20px solid red'}
// undefined
// x.css(newCSS)
// E.fn.init [h1, prevObject: E.fn.init(1)]

// var listItems=$('li')
// undefined
// listItems
// E.fn.init(3) [lı, lı, lı, prevObject: E.fn.init(1)]
// 0: lı
// 1: lı
// 2: lı
// length: 3
// prevObject: E.fn.init [document]
// __proto__: Object(0)
// listItems.css('color','blue')
// E.fn.init(3) [lı, lı, lı, prevObject: E.fn.init(1)]
// listItems.css('color','blue')
// E.fn.init(3) [lı, lı, lı, prevObject: E.fn.init(1)]
// listItems.eq(0).css('color','orange')
// E.fn.init [lı, prevObject: E.fn.init(3)]
// listItems.eq(-1).css('color','orange')
// E.fn.init [lı, prevObject: E.fn.init(3)]

// $('h1').text()
// "JQuery"
// $('h1').text("BRAND NEW TEXT")
// E.fn.init [h1, prevObject: E.fn.init(1)]

// $('input')
// E.fn.init(2) [ınput, ınput, prevObject: E.fn.init(1)]0: ınput1: ınputlength: 2prevObject: E.fn.init [document]__proto__: Object(0)
// $('input').eq(1).attr('type')
// "submit"
// $('input').eq(1).attr('type','checkbox')
// E.fn.init [ınput, prevObject: E.fn.init(2)]0: ınputlength: 1prevObject: E.fn.init(2) [ınput, ınput, prevObject: E.fn.init(1)]__proto__: Object(0)

// $('input').eq(0).val('new value!')
// E.fn.init [ınput, prevObject: E.fn.init(2)]

// $('h1').addClass('turnRed')
// E.fn.init [h1.turnRed, prevObject: E.fn.init(1)]
// $('h1').removeClass('turnRed')
// E.fn.init [h1, prevObject: E.fn.init(1)]
// $('h1').toggleClass('turnBlue')
// E.fn.init [h1.turnBlue, prevObject: E.fn.init(1)]
// $('h1').toggleClass('turnBlue')
// E.fn.init [h1, prevObject: E.fn.init(1)]//return previously case



// $('h1').click(function() {
//   console.log('there was a click!');
// })

// $('li').click(function(){
//   console.log('any li was clicked!');
// })
//
// $('h1').click(function() {
//   console.log('there was a click!');
// })
//
// $('h1').click(function(){
//   $(this).text('I was changed')
// })

// $('input').eq(0).keypress(function() {
//   $('h3').toggleClass('turnBlue');
// })

// $('input').eq(0).keypress(function(event) {
//   console.log(event);
// })

// $('input').eq(0).keypress(function(event){
//   if(event.which===13/*(specia code)*/){
//     $('h3').toggleClass('turnBlue');
//   }
// })

// //on()
// $('h1').on('dbclick',function() {//highlight filosophy;)
//   $(this).toggleClass('turnBlue');
// })

// $('h1').on('mouseenter',function(){
//   $(this).toggleClass('turnBlue');
// })

//animations
// $('input').eq(0).on('click',function() {
//   $('.cotainer').fadeOut(3000);
// })

// $('input').eq(1).on('click',function() {
//   $('.cotainer').slideUp(3000);
// })
