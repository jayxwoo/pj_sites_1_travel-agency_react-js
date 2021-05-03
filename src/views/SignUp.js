import { useEffect } from "react";

const SignUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
        </div>
    );
}

export default SignUp;