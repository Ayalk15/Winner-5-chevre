import React, { useState } from 'react';

export default function App() {
  // רשימת משחקי המחזור דוגמה
  const [games, setGames] = useState([
    { id: 1, home: 'מכבי תל אביב', away: 'מכבי חיפה', time: 'שבת, 20:00', prediction: '' },
    { id: 2, home: 'הפועל באר שבע', away: 'בית"ר ירושלים', time: 'שבת, 18:00', prediction: '' },
    { id: 3, home: 'הפועל חיפה', away: 'מכבי נתניה', time: 'ראשון, 20:15', prediction: '' }
  ]);

  // טבלת הניקוד של ה-5 חבר'ה
  const leaderboard = [
    { name: 'אילן', points: 18 },
    { name: 'דודו', points: 15 },
    { name: 'יוסי', points: 14 },
    { name: 'גיל', points: 11 },
    { name: 'משה', points: 9 }
  ];

  const handlePredict = (id, value) => {
    setGames(games.map(g => g.id === id ? { ...g, prediction: value } : g));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4" style={{ direction: 'rtl' }}>
      {/* כותרת ראשית */}
      <header className="max-w-md mx-auto text-center py-6 border-b border-gray-800">
        <h1 className="text-3xl font-extrabold text-yellow-500 drop-shadow-md">
          🏆 5 חבר'ה – ווינר ליגת העל
        </h1>
        <p className="text-gray-400 text-sm mt-2">טבלת הניחושים הרשמית של הקבוצה</p>
      </header>

      <main className="max-w-md mx-auto mt-6 space-y-6">
        {/* טבלת מובילים */}
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-xl">
          <h2 className="text-lg font-bold text-gray-200 mb-3">📊 מצב הטבלה</h2>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-gray-800 text-gray-400 text-xs">
                  <th className="p-3">שם המנחש</th>
                  <th className="p-3 text-center">נקודות</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {leaderboard.map((user, idx) => (
                  <tr key={idx} className="hover:bg-gray-800/50">
                    <td className="p-3 font-medium text-gray-300">
                      {idx === 0 ? '👑 ' : ''}{user.name}
                    </td>
                    <td className="p-3 text-center font-bold text-yellow-500">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* משחקים לניחוש */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-200">⚽ ניחושי המחזור הקרוב</h2>
          
          {games.map((game) => (
            <div key={game.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md space-y-3">
              <div className="flex justify-between text-xs text-gray-400">
                <span>ליגת העל</span>
                <span>{game.time}</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-base text-gray-100">{game.home}</span>
                <span className="text-gray-500 text-sm font-semibold">נגד</span>
                <span className="font-bold text-base text-gray-100 text-left">{game.away}</span>
              </div>

              {/* כפתורי ווינר 1 X 2 */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {['1', 'X', '2'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handlePredict(game.id, option)}
                    className={`py-2 text-sm font-bold rounded-lg border transition-all ${
                      game.prediction === option
                        ? 'bg-yellow-500 border-yellow-500 text-gray-950 scale-105 shadow-md'
                        : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-750'
                    }`}
                  >
                    {option === '1' ? '1 (בית)' : option === 'X' ? 'X (תיקו)' : '2 (חוץ)'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* כפתור שמירה */}
        <button 
          onClick={() => alert('הניחושים נשמרו בהצלחה!')}
          className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-950 font-bold py-3 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all text-center block"
        >
          💾 שמור את הניחושים שלי
        </button>
      </main>
    </div>
  );
}
