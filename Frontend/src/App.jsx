import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Loader from "./components/Loader";
import Home from "./components/Home";

// Lazy Components
const AsyncProgramming = lazy(() => import("./components/AsyncProgramming"));
const FirstProgrammingLanguage = lazy(() =>
  import("./components/FirstProgrammingLanguage")
);
const JSFrameworks = lazy(() => import("./components/JSFrameworks"));

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <div className="dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <div className="grid grid-cols-12 gap-4 h-screen">
            {/* Sidebar */}
            <div
              className={`fixed top-20 left-0 z-40 w-64 h-full bg-white dark:bg-gray-800 shadow-md transition-transform transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } sm:translate-x-0 sm:static sm:col-span-3`}
            >
              <Sidebar closeSidebar={closeSidebar} />
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={toggleSidebar}
              className="sm:hidden fixed top-16 left-4 z-50 text-blue-500 dark:text-yellow-500"
            >
              ☰
            </button>

            {/* Main Content */}
            <div className="col-span-12 sm:col-span-9 overflow-y-auto">
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/AsyncProgramming"
                    element={<AsyncProgramming />}
                  />
                  <Route
                    path="/FirstProgrammingLanguage"
                    element={<FirstProgrammingLanguage />}
                  />
                  <Route path="/JSFrameworks" element={<JSFrameworks />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
