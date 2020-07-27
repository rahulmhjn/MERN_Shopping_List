import React from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import { Provider as ItemProvider } from "./context/ItemsContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <ItemProvider>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    </ItemProvider>
  );
}

export default App;
