import { Timeline, TimelineItem } from "@/components"
import clsx from "clsx"
import { useExperience } from "./useExperience"
export const Experience = (): JSX.Element => {
	const { experience } = useExperience()

	return (
		<div
			className={clsx(
				"w-full",
				"h-[calc(100dvh-48px)]",
				"flex",
				"items-center",
				"justify-center",
				"px-2"
			)}
		>
			<Timeline
				keyExtractor={item => String(item.id)}
				renderComponent={item => <TimelineItem {...item} />}
				data={experience}
			/>
		</div>
	)
}
