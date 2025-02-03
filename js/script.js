// модальное окно
const modalController = ({modal, btnOpen,btnClose}) =>{
    const buttonElems = document.querySelectorAll(btnOpen);
const modalElem = document.querySelector(modal);

modalElem.style.cssText =  
`display: flex;
visibility:hidden;
opacity:0;
transition:opacity 300ms ease-in-out;
`;
// свойство, которое пишется единыжды и переписыается
const closeModal  = event =>{
// event нуужен чтобы определить на какой элемент было нажато и закрыть окно в люой точке клика
const target = event.target;
if (target == modalElem  || target.closest(btnClose)){
    // || target.closest('.modal_close') - или родитель содержит modal_close т.е защищаем от клика мимо крестика
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;
setTimeout(() => {
    modalElem.style.visibility = 'hidden';
// окно будет закрываться через 300ms как и transition в modalElem
},300)
}
}
const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
})
modalElem.addEventListener('click', closeModal);
}
// для того,чтобы кнопки открывали разные модальные окна будем передавать параметры
// modalController({
// modal: '.modal ',
// btnOpen: '.sw_sl_button',
// btnClose: '.modal_close'
// }
// // с этими параментрами мы не привязваемся к классам и мо
// );

modalController({
    modal: '.modal_1 ',
    btnOpen: '.sw_sl_button_1',
    btnClose: '.modal_close'
    }
    // с этими параментрами мы не привязваемся к классам и мо
    );
    
    
modalController({
    modal: '.modal_2 ',
    btnOpen: '.sw_sl_button_2',
    btnClose: '.modal_close'
    }
    // с этими параментрами мы не привязваемся к классам и мо
    );
    
    modalController({
        modal: '.modal_3 ',
        btnOpen: '.sw_sl_button_3',
        btnClose: '.modal_close'
        }
        // с этими параментрами мы не привязваемся к классам и мо
        );
        
        modalController({
            modal: '.modal_4 ',
            btnOpen: '.sw_sl_button_4',
            btnClose: '.modal_close'
            }
            // с этими параментрами мы не привязваемся к классам и мо
            );
            
            
      
