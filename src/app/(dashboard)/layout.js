/** Components */
import Sidebar from "@/components/sidebar"
import TopNav from "@/components/topnav"
import { SidebarProvider } from "context/sidebar-context"

/** Main Export */
const layout = ({ children }) => {

	return (
		<SidebarProvider>
			<Sidebar />
			<TopNav />
			{children}
		</SidebarProvider>
	)
}
export default layout