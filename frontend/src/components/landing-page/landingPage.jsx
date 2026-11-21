import Navbar from "./components/landing/navBar/Navbar";
import Hero from "./components/landing/Hero/Hero";
import AtAGlance from "./components/landing/AtAGlance/AtAGlance";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fb" }}>
      <Navbar />

      <section style={{ padding: "48px 24px 64px" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "36px",
          }}
        >
          <div style={{ flex: "1 1 540px", minWidth: 0 }}>
            <Hero />
          </div>

          <div style={{ flex: "1 1 360px", maxWidth: "420px" }}>
            <AtAGlance />
          </div>
        </div>
      </section>
    </div>
  );
}