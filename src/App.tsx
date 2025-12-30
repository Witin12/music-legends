import "./App.css";
import Header from "./Header";
import wallpaper from "./assets/wallpaper.jpg";
import logo from "./assets/logo.svg";
import btnBack from "./assets/button-prev-1.svg";
import btnNext from "./assets/button-next-1.svg";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="relative w-full flex-1 overflow-hidden">
        <img
          src={wallpaper}
          alt="Wallpaper"
          className="absolute z-0 w-full h-full top-0 left-0 object-cover"
        />

        <section className="hero-wrapper flex justify-center relative flex-col z-1 h-full ">
          <img src={logo} alt="Logo" width={300} />
          <span className="text-2xl enterprise">Riot Games</span>
          <div className="flex items-center">
            <img
              src={btnBack}
              alt="Voltar"
              width={30}
              className="cursor-pointer"
            />
            <span className="qtd-music">1/20</span>
            <img
              src={btnNext}
              alt="Avançar"
              width={30}
              className="cursor-pointer"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
