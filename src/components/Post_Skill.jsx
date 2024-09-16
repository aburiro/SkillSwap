function PostSkill() {
    const [skillName, setSkillName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle posting skill to backend (blockchain)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Skill Name:</label>
            <input type="text" value={skillName} onChange={(e) => setSkillName(e.target.value)} />

            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

            <button type="submit">Post Skill</button>
        </form>
    );
}
export default PostSkill;