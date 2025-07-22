import { GroupRouteProps } from "@/Constants"

export interface GroupItemProps extends GroupRouteProps {
	handleOpen?: () => void
	isOpen?: boolean
}
