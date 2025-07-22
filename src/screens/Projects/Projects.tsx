import { Slider3D, Text } from "@/components"
import { ProjectsJSON } from "@/interfaces"
import clsx from "clsx"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export const Projects = (): JSX.Element => {
	const [t] = useTranslation("projects")
	const projectsPreview: ProjectsJSON[] = useMemo(
		() => t("projectsPreview", { returnObjects: true }),
		[t("projectsPreview")]
	)

	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"flex",
				"flex-col",
				"justify-center",
				"items-center",
				"bg-inherit"
			)}
		>
			<Text
				type="h2"
				className={clsx(
					"text-black",
					"dark:text-white",
					"text-center",
					"mb-8",
					"max-md:mb-2",
					"uppercase",
					"font-bold",
					"tracking-[0.75rem]"
				)}
			>
				{t("title")}
			</Text>
			<Slider3D items={projectsPreview} />
		</div>
	)
}
