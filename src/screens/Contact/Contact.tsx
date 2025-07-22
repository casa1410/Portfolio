import {
	Button,
	Input,
	PhoneInput,
	Slider,
	Text,
	TextAreaInput,
} from "@/components"
import clsx from "clsx"
import { Formik } from "formik"
import { ContactForm } from "./Contact.types"
import { useContact } from "./useContact"

export const Contact = (): JSX.Element => {
	const {
		onSubmit,
		validationSchema,
		/* imageSliderIndex,
		onChangeIndex, */
		formContainer,
		opinions,
	} = useContact()

	return (
		<div
			className={clsx(
				"flex",
				"w-full",
				"h-full",
				"justify-center",
				"items-center",
				"overflow-y-auto",
				"gap-3",
				"p-3",
				"flex-wrap"
			)}
		>
			<div
				className={clsx(
					"h-full",
					"min-w-[250px]",
					"flex",
					"flex-[0.4]",
					"flex-col",
					"flex-shrink-0",
					"justify-evenly",
					"gap-y-4",
					"py-6",
					"px-10",
					"bg-gray-light",
					"dark:bg-dark-secondary-alternate",
					"rounded-xl",
					"max-md:flex-1",
					"max-md:h-auto",
					"max-md:px-4"
				)}
			>
				<div className={clsx("flex", "flex-col", "gap-y-3")}>
					<Text
						type="h2"
						size="4xl"
						weight="bold"
						className={clsx(
							"text-dark-primary-normal",
							"dark:text-white",
							"max-md:text-center"
						)}
					>
						{formContainer.title}
					</Text>
					<Text
						type="h4"
						size="2xl"
						className={clsx(
							"text-gray-800",
							"dark:text-gray-heavy",
							"max-md:text-center"
						)}
					>
						{formContainer.subtitle}
					</Text>
					<Text
						type="p"
						className={clsx(
							"text-gray-800",
							"dark:text-gray-heavy",
							"max-md:text-center"
						)}
					>
						{formContainer.description}
					</Text>
				</div>
				<Formik
					initialValues={
						{
							name: "",
							lastname: "",
							email: "",
							phone: {
								ext: "",
								value: "",
							},
							message: "",
						} as ContactForm
					}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						setFieldValue,
						handleBlur,
						handleSubmit,
						isSubmitting,
						isValid,
					}) => (
						<form
							onSubmit={handleSubmit}
							className={clsx(
								"flex",
								"flex-col",
								"gap-y-4",
								"w-full",
								"rounded-md"
							)}
						>
							<div
								className={clsx(
									"flex",
									"w-full",
									"gap-x-3",
									"max-md:flex-wrap",
									"max-md:gap-y-4"
								)}
							>
								<Input
									containerClassname={clsx(
										"flex-1",
										"max-md:flex-shrink-0",
										"max-md:w-full"
									)}
									type="name"
									label={formContainer.form.firstName.label}
									id="name"
									name="name"
									placeholder={
										formContainer.form.firstName.placeholder
									}
									autoComplete="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
									error={
										touched.name ? errors.name : undefined
									}
								/>

								<Input
									containerClassname={clsx(
										"flex-1",
										"max-md:flex-shrink-0",
										"max-md:w-full"
									)}
									type="lastname"
									label={formContainer.form.lastName.label}
									id="lastname"
									name="lastname"
									placeholder={
										formContainer.form.lastName.placeholder
									}
									autoComplete="family-name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastname}
									error={
										touched.lastname
											? errors.lastname
											: undefined
									}
								/>
							</div>

							<Input
								type="email"
								label={formContainer.form.email.label}
								id="email"
								name="email"
								placeholder={
									formContainer.form.email.placeholder
								}
								autoComplete="username"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								error={touched.email ? errors.email : undefined}
							/>

							<PhoneInput
								label={formContainer.form.phone.label}
								id="phone"
								name="phone"
								placeholder={
									formContainer.form.phone.placeholder
								}
								autoComplete="tel"
								onChange={value =>
									setFieldValue("phone", value)
								}
								onBlur={handleBlur}
								value={values.phone}
								error={
									touched.phone
										? errors.phone?.value
										: undefined
								}
							/>

							<TextAreaInput
								inputClassname={clsx(
									"resize-none",
									"h-[150px]"
								)}
								label={formContainer.form.message.label}
								id="message"
								name="message"
								placeholder={
									formContainer.form.message.placeholder
								}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.message}
								error={
									touched.message ? errors.message : undefined
								}
							/>

							<Button
								type="submit"
								disabled={!isValid || isSubmitting}
								label={formContainer.form.send}
							/>
						</form>
					)}
				</Formik>
			</div>
			<div
				className={clsx(
					"h-full",
					"min-w-[250px]",
					"flex",
					"flex-[0.6]",
					"flex-col",
					"flex-shrink-0",
					"gap-y-4",
					"rounded-2xl",
					"overflow-hidden",
					"max-md:flex-1",
					"max-md:h-auto"
				)}
			>
				<Slider items={opinions} />
			</div>
		</div>
	)
}
