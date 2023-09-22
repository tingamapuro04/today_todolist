import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from "redux-persist/integration/react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import './index.css';
import App from './components/App'
import ToDoForm from './components/ToDoForm';
import UpdateForm from './components/UpdateForm';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import SignIn from "./components/SignIn";
import Today from './components/Today';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <Router>
          <Routes>
            <Route path="/todos/today" element={<Today />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/todos" element={<App />} />
            <Route path="/add_todo" element={<ToDoForm />} />
            <Route path="/todos/:todo_id" element={<UpdateForm />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </>
);
