import clsx from "clsx"
import React from "react"
import { ViewProjectProps } from "./ViewProject.types"

export const ViewProject: React.FC<ViewProjectProps> = ({ proyecData }) => {
	return (
		<div className={clsx("p-3", "w-full")}>
			<div className={clsx("w-full", "h-[50vh]", "relative", "grid")}>
				<img
					className={clsx(
						"w-full ",
						"h-[60vh]",
						"rounded-xl",
						"object-cover"
					)}
					alt="photo"
					src={proyecData.backImg}
				/>
				<div
					className={clsx(
						"bg-slate-800",
						"absolute",
						"flex",
						"lg:top-[19vw]",
						"max-md: top-[70vw]",
						"place-self-center",
						"w-[80%]",
						"rounded-lg",
						"max-md:w-full"
					)}
				>
					<div
						className={clsx(
							"flex",
							"flex-col",
							"px-20",
							"py-6",
							"max-md:px-6"
						)}
					>
						<div
							className={clsx(
								"w-full",
								"flex",
								"justify-between",
								"items-center"
							)}
						>
							<img
								alt="prueba"
								src={proyecData.icon}
								className={clsx("w-10", "h-10")}
							/>
							<p className={clsx("text-gray-300", "font-sans")}>
								{proyecData.linkProject}
							</p>
						</div>
						<div>
							<h1>
								<span
									className={clsx(
										"text-gray-300",
										"font-sans",
										"font-bold"
									)}
								>
									{proyecData.title}
								</span>
							</h1>
							<p className={clsx("text-gray-400")}>
								{proyecData.description}
							</p>

							<div className={clsx("flex", "flex-col")}>
								<h3
									className={clsx(
										"text-gray-300",
										"font-semibold",
										"py-2"
									)}
								>
									{proyecData.secondTitle}
								</h3>

								{proyecData.listItems.map((item, index) => (
									<ul
										className={clsx(
											"flex",
											"flex-col",
											"gap-1",
											"list-disc",
											"text-gray-400"
										)}
										key={index}
									>
										<li>{item}</li>
									</ul>
								))}
							</div>
							<div
								className={clsx(
									"flex",
									"flex-col",
									"gap-y-2",
									"mt-2"
								)}
							>
								<h3 className={clsx("text-gray-300")}>
									{proyecData.titleTecnologies}:
								</h3>
								<div className="flex gap-x-2">
									{proyecData.iconsTecnologies.map(
										(item, index) => {
											const imageName = item
												.split("/")
												.pop()
												?.split(".")[0]
											return (
												<ul key={index}>
													<li>
														<img
															className={clsx(
																"h-10",
																"w-10"
															)}
															src={item}
															title={imageName}
															alt={imageName}
														/>
													</li>
												</ul>
											)
										}
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
