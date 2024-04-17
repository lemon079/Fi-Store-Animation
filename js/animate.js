let timeLine1 = gsap.timeline({
    repeat : -1,
});
let timeLine2 = gsap.timeline();

// animations with timeLine1 are run together and infinitely
// animations with timeLine2 are run together and only once


//--------------> || COL-1 ANIMATIONS

timeLine2.from('.logo', {
    opacity: 0,
    duration: 1,
    y: -20,
    ease : Expo.easeInOut,
},'ek-sath-chalo-2')

timeLine1.to('.bars-container .bar',{
    backgroundColor : 'black',
    width : '2px',
    duration : 1,
    ease : Expo.easeInOut,
    stagger : 3,
},'ek-sath-chalo-1')

timeLine1.to('.bars-container .bar',{
    backgroundColor : '#979797',
    width : '1px',
    ease : Expo.easeInOut,
    stagger : 3,
    delay : 2,
},'ek-sath-chalo-1')


//--------------> || COL-2/HERO CONTAINER ANIMATIONS

timeLine1.to('.image', {
    width: '88.2%',
    duration: 1,
    opacity: 1,
    stagger: 3,
    ease : Expo.easeInOut,
},'ek-sath-chalo-1')

timeLine1.to('.image', {
    width: '0%',
    duration: 1,
    opacity: 0,
    delay : 2,
    stagger: 3,
    ease : Expo.easeInOut,
},'ek-sath-chalo-1')

timeLine1.to('.heading h1', {
    left: '0%',
    duration: 1,
    stagger: 3,
    opacity: 1,
    ease : Expo.easeInOut,
},'ek-sath-chalo-1')

timeLine1.to('.heading h1', {
    opacity: 0,
    left: '-100%',
    stagger: 3,
    delay: 2,
    ease : Expo.easeInOut,
},'ek-sath-chalo-1')

gsap.to('.more a i', { // if i do this to timeLine1, then images wont change infinitely because timeline makes animation run one by one, and since this arrow animation itself runs infinitely, images wont be animated again after one go.  
    x: 10,
    duration: 1.5,
    yoyo: true,
    repeat : -1,
    ease : Expo.easeInOut,
})


//--------------> || COL-3 ANIMATIONS

timeLine2.from('.bar-icon', {
    opacity: 0,
    y: -10,
    ease : Expo.easeInOut,
    duration: 1,
}, 'ek-sath-chalo-2')

timeLine2.from('.social i', {
    opacity: 0,
    stagger: 0.2,
    ease : Expo.easeInOut,
    x: -10,
}, 'ek-sath-chalo-2')