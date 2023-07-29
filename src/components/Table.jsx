import { useContext, useEffect } from "react"
import { ToolContext } from "../App"

export const Table = () => {
    const { tool } = useContext(ToolContext);
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {HTMLCanvasElement} canvas 
     */
    const write = (ctx, canvas) => {
        let mouseStart = { x: null, y: null }
        const rect = canvas.getBoundingClientRect();
        const xScale = canvas.width / rect.width;
        const yScale = canvas.height / rect.height;
        ctx.lineWidth = 1;

        canvas.addEventListener('mousedown', (e) => { 
            mouseStart = {x: e.pageX * xScale, y: e.pageY * yScale};
            console.log(mouseStart);
        }) 
        canvas.addEventListener('mouseup', (e) => { 
            ctx.strokeRect(mouseStart.x, mouseStart.y, e.pageX * xScale - mouseStart.x, e.pageY * yScale - mouseStart.y)
            console.log(e.pageX, e.pageY)
        }) 
    }
    useEffect(() => {
        const canvas = document.getElementById('table');
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = screen.width;
        canvas.height = screen.height;
    })

    useEffect(() => {
        const canvas = document.getElementById('table');
        const ctx = canvas.getContext("2d");
        switch(tool) {
            case 'write':
                write(ctx, canvas);
                break;
            case 'move':
                // move(ctx);
                break;
            case 'ruler':
                // ruler(ctx);
                break; 
        }
    },[tool]);


    return(
        <canvas id="table" className="offset-hidden bg-[#666666]">

        </canvas>
    )
}