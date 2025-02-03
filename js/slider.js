const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // бесконечный слайдер
    loop: true,
    slidesPerView:1,
    spaceBetween:30,
    speed:300,
  // автопрокрутка
    // autoplay: {
    //   delay: 3000,
    // },
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
  // автовысота
  autoheight:true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      // возможность перетаскивания за ползунок
      el: '.swiper-scrollbar',
      draggable:false,
    },
  
    breakpoints:{
      320:{
        slidesPerView:1,
      
      },
      768:{
        slidesPerView:1,
        spaceBetween:10,
      
      },
      1200:{
      
        slidesPerView:1,
        spaceBetween:20,
      
      
      },
    }
  
  
  });

// слайдер для модального окна жк гринвуд 1 этаж



