import { IMAGES } from "@/Constants"
import clsx from "clsx"
import { useMemo } from "react"
import {
	FaCss3,
	FaHtml5,
	FaJs,
	FaReact,
	FaRegFile,
	FaRegFileAlt,
} from "react-icons/fa"
import { PiWarningCircleFill } from "react-icons/pi"
import { SiTypescript } from "react-icons/si"
import { ItemListProps } from "./ItemList.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useItemList = (props: ItemListProps) => {
	const { name, className, ext, route } = props

	const title = useMemo(() => (ext ? name + "." + ext : name), [name, ext])

	const Icon = useMemo(() => {
		switch (ext) {
			case "css":
				return (
					<FaCss3
						className={clsx("w-4", "h-4", "text-extensions-css")}
					/>
				)
			case "html":
				return (
					<FaHtml5
						className={clsx("w-4", "h-4", "text-extensions-html")}
					/>
				)
			case "js":
				return (
					<FaJs
						className={clsx("w-4", "h-4", "text-extensions-js")}
					/>
				)
			case "jsx":
				return (
					<FaReact
						className={clsx("w-4", "h-4", "text-extensions-jsx")}
					/>
				)
			case "md":
				return (
					<PiWarningCircleFill
						className={clsx(
							"w-4",
							"h-4",
							"text-dark-primary-normal"
						)}
					/>
				)
			case "ts":
				return (
					<SiTypescript
						className={clsx("w-4", "h-4", "text-extensions-ts")}
					/>
				)
			case "tsx":
				return (
					<FaReact
						className={clsx("w-4", "h-4", "text-extensions-ts")}
					/>
				)
			case "txt":
				return (
					<FaRegFileAlt
						className={clsx(
							"w-4",
							"h-4",
							"text-dark-primary-normal"
						)}
					/>
				)
			case "rb":
				return (
					<img
						src={IMAGES.rubyLogo}
						className={clsx("w-4", "h-4", "bg-cover")}
						alt="logoRuby"
					/>
				)
			case "py":
				return (
					<img
						src={IMAGES.python}
						className={clsx("w-4", "h-4", "bg-cover")}
						alt="logoPython"
					/>
				)

			default:
				return (
					<FaRegFile
						className={clsx("w-4", "h-4", "text-gray-500")}
					/>
				)
		}
	}, [ext])

	return {
		className,
		Icon,
		title,
		route,
	}
}
