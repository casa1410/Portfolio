export interface SkillsProps {
	title: string
	categories: Category[]
}

export interface Category {
	id: number
	label: string
	items: Item[]
}

export interface Item {
	label: string
	image: string
}
