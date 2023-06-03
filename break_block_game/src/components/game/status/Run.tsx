import { Dispatch, SetStateAction } from "react";

export default function Run({setGameStatus} : {setGameStatus: Dispatch<SetStateAction<number>>}) {
	return (
		<button className="run" onClick={() => setGameStatus(2)} >Run</button>
	)
}