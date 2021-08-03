var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            var radius = canvas.height / 2;
            ctx.translate(radius, radius);
            radius = radius * 0.90
            drawClock();
            setInterval(drawClock, 1000);
    
            function drawClock() {
                drawFace(ctx, radius);
                drawNumbers(ctx, radius);
                drawTime(ctx, radius);
            }
            function drawFace(ctx, radius) {
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, 2*Math.PI);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(0, 0, radius*0.05, 0, 2*Math.PI);
                ctx.fillStyle = '#333';
                ctx.fill();
            }
            function drawNumbers(ctx, radius){
                var ang;
                var num;
                ctx.font = radius * 0.08 + "px arial";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                for(num = 1; num < 5; num++){
                    ang = num * Math.PI / 2;
                    ctx.rotate(ang);
                    ctx.translate(0, -radius * 0.85);
                    ctx.rotate(-ang);
                    ctx.fillText((num*3).toString(), 0, 0);
                    ctx.rotate(ang);
                    ctx.translate(0, radius * 0.85);
                    ctx.rotate(-ang);
                }
            }
            function drawTime(ctx, radius){
                var now = new Date();
                var hour = now.getHours();
                var minute = now.getMinutes();
                var second = now.getSeconds();
                //hour
                hour = hour%12;
                hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
                drawHand(ctx, hour, radius*0.4, radius*0.02);
                //minute
                minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
                drawHand(ctx, minute, radius*0.6, radius*0.02);
                // second
                second = (second*Math.PI/30);
                drawHand(ctx, second, radius*0.8, radius*0.01);
            }
            function drawHand(ctx, pos, length, width) {
                ctx.beginPath();
                ctx.lineWidth = width;
                ctx.lineCap = "round";
                ctx.moveTo(0,0);
                ctx.rotate(pos);
                ctx.lineTo(0, -length);
                ctx.stroke();
                ctx.rotate(-pos);
            }