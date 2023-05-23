let log = new Log(document.querySelector('.log'));

let char = new Knight('Zabela')
let monster = new LittleMonster()

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log,
);

stage.start();


//console.log(`${attacking.name} está atacando ${attacked.name}`);