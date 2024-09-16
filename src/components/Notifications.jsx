function Notifications({ notifications }) {
    return (
        <div className="notifications">
            {notifications.map((note, index) => (
                <div key={index} className="notification">
                    <p>{note.message}</p>
                </div>
            ))}
        </div>
    );
}
export default Notifications;