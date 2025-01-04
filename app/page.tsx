"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// TypeScript Types
interface Match {
  court: number;
  team1: string;
  score1: number;
  team2: string;
  score2: number;
  time: string;
}

interface Round {
  round: string;
  matches: Match[];
}

interface Standing {
  team: string;
  w: number;
  l: number;
  pe: number;
  pa: number;
  pd: number;
}

const PickleballEventPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="bg-white shadow p-6 mb-6 w-full max-w-5xl rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">Fundraising Pickleball Tournament</h1>
            <p className="text-sm text-gray-600">One-Day Event</p>
          </div>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/forms/d/1Ois47yg-M2brr_N-oWX5sDmpE_72r_vXA5foEPs8Dgw/edit")
            }
          >
            Register Now
          </button>
        </div>
        <nav className="flex gap-4 mt-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-gray-600 hover:text-blue-500"
            }
          >
            Details
          </NavLink>
          <NavLink
            to="/rounds"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-gray-600 hover:text-blue-500"
            }
          >
            Rounds
          </NavLink>
          <NavLink to="#" className="text-gray-600 hover:text-blue-500">
            Players
          </NavLink>
          <NavLink to="#" className="text-gray-600 hover:text-blue-500">
            Find a Partner
          </NavLink>
          <NavLink to="#" className="text-gray-600 hover:text-blue-500">
            Get Involved
          </NavLink>
        </nav>
      </header>

      <main className="w-full max-w-5xl bg-white shadow-md rounded-lg p-8">
        {/* Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-gray-800 font-bold">When</h3>
            <p className="text-gray-600">Event Date: January 4, Saturday 2025</p>
            <p className="text-gray-600">Registration closes: January 3</p>
          </div>
          <div>
            <h3 className="text-gray-800 font-bold">Registration Cost</h3>
            <p className="text-gray-600 text-xl font-bold text-blue-600">Donation Based</p>
          </div>
          <div>
            <h3 className="text-gray-800 font-bold">Where</h3>
            <p className="text-gray-600">Rice Middle School</p>
            <p className="text-gray-600">8500 Gifford Dr</p>
            <p className="text-gray-600">Plano, TX, 75025</p>
            <a href="#" className="text-blue-500">
              Get Directions
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

const RoundsPage: React.FC = () => {
  const rounds: Round[] = [
    // Rounds data here
  ];

  const [standings, setStandings] = React.useState<Standing[]>([]);

  const calculateStandings = React.useCallback(() => {
    const standingsMap: Record<string, Standing> = {};

    rounds.forEach((round) => {
      round.matches.forEach((match) => {
        const { team1, score1, team2, score2 } = match;

        if (!standingsMap[team1])
          standingsMap[team1] = { team: team1, w: 0, l: 0, pe: 0, pa: 0, pd: 0 };
        if (!standingsMap[team2])
          standingsMap[team2] = { team: team2, w: 0, l: 0, pe: 0, pa: 0, pd: 0 };

        standingsMap[team1].pe += score1;
        standingsMap[team1].pa += score2;
        standingsMap[team1].pd += score1 - score2;

        standingsMap[team2].pe += score2;
        standingsMap[team2].pa += score1;
        standingsMap[team2].pd += score2 - score1;

        if (score1 > score2) {
          standingsMap[team1].w += 1;
          standingsMap[team2].l += 1;
        } else if (score2 > score1) {
          standingsMap[team2].w += 1;
          standingsMap[team1].l += 1;
        }
      });
    });

    const standingsArray = Object.values(standingsMap).sort((a, b) => b.w - a.w || b.pd - a.pd);
    setStandings(standingsArray);
  }, [rounds]);

  React.useEffect(() => {
    calculateStandings();
  }, [calculateStandings]);

  return (
    <div>
      <h2>Rounds Page</h2>
      {/* Render Rounds and Standings */}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PickleballEventPage />} />
        <Route path="/rounds" element={<RoundsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
