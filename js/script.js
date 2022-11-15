$('.services-carousel').owlCarousel({
    items:1,
    nav:true,
    navText:['<img src="img/left.svg">','<img src="../img/right.svg">'],
    loop:true,
    margin:10,
    merge:true,
    dots:false,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});
$('.tesimonials-carousel').owlCarousel({
    items:1,
    nav:true,
    navText:['<img src="img/left.svg">','<img src="../img/right.svg">'],
    loop:true,
    margin:10,
    merge:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000 ,
    smartSpeed:950,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});