export interface ProjectData {
	id: number
	backImg: string
	icon: string
	linkProject: string
	title: string
	description: string
	secondTitle: string
	listItems: string[]
	titleTecnologies: string
	iconsTecnologies: string[]
}

export interface ViewProjectProps {
	proyecData: ProjectData
}
