//const canvas = document.getElementById('draw');

window.onload = function () {
    const iframe = document.getElementById('draw');
    setTimeout( function () {
        const canvas = iframe.contentWindow.document.querySelector('canvas');
        const events = document.getElementById('events');

        console.log("Canvas ready!", canvas);

        const clone = e => new e.constructor(e.type, e);
        const log = e => console.log(e.type);

        const setUp = (canvas, events, duplicate) => {
            const forward = (e) => {
                let ev = clone(e);
                if (ev.touches && ev.touches[0]) {
                    ev.clientX = ev.touches[0].clientX;
                    ev.clientY = ev.touches[0].clientY;
                }
                if (ev.changedTouches && ev.changedTouches[0]) {
                    ev.clientX = ev.changedTouches[0].clientX;
                    ev.clientY = ev.changedTouches[0].clientY;
                }
                canvas.dispatchEvent(ev);
            };
            events.addEventListener('pointerup', forward, false);
            events.addEventListener('pointerdown', forward, false);
            events.addEventListener('pointermove', forward, false);
            events.addEventListener('pointerover', forward, false);
            events.addEventListener('pointerout', forward, false);

            events.addEventListener('touchstart', forward, false);
            events.addEventListener('touchcancel', forward, false);
            events.addEventListener('touchend', forward, false);
            events.addEventListener('touchmove', forward, false);
        };

        setUp(canvas, events);
    }, 2000);
};


