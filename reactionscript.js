var start = new Date().getTime();
var times = []
            
            function getRandomColor() {
                //stuff here
            }
            
            function makeShapeAppear() {
                var top = Math.floor(Math.random() * 200);
                var left = Math.floor(Math.random() * 200);
                var width = Math.floor(Math.random()* 70) + 20;
                var height = Math.floor(Math.random() * 70) + 20;
                var colors = ["red", "blue", "green", "yellow"];
                var num = Math.floor(Math.random() * 4);
                var color = colors[num];
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0%";
              
                }
                  
                  document.getElementById("shape").style.height = height + "px";
                  document.getElementById("shape").style.width = width + "px";
                  document.getElementById("shape").style.left = left + "px";
                  document.getElementById("shape").style.top = top + "px";
                  document.getElementById("shape").style.display = "block";
                  document.getElementById("shape").style.backgroundColor = color;
                
               //bunch of stuff here changing the style of the shape
                
                start = new Date().getTime()
            }

            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2500);
            }
            
            appearAfterDelay();
            
            document.getElementById("shape").onclick = function(times){
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start)/1000;
                document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";
                appearAfterDelay();
                
            }
            