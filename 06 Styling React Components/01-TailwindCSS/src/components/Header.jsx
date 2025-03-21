import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      <span
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        This is the inline Style
      </span>
    </header>
  );
}
