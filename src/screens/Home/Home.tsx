import { Card, Text } from "@/components"
import clsx from "clsx"
import { AiOutlineFileAdd } from "react-icons/ai"
import { GoFileDirectory } from "react-icons/go"
import { MdNumbers } from "react-icons/md"
import { Link } from "react-router-dom"

export const Home = (): JSX.Element => {
	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"py-4",
				"flex",
				"items-center",
				"justify-center"
			)}
		>
			<div className="lg:grid grid-cols-2  ">
				<div className="flex flex-col gap-6 col-span-1">
					<div className="flex flex-col ">
						<Text
							className={clsx(
								"text-light-secondary-alternate",
								"dark:text-gray-light"
							)}
							size="5xl"
							type="h1"
						>
							Sebastian Casadiego Mazzillo
						</Text>
						<Text type="p" size="2xl" className="text-gray-500">
							Front-End Developer
						</Text>
					</div>

					<div className="flex flex-col gap-2">
						<Text
							className={clsx(
								"mt-1 mb-1 text-xl text-gray-300",
								"text-gray-500",
								"dark:text-gray-light"
							)}
						>
							Start
						</Text>
						<div className="flex flex-col ">
							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text> Skills ...</Text>
								</div>
							</Link>

							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<GoFileDirectory size={20} />
									<Text> Proyects ...</Text>
								</div>
							</Link>
							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<MdNumbers size={20} />
									<Text> Anime ...</Text>
								</div>
							</Link>
							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text> Get in touch ...</Text>
								</div>
							</Link>
						</div>
					</div>
					<div className="flex flex-col">
						<Text
							className={clsx(
								"mt-1 mb-1 text-xl text-gray-300",
								"text-gray-500",
								"dark:text-gray-light"
							)}
						>
							Recent
						</Text>
						<Link to={"/experience"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									Blogs{" "}
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
								>
									E:/SebastianCasadiego/Blogs
								</Text>
							</div>
						</Link>
						<Link to={"/skills"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									Gaming
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
									type="span"
								>
									E:/SebastianCasadiego/Gaming
								</Text>
							</div>
						</Link>
						<Link to={"/projects"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									Anime
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
								>
									E:/SebastianCasadiego/Anime
								</Text>
							</div>
						</Link>
						<Link to={"/hobbies"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									StartUp
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
								>
									E:/SebastianCasadiego/Startup
								</Text>
							</div>
						</Link>
					</div>
				</div>
				<div
					className={clsx(
						"flex",
						"flex-col",
						"justify-center",
						"col-span-1",
						"lg:mt-0",
						"mt-3"
					)}
				>
					<Text
						className={clsx(
							"text-gray-500",
							"dark:text-gray-light"
						)}
					>
						About
					</Text>
					<div className="flex flex-col gap-y-5">
						<Card
							path="link"
							src="https://img.icons8.com/fluency/30/null/linkedin-circled.png"
							title="Prueba"
						/>
						<Card
							path="git"
							src="https://img.icons8.com/3d-fluency/28/null/github.png"
							title="Prueba"
						/>
						<Card
							path="x"
							src="https://img.icons8.com/color/28/null/twitter--v1.png"
							title="Prueba"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
