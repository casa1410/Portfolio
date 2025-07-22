import { Text } from "@/components"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { ItemListProps } from "./ItemList.types"
import { useItemList } from "./useItemList"

export const ItemList = (props: ItemListProps): JSX.Element => {
	const { Icon, className, title, route } = useItemList(props)

	return (
		<li className={clsx("flex", "relative", "w-full")}>
			<Link
				/* onClick={toggleMenu} */
				id={String(route)}
				/* ref={el => (refs.current[index + 1] = el)} */
				to={route ?? "/"}
				className={clsx(
					"flex",
					"w-full",
					"h-full",
					"items-center",
					className
					/* hovering === index + 1
					? "after:scale-x-100"
					: "after:scale-x-0" */
				)}
			>
				{Icon}
				<Text
					className={clsx(
						"text-black",
						"dark:text-white",
						"line-clamp-1"
					)}
				>
					{title}
				</Text>
			</Link>
		</li>
	)
}
