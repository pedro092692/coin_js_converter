const main_coin = document.getElementById('main_coin');
const dollar = document.getElementById('dollar');
const yen = document.getElementById('yen');
const aud = document.getElementById('aud');

main_coin.focus();

function converter(amount){
    let dollar_value = 1.084;
    let yen_value = 170.54;
    let aud_value = 1.63;

    values = [];
    values.push((amount * dollar_value).toFixed(2));
    values.push((amount * yen_value).toFixed(2));
    values.push((amount * aud_value).toFixed(2));

    return values;
}

function check_coin(){
    let number = parseFloat(main_coin.value);
    let error = document.getElementById('error');
    if(isNaN(number)){
       error.style.display = 'block';
       return false;
    }else{
        error.style.display = 'none';
        resulst = converter(number);
        dollar.value = resulst[0];
        yen.value = resulst[1];
        aud.value = resulst[2];
    }

    

}


main_coin.addEventListener('keyup', check_coin);
main_coin.addEventListener('change', check_coin)