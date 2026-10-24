import Link from "next/link"
import { SKILLS, getSkills } from "./create/SKILLS"


export default async function SkillsPage() {
  const skills = await getSkills()
  return <section>
    <h1>Skills</h1>
    <Link href="/skills/create">Create Skill</Link>
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
        </li>
      ))}
    </ul>
  </section>
}