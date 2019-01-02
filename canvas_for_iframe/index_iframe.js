const canvas = document.getElementById('draw');

const log = e => console.log(e.type);

const dim = canvas.getBoundingClientRect();
const app = new PIXI.Application(dim.width, dim.height, {
    transparent: true,
    view: canvas
});
//app.renderer.plugins.interaction.supportsTouchEvents = false;

const bunny = new PIXI.Sprite.fromImage('http://pixijs.io/examples/required/assets/basics/bunny.png');

bunny.anchor.set(0.5);

bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

bunny.interactive = true;
bunny
    .on('touchstart', log)
    .on('touchcancel', log)
    .on('touchend', log)
    .on('touchmove', log)
    .on('pointerdown', log)
    .on('pointerover', log)
    .on('pointerout', log)
    .on('pointerup',  log)
    .on('pointermove',  log);

app.stage.addChild(bunny);