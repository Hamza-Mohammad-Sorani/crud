import { Fragment, useRef, useState } from "react";

import style from "./Form.module.css";
import FormControl from "./Form/FormControler/FormControl";

import LoadingSpinner from "./UI/LoadingSpinner";

const Form = ({ editMode = false }) => {
    const initialUserData = {
        name: "",
        email: "",
        mobile: "",
    };

    const errorMessages = {
        name: "Username can not be less than 3",
        email: "Enter a valid email!",
        mobile: "mobile can not be less than 7 OR greater than 15",
    };

    const initialErrors = {
        name: true,
        email: true,
        mobile: true,
    };

    const initialVisited = {
        name: false,
        email: false,
        mobile: false,
    };

    const [userData, setUserData] = useState(initialUserData);
    const [errors, setErrors] = useState(initialErrors);
    const [visited, setVisited] = useState(initialVisited);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const changeHandler = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.name)
        validate();
    };

    const blurHandler = (event) => {
        setVisited({
            ...visited,
            [event.target.name]: true,
        });
    };

    const validate = () => {
        const nameIsValid = userData.name.trim().length >= 3;
        const emailIsValid = userData.email.includes("@");
        const mobileIsValid =
            userData.mobile.trim().length > 7 && userData.mobile.trim().length < 15;
        setErrors({
            name: !nameIsValid,
            email: !emailIsValid,
            mobile: !mobileIsValid,
        });
        setIsError(mobileIsValid || emailIsValid || nameIsValid);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        validate();
        setVisited({
            name: true,
            email: true,
            mobile: true,
        })
        if (!isError) {
            editMode ? editUser() : createUser();
        }
    };

    const editUser = () => {
        // axios
    };

    const createUser = () => {
        // axios
    };

    return ( <div className = { style.main } >
        <div className = { style.image } >
        <img src = "../photo.webp" />
      </div>
      <form className = { style.form }
        onSubmit = { submitHandler } >
        <h2 > Create User </h2>
          <    FormControl name = "name"
        label = "User Name:"
        error = { errors.name && visited.name ? errorMessages.name : null }
        type = "text"
        placeholder = "User Name"
        value = { userData.name }
        onChange = { changeHandler }
        onBlur = { blurHandler }
        /> < FormControl name = "email"
        label = "Email Address:"
        error = { errors.email && visited.email ? errorMessages.email : null }
        type = "email"
        placeholder = "Email Address"
        value = { userData.email }
        onChange = { changeHandler }
        onBlur = { blurHandler }
        /> <FormControl name = "mobile"
        label = "Mobile Phone:"
        error = { errors.mobile && visited.mobile ? errorMessages.mobile : null }
        type = "number"
        placeholder = "Mobile Phone"
        value = { userData.mobile }
        onChange = { changeHandler }
        onBlur = { blurHandler }
        /> <button type="submit" > Save </button>
      </form> { isLoading && < LoadingSpinner /> }
      </div>
    );
};

export default Form;