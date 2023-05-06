const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
 export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <div key={index}>
          {index > 0 && <br />}
          <p>{line}</p>
        </div>
      ))}
    </article>
  );
}