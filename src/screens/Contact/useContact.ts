import { FormContainer, OpinionSliderItem } from "@/interfaces"
import { FormikHelpers } from "formik"
import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import * as Yup from "yup"
import { ContactForm } from "./Contact.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useContact = () => {
	const [imageSliderIndex, setImageSliderIndex] = useState(0)
	const [t] = useTranslation("contact")
	const formContainer: FormContainer = useMemo(
		() => t("formContainer", { returnObjects: true }),
		[t("formContainer")]
	)

	const opinions: OpinionSliderItem[] = useMemo(
		() => t("opinionsSlider", { returnObjects: true }),
		[t("opinionsSlider")]
	)

	const onChangeIndex = (newIndex: number): void => {
		setImageSliderIndex(newIndex)
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, "El nombre debe tener al menos 2 caracteres")
			.max(50, "El nombre no debe exceder los 50 caracteres")
			.required("El nombre es obligatorio"),

		lastname: Yup.string()
			.min(2, "El apellido debe tener al menos 2 caracteres")
			.max(50, "El apellido no debe exceder los 50 caracteres")
			.required("El apellido es obligatorio"),

		email: Yup.string()
			.email("Debe ser un correo electrónico válido")
			.required("El correo electrónico es obligatorio"),

		phone: Yup.object().shape({
			ext: Yup.string()
				.required("La extensión es obligatoria")
				.matches(
					/^\+\d+$/,
					"La extensión debe comenzar con un '+' y contener solo números"
				),
			value: Yup.string()
				.matches(/^\d+$/, "El teléfono solo debe contener números")
				.min(7, "El teléfono debe tener al menos 7 dígitos")
				.max(15, "El teléfono no debe exceder los 15 dígitos")
				.required("El número de teléfono es obligatorio"),
		}),

		message: Yup.string()
			.min(10, "El mensaje debe tener al menos 10 caracteres")
			.max(500, "El mensaje no debe exceder los 500 caracteres")
			.required("El mensaje es obligatorio"),
	})

	const onSubmit = async (
		values: ContactForm,
		helpers: FormikHelpers<ContactForm>
	): Promise<void> => {
		try {
			console.log(values)
		} catch (error) {
			console.error(error)
		} finally {
			helpers.setSubmitting(false)
		}
	}

	return {
		onSubmit,
		validationSchema,
		imageSliderIndex,
		onChangeIndex,
		formContainer,
		opinions,
	}
}
