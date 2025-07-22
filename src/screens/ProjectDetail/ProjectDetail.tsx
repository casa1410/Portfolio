import clsx from "clsx"
import { ViewProject } from "./Components"
import { useProjectDetail } from "./useProjectDetail"

export const ProjectDetail = () => {
	const { projectId, projectData } = useProjectDetail()
	const selectedProject = projectData.find(i => String(i.id) === projectId)
	console.log(selectedProject)

	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"flex",
				"max-h-screen ",
				"overflow-y-auto"
			)}
		>
			{selectedProject && <ViewProject proyecData={selectedProject} />}
		</div>
	)
}
