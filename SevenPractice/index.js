//Регулярное выражение для нашей даты
var dateRegexp = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/

//Список доступных значений для изменения
var availableTime = ['years','months','days','hours','minutes'];

//Функция, которая принимает на вход строку и если в строке меньше 2 символов добавляет впереди 0
//Пример: 6 -> 06, 05 -> 05
function addZeroFirst(value){
    var value = String(value);
    
    return value.length<2? '0'+value : value;
}

function dateFormater(date){
    var res = '';
    res += date.getFullYear();
    res += '-';
    res += addZeroFirst(date.getMonth()+1);
    res += '-';
    res += addZeroFirst(date.getDate());
    res +=' ';
    res += addZeroFirst(date.getHours());
    res += ':';
    res += addZeroFirst(date.getMinutes());
    return res;
}


//Функция проверки изменяемного параметра, в начале файла задан строгий список изменяемых параметров даты
//На вход функция получает число(строго больше 0) для увеличения нужного параметра на него и 
//строку с изменяемым параметром, который мы ищем в заданом списке, если совпадений нет выдаем исключение
function checkValueAvailableTime(value, time){
    if(availableTime.indexOf(time)===-1)
    throw new TypeError('Изменять можно только: год,месяц,день,часы,минуты');
    
    if(value<0) throw new TypeError('Добавляемое значение не может быть отрицательным');
}


function changeDate(date,value,time){
    switch (time){
        case 'years':
            var newYear = date.getFullYear() + value;
            date.setFullYear(newYear);
            break;
        case 'months':
            var newMonth = date.getMonth() + value;
            date.setMonth(newMonth);
            break;
        case 'days': 
            var newDays = date.getDate() + value;
            date.setDate(newDays);
            break;
        case 'hours':
            var newHours = date.getHours() + value;
            date.setHours(newHours);
            break;
        case 'minutes':
            var newMinutes = date.getMinutes() + value;
            date.setMinutes(newMinutes);
            break;

        default:
    }
}

/**
 * @param {String} dateStr
 * @returns {Object}
 */
module.exports = function (dateStr) {
    //Получаем строку и разбиваем ее на массив строк используя регулярку
    var match = dateStr.match(dateRegexp);

    //Создаем новую дату, учитывая отсчет месяца с 0
    var date = new Date(match[1],match[2]-1,match[3],match[4],match[5]);

    return {
        get value(){
            return dateFormater(date);
        },

        add: function(value,time){
            checkValueAvailableTime(value,time);
            changeDate(date,value,time);

            return this;
        },

        subtract: function(value, time){
            checkValueAvailableTime(value,time);
            changeDate(date,-1*value,time);

            return this;
        }
    }
};
