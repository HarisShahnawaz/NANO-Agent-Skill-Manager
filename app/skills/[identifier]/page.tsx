'use client'

import { useParams } from "next/navigation";
import { Skill, getSkills } from "../create/SKILLS";
import { useState, useEffect } from "react";

export default async function SkillsPage() {
  const params = useParams<{ identifier: string }>()

  const skills = await getSkills()
  const skill = skills.find((skill) => skill.id === params.identifier)

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

