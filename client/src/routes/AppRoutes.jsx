import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PageNotFound from "../pages/PageNotFound";
import TopBar from "../layouts/TopBar";
import About from "../pages/About";
import DeveloperPage from "../pages/DeveloperPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TopBar />}>
        <Route index element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About/>} />
        <Route path="/DeveloperPage" element={<DeveloperPage />} />
      </Route>
      {/* <Route
        path="/dashboard"
        element={(
          <PrivateRoute>
            <DashboardLayouts />
          </PrivateRoute>)}
      >
        <Route path="/dashboard/intro" element={<Intro />} />
        <Route path="/dashboard/counter" element={<Counter />} />
        <Route path="/dashboard/calc" element={<Calculator />} />
        <Route path="/dashboard/todo-list" element={<TodoList />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/stop-watch" element={<StopWatch />} />
        {/* CMS Project */}
        {/* <Route path='/dashboard/cms/user-stats' element={<UserStats />} />
        <Route path='/dashboard/cms/add' element={<AddNewItem />} />
        <Route path='/dashboard/cms/display' element={<DisplayAll />} />
        <Route path='/dashboard/cms/favorites' element={<MyFavorites />} />
      </Route> */} 

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}