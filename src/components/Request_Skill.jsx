function RequestSkill({ skill }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send skill request to backend (blockchain)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Message to Skill Owner:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type="submit">Request Skill</button>
        </form>
    );
}

export default RequestSkill;
