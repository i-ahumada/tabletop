const lineWidth = 3;
/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLCanvasElement} canvas 
 * @param {Object} tool
 */
export function write (ctx, canvas, tool ) {
    console.log(tool.color);
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    let isPainting = false;

    switch (tool.type) {
        case "pencil": {
            canvas.onmousedown = (e) => { 
                isPainting = true;
                ctx.strokeStyle = tool.color
                ctx.beginPath();
                ctx.moveTo(e.pageX * scaleX, e.pageY * scaleY);
            }; 
            canvas.onmouseup = () => { 
                isPainting = false;
                ctx.stroke()
            };
            canvas.onmousemove = (e) => {
                if (isPainting) {
                    ctx.lineWidth = lineWidth;
                    ctx.lineCap = 'round';
                    ctx.lineTo(e.pageX * scaleX, e.pageY * scaleY);
                    ctx.stroke();
                }
            }
            break;
        }
        case "circle": {
            let topLeftX, topLeftY;
            canvas.onmousedown = (e) => { 
                isPainting = true;
                ctx.strokeStyle = tool.color
                topLeftX = e.clientX * scaleX;
                topLeftY = e.clientY * scaleY;
                ctx.beginPath();
            }; 
            canvas.onmouseup = (e) => { 
                console.log("hola")
                isPainting = false;
                const endX = e.clientX * scaleX;
                const endY = e.clientY * scaleY;
                const radiusX = (endX - topLeftX) / 2;
                const radiusY = (endY - topLeftY) / 2;
                const centerX = topLeftX + radiusX;
                const centerY = topLeftY + radiusY;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = tool.color; 
                ctx.ellipse(centerX, centerY, Math.abs(radiusX), Math.abs(radiusY), 0, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
            }
            break;
        }
        case "square": {
            let topLeftX, topLeftY;
            canvas.onmousedown = (e) => { 
                isPainting = true;
                ctx.strokeStyle = tool.color
                topLeftX = e.clientX * scaleX;
                topLeftY = e.clientY * scaleY;
            }; 
            canvas.onmouseup = (e) => { 
                isPainting = false;
                const width = e.clientX * scaleX - topLeftX ;
                const height = e.clientY * scaleY - topLeftY;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = tool.color;
                ctx.strokeRect(topLeftX, topLeftY, width, height);
            }
            break;
        }
    }

}

/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLCanvasElement} canvas 
 * @param {Object} tool
 */
export function ruler(ctx, canvas, tool) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    let isMeasuring = false;
    let startingMeasureX = 0;
    let startingMeasureY = 0;
    
    canvas.onmousedown = (e) => {
        isMeasuring = true;
        startingMeasureX = e.pageX * scaleX;
        startingMeasureY = e.pageY * scaleY;
        ctx.moveTo(startingMeasureX, startingMeasureY);
        ctx.beginPath();
    }
    canvas.onmouseup = () => {
        isMeasuring = false;
        ctx.stroke();
    }
    canvas.onmousemove = (e) => {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = tool.color;
        ctx.lineTo(e.clientX * scaleX, e.clientY * scaleY);
        ctx.stroke();
    }
} 