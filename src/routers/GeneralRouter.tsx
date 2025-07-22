import {
	Contact,
	Experience,
	Home,
	ProjectDetail,
	Projects,
	Skills,
} from "@/screens"
import { Route, Routes } from "react-router-dom"

export const GeneralRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/skills" element={<Skills />} />
			<Route path="/experience" element={<Experience />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/projects/:id" element={<ProjectDetail />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	)
}
