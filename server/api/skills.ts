
export default defineEventHandler((event) => {
    const skills = [
        { img: '/dark/assets/imgs/resume/s1.png', percentage: '95%', title: 'UI / UX Design' },
        { img: '/dark/assets/imgs/resume/s2.png', percentage: '90%', title: 'Development' },
        { img: '/dark/assets/imgs/resume/s3.png', percentage: '85%', title: 'Graphic Design' },
        { img: '/dark/assets/imgs/resume/s5.png', percentage: '84%', title: 'Sketch' },
        { img: '/dark/assets/imgs/resume/s4.png', percentage: '78%', title: 'WordPress' },
        { img: '/dark/assets/imgs/resume/s6.png', percentage: '85%', title: 'Graphic Design' },
    ] 
    return skills;
})