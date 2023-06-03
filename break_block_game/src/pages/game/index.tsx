import Start from '../../components/game/status/Start'
import Run from '../../components/game/status/Run'
import End from '../../components/game/status/End'

// 0 start 1 run 2 end
import { useState } from 'react'
export default function Game() : JSX.Element {
	const [gameStatus, setGameStatus] = useState(0)

	switch (gameStatus) {
		case 0:
			return (
				<Start setGameStatus={setGameStatus} />
			)
		case 1:
			return (
				<Run setGameStatus={setGameStatus} />
			)
		case 2:
			return (
				<End setGameStatus={setGameStatus}/>
			)
		default:
			return (
				<h1>ERROR!</h1>
			)
	}
}