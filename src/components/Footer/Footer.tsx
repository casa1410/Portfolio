import clsx from "clsx"
import { useFooter } from "./useFooter"

export const Footer = (): JSX.Element => {
	const { currentTime } = useFooter()
	return (
		<footer
			className={clsx(
				"bg-light-primary-normal",
				"shadow",
				"h-6",
				"w-full",
				"items-center",
				"flex",
				"gap-2",
				"p-2",
				"justify-between"
			)}
		>
			<div className="flex gap-3 ">
				<p className="text-white text-sm">Made in</p>
				<ul className="flex text-sm gap-3 list-none text-white">
					<li>ReactJs</li>
					<li>TypeScript</li>
					<li>Tailwind</li>
				</ul>
			</div>
			<div className="max-md:hidden">
				<ul className="flex text-sm gap-3 list-none text-white">
					<time dateTime="">{currentTime.toLocaleString()}</time>
					<li>UTF-8</li>
					<li>Port 443</li>
				</ul>
			</div>
		</footer>
	)
}
