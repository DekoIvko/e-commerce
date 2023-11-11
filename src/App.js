import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <div className='bg-red-500'>
      <Header />
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
