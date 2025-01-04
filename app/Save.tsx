"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

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
              window.location.href =
                "https://docs.google.com/forms/d/1Ois47yg-M2brr_N-oWX5sDmpE_72r_vXA5foEPs8Dgw/edit"
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

        <section className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">Tournament Description</h3>
          <p className="text-gray-600">
            Hello! We are hosting a fun one-day fundraising tournament for all ages and skill levels. It will be a
            round robin format where the top 4 records move on to the finals. Players will compete within their skill
            level category. This event is doubles only, so individuals without a partner will be paired with another
            participant.
          </p>
          <p className="text-gray-600 mt-4">
            Pairings will be sent before each round via text, and scores will be updated on a website accessible during
            the event. The tournament will be held outside at Rice Middle School (8500 Gifford Dr, Plano, TX 75025).
          </p>
          <p className="text-gray-600 mt-4">
            This tournament is for fun and a great way to meet new people who share your love for pickleball. Whether
            you’re here to compete or simply enjoy the game, we’re all here to have a good time!
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">Additional Information</h3>
          <p className="text-gray-600">
            Every donation goes towards Peach’s Mae Sot project, which is dedicated to improving education and
            opportunities for Myanmar refugee children in Mae Sot, Thailand.
          </p>
          <p className="text-gray-600 mt-4">
            These children, displaced by conflict and instability, face overwhelming challenges. Many live outside
            government refugee camps without access to legal work, proper schooling, or consistent shelter. Despite
            these barriers, they persevere by creating makeshift schools staffed by underpaid or volunteer teachers,
            giving their children a chance at a brighter future.
          </p>
          <p className="text-gray-600 mt-4">
            Your donations will:
            <ul className="list-disc ml-6 mt-2">
              <li>Provide school teachers with basic salaries</li>
              <li>Grant scholarships to refugee students</li>
              <li>Support schools in facility upgrades and lease payments</li>
              <li>Provide training to teachers</li>
            </ul>
          </p>
          <p className="text-gray-600 mt-4">Together, we can change the lives of hundreds.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">Questions?</h3>
          <p className="text-gray-600">Feel free to reach out: Isaacnewton487@gmail.com</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800">Venue Details</h3>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="font-bold text-blue-600">Rice Middle School</p>
            <p className="text-gray-600">8500 Gifford Dr</p>
            <p className="text-gray-600">Plano, TX, 75025</p>
            <a href="#" className="text-blue-500">
              Get Directions
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-8 text-center text-gray-600">
        <p>Powered by React - Enhance your Pickleball experience!</p>
      </footer>
    </div>
  );
};

const RoundsPage: React.FC = () => {
  const rounds = [
    {
      round: "Round 1",
      matches: [
        { court: 1, team1: "Lihui Chen / Guiping Qi", score1: 0, team2: "Nathan Chu / Polly Yin", score2: 0, time: "10:00 AM CST" },
        { court: 2, team1: "Lily Oliphant / Cindy Ao", score1: 0, team2: "Peggy Hao / Jenny Sun", score2: 0, time: "10:30 AM CST" },
        { court: 3, team1: "Fred Tang / Tom", score1: 0, team2: "Xiaofang Zhang / Guodong Zhang", score2: 0, time: "11:00 AM CST" },
        { court: 4, team1: "Kong Tham / Ben Lee", score1: 0, team2: "Mee Ping Lee / Kong Meng Tham", score2: 0, time: "11:30 AM CST" },
        { court: 5, team1: "Zhigang Zhou / David Wang", score1: 0, team2: "Yup / Isaac Chen", score2: 0, time: "12:00 PM CST" },
      ],
    },
    {
      round: "Round 2",
      matches: [
        { court: 1, team1: "Lihui Chen / Guiping Qi", score1: 0, team2: "Lily Oliphant / Cindy Ao", score2: 0, time: "10:00 AM CST" },
        { court: 2, team1: "Nathan Chu / Polly Yin", score1: 0, team2: "Fred Tang / Tom", score2: 0, time: "10:30 AM CST" },
        { court: 3, team1: "Peggy Hao / Jenny Sun", score1: 0, team2: "Kong Tham / Ben Lee", score2: 0, time: "11:00 AM CST" },
        { court: 4, team1: "Xiaofang Zhang / Guodong Zhang", score1: 0, team2: "Zhigang Zhou / David Wang", score2: 0, time: "11:30 AM CST" },
        { court: 5, team1: "Mee Ping Lee / Kong Meng Tham", score1: 0, team2: "Yup / Isaac Chen", score2: 0, time: "12:00 PM CST" },
      ],
    },
    {
      round: "Round 3",
      matches: [
        { court: 1, team1: "Lihui Chen / Guiping Qi", score1: 0, team2: "Peggy Hao / Jenny Sun", score2: 0, time: "10:00 AM CST" },
        { court: 2, team1: "Lily Oliphant / Cindy Ao", score1: 0, team2: "Fred Tang / Tom", score2: 0, time: "10:30 AM CST" },
        { court: 3, team1: "Nathan Chu / Polly Yin", score1: 0, team2: "Kong Tham / Ben Lee", score2: 0, time: "11:00 AM CST" },
        { court: 4, team1: "Xiaofang Zhang / Guodong Zhang", score1: 0, team2: "Yup / Isaac Chen", score2: 0, time: "11:30 AM CST" },
        { court: 5, team1: "Zhigang Zhou / David Wang", score1: 0, team2: "Mee Ping Lee / Kong Meng Tham", score2: 0, time: "12:00 PM CST" },
      ],
    },
    {
      round: "Round 4",
      matches: [
        { court: 1, team1: "Lihui Chen / Guiping Qi", score1: 0, team2: "Fred Tang / Tom", score2: 0, time: "10:00 AM CST" },
        { court: 2, team1: "Nathan Chu / Polly Yin", score1: 0, team2: "Kong Tham / Ben Lee", score2: 0, time: "10:30 AM CST" },
        { court: 3, team1: "Lily Oliphant / Cindy Ao", score1: 0, team2: "Yup / Isaac Chen", score2: 0, time: "11:00 AM CST" },
        { court: 4, team1: "Peggy Hao / Jenny Sun", score1: 0, team2: "Mee Ping Lee / Kong Meng Tham", score2: 0, time: "11:30 AM CST" },
        { court: 5, team1: "Xiaofang Zhang / Guodong Zhang", score1: 0, team2: "Zhigang Zhou / David Wang", score2: 0, time: "12:00 PM CST" },
      ],
    },
  ];

  const [standings, setStandings] = React.useState<any[]>([]);

  React.useEffect(() => {
    calculateStandings();
  }, [rounds]);

  const calculateStandings = () => {
    const standingsMap: Record<string, any> = {};

    rounds.forEach((round) => {
      round.matches.forEach((match) => {
        const { team1, score1, team2, score2 } = match;

        // Initialize team stats if not already present
        if (!standingsMap[team1]) standingsMap[team1] = { team: team1, w: 0, l: 0, pe: 0, pa: 0, pd: 0 };
        if (!standingsMap[team2]) standingsMap[team2] = { team: team2, w: 0, l: 0, pe: 0, pa: 0, pd: 0 };

        // Update scores and stats
        standingsMap[team1].pe += score1;
        standingsMap[team1].pa += score2;
        standingsMap[team1].pd += score1 - score2;

        standingsMap[team2].pe += score2;
        standingsMap[team2].pa += score1;
        standingsMap[team2].pd += score2 - score1;

        // Update wins and losses
        if (score1 > score2) {
          standingsMap[team1].w += 1;
          standingsMap[team2].l += 1;
        } else if (score2 > score1) {
          standingsMap[team2].w += 1;
          standingsMap[team1].l += 1;
        }
      });
    });

    // Convert the standings map to a sorted array
    const standingsArray = Object.values(standingsMap).sort((a, b) => b.w - a.w || b.pd - a.pd);
    setStandings(standingsArray);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 flex flex-col items-center">
      {/* Standings */}
      <section className="w-full max-w-7xl bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-bold text-gray-900 p-4 border-b">Standings</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-white border-t-2 border-b-2 border-gray-300">
              <th className="px-4 py-2 text-left text-black font-bold">Teams</th>
              <th className="px-4 py-2 text-center text-black font-bold">W</th>
              <th className="px-4 py-2 text-center text-black font-bold">L</th>
              <th className="px-4 py-2 text-center text-black font-bold">PE</th>
              <th className="px-4 py-2 text-center text-black font-bold">PA</th>
              <th className="px-4 py-2 text-center text-black font-bold">PD</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr
                key={index}
                className={`border-t ${
                  index === 0
                    ? "bg-yellow-200"
                    : index === 1
                    ? "bg-gray-300"
                    : "bg-white"
                }`}
              >
                <td className="px-4 py-2 text-gray-800">{team.team}</td>
                <td className="px-4 py-2 text-center text-gray-900">{team.w}</td>
                <td className="px-4 py-2 text-center text-gray-900">{team.l}</td>
                <td className="px-4 py-2 text-center text-gray-900">{team.pe}</td>
                <td className="px-4 py-2 text-center text-gray-900">{team.pa}</td>
                <td className="px-4 py-2 text-center text-gray-900">{team.pd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Rounds */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rounds.map((round, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{round.round}</h3>
            {round.matches.map((match, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded-md p-4 mb-4 bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p
                      className={`$${
                        match.score1 > match.score2
                          ? "font-bold text-gray-800"
                          : match.score1 === 0
                          ? "font-normal text-black"
                          : "font-normal text-gray-500"
                      }`}
                    >
                      {match.team1}
                    </p>
                    <p
                      className={`$${
                        match.score2 > match.score1
                        ? "font-bold text-gray-800"
                        : match.score2 === 0
                        ? "font-normal text-black"
                        : "font-normal text-gray-500"
                    }`}
                  >
                    {match.team2}
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className={`font-bold ${
                      match.score1 > match.score2
                        ? "text-green-700"
                        : match.score1 === 0
                        ? "text-black"
                        : "text-red-700"
                    }`}
                  >
                    {match.score1}
                  </p>
                  <p
                    className={`font-bold ${
                      match.score2 > match.score1
                        ? "text-green-700"
                        : match.score2 === 0
                        ? "text-black"
                        : "text-red-700"
                    }`}
                  >
                    {match.score2}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{match.time}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
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


