import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AutomobileForm from "./inventory/AutomobileForm";
import AutomobileList from "./inventory/AutomobileList";
import VehicleModelForm from "./inventory/VehicleModelForm";
import VehicleModelList from "./inventory/VehicleModelList";
import ManufacturerList from "./inventory/ManufacturerList";
import ManufacturerForm from "./inventory/ManufacturerForm";
import TechnicianForm from "./service/TechnicianForm";
import TechnicianList from "./service/TechnicianList";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import AppointmentHistory from "./service/AppointmentHistory";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models/new/" element={<VehicleModelForm />} />
          <Route path="models/" element={<VehicleModelList />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="automobiles/new/" element={<AutomobileForm />} />
          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="manufacturers/new/" element={<ManufacturerForm />} />
          <Route path="technicians/" element={<TechnicianList />} />
          <Route path="technicians/new/" element={<TechnicianForm />} />
          <Route path="appointments/" element={<AppointmentList />} />
          <Route path="appointments/new/" element={<AppointmentForm />} />
          <Route path="appointments/history/" element={<AppointmentHistory />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
