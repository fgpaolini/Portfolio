
export default defineEventHandler((event) => {
    const skills = [
        { icon: 'skill-icons:dotnet', percentage: '80%', title: '.NET' },
        { icon: 'devicon:vuejs', percentage: '90%', title: 'Vue' },
        { icon: 'devicon:nuxt', percentage: '85%', title: 'Nuxt' },
        { icon: 'devicon:typescript', percentage: '84%', title: 'Typescript' },
        { icon: 'devicon:javascript', percentage: '78%', title: 'JavaScript' },
        { icon: 'devicon:java', percentage: '85%', title: 'Java' },
    ] 
    return skills;
})