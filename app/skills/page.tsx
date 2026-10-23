import Link from "next/link"
import { SKILLS } from "./create/SKILLS"


export default function SkillsPage() {
  const skills = SKILLS
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