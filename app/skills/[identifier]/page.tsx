import { getSkills } from "../create/SKILLS";

export default async function SkillsPage({ params }: {
  params: { identifier: string }
}) {

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
    <div>Skill Not found</div>
  );
}
//skill management