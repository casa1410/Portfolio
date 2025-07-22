export interface FormField {
	label: string
	placeholder: string
}

export interface Form {
	firstName: FormField
	lastName: FormField
	email: FormField
	phone: FormField
	message: FormField
	send: string
}

export interface FormContainer {
	title: string
	subtitle: string
	description: string
	form: Form
}

export interface OpinionSliderItem {
	id: number
	image: string
}
