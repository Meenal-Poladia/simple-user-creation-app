import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter valid name and age(non-empty values)."
            })
            return
        }
        if(+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (Age > 0)"
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            { error &&
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

  )
}
export default AddUser;
