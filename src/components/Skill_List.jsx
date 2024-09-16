function SkillList({ skills }) {
    return (
        <div className="skill-list">
            {skills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    );
}
export default SkillList;