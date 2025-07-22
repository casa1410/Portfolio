import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { HeaderLinks, HeaderProps } from "./Header.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
export const useHeader = (_props: HeaderProps) => {
	const [t] = useTranslation("layout")

	const links: HeaderLinks[] = useMemo(
		() => t("header.links", { returnObjects: true }),
		[t("header.links")]
	)

	return {
		links,
	}
}
