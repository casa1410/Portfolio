import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { Category } from "./Skills.types"

export const useSkills = () => {
	const [t] = useTranslation("skills")

	const skillsCategories: Category[] = useMemo(
		() => t("categories", { returnObjects: true }),
		[t("categories")]
	)
	const skillsTitle: string = useMemo(() => t("title"), [t])
	return { skillsCategories, skillsTitle }
}
