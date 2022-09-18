import { Navbar , Welcome , Footer , Transaction , Loader , Services  } from "./componenets"
const App = () => {
  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
       </div>
       <Services />
       <Transaction />
       <Footer/>
    </div>
  );
}

export default App
