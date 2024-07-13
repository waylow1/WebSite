import logo from "@assets/logo.svg";
import { useConfirm } from "@components/Dialogs/ConfirmContext";
import "@css/App.css";
import FrontLayout from "@layouts/FrontLayout";

function Home() {
     const { confirm } = useConfirm();

     const del = async () => {
          if (
               await confirm({
                    title: "Valider la suppression ?",
                    type: "confirm",
               })
          ) {
          }
     };

     return (
          <div className="App bg-red-500" onClick={() => del()}>
               <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                         Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                         className="App-link"
                         href="https://reactjs.org"
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                         Learn React
                    </a>
               </header>
          </div>
     );
}

export default Home;
