import "./App.css";
import Header from "./Header";
import wallpaper from "./assets/wallpaper.jpg";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content-area">
        <img src={wallpaper} alt="Wallpaper" className="wallpaper-bg" />

        <section className="hero-wrapper">
          <img src={logo} alt="Logo" width={300} />
        </section>
      </main>
    </div>
  );
}

export default App;
