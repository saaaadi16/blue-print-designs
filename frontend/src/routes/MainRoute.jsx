import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import Loading from "../components/loading/Loading";
import ContactUsPage from "../pages/ContactUsPage";
import ProjectPage from "../pages/ProjectsPage";
import ServicesPage from "../pages/ServicesPage";

const MainRoute = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 6500);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path={"/"}
            index
            element={isVisible ? <HomePage /> : <Loading />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/lopende projecten" element={<ProjectPage />} />
          <Route path="/diensten" element={<ServicesPage />} />
          <Route path="/blog" element={<Loading />} />
          <Route path="/over ons" element={<Loading />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainRoute;
