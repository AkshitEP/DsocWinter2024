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
  const sortedParticipants = [...participants].sort((a, b) => b.points - a.points)

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl p-2 sm:p-0">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-4 sm:px-6">
        {title}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-3 px-2 sm:px-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Rank</th>
              <th className="py-3 px-2 sm:px-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Name</th>
              <th className="py-3 px-2 sm:px-4 text-left text-xs font-medium text-blue-800 uppercase tracking-wider hidden sm:table-cell">Categories</th>
              <th className="py-3 px-2 sm:px-4 text-right text-xs font-medium text-blue-800 uppercase tracking-wider">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-100">
            {sortedParticipants.map((participant, index) => (
              <tr key={participant.id} className="hover:bg-blue-50 transition-colors duration-200">
                <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap text-sm">{index + 1}</td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap text-sm">
                  <div>{participant.name}</div>
                  <div className="sm:hidden mt-1">
                    <div className="flex flex-wrap gap-1">
                      {participant.categories.map((category, catIndex) => (
                        <span key={catIndex} className="px-1.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap text-sm hidden sm:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {participant.categories.map((category, catIndex) => (
                      <span key={catIndex} className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {category}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-4 whitespace-nowrap text-sm text-right font-medium text-blue-600">{participant.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard

