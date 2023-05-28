window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const color = [
    '#0072ff',
    '#27ff00',
    '#fffc00',
    '#ff00fe',
    '#ff0067',
    '#00ffac',
    '#fdaa10'
    ]
  
  // sounds working
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });
  
  // creating bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = color[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    });
  }
});