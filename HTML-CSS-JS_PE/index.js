window.addEventListener('load', function() {
    const femaleCharacter = document.querySelector('.female-character');
    const replayButton = document.querySelector('.replay-button');
  
    femaleCharacter.addEventListener('animationend', function() {
      femaleCharacter.style.opacity = 0;
      document.querySelector('.headline1').style.animation = 'slide-out-left 1s ease-out forwards';
    });
  
    replayButton.addEventListener('click', function() {
      resetAnimation();
    });
  
    function resetAnimation() {
      const elements = document.querySelectorAll('.headline1, .headline2, .subheadline, .learn-more, .logo, .replay-button');
      elements.forEach(function(element) {
        element.style.opacity = 0;
        element.style.animation = 'none';
        void element.offsetWidth; // Trigger reflow to restart animation
        element.style.animation = '';
      });
  
      femaleCharacter.style.opacity = 1;
      femaleCharacter.style.animation = 'fade-in 1s ease-in forwards';
      document.querySelector('.headline1').style.animation = 'slide-in-left 1s ease-in forwards';
      document.querySelector('.headline2').style.animation = 'slide-in-right 1s ease-in forwards 1s';
      document.querySelector('.subheadline').style.animation = 'fade-in 1s ease-in forwards 2s';
      document.querySelector('.learn-more').style.animation = 'fade-in 1s ease-in forwards 3s';
      document.querySelector('.logo').style.animation = 'slide-in-right 1s ease-in forwards 4s';
      document.querySelector('.replay-button').style.animation = 'fade-in 1s ease-in forwards 5s';
    }
  
    resetAnimation();
  });
  