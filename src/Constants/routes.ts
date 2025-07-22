export interface GroupRouteProps extends RouteProps {
	childrens?: RouteProps[]
}

export type Extensions =
	| "html"
	| "css"
	| "js"
	| "ts"
	| "jsx"
	| "tsx"
	| "txt"
	| "md"
	| "py"
	| "rb"

export interface RouteProps {
	name: string
	route?: string
	ext?: Extensions
}
