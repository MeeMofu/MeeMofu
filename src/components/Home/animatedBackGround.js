import React, {Component} from 'react';

export default class Canvas extends Component {
    componentDidMount () {
        const canvas = document.createElement('canvas');
        canvas.setAttribute("id", "canvas");
        document.getElementById('container').appendChild(canvas);
        const animatedScript = document.createElement('script');
        animatedScript.setAttribute("id", "animate");
        document.getElementById('container').appendChild(animatedScript);
        document.getElementById('animate').innerHTML=`
        // Hardcoded script to animate canvas. Creator of the original code can be found here:
        //  https://codepen.io/html5andblog/details/jWbLbj
        
        var windowXArray = [];
        var windowYArray = [];
        
        for (var i = 0; i < $(window).innerWidth(); i++) {
            windowXArray.push(i);
        }
            
        for (var i = 0; i < $(window).innerHeight(); i++) {
            windowYArray.push(i);
        }
        
        function randomPlacement(array,length) {
            var placement = array[Math.floor(Math.random()*length)];
            return placement;
        }
            
        
        var canvas = oCanvas.create({
            canvas: '#canvas',
            background: '#2c3e50',
            fps: 60
        });
        setInterval(function(){
            // Handle size increase at every interval
            for (var i = canvas.width; i < window.innerWidth; i++) {
                windowXArray.push(i);
            }
            for (var i = canvas.height; i < window.innerHeight; i++) {
                windowYArray.push(i);
            }
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            var rectangle = canvas.display.ellipse({
                x: randomPlacement(windowXArray,canvas.width),
                y: randomPlacement(windowYArray,canvas.height),
                origin: { x: 'center', y: 'center' },
                radius: 0,
                fill: '#27ae60',
                opacity: 1
            });
            
            canvas.addChild(rectangle);
            
            rectangle.animate({
                radius: 10,
                opacity: 0
                }, {
                duration: '1000',
                easing: 'linear',
                callback: function () {
                            this.remove();
                    }
            });

        }, 100);

`
    }
    render() {
      return (
        <div id='container' style={{width:this.props.windowWidth,height:this.props.windowHeight, overflowY:'hidden'}}>
        </div>
      );
    }
  }

