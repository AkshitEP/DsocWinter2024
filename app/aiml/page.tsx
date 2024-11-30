import Navigation from '../components/Navigation'
import Leaderboard from '../components/Leaderboard'

const allParticipants = [
  { id: 1, name: "Alice Johnson", points: 120, categories: ["AppDev", "Frontend"] },
  { id: 2, name: "Bob Smith", points: 115, categories: ["Backend", "AI/ML"] },
  { id: 3, name: "Charlie Brown", points: 110, categories: ["Frontend", "AppDev"] },
  { id: 4, name: "David Lee", points: 105, categories: ["AI/ML", "Backend"] },
  { id: 5, name: "Eva Martinez", points: 100, categories: ["AppDev", "Backend"] },
  { id: 6, name: "Frank Wilson", points: 95, categories: ["Backend", "Frontend"] },
  { id: 7, name: "Grace Taylor", points: 90, categories: ["Frontend", "AI/ML"] },
  { id: 8, name: "Henry Davis", points: 85, categories: ["AI/ML", "AppDev"] },
  { id: 9, name: "Ivy Chen", points: 80, categories: ["AppDev", "Backend", "Frontend"] },
  { id: 10, name: "Jack Brown", points: 75, categories: ["Backend", "AI/ML"] }
]

export default function AIML() {
  const aimlParticipants = allParticipants.filter(participant => 
    participant.categories.includes("AI/ML")
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <main className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-6 sm:mb-8">AI/ML Leaderboard</h1>
          <div className="bg-white p-2 sm:p-6 rounded-3xl shadow-lg">
            <Leaderboard title="AI/ML Leaderboard" participants={aimlParticipants} />
          </div>
        </div>
      </main>
    </div>
  )
}

