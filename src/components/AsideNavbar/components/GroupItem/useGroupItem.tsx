import { HeaderOptions, Text } from "@/components"
import clsx from "clsx"
import { useState } from "react"
import { FaChevronDown, FaFolder, FaFolderOpen } from "react-icons/fa"
import { GroupItemProps } from "./GroupItem.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGroupItem = (props: GroupItemProps) => {
	const { childrens, isOpen, name, handleOpen } = props
	const [isOpenGroup, setIsOpenGroup] = useState<boolean>(isOpen ?? false)

	const handleOpenGroupItem = (): void => {
		setIsOpenGroup(state => !state)
		handleOpen?.()
	}

	const renderHeader = ({ isOpen, title }: HeaderOptions): JSX.Element => (
		<div
			className={clsx("flex", "justify-start", "items-center", "gap-x-1")}
		>
			<FaChevronDown
				className={clsx(
					"w-3",
					"h-3",
					"transition-all",
					"text-light-secondary-alternate",
					"dark:text-dark-secondary-alternate",
					"ease-linear",
					"duration-200",
					isOpen ? "rotate-0" : "-rotate-90"
				)}
			/>
			{isOpen ? (
				<FaFolderOpen
					className={clsx(
						"w-4",
						"h-4",
						"text-light-yellow-normal",
						"dark:text-dark-secondary-alternate"
					)}
				/>
			) : (
				<FaFolder
					className={clsx(
						"w-4",
						"h-4",
						"text-light-yellow-normal",
						"dark:text-dark-secondary-alternate"
					)}
				/>
			)}
			<Text
				className={clsx(
					"text-black",
					"dark:text-white",
					"line-clamp-1"
				)}
				type="span"
			>
				{title}
			</Text>
		</div>
	)

	return {
		isOpenGroup,
		childrens,
		handleOpenGroupItem,
		name,
		renderHeader,
	}
}
