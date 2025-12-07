import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Our Team - Digital Agency',
  description: 'Meet the talented team behind our digital agency. Experienced professionals dedicated to delivering exceptional results.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="section-title">Meet Our Team</h1>
          <p className="section-subtitle">
            Talented professionals passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}