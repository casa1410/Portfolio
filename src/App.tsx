import { Layout } from "@/components"
import "@/sass/index.scss"
import { Route, Routes } from "react-router-dom"
import { GeneralRouter } from "./routers"

const App = (): JSX.Element => {
	return (
		<Layout>
			<Routes>
				{/* PUBLIC ROUTER */}
				<Route index path="/*" element={<GeneralRouter />} />
			</Routes>
		</Layout>
	)
}

export default App
