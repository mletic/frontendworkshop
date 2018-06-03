function check () {

    var broj = parseInt(document.getElementById('br1').value);
    var message = '';

    if (broj > 100 && broj%2===0) {
        message = 'Broj je veci od 100 i paran';
    } else if (broj < 100 && broj%2!==0) {
        message = 'Broj je manji od 100 i neparan';
    } else {
        message = 'Nista od ta dva';
    }

    document.getElementById('message').value = message;
}