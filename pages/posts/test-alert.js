import Alert from "../../components/alert";

export default function TestAlert() {
    return (
        <>
            <div className="border hover:border-gray-300">I'm
                a alert.
            </div>
            <Alert type="error">
                <h1>I'm a alert.</h1>
            </Alert>
        </>
    )
}
