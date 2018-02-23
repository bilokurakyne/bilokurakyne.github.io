/*ротатор анекдотів*/
var array = new Array(
    "анекдот 1",
    "анекдот 2",
    "анекдот 3",
    "анекдот 4",
    "анекдот 5"
); //массив со строками.
  var delay = 10000; //задержка в миллисекундах
  function textRotator(i) {
    var p = document.getElementById("textrotator");
    p.innerHTML = array[i];
    i++;
    if (i == array.length) i = 0;
    setTimeout("textRotator(" + i + ")", delay);
  }
/*ротатор анекдотів*/

/*Скільки сайт існує днів*/
function lifeSite() {
    var start = new Date('December 19, 2017'); // Дата создания сайта
    var end = new Date();
    var life = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    var suffix = new Array("день", "дня", "днів");
    var keys = [2, 0, 1, 1, 1, 2];
    var mod = life % 100;
    var suffix_key = mod > 4 && mod < 20 ? 2 : keys[Math.min(mod%10, 5)];
    document.getElementById("life_site").innerHTML = life + " " + suffix[suffix_key];
  }
/*Скільки сайт існує днів*/