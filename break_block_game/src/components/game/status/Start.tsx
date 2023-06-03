import { Dispatch, SetStateAction } from "react";

export default function Start({setGameStatus} : {setGameStatus: Dispatch<SetStateAction<number>>}) {
	return (
		<button className="start" onClick={() => setGameStatus(1)} >Start</button>
	)
}