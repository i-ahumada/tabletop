import { useContext, useEffect } from "react"
import { ToolContext } from "../scenes/room"
import { write } from "../functions/tools";

export const Table = () => {
    const { tool } = useContext(ToolContext);

    useEffect(() => {
        const canvas = document.getElementById('table');
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = screen.width;
        canvas.height = screen.height;
    }, []);

    useEffect(() => {
        const canvas = document.getElementById('table');
        const ctx = canvas.getContext("2d");
        canvas.onmousedown = () => {};
        canvas.onmouseup = () => {};
        canvas.onmousemove = () => {};
        switch(tool.name) {
            case 'write':
                write(ctx, canvas, tool );
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
        <canvas id="table" className="offset-hidden bg-secondary">

        </canvas>
    )
}