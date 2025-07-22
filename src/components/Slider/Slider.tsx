import clsx from "clsx"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Button } from "../Button"
import { PaginationBarItems } from "../PaginationBarItems"
import { SliderItemProps, SliderProps } from "./Slider.types"
import { useSlider } from "./useSlider"

export const Slider = <T extends SliderItemProps>(
	props: SliderProps<T>
): JSX.Element => {
	const {
		items,
		currentIndex,
		handleChangeIndex,
		handleMoveNext,
		handleMovePrevious,
		sliderRef,
		isMobileScreen,
	} = useSlider(props)

	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"flex",
				"relative",
				"overflow-x-hidden"
			)}
		>
			{!isMobileScreen && (
				<Button
					variant="transparent"
					className={clsx(
						"w-8",
						"h-full",
						"flex",
						"justify-center",
						"items-center",
						"absolute",
						"top-0",
						"left-0"
					)}
					onClick={handleMovePrevious}
					rightIcon={<FaChevronLeft />}
				/>
			)}
			<div
				ref={sliderRef}
				className={clsx(
					"h-full",
					"flex",
					"overflow-x-scroll",
					"no-scrollbar",
					"snap-x",
					"snap-mandatory"
				)}
			>
				{items.map(item => (
					<div
						key={String(item.id)}
						className={clsx(
							"w-full",
							"h-full",
							"snap-center",
							"flex",
							"flex-shrink-0"
						)}
					>
						<img
							className={clsx("w-full", "h-full", "object-cover")}
							src={item.image}
							alt={`slideImage-${item.id}`}
						/>
					</div>
				))}
			</div>
			<div
				className={clsx(
					"h-7",
					"absolute",
					"bottom-10",
					"left-2/4",
					"-translate-x-2/4"
				)}
			>
				<PaginationBarItems
					key={String(currentIndex)}
					size={items.length}
					index={currentIndex}
					onChangeIndex={handleChangeIndex}
				/>
			</div>
			{!isMobileScreen && (
				<Button
					variant="transparent"
					className={clsx(
						"w-8",
						"h-full",
						"flex",
						"justify-center",
						"items-center",
						"absolute",
						"top-0",
						"right-0"
					)}
					onClick={handleMoveNext}
					rightIcon={<FaChevronRight />}
				/>
			)}
		</div>
	)
}
