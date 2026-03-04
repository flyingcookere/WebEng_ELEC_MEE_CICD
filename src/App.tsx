import { Routes, Route, Navigate } from "react-router-dom";
import DepartmentSelect from "./Pages/DepartmentSelect";
import DepartmentPage from "./Pages/DepartmentPage";
import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/departments" element={<DepartmentSelect />} />
        <Route path="/dept/:deptCode" element={<DepartmentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
