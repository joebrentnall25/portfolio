import "./Skills.scss";
import {skills} from "../../Assets/Data/data";


const Skills = () => {
    
    const populateSkillsGrid = () => {
        return skills.map(skill => (
            <div className="skills__grid-item">
                {skill.name}
            </div>
        ))
    }

    return (
        <section className="skills">
            <h3 className="skills__header">My Skills.</h3>
            <div className="skills__grid">
                {populateSkillsGrid()}
            </div>
        </section>
    )

}

export default Skills;