import Router from "./Router";
import ClintApp from "../client/ClientApp"
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <>
      {/* <ClintApp/> */}
      <Router />
    </>
    </div>
  );
}


