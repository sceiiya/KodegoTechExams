const elements = `<div class="container">
<img src="assets/background.png" alt="Background Image" class="background">
<img src="assets/female.png" alt="Female Character" class="female-character">
<div class="text-container">
    <div class="headline1">
        <img src="assets/headline1.png" alt="">
    </div>
    <div class="headline2">
        <img src="assets/headline2.png" alt="">
    </div>
    <div class="subheadline">
        <img src="assets/subheadline.png" alt="">
    </div>
    <div class="learn-more">
        <img src="assets/learnmore.png" alt="">
    </div>
    <img src="assets/logo.png" alt="Logo" class="logo">
    <div class="replay-button">
        <img src="assets/replay.png" alt="">
    </div>
</div>
</div>
`;

let female_character;
let headline1;
let headline2;
let subheadline;
let learn_more;
let logo;
let replay_button;

const body = document.querySelector('body');

const reLoad = () => {

    body.innerHTML = elements;    

    female_character = document.querySelector('.female-character');
    headline1 = document.querySelector('.headline1');
    headline2 = document.querySelector('.headline2');
    subheadline = document.querySelector('.subheadline');
    learn_more = document.querySelector('.learn-more');
    logo = document.querySelector('.logo');
    replay_button = document.querySelector('.replay-button');

    replay_button.addEventListener('click', ()=>{
        reLoad();
    });
    
    setTimeout(()=>{female_character.style.opacity = 1}, 1000); // fade
    setTimeout(()=>{headline1.style.transform = 'translate(-50%, -45%) scale(1)'}, 1450);
    setTimeout(()=>{female_character.style.opacity = 0}, 2500); // fade
    setTimeout(()=>{headline2.style.transform = 'translate(-50%, -75%)'}, 2900);
    setTimeout(()=>{headline1.style.transform = 'translate(-50%, -45%) scale(0)'}, 3300);
    setTimeout(()=>{subheadline.style.opacity = 1}, 3800); //fade
    setTimeout(()=>{learn_more.style.opacity = 1}, 4300);
    setTimeout(()=>{replay_button.style.display = 'block'}, 4300);
    setTimeout(()=>{logo.style.transform = 'translate(-15%, -95%)'}, 4700);
    setTimeout(()=>{
        replay_button.style.opacity = 1;
    }, 5200); // fade
    
}

body.onload = ()=>{
    reLoad();
}