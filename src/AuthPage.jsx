import axios from 'axios';

const AuthPage = (props) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        try {
            const r = await axios.put(
                "https://api.chatengine.io/users/",
                { username: value, secret: value, firstname: value },
                { headers: { "PRIVATE-KEY": "0acaec97-998e-4d4f-a87f-4d6b8894e6d1"} }
            );
            props.onAuth({ ...r.data, secret: value });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="background">
        <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Welcome 👋</div>

            <div className="form-subtitle">Set a username to get started</div>

            <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
                Enter
            </button>
            </div>
        </form>
        </div>
    );
};

export default AuthPage;