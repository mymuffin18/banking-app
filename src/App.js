import React from "react";

import "./App.css";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NotFoundPage from "./components/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./components/context/AuthContextProvider";
import CreateAccount from "./components/CreateAccount";
import UserContextProvider from "./components/context/UserContextProvider";
import UserProtetctedRoute from "./components/budget/UserProtetctedRoute";
import UserDashboard from "./components/budget/UserDashboard";
import ExpenseContextProvider from "./components/context/ExpenseContextProvider";
import TransactionContextProvider from "./components/context/TransactionContextProvider";
import TransactionHistory from "./components/budget/TransactionHistory";
function App() {
  const { state } = useAuth();

  let redirectRoute;
  if (state.auth === "admin") {
    redirectRoute = <Navigate replace to="dashboard" />;
  } else if (state.auth === "user") {
    redirectRoute = <Navigate replace to="user" />;
  } else {
    redirectRoute = <LoginForm />;
  }

  return (
    <>
      <UserContextProvider>
        <ExpenseContextProvider>
          <TransactionContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={redirectRoute} />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="create"
                  element={
                    <ProtectedRoute>
                      <CreateAccount />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="user"
                  element={
                    <UserProtetctedRoute>
                      <UserDashboard />
                    </UserProtetctedRoute>
                  }
                />
                <Route
                  path="history"
                  element={
                    <UserProtetctedRoute>
                      <TransactionHistory />
                    </UserProtetctedRoute>
                  }
                />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </TransactionContextProvider>
        </ExpenseContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
