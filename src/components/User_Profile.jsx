function UserProfile({ user }) {
    return (
        <div className="user-profile">
            <h2>{user.name}</h2>
            <h3>Skills Offered:</h3>
            <SkillList skills={user.skillsOffered} />
            <h3>Skills Requested:</h3>
            <SkillList skills={user.skillsRequested} />
        </div>
    );
}
export default UserProfile;