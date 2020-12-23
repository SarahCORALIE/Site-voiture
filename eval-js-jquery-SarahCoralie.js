// Sarah CORALIE
//-----------------------------------
$('#carouselExampleSlidesOnly').carousel({
    interval: 15000,
    pause: false
});

// RENDRE ACTIVES LES FLECHES PREVIOUS ET NEXT DU 1ER CAROUSEL ARTICLE
$('.carousel-control-prev-icon').on('click', function(){
    console.log( 'test clic sur previous');
    $('#carouselExampleControls-1').carousel('prev');
});

$('.carousel-control-next-icon').on('click', function(){
    console.log( 'test clic sur next');
    $('#carouselExampleControls-1').carousel('next');
});

// RENDRE ACTIVES LES FLECHES PREVIOUS ET NEXT POUR TOUS LES CAROUSELS ARTICLE

//let carouselArticle = $('.carousel_article')
//console.log ('test carouselArticle',carouselArticle)

//--------------------
// essaie 1
//--------------------

// $.each(carouselArticle, function(item){

//     $('item .carousel-control-prev-icon').on('click', function(){
//             console.log( 'test clic sur previous');
//             $(item).carousel('prev');
//             console.log (item);
//         });
        
//         $('.carousel-control-next-icon').on('click', function(){
//             console.log( 'test clic sur next');
//             $(this.parent).carousel('next');

//         }); 
// }) 

//-------------------
// essaie 2
//-------------------

// $('.carousel-control-prev-icon').on('click', function(){
//     console.log( 'test clic sur previous');
//     $.each(carouselArticle, function(item)
//     {     
//        // $(item).carousel('prev');
//         console.log ('test item' ,item);
//         console.log ('test this', this);
    
//     }); 
// }); 
// $('.carousel-control-next-icon').on('click', function(){
//     console.log( 'test clic sur next');
//     $(this.parent).carousel('next');
// });


$(document).ready(function(){

// menu déroulant
//-------------------------------------
$('.fa-bars').on('click', function()
{
    $('.menuToggle').slideToggle(1000)
});

//scroll infini
//-------------------------------------
/*   var listeArticles = $('div.article');
    console.log($('div.article'))
    
*/

// $(window).scroll(fonction(),{
//     if ( $(window).scrollTop() + $(window).height() == $(document).height())
//     {
//         $('.article.hiden').show();
//     }
// });
});