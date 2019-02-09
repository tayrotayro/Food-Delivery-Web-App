const text = 'Deliverd 2 U';

// this function turns a string into an array
const createLetterArray = (string) => {
  return string.split('');
}

// this function creates letter layers wrapped in span tags
const createLetterLayers = (array) => {
  return array.map((letter) => {
      let layer = '';
      //specify # of layers per letter
      for (let i = 1; i <= 2; i++) {
        // if letter is a space
        if(letter == ' '){
          layer += '<span class="space"></span>';
        }else{
          layer += '<span class="letter-'+i+'">'+letter+'</span>';
        }
      }
      return layer;
  });
}

// this function wraps each letter in a parent container
const createLetterContainers = (array) => {
  return array.map((item) => {
    let container = '';
    container += '<div class="wrapper">'+item+'</div>';
    return container;
  });
}

// use a promise to output text layers into DOM first
const outputLayers = new Promise(function(resolve, reject) {
      document.getElementById('text').innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
      resolve();
});

// then adjust width and height of each letter
const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers.then(() => {
    return spans.map((span) => {
      setTimeout(() => {
        span.parentElement.style.width = span.offsetWidth+'px';
        span.parentElement.style.height = span.offsetHeight+'px';
      }, 250);
    });  
}).then(() => {
    // then slide letters into view one at a time
    let time = 250;
    return spans.map((span) => {
      time += 75;
      setTimeout(() => {
        span.parentElement.style.top = '0px';
      }, time);
    });
});

/*HTML
<div id="text">
<!-- content generated with JS -->  
</div>
*/



/* CSS

$background: #efefef;
$primary_font: 'Fredoka One', sans-serif;
$first_color: rgba(0, 0, 255, 0.5);
$second_color: rgba(255, 0, 0, 0.5);

html, body {
  background-color: $background;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#text {
  font-family: $primary_font;
  font-size: 6em;
  line-height: 1em;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    cursor: default;
  }
  
  .wrapper {
    display: inline-block;
    top: -900px;
    position: relative;
    height: 150px; 
    width: 90px; 
    transition: ease 0.3s all;
    
    span {
      position: absolute;
      top:0;
      right:0;

      transition: ease 0.3s all;
      
      &.letter-2 {
        color: $first_color;
      }

      &.letter-1 {
        color: $second_color;
        z-index: 1;
        
        &:hover {
           top: -3px;
           right: -3px;
           
           ~ .letter-2 {
             top: 3px;
             right: 3px;
           }
        }
      }
      
      &.space {
        padding: 0;
        min-width: 30px;
        display: inline-block;
      }
    }
  }
}
 
*/
