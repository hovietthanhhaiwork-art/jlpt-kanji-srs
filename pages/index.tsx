import { useState } from "react";
import Flashcard from "../components/Flashcard";
import Quiz from "../components/Quiz";

export default function Home() {
  const [mode, setMode] = useState<"flashcard" | "quiz" | null>(null);
  const [query, setQuery] = useState("");
  const [word, setWord] = useState<any>(null);

  const searchWord = async () => {
    const res = await fetch(`/api/immersion?query=${query}`);
    const data = await res.json();
    setWord(data);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>JLPT Kanji SRS</h1>

      {!mode && (
        <div>
          <input
            type="text"
            placeholder="Nhập từ / Kanji..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchWord}>Tìm</button>

          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setMode("flashcard")}>Flashcard</button>
            <button onClick={() => setMode("quiz")}>Quiz</button>
          </div>
        </div>
      )}

      {mode === "flashcard" && word && <Flashcard data={word} />}
      {mode === "quiz" && word && <Quiz data={word} />}
    </div>
  );
}
