import { BrowserRouter as Router, Routes, Route } from "react-router"
// Pages
import Home from "../../pages/Home"
import Counter from "../../pages/Counter"
import TodoList from "../../pages/Todo-List"
import ProfileCard from "../../pages/ProfileCard"
import ProductList from "../../pages/ProductList"
import Comment from "../../pages/Comment"
import Weather from "../../pages/Weather"
import DefaultLayout from "../../layouts/DefaultLayout"

export default function AppRoutes() {
    return (
        <Router basename="/f8-zoom-day34">
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todolist" element={<TodoList />} />
                    <Route path="/comment" element={<Comment />} />
                    <Route path="/profilecard" element={<ProfileCard />} />
                    <Route path="/productlist" element={<ProductList />} />
                    <Route path="/weather" element={<Weather />} />
                </Route>
            </Routes>
        </Router>
    )
}
