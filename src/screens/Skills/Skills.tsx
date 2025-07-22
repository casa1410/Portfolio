import { Text } from "@/components"
import { Category } from "./Skills.types"
import { useSkills } from "./useSkills"
export const Skills = (): JSX.Element => {
	const { skillsCategories, skillsTitle } = useSkills()

	return (
		<div className=" px-5 py-4 max-h-screen overflow-y-auto">
			<Text type="h2" className="font-sans dark:text-white text-black">
				{skillsTitle}
			</Text>

			{skillsCategories.map((category: Category) => (
				<div key={category.id}>
					<h2 className="py-4 dark:text-white text-black">
						{category.label}
					</h2>
					<ul>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 w-full h-full">
							{category.items.map(item => (
								<li key={item.label}>
									<div className="flex items-center gap-x-4">
										<img
											className="h-12 w-12"
											src={item.image}
											alt={item.label}
										/>
										<span className="dark:text-white text-black">
											{item.label}
										</span>
									</div>
								</li>
							))}
						</div>
					</ul>
				</div>
			))}
		</div>
	)
}
