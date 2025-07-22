import clsx from "clsx"
import { LuFiles } from "react-icons/lu"
import { VscSettingsGear } from "react-icons/vsc"
import { Button } from "../Button"
import { Dropdown } from "../DropDown"
import { GroupItem, ItemList } from "./components"
import { useAsideNavbar } from "./useAsideNavbar"
export const AsideNavbar = (): JSX.Element => {
	const {
		hadleSideBar,
		menuSideBar,
		routes,
		isOpenSettings,
		toggleSettingsDropdown,
		settings,
	} = useAsideNavbar()

	return (
		<aside className={clsx("flex", "z-[1]", "relative")}>
			<div
				className={clsx(
					"flex",
					"flex-col",
					"justify-between",
					"flex-[0.12]",
					"justify-center",
					"dark:bg-light-secondary-aside",
					"bg-gray-xlight",
					"shadow",
					"relative",
					"z-[1]"
				)}
			>
				<Button
					className={clsx(
						"w-12",
						"h-12",
						"p-2",
						"relative",
						menuSideBar &&
							clsx(
								"after:content-['']",
								"after:w-full",
								"after:h-full",
								"after:border-l-light-primary-normal",
								"after:border-l-[3px]",
								"after:absolute",
								"after:bottom-0",
								"after:left-0"
							)
					)}
					variant="transparent"
					onClick={hadleSideBar}
				>
					<LuFiles
						className={clsx(
							"w-full",
							"h-full",
							"text-light-secondary-alternate",
							menuSideBar
								? clsx("dark:text-gray-xlight")
								: clsx("dark:text-gray-heavy")
						)}
					/>
				</Button>
				<div className={clsx("flex", "flex-col")}>
					<Dropdown
						closeBackdrop
						items={settings}
						isOpen={isOpenSettings}
						key={String(isOpenSettings)}
					>
						<Button
							variant="transparent"
							className={clsx("w-full", "p-2")}
							onClick={toggleSettingsDropdown}
						>
							<VscSettingsGear
								className={clsx(
									"h-full",
									"w-full",
									"text-light-secondary-alternate",
									"dark:text-gray-xlight"
								)}
							/>
						</Button>
					</Dropdown>
				</div>
			</div>
			<nav
				className={clsx(
					"flex-col",
					"flex-1",
					"pl-2",
					"w-[250px]",
					"bg-gray-light",
					"dark:bg-light-secondary-navBar",
					"z-0",
					"max-md:absolute",
					"max-md:top-0",
					"max-md:left-full",
					"max-md:h-full",
					menuSideBar ? "flex" : "hidden"
				)}
			>
				<ul
					className={clsx(
						"flex",
						"flex-col",
						"list-none",
						"items-start",
						"gap-x-4",
						"transition-all",
						"duration-[200ms]"
					)}
				>
					{routes.map(item =>
						Number(item.childrens?.length) > 0 ? (
							<GroupItem key={item.name} {...item} />
						) : (
							<ItemList
								key={item.route}
								className={clsx("flex", "gap-x-1")}
								{...item}
							/>
						)
					)}
				</ul>
			</nav>
		</aside>
	)
}
