import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
function DefaultLayout() {
    return (
        <>
            <Header />
            <Navigation />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default DefaultLayout
