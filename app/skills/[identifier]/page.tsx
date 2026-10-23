'use client'
import { SKILLS } from "../create/SKILLS";
import { useParams } from "next/navigation";
import { Skill } from "../create/SKILLS";
import { useState, useEffect } from "react";

export default function SkillsPage() {
  const params = useParams<{ identifier: string }>()
  const [skills, setSkills] = useState(SKILLS)
  const [skill, setSkill] = useState<Skill | null>(null)

  useEffect(() => {
    const skill = skills.find((skill) => skill.id === params.identifier)
    if (skill) {
      setSkill(skill)
    }
  }, [params.identifier])

  console.log('skills Detail page. SKills found', skill);

  return skill ? (
    <article>
      <h1>{skill?.name}</h1>
      <p>{skill?.description}</p>
      <p> {skill?.category}</p>
      <p> {skill?.createdAt}</p>
      <p> {skill?.updatedAt}</p>
    </article>) : (
    <div>Not found</div>
  );
}

