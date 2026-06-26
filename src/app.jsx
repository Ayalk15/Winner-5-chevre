import React, { useState, useEffect } from 'react';

// מערך המשחקים המלא (36 מחזורים)
const allFixtures = {
  // ... (השארתי כאן רק מחזור 1 כדי שהקוד יטען מהר, תוודא שיש לך את כל 36 המחזורים בקובץ שלך)
  1: [{ id: 1, home: 'מכבי פ"ת', away: 'הפועל ק"ש', time: '22/08/26' }, { id: 2, home: 'עירוני דורות טבריה', away: 'הפועל פ"ת', time: '22/08/26' }, { id: 3, home: 'הפועל י-ם', away: 'מכבי ת"א', time: '22/08/26' }, { id: 4, home: 'מכבי חיפה', away: 'הפועל ר"ג', time: '22/08/26' }, { id: 5, home: 'הפועל ב"ש', away: 'הפועל חיפה', time: '22/08/26' }, { id: 6, home: 'בית"ר י-ם', away: 'הפועל ת"א', time: '22/08/26' }, { id: 7, home: 'מכבי נתניה', away: 'בני סכנין', time: '22/08/26' }],
  // ... וכו' עד מחזור 36
};

const ISRAELI_TEAMS = ['מכבי ת"א', 'מכבי חיפה', 'בית"ר י-ם', 'הפועל ב"ש', 'הפועל ת"א', 'מכבי נתניה', 'הפועל חיפה', 'מכבי פ"ת', 'בני סכנין', 'עירוני דורות טבריה', 'הפועל ק"ש', 'הפועל פ"ת', 'הפועל ר"ג', 'הפועל י-ם'];

export default function App() {
  const [currentTab, setCurrentTab] = useState('predictions');
  const [matchday, setMatchday] = useState(1);
  const [liveClock, setLiveClock] = useState('');
  
  // טעינה מהזיכרון
  const [predictions, setPredictions] = useState(() => JSON.parse(localStorage.getItem('predictions')) || {});
  const [tournament, setTournament] = useState(() => JSON.parse(localStorage.getItem('tournament')) || { champion: '', topScorer: '', topAssists: '', favoriteTeam: '' });
  const [jokers, setJokers] = useState(() => JSON.parse(localStorage.getItem('jokers')) || {});
  const [isAdminMode, setIsAdminMode] = useState(false);

  // שעון חי
  useEffect(() => {
    const tick = () => setLiveClock(new Date().toLocaleString('he-IL'));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // שמירה אוטומטית
  useEffect(() => { localStorage.setItem('predictions', JSON.stringify(predictions)); }, [predictions]);
  useEffect(() => { localStorage.setItem('tournament', JSON.stringify(tournament)); }, [tournament]);
  useEffect(() => { localStorage.setItem('jokers', JSON.stringify(jokers)); }, [jokers]);

  const handlePredict = (gameId, key, val) => {
    setPredictions(prev => ({ ...prev, [`${matchday}-${gameId}`]: { ...prev[`${matchday}-${gameId}`], [key]: val } }));
  };

  const loginAsAdmin = () => {
    if (isAdminMode) setIsAdminMode(false);
    else if (prompt('סיסמת מנהל:') === '2531') setIsAdminMode(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 pb-20" style={{ direction: 'rtl' }}>
      {/* Header */}
      <header className="bg-gray-900 p-4 rounded-xl text-center border border-yellow-500/30 mb-4">
        <h1 className="text-xl font-black text-yellow-500">🏆 10 חבר'ה - יוספטל</h1>
        <div className="text-xs text-gray-300 mt-2 font-bold">{liveClock}</div>
      </header>

      {/* Tabs */}
      <div className="grid grid-cols-5 gap-1 mb-4">
        {['predictions', 'tournament', 'stats', 'leaderboard', 'rules'].map(tab => (
           <button key={tab} onClick={() => setCurrentTab(tab)} className={`p-2 rounded-lg text-[9px] font-bold ${currentTab === tab ? 'bg-yellow-500 text-black' : 'bg-gray-800'}`}>
             {tab === 'predictions' ? '⚽ משחקים' : tab === 'tournament' ? '👑 טורניר' : tab === 'stats' ? '📈 סטט\'' : tab === 'leaderboard' ? '📊 טבלה' : 'ℹ️ חוקים'}
           </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {currentTab === 'predictions' && (
          <>
            <select onChange={(e) => setMatchday(Number(e.target.value))} className="w-full bg-gray-800 p-3 rounded-lg font-bold">
               {[...Array(36).keys()].map(i => <option key={i+1} value={i+1}>מחזור {i+1}</option>)}
            </select>
            {allFixtures[matchday]?.map(game => (
               <div key={game.id} className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                  <div className="flex justify-between text-xs mb-2"><span>{game.time}</span><button onClick={() => setJokers({...jokers, [matchday]: game.id})} className="font-bold">🃏 ג'וקר</button></div>
                  <div className="flex justify-between font-bold text-lg mb-2"><span>{game.home}</span><span>VS</span><span>{game.away}</span></div>
                  <div className="flex gap-2">
                     {['1', 'X', '2'].map(o => <button key={o} onClick={() => handlePredict(game.id, 'winner', o)} className={`p-2 w-full rounded ${predictions[`${matchday}-${game.id}`]?.winner === o ? 'bg-yellow-500 text-black' : 'bg-gray-800'}`}>{o}</button>)}
                  </div>
               </div>
            ))}
             <button onClick={() => alert('הניחושים נשמרו במכשיר!')} className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl">💾 שמור ניחושים</button>
          </>
        )}

        {currentTab === 'tournament' && (
           <div className="space-y-3">
               <input className="w-full bg-gray-800 p-3 rounded-lg" placeholder="אלופה..." value={tournament.champion} onChange={e => setTournament({...tournament, champion: e.target.value})} />
               <input className="w-full bg-gray-800 p-3 rounded-lg" placeholder="מלך שערים..." value={tournament.topScorer} onChange={e => setTournament({...tournament, topScorer: e.target.value})} />
               <button onClick={() => alert('הנתונים נשמרו במכשיר!')} className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl">💾 שמור שינויים</button>
           </div>
        )}
      </div>

      <footer className="mt-8 text-center">
        <button onClick={loginAsAdmin} className="text-[10px] text-gray-600 font-bold">ניהול</button>
      </footer>
    </div>
  );
}
