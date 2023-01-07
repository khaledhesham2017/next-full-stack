import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = props =>{
    const [enteredUserName,setEnteredUserName]  = useState('');
    const [enteredAge,setEnteredAge]  = useState('');
    const [error,setError] = useState('')
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length=== 0 || enteredUserName.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please  enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please  enter a valid age(>0).'
            });
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredAge('');
        setEnteredUserName('');

    }

    const userNameChangeHandler = (event) => {
          setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = (props)=>{
        setError(null);
    }
    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
                <label htmlFor="userName" > Username</label>
                <input  id="userName" type="text"  value={enteredUserName} onChange={userNameChangeHandler}/>
                <label htmlFor="age"> Age (Years)</label>
                <input  id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
               <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
};
export  default  AddUser;