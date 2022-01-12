import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import {useState} from "react";

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (e) => {
        e.preventDefault();
        console.log(enteredUsername, enteredAge);
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if(+enteredAge < 1) {
            return
        }
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
  )
}
export default AddUser;
