var count = 0;
function clickButton() {
    switch (count) {
        case 0:
            alert('No hace nada');
            count++;
            break;
        case 1:
            alert('Enserio... es inutil...');
            count++;
            break;
        case 2:
            alert('Deja de intentarlo... no hara nada...');
            count++;
            break;
        case 3:
            alert('Enserio quieres que haga algo!?');
            count++;
            break;
        case 4:
            alert('ESTA BIEN! HARE QUE SIRVA DE ALGO!');
            count++;    
            break;
        case 5:
            window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
            count++;
            break;
        case 6:
            alert('Que temon! jsjwasjwaefj Ya estaras contento no?');
            count++;
            break;
        case 7:
            alert('Pues ya esta, no hare mas por hoy');
            count++;
            break;
        case 8:
            alert('A mimir ugu');
            count++;
            break;
        default:
            alert('El boton esta en descanso');
            break;
    }
}
