// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CalendarPage from "./pages/CalendarPage";
import ClientProfilePage from "./pages/ClientProfilePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import MaterialsPage from "./pages/MaterialsPage";
import IncomeExpensesPage from "./pages/IncomeExpensesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/client" element={<ClientProfilePage />} />
        <Route path="/job" element={<JobDetailsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/income-expenses" element={<IncomeExpensesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
