import React, { useEffect, useRef, useState } from 'react'
import "../styles/ball-game.module.css"

export default function BallGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const [ball, setBall] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            setCtx(ctx);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }, [])
    return (
        <canvas ref={canvasRef} className={"h-full"} id="game"></canvas>
    )
}
