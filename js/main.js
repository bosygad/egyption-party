// "use strict"
let menuWidthe = $('.menu').outerWidth()

console.log(menuWidthe);
$('.menu').css({
     
    left : -menuWidthe
})
$('.option').click(function(){
    $('.menu').css({
        left : 0
    })
})
$('#btnClose').click(function(){
    $('.menu').css({
       
        left : -menuWidthe
    })  
})

// //  scroll
$('a[href ^="#"]').click(function(){
    let href = $(this).attr('href')
    let secTop = $(href).offset().top
    $('body,html').animate({scrollTop : secTop},1000)
})



$('.singer li').css('backgroundColor','#E68285')

$('.singer li').css( 'cursor', 'pointer')

$('.singer p').css({'backgroundColor':'#9c9c9c','margin':'0px', })



$('.singer li').eq(0).click(function(){
  
    $('.one').slideToggle(500)
    $('.two').hide()
    $('.three').hide()
    $('.four').hide()

    
})
$('.singer li').eq(1).click(function(){
    $('.two').slideToggle(500)
    $('.one').slideUp(500)
    $('.three').slideUp(500)
    $('.four').slideUp(500)
    
})
$('.singer li').eq(2).click(function(){
    $('.three').slideToggle(500)
    $('.one').slideUp(500)
    $('.two').slideUp(500)
    $('.four').slideUp(500)
    
})
$('.singer li').eq(3).click(function(){
    $('.four').slideToggle(500)
    $('.one').slideUp(500)
    $('.two').slideUp(500)
    $('.three').slideUp(500)
    
})


window.onload = function() {
    countDown('10 october 2024 10:10:00')
}
function countDown(toCount){
 let dateParty = new Date(toCount)
 dateParty = (dateParty.getTime()/1000)
 let timeNow = new Date()
 timeNow = (timeNow.getTime()/1000)
 time = (dateParty - timeNow)
 let days = Math.floor( (time / ( 24 * 60 * 60)));
 let hours = Math.floor((time - (days * (24*60*60))) / 3600);
 let mins = Math.floor((time - (days * (24*60*60)) - (hours * 3600 )) / 60);
 let secs = Math.floor((time - (days * (24*60*60)) - (hours * 3600) - (mins * 60))) 
    $(".days").html(`${days} D`).css({'color':'#fff','fontSize':'30px'})
    $(".hour").html(`${hours} h`).css({'color':'#fff','fontSize':'30px'})
    $(".minute").html(`${ mins } m`).css({'color':'#fff','fontSize':'30px'})
    $('.second').html(`${ secs} s`).css({'color':'#fff','fontSize':'30px'})
    setInterval(function() {  countDown(toCount); }, 1000);
  }


  i=100
$('textarea').keyup(function(){
  let length = $(this).val().length;
  let char = i - length
  if(char<=0)
  $('.char').text('your available character finished')
else
$('.char').text(char)
})


  



