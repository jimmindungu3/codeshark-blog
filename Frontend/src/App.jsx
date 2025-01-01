import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Loader from "./components/Loader";
import Home from "./components/Home";
import WebDevelopment from "./components/WebDevelopment";

// Lazy Components
const AsyncProgramming = lazy(() => import("./components/AsyncProgramming"));
const JSFrameworks = lazy(() => import("./components/JSFrameworks"));
const FirstProgrammingLanguage = lazy(() =>
  import("./components/FirstProgrammingLanguage")
);

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <Navbar toggleMobileMenu={toggleMobileMenu} />
          <div className="grid grid-cols-12 gap-4 h-screen md:mx-2">
            {/* Desktop Sidebar */}
            <div className="hidden md:block col-span-3 overflow-y-auto bg-white dark:bg-gray-800 h-fit">
              <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            <div
              className={`fixed md:hidden inset-y-0 right-0 transform ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              } w-64 bg-white dark:bg-gray-800 overflow-y-auto transition-transform duration-300 ease-in-out z-30`}
            >
              <Sidebar closeSidebar={closeMobileMenu} />
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
              <div
                className="fixed md:hidden inset-0 bg-black bg-opacity-60 z-20"
                onClick={closeMobileMenu}
              />
            )}

            {/* Main Content */}
            <div className="col-span-12 md:col-span-9 overflow-y-auto">
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
                  <Route path="/web-development" element={<WebDevelopment />} />
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
