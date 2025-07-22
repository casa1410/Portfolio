import clsx from "clsx"
import { Button } from "../Button"
import { PaginationBarItemsProps } from "./PaginationBarItems.types"
import { usePaginationBarItems } from "./usePaginationBarItems"

export const PaginationBarItems = (
	props: PaginationBarItemsProps
): JSX.Element => {
	const {
		currentIndex,
		onPagination,
		renderPages,
		paginationBarItemsVariantsStyles,
		variants,
		className,
	} = usePaginationBarItems(props)
	return (
		<ul
			className={clsx(
				"flex",
				"list-none",
				"overflow-hidden",
				paginationBarItemsVariantsStyles[variants].itemButtonsContainer,
				className?.container
			)}
		>
			{renderPages.map(item => (
				<li
					className={clsx(
						"flex",
						"items-center",
						"justify-center",
						paginationBarItemsVariantsStyles[variants].itemButtons,
						currentIndex === item.value &&
							paginationBarItemsVariantsStyles[variants]
								.itemButtonSelected.button
					)}
					key={item.key}
				>
					{item.value === "..." || typeof item === "string" ? (
						<span
							className={clsx(
								"w-full",
								"h-full",
								"flex",
								"items-center",
								"justify-center"
							)}
						>
							{item.label}
						</span>
					) : (
						<Button
							className={clsx(
								"w-full",
								"h-full",
								currentIndex === item.value &&
									paginationBarItemsVariantsStyles[variants]
										.itemButtonSelected.label
							)}
							onClick={onPagination(Number(item.value))}
							variant="transparent"
						>
							{item.label}
						</Button>
					)}
				</li>
			))}
		</ul>
	)
}
