import React, { useState } from "react";

export default function Quiz({ data }: { data: any }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<string | null>(null);

  if (!data || !data.result || data.result.length === 0) return <p>Không có dữ liệu</p>;

  const entry = data.result[0];

  const checkAnswer = () => {
    if (answer === entry.reading) {
      setResult("✅ Chính xác!");
    } else {
      setResult(`❌ Sai. Đáp án: ${entry.reading}`);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{entry.word}</h2>
      <input
        type="text"
        placeholder="Nhập cách đọc"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Kiểm tra</button>
      {result && <p>{result}</p>}
    </div>
  );
}
