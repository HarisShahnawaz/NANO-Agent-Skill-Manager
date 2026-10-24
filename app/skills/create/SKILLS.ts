export type Skill = {
    id: string;
    name: string;
    description: string;
    category: string;
    createdAt: string;
    updatedAt: string;

}

export let SKILLS: Skill[] = [
    {
        id: '1',
        name: 'Web Search 1',
        description: 'Search the web for information 1',
        category: 'Web',
        createdAt: '2022-01-01',
        updatedAt: '2022-01-01'
    },
    {
        id: '2',
        name: 'Web Search 2',
        description: 'Search the web for information 2',
        category: 'Web',
        createdAt: '2022-01-01',
        updatedAt: '2022-01-01'
    },
];


export async function getSkills() {
    return [...SKILLS]
}

export function addSkill(skill: Skill) {
    SKILLS = [...SKILLS, skill];
    console.log('skills updated', SKILLS);

}
