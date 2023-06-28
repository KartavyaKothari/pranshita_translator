function displayText(text) {
  var display = document.getElementById('display-text');
  display.textContent = text;
}

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
  
    const x = (clientX / innerWidth) * 100;
    const y = (clientY / innerHeight) * 100;
  
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
  });
