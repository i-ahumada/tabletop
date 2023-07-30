import { useContext, useEffect } from "react"
import { ToolContext } from "../App"

export const Table = () => {
    const { tool } = useContext(ToolContext);
    /**
     * @param {Object} tool
     * @param {CanvasRenderingContext2D} ctx 
     * @param {HTMLCanvasElement} canvas 
     */
    const write = (ctx, canvas ) => {
        const rect = canvas.getBoundingClientRect();
        const xScale = canvas.width / rect.width;
        const yScale = canvas.height / rect.height;
        ctx.lineWidth = 1;
        let isPainting = false;
        canvas.onmousedown = (e) => { 
            isPainting = true;
            ctx.moveTo(e.pageX * xScale, e.pageY * yScale);
        }; 
        canvas.onmouseup = () => { 
            isPainting = false;
            ctx.stroke()
            ctx.strokeStyle = tool.color
            ctx.beginPath();
        };
        canvas.onmousemove = (e) => {
            if (isPainting) {
                ctx.lineWidth = 1;
                ctx.lineCap = 'round';
                ctx.fillStyle = "#00FF00";
                ctx.lineTo(e.pageX * xScale, e.pageY * yScale);
                ctx.stroke()
            }
        };
    }
    useEffect(() => {
        const canvas = document.getElementById('table');
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = screen.width;
        canvas.height = screen.height;
    }, [])

    useEffect(() => {
        const canvas = document.getElementById('table');
        const ctx = canvas.getContext("2d");
        canvas.onmousedown = () => {};
        canvas.onmouseup = () => {};
        canvas.onmousemove = () => {};
        switch(tool.name) {
            case 'write':
                write(ctx, canvas );
                break;
            case 'move':
                // move(ctx);
                break;
            case 'ruler':
                // ruler(ctx);
                break; 
            case 'clear':
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                break;
        }
    },[tool]);


    return(
        <canvas id="table" className="offset-hidden bg-[#666666]">

        </canvas>
    )
}