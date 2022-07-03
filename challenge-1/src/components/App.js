import './App.css';
import Joke from "./Joke/Joke"

function App() {
  return (
    <div className="app">
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvotes={1}
        downvotes={2}
        comments={"😂"}
        isPun={true}
      />
      <Joke
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
          upvotes={0}
          downvotes={0}
          comments={["😂", "😂"]}
          isPun={false}
      />
      <Joke
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
          upvotes={12}
          downvotes={132}
          isPun={true}
      />
      <Joke
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
          upvotes={5345}
          downvotes={76}
          comments={["😂", "😂", "Funny"]}
          isPun={false}
      />
      <Joke
          setup="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
          upvotes={123}
          downvotes={1}
          isPun={true}
      />
      <Joke
          punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
          upvotes={5345}
          downvotes={76}
          comments={["😂", "😂", "Funny"]}
          isPun={false}
      />
    </div>
  );
}

export default App;
