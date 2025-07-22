import { useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useFooter = () => {
	const [currentTime, setCurrentTime] = useState(new Date())
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)

		return (): void => clearInterval(intervalId)
	}, [])
	return { currentTime }
}
