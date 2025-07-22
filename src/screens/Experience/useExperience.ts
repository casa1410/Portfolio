import { TimelineItemProps } from "@/components"
import { ExperienceJSON } from "@/interfaces"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useExperience = () => {
	const [t] = useTranslation("experience")
	const experience: TimelineItemProps[] = useMemo(() => {
		const currentObject: ExperienceJSON[] = t("experience", {
			returnObjects: true,
		})
		return currentObject.map(item => ({
			id: item.id,
			title: item.title,
			description: item.description,
			startDate: new Date(item.startDate),
			endDate: item.endDate ? new Date(item.endDate) : undefined,
		}))
	}, [t("experience")])

	return {
		experience,
	}
}
