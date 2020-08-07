import React from 'react';
import { Redirect } from 'react-router-dom';

function StartingPage() {

    const [ error, setError] = React.useState("");
    const [ name, setName ] = React.useState("");
    const [ lastName, setLastName ] = React.useState("");
    const [ isValid, setIsValid ] = React.useState(false);
    const blockStyle = {
        width: "100%",
        display: "block"
    };
    const labelStyle = {
        width: "100%"
    };
    const errorStyle = {
        color: "red"
    };
    let validateInputFields = () => {
        if(name === "" && lastName === ""){
            setError("Please fill name and lastname");
            return false;
        } else if(name === ""){
            setError("Please fill name");
            return false;
        } else if(lastName === "") {
            setError("Please fill lastname");
            return false;
        }
        return true;
    };
    let onClickHandler = () => {
        setIsValid(validateInputFields());
    };
    const redirect = <Redirect to={{
        pathname : "/results",
        state : {
            name : name,
            lastName: lastName
        }
    }} />;
    const formContent = <>
        <div>
            <h2>Start entering your details below</h2>
            { error !== "" ? <h3 style={ errorStyle }>{ error }</h3> : null }
            <div style={ blockStyle }>
                <label value="Please enter your name" htmlFor="name" style={ labelStyle }>Name</label>
                <input type ="text" id="name" onChange={(event) => {setName(event.target.value)}} value={name}></input>
            </div>
            <div style={ blockStyle }>
                <label value="Please enter your last name" htmlFor="lastname" style={ labelStyle }>Last Name</label>
                <input type ="text" id="lastname" onChange={(e) => {setLastName(e.target.value)}} value={lastName}></input>
            </div>
        </div>
        <div>
            <button type="Submit" onClick={onClickHandler}>Go to Next Page</button>
        </div>
    </>;
    
    return isValid ? redirect : formContent;
}

export default StartingPage;