import reactImg from "../assets/react-core-concepts.png";
const reactDescription = ["Fundamental", "Crucial", "Core"];

const description = reactDescription[genRandomInt(2)];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
