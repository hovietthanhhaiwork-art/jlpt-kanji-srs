import React, { useState } from "react";

export default function Flashcard({ data }: { data: any }) {
  const [flipped, setFlipped] = useState(false);

  if (!data || !data.result || data.result.length === 0) return <p>Không có dữ liệu</p>;

  const entry = data.result[0];

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginTop: "20px",
        cursor: "pointer",
        width: "300px",
      }}
    >
      {!flipped ? (
        <div>
          <h2 style={{ fontSize: "2em" }}>{entry.word}</h2>
          <p>{entry.reading}</p>
        </div>
      ) : (
        <div>
          <p>{entry.glossary.join(", ")}</p>
          {entry.examples && entry.examples.length > 0 && (
            <div>
              <p><b>Ví dụ:</b> {entry.examples[0].japanese}</p>
              <p>{entry.examples[0].english}</p>
              {entry.examples[0].audio && (
                <audio controls src={entry.examples[0].audio} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
