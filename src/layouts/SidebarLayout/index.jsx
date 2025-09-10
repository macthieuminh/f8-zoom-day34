import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
function SiderbarLayout() {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar>
                    <div className="content">
                        <Outlet />
                    </div>
                </Sidebar>
            </div>

            <Footer />
        </>
    )
}
export default SiderbarLayout
