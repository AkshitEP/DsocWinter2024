import React from 'react'

interface Participant {
  id: number
  name: string
  points: number
  categories: string[]
}

interface LeaderboardProps {
  title: string
  participants: Participant[]
}

const Leaderboard: React.FC<LeaderboardProps> = ({ title, participants }) => {
  const sortedParticipants = participants ? [...participants].sort((a, b) => b.points - a.points) : []

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xl font-bold py-4 px-6">
        {title}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-3 px-6 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Rank</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Categories</th>
              <th className="py-3 px-6 text-right text-xs font-medium text-blue-800 uppercase tracking-wider">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-100">
            {sortedParticipants.map((participant, index) => (
              <tr key={participant.id} className="hover:bg-blue-50 transition-colors duration-200">
                <td className="py-4 px-6 whitespace-nowrap">{index + 1}</td>
                <td className="py-4 px-6 whitespace-nowrap">{participant.name}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {participant.categories.map((category, catIndex) => (
                      <span key={catIndex} className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {category}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-right font-medium text-blue-600">{participant.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard

