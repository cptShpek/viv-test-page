const animations = function (){
  const target = document.getElementById('animations')

  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },

    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && 
    targetPosition.top < windowPosition.bottom && 
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 

      var lineBars = document.getElementById('animations').getElementsByClassName('line-bar')
      var circles = document.getElementById('animations').getElementsByClassName('circle')
      for (let i = 0; i < lineBars.length; i++){
        setTimeout(() => changeStyles(lineBars[i], circles[i]), i * 2000)
      }


      window.removeEventListener('scroll', animations);
  } 
    
}

const changeStyles = function(line, circle){
  line.style.width = "100%"
  circle.classList.add('fullfill')
  circle.classList.add('blue')
}


window.addEventListener('scroll', animations);