import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./MyApp";

// Import the API and data functions
import api from "./api";
import data from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Make the data available to the rest of the application
const { previews, genres, shows } = data;

// Render the application
const MyApp = () => {
  return (
    <div>
      <h1>Podcasts</h1>
      <ul>
        {previews.map((preview) => (
          <li key={preview.id}>{preview.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Render the application
ReactDOM.render(<MyApp />, document.getElementById("root"));
