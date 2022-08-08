import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { NewPage, EditPage } from "modules";
import { Auth } from "components";
import { ProtectedRoute } from "./ProtectedRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ProtectedRoute children="Home" />} />
      </Route>

      <Route path="/pages">
        <Route
          path="add"
          element={<ProtectedRoute>{<NewPage />}</ProtectedRoute>}
        />
        <Route
          path="edit/:name"
          element={<ProtectedRoute>{<EditPage />}</ProtectedRoute>}
        />
      </Route>
      <Route path="/auth" element={<Auth mode="signIn" />} />
      <Route path="*" element={<span>"404"</span>} />
    </Routes>
  );
};
