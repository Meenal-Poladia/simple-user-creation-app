import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (e) => {
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if(+enteredAge < 1) {
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

    return (
        <div>
            <ErrorModal title="An error occured" message="Something went wrong"/>
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
