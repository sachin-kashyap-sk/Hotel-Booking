import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from './../../client/src/context/AuthContext';
import { AuthContext } from "./context/AuthContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProjectRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProjectRoute>
                  <Home />
                </ProjectRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProjectRoute>
                    <List />
                  </ProjectRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProjectRoute>
                    <Single />
                  </ProjectRoute>
                }
              />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route
                path=":productId"
                element={
                  <ProjectRoute>
                    <Single />
                  </ProjectRoute>
                }
              />
              <Route
                path="new"
                element={<ProjectRoute><New inputs={productInputs} title="Add New Product" /> </ProjectRoute>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
