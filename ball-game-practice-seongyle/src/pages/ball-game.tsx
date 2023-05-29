import React, { useEffect, useRef, useState } from 'react'
import Ball from '../components/Ball'
import Block from '../components/Block'

export default function BallGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const stageRef = useRef<{ width: number, height: number }>({ width: 0, height: 0 });
    const requestRef = useRef<number>(0);
    const frameCount = useRef<number>(0);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const ball = useRef<Ball>();
    const blocks = useRef<Block>();
    const framesPerTick = 1;
    const resolution = 2;

    const setting = () => {
        if (!canvasRef.current) return;
        setCtx(canvasRef.current.getContext("2d"));
        if (!ctx) return;
        stageRef.current.width = window.innerWidth;
        stageRef.current.height = window.innerHeight;
        canvasRef.current.height = window.innerHeight * resolution;
        canvasRef.current.width = window.innerWidth * resolution;
        ctx.scale(resolution, resolution);
        ball.current = new Ball(stageRef.current.width, stageRef.current.height, stageRef.current.height * 0.04, 10);
        blocks.current = new Block(stageRef.current.width * 0.4, 30, stageRef.current.width * 0.2, stageRef.current.height - stageRef.current.height * 0.5, "#424242");
    };

    const moving = (e: KeyboardEvent) => {
        const step = 42;
        if (!blocks.current) return;
        if (e.key === "ArrowLeft") {
            blocks.current.x -= step;
            blocks.current.maxX -= step;
        }
        if (e.key === "ArrowRight") {
            blocks.current.x += step;
            blocks.current.maxX += step;
        }
        if (e.key === "ArrowUp") {
            blocks.current.y -= step;
            blocks.current.maxY -= step;
        }
        if (e.key === "ArrowDown") {
            blocks.current.y += step;
            blocks.current.maxY += step;
        }
    };

    const rendering = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, stageRef.current.width, stageRef.current.height);
        if (!ball.current) return;
        if (!blocks.current) return;
        blocks.current.draw(ctx);
        console.log(blocks.current);
        ball.current.draw(ctx, stageRef.current.width, stageRef.current.height, blocks.current);
    };

    const tick = () => {
        frameCount.current++;
        if (frameCount.current >= framesPerTick) {
            frameCount.current = 0;
            rendering();
        }
        requestRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        setting();
        window.addEventListener("resize", setting);
        window.addEventListener("keydown", moving);
        return () => {
            window.removeEventListener("resize", setting);
            window.removeEventListener("keydown", moving);
        }
    });

    useEffect(() => {
        requestRef.current = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(requestRef.current);
        }
    });

    return (
        <canvas ref={canvasRef} id="game"></canvas>
    )
}
