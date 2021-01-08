// Sarah CORALIE
//-----------------------------------
$('#carouselExampleSlidesOnly').carousel({
    interval: 15000,
    pause: false
});

// RENDRE ACTIVES LES FLECHES PREVIOUS ET NEXT DU 1ER CAROUSEL ARTICLE
    // $('.carousel-control-prev-icon').on('click', function(){
    //     console.log( 'test clic sur previous');
    //     $('#carouselExampleControls-1').carousel('prev');
    // });

    // $('.carousel-control-next-icon').on('click', function(){
    //     console.log( 'test clic sur next');
    //     $('#carouselExampleControls-1').carousel('next');
    // });

// RENDRE ACTIVES LES FLECHES PREVIOUS ET NEXT POUR TOUS LES CAROUSELS ARTICLE

    let carouselArticle = $('.carousel_article')
    console.log ('test carouselArticle',carouselArticle)

//--------------------
//essai 3
//--------------------
let previous = carouselArticle.children('.carousel-control-prev');

for ( i of previous ){
   console.log('test i dans previous',i);
   previous.on('click', function(){
       $(this).parent().carousel('prev');
   })  
}

let next = carouselArticle.children('.carousel-control-next');
for ( i of next ){
   console.log('test i dans previous',i);
    next.on('click', function(){
       $(this).parent().carousel('next');
    })
}

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