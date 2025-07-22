import clsx from "clsx"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Button } from "../Button"
import { PaginationBarItems } from "../PaginationBarItems"
import { PaginationBarsProps } from "./PaginationBar.type"
import { usePaginationBar } from "./usePaginationBar"

export const PaginationBar = (props: PaginationBarsProps): JSX.Element => {
	const {
		onNext,
		onPrevious,
		currentIndex,
		paginationBarVariantsStyles,
		variants,
		currentSize,
		onPagination,
	} = usePaginationBar(props)

	return (
		<div
			className={clsx(
				"flex",
				"w-full",
				paginationBarVariantsStyles[variants].container
			)}
		>
			<Button
				className={paginationBarVariantsStyles[variants].prevButton}
				onClick={onPrevious(currentIndex)}
				variant="transparent"
				leftIcon={
					<FaChevronLeft
						className={clsx("text-primary-normal", "w-6", "h-6")}
					/>
				}
			>
				Previous
			</Button>
			<PaginationBarItems
				key={String(currentIndex)}
				index={currentIndex}
				onChangeIndex={onPagination}
				size={currentSize}
			/>
			<Button
				className={paginationBarVariantsStyles[variants].nextButton}
				onClick={onNext(currentIndex)}
				variant="transparent"
				rightIcon={
					<FaChevronRight
						className={clsx("text-primary-normal", "w-6", "h-6")}
					/>
				}
			>
				Next
			</Button>
		</div>
	)
}
