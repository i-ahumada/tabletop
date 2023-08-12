/**
 * @param {Object} tool
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLCanvasElement} canvas 
 */
export function write (ctx, canvas, tool ) {
    console.log(tool.color);
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    let isPainting = false;
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
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineTo(e.pageX * scaleX, e.pageY * scaleY);
            ctx.stroke();
        }
    }
}

/**
 *
 * @param {CanvasRenderingContext2D} ctx 
 * @param {HTMLCanvasElement} canvas 
 */
export function ruler(ctx, canvas) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    ctx.lineWidth = 1;
    let isMeasuring = false;
    let startingMeasureX = 0;
    let startingMeasureY = 0;

    canvas.onmousedown = (e) => {
        isMeasuring = true;
        startingMeasureX = e.pageX * scaleX;
        startingMeasureY = e.pageY * scaleY;
        ctx.moveTo(startingMeasureX, startingMeasureY);
    }
    canvas.onmouseup = (e) => {
        isMeasuring = false;
        ctx.stroke();
    }
} 