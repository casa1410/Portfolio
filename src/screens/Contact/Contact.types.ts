import { PhoneInputValue } from "@/components"

export interface ContactForm {
	name: string
	lastname: string
	email: string
	phone: PhoneInputValue
	message: string
}
