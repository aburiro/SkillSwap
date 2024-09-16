function SkillDetails({ skill }) {
    return (
        <div className="skill-details">
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
            <p>Offered by: {skill.offeredBy}</p>
            <button>Request This Skill</button>
        </div>
    );
}
export default SkillDetails;