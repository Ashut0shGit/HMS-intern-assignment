import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import Add_Admin from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Admin";
import Add_Ambulance from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Ambulance";
import AddDoctor from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Doctor";
import Add_Nurse from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Nurse";
import AllReport from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/AllReport";
import Check_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Check_Appointment";
import Doctor_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Doctor_Profile";
import Patient_Details from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Patient_Details";
import Book_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Patient/Book_Appointment";
import Patient_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Patient/Patient_Profile";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} />
        <Route path="/addoctor" element={<AddDoctor />} />
        <Route path="/addambulance" element={<Add_Ambulance />} />
        <Route path="/addnurse" element={<Add_Nurse />} />
        <Route path="/admin" element={<Add_Admin />} />
        ******************** Doctor Part *************************
        <Route path="/reports" element={<AllReport />} />
        <Route path="/checkappointment" element={<Check_Appointment />} />
        <Route path="/patientdetails" element={<Patient_Details />} />
        <Route path="/doctorprofile" element={<Doctor_Profile />} />
        ******************** Patient Part *************************
        <Route path="/bookappointment" element={<Book_Appointment />} />
        <Route path="/nurseprofile" element={<Patient_Profile />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
