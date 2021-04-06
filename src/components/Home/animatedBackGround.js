import React, {Component} from 'react';
import oCanvas from 'ocanvas';


export default class Canvas extends Component {
    componentDidMount () {
        const canvasEle = document.createElement('canvas');
        canvasEle.setAttribute("id", "canvas");
        document.getElementById('container').appendChild(canvasEle);
        // Script to animate canvas that's appended after mount. Original, unmodified code can be found here:
        //  https://codepen.io/html5andblog/details/jWbLbj
        
        let windowXArray = [];
        let windowYArray = [];
        
        const startWidth = window.innerWidth;
        const startHeight = window.innerHeight;

        for (let i = 0; i < startWidth; i++) {
            windowXArray.push(i);
        }
            
        for (let i = 0; i < startHeight; i++) {
            windowYArray.push(i);
        }
        
        function randomPlacement(array,length) {
            return array[Math.floor(Math.random()*length)];
        }

        const canvas = oCanvas.create({
            canvas:'#canvas',
            // background: '#154A7F',
            fps: 60
        });

        canvas.width = startWidth;
        canvas.height = startHeight;

        setInterval(function(){

            // Handle size increase at every interval, size decrease doesn't matter
            if (window.innerWidth!==canvas.width) {
                const temp = window.innerWidth;
                for (let i = canvas.width; i < temp; i++) {
                    windowXArray.push(i);
                }
                canvas.width = temp;
            }
            if (window.innerHeight!==canvas.height) {
                const temp = window.innerHeight;
                for (let i = canvas.height; i < temp; i++) {
                    windowYArray.push(i);
                }
                canvas.height = temp;
            }

            const locationY = randomPlacement(windowYArray,window.innerHeight)

            const rectangle = canvas.display.polygon({
                x: randomPlacement(windowXArray,window.innerWidth),
                y: locationY,
                origin: { x: 'center', y: 'center' },
                sides:6,
                rotation: Math.floor(Math.random()*90),
                radius: 20,
                fill: '#d9ed92',
                opacity: 0
            });
            
            canvas.addChild(rectangle);
            
            rectangle.animate({
                radius: 0,
                rotation: 180,
                opacity: 0.9,
                y:locationY+60,
                }, {
                duration: '1000',
                easing: 'ease-out-quad',
                callback: function () {
                            this.remove();
                    }
            });

        }, 200);


    }
    render() {
      return (
        <div id='container' style={{width:this.props.windowWidth,height:this.props.windowHeight, overflowY:'hidden'}}>
        </div>
      );
    }
  }

