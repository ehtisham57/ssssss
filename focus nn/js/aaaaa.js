$(document).ready(function(){
   $('.list').click(function(){
       const value = $(this).attr('data-filtered');
       if(value == 'All'){
           $('.image').show('.1000');
       }
       else{
           $('.image').not('.'+value).hide('1000');
           $('.image').filter('.'+value).show('1000')
       }
   })
})

$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})
$('.list').click(function(){
    $(this).addClass('animate__animated animate__zoomIn').siblings().removeClass('animate__animated animate__zoomIn');
})