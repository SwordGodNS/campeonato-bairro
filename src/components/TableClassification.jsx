export default function TableClassification({ teams }) {
  const sorted = [...teams].sort((a,b)=>((b.wins*3)+b.draws)-((a.wins*3)+a.draws));

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr><th>#</th><th>Time</th><th>PTS</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th></tr>
        </thead>
        <tbody>
          {sorted.map((t,i)=>(
            <tr key={t.id}>
              <td>{i+1}</td><td>{t.name}</td><td>{(t.wins*3)+t.draws}</td><td>{t.wins}</td><td>{t.draws}</td><td>{t.losses}</td><td>{t.goalsFor}</td><td>{t.goalsAgainst}</td><td>{t.goalsFor-t.goalsAgainst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
