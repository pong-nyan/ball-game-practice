import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Block from "../../../objects/Block";
import Ball from "../../../objects/Ball";


export default function Run({ setGameStatus }: { setGameStatus: Dispatch<SetStateAction<number>> }) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

	const initGame = () => {
		if (!canvasRef.current) return
		const ctx = canvasRef.current.getContext('2d')
		ctxRef.current = ctx
	}

	const renderCanvas = () => {

		if (!ctxRef.current) return
		const ctx = ctxRef.current
		ctx.clearRect(0, 0, 400, 400)
		ctx.fillRect(0, 0, 400, 400)
	}
	useEffect(() => {
		initGame()
		requestAnimationFrame(renderCanvas)
	}, [])

	return (
		<canvas ref={canvasRef}>
			Canvas
		</canvas>
	)
}