// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import CreateTopic from "./pages/CreateTopicPage/CreateTopic";
import TopicPage from "./pages/TopicPage/TopicPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DirecMessages from "./pages/MessagesPage/MessagesPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/addtopic"
          element={
            <PrivateRoute>
              <CreateTopic />
            </PrivateRoute>
          }
        />

        <Route
          path="/topic/:topicId"
          element={
            <PrivateRoute>
              <TopicPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile/:userName"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/Messages"
          element={
            <PrivateRoute>
              <DirecMessages />
            </PrivateRoute>
          }
        />

        {/* <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        /> */}

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
