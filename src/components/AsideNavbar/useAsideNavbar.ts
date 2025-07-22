import { ItemsDropDown } from "@/components"
import { GroupRouteProps } from "@/Constants"
import { Themes, useThemeStore } from "@/stores"
import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAsideNavbar = () => {
	const [isOpenSettings, setIsOpenSettings] = useState(false)
	const [menuSideBar, setMenuSideBar] = useState(true)
	const { toggleTheme, theme, changeTheme } = useThemeStore()
	const [isSelectd, setIsSelectd] = useState({
		lang: "",
		theme: "",
	})
	const [t, i18next] = useTranslation("layout")
	const routes: GroupRouteProps[] = useMemo(
		() => t("aside", { returnObjects: true }),
		[t("aside")]
	)

	const changeLanguages = (type: string): void => {
		setIsSelectd({ ...isSelectd, lang: type })
		i18next.changeLanguage(type)
	}
	const changeThemeView = (theme: Themes): void => {
		setIsSelectd({ ...isSelectd, theme: theme })
		changeTheme(theme)
	}
	const settings: ItemsDropDown[] = useMemo(() => {
		const currentObject: ItemsDropDown[] = t("settings", {
			returnObjects: true,
		})

		return currentObject.map(item => ({
			label: item.label,
			childs: item.childs?.map(i => ({
				...i,
				onClick: (val): void =>
					item.value === "lang"
						? changeLanguages(String(val))
						: changeThemeView(val as Themes),
				isSelected:
					item.value === "lang"
						? isSelectd.lang === i.value
						: isSelectd.theme === i.value,
			})),
			value: item.value,
		}))
	}, [t("settings"), changeLanguages, changeThemeView])

	const toggleSettingsDropdown = (): void => {
		setIsOpenSettings(!isOpenSettings)
	}

	useEffect(() => {
		changeTheme(theme)
	}, [])

	useEffect(() => {}, [isSelectd])

	const hadleSideBar = (): void => {
		setMenuSideBar(state => !state)
	}

	return {
		menuSideBar,
		hadleSideBar,
		toggleTheme,
		theme,
		routes,
		i18next,
		toggleSettingsDropdown,
		setIsOpenSettings,
		isOpenSettings,
		settings,
	}
}
