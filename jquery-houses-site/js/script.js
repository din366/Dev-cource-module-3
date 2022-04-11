const modalBtn = $('.present__modal-order');
const modalClose = $('.modal-order__close');
const modalOrder =  $('.modal-order');

modalBtn.click(function() {
  modalOrder.show(500); // 500 - плавность появления
});

modalClose.click(function() {
  modalOrder.hide(500);
});

const modalInputOrder = $('.modal-order__input');
const modalInputTitle = $('.modal-order__title');

modalInputOrder.focus(function() {
  modalInputTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
})

modalInputOrder.blur(function() {
  modalInputTitle.text('Заполните форму');
})

$('.modal-order__form').submit(function (e) {
  e.preventDefault();
  
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      modalInputTitle.text('Спасибо! Ваша заявка принята, номер заявки ' + data.id);
      $('.modal-order__form').slideUp(300);
    },
    error() {
      modalInputTitle.text('Что-то пошло не так... Попробуйте позже');
    }
  })
});


$('body').on('click', function(e) {
  /* close burger menu */
  if (!e.target.closest('.navigation') && !e.target.closest('.header__burger')) {
    $('.navigation').animate({
      left: -400,
    }, 500, function() {
      $('.navigation__close').animate({
        opacity: 0,
      }, 300, 'swing')
    })
  }

  /* close burger menu */
  if (e.target.closest('.navigation__close') === $(this).find('.navigation__close').get(0)) {
    $('.navigation').animate({
      left: -400,
    }, 500, function() {
      $('.navigation__close').animate({
        opacity: 0,
      }, 300, 'swing')
    })
  }
  
  /* show burger menu */
  if(e.target.closest('.header__burger')) {
    $('.navigation').animate({
      left: 0,
    }, 500, function() {
      $('.navigation__close').animate({
        opacity: 1,
      }, 300, 'swing')
    })
  }
})

