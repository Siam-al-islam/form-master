import { useEffect, useRef, useState } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('')

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if (passwordRef.current.value.length < 5) {
            setError("password must be 5 character or longer");
        }
        else {
            setError("");
            console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default RefForm;