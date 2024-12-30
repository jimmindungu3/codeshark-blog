import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Loader from "./components/Loader";

// Lazy Components
const AsyncProgramming = lazy(() => import("./components/AsyncProgramming"));
const FirstProgrammingLanguage = lazy(() =>
  import("./components/FirstProgrammingLanguage")
);
const JSFrameworks = lazy(() => import("./components/JSFrameworks"));

const App = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Router>
          <div className="grid grid-cols-12 gap-4 h-screen">
            <div className="col-span-3 overflow-y-auto">
              <Sidebar />
            </div>
            <div className="col-span-9 overflow-y-auto">
              <Suspense fallback={<Loader />}>
                <Routes>
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
        </Router>
      </div>
    </div>
  );
};

export default App;
