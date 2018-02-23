// Скрипт скроллинга как ВК слева на странице
//
// объявим переменные
    var bottom_position = 0; // положение страницы
    var flag_bottom = false; // флаг, для отображения кнопки "назад"
    var flag_animate = false;// Флаг, определяющий, выполнение анимации
    
    $(document).ready(function(){
      // клик по кнопке вверх/назад
      $('.in_top').click(function(){
        // поднимаем флаг, началась выполнениние анимации
        flag_animate = true;
        // если на данный момент кнопка "назад"
        if(flag_bottom){
          // то скролим страницу в нужное место
          $("body,html").animate({"scrollTop":bottom_position}, 300, function(){ 
            // опускаем влаг анимации, она закончилась
            flag_animate = false;
          });
          // меняем кнопку
          flag_bottom = false;
          $('.in_top span').html('↑ Наверх ↑');
        }else{
          // если кнопка "вверх"
          $("body,html").animate({"scrollTop":0}, 300, function(){ 
            flag_animate = false;
          });   
          // запомним на сколько была прокручена страница
          bottom_position = $(window).scrollTop();
          // и зададим флаг, что нужно показать кнопку "назад"
          flag_bottom = true;
          $('.in_top span').html('↓ Назад ');
        }
      });
     
      // делаем проверку при скролле
      $(window).scroll(function(event){
        var countScroll = $(window).scrollTop();
        // если прокрутили больше 100 пикселей и анимация не выполняется, то показываем кнопку
        if (countScroll > 100 && !flag_animate){
          $('.in_top').show();
          if(flag_bottom){
            flag_bottom = false;
            $('.in_top span').html('↑ Наверх ↑');
          }
        // иначе прячем кнопку, если это не кнопка "назад"
        }else{
          if(!flag_bottom){
            $('.in_top').hide();
          }
        }
      });
    });