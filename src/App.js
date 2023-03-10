import "./styles.css";

const Fruit = new Map([
  ["Kiwi ", 10],
  [" Apple ", 7],
  [" Lemon ", 4]
]);
let pets = function animal() {
  return console.log("Meeeow");
};

const holidays = ["Halloween ", "Christmas ", "Valentines "];

holidays.map((holiday) => holidays);
console.log(Fruit);

const animes = ["One Piece ", "Naruto ", "Dragon Ball Z", "Bleach "];

const myLikes = holidays.concat(animes);

export default function App() {
  return (
    <div className="App">
      <h1>{Fruit}</h1>
      <h1>{pets()}</h1>
      <h1>{holidays}</h1>
      <h2>{myLikes}</h2>
    </div>
  );
}
