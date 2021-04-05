import './styles/main.scss';
import anime from 'animejs';

anime({
    targets: '.square',
    keyframes: [
        { translateY: 50, scale: 1 },
        { translateX: -250, scale: 1 },
        { translateY: 0, scale: 1 },
        { translateX: 250, scale: 1 },
    ],
    scale: 3,
    duration: 5000,
    loop: true,
});

anime({
    targets: '#info',
    innerText: [0, 100],
    duration: 5000,
    round: 1,
    direction: 'alternate',
    loop: true,
});

anime({
    targets: '.squares',
    keyframes: [
        { translateX: 15 },
        { opacity: 1, rotate: 30, translateX: -15 },
        { rotate: 0, translateX: 0 },
        { translateX: 15 },
    ],
    delay: anime.stagger(500, { from: 'last' }),
    duration: 5000,
});

const length = 14;
const height = 5;
const squareGrid = document.querySelector('.square-grid') as HTMLDivElement;
for (var i = 0; i < length * height; i++) {
    let div = document.createElement('div');
    div.className = 'square green';
    squareGrid.appendChild(div);
}

const timeline = anime.timeline({
    duration: 750,
    loop: true,
    direction: 'alternate',
});

timeline
    .add({
        targets: '.square.green',
        translateX: anime.stagger(10, {
            grid: [14, 5],
            from: 'center',
            axis: 'x',
        }),
        translateY: anime.stagger(10, {
            grid: [14, 5],
            from: 'center',
            axis: 'y',
        }),
        rotateZ: anime.stagger([0, 90], {
            grid: [14, 5],
            from: 'center',
            axis: 'x',
        }),
        delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '.square.green',
        translateX: anime.stagger(20, {
            grid: [14, 5],
            from: 'center',
            axis: 'x',
        }),
        translateY: anime.stagger(20, {
            grid: [14, 5],
            from: 'center',
            axis: 'y',
        }),
        rotateZ: anime.stagger([90, 180], {
            grid: [14, 5],
            from: 'center',
            axis: 'x',
        }),
        delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
        easing: 'easeInOutQuad',
    });
