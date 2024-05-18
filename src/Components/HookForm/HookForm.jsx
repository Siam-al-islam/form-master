import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    const nameState = useInputState('siam')

    const handleSubmit = e => {
        console.log('form data ', nameState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;