import "./App.css";
import { useRef, useState } from "react";

let wordList =
  "The quick brown fox jumps over the lazy dog. Apple banana cat dog elephant frog grape honey ice cream jelly kangaroo lion monkey nut orange pear queen rabbit snake turtle umbrella vase whale xylophone yak zebra. Antelope butterfly cheetah dolphin eagle flamingo giraffe hummingbird iguana jaguar koala lemur meerkat narwhal octopus panda quokka raccoon seahorse tiger unicorn vulture walrus x-ray fish yeti zucchini. Aeroplane bicycle car train boat spaceship rocket helicopter motorbike scooter skateboard rollerblades tricycle van. Africa Antarctica Asia Australia Europe North America South America. Apple pie blueberry muffin chocolate cake lemon tart strawberry cheesecake vanilla ice cream. Autumn winter spring summer. Baseball basketball cricket football golf hockey soccer tennis volleyball. Birthday Christmas Easter Halloween New Year's Day Thanksgiving Valentine's Day. Chocolate cookies marshmallows popcorn pretzels potato chips.";

function App() {
  const [userInput, setUserInput] = useState("");

  const [activeWord, setActiveWord] = useState(0);

  const newWordList = () => wordList.split(" ");
  // .sort(() => (Math.random() > 0.5 ? 1 : -1));

  function Word(props) {
    const { text, active, correct } = props;

    if (correct === true) {
      return <span className="correct">{text}</span>;
    }
    if (correct === false) {
      return <span className="incorrect">{text}</span>;
    }

    if (active) {
      return <span className="active">{text}</span>;
    }
    return (
      <span style={{ fontStyle: active ? "bold" : "normal" }}>
        {props.text}{" "}
      </span>
    );
  }

  function processInput(value) {
    if (value.endsWith(" ")) {
      setActiveWord((index) => index + 1);
      setUserInput("");
    } else {
      setUserInput(value);
    }
  }

  return (
    <div>
      <h1>Typing Test</h1>
      <p>
        {newWordList().map((word, index) => {
          return (
            <Word text={word} active={index === activeWord} correct={null} />
          );
        })}
      </p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      ></input>
    </div>
  );
}

export default App;
