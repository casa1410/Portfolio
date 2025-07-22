import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

import { ProjectData } from "./Components"
import { ProjectsDetailParams } from "./ProjectDetail.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useProjectDetail = () => {
	const params = useParams<ProjectsDetailParams>()
	const [t] = useTranslation("projects")
	const [projectId, setProjectId] = useState(params.id)

	const projectData: ProjectData[] = useMemo(() => {
		const currentObject: ProjectData[] = t("projectData", {
			returnObjects: true,
		})
		console.log(currentObject)

		return currentObject.map(item => ({
			id: item.id,
			backImg: item.backImg,
			title: item.title,
			icon: item.icon,
			linkProject: item.linkProject,
			description: item.description,
			secondTitle: item.secondTitle,
			titleTecnologies: item.titleTecnologies,
			iconsTecnologies: item.iconsTecnologies ?? [],
			listItems: item.listItems,
		}))
	}, [t("projectData")])

	useEffect(() => {
		if (params.id) {
			setProjectId(params.id)
		}
	}, [params])

	return {
		projectId,
		projectData,
	}
}
