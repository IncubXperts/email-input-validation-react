import React, { useState } from 'react'

function EmailValidator() {
    const [email, setEmail] = useState('');

    const handleOnChange = (e) => {
        setEmail(e.target.value);
        //regular expression to check for valid email address.
        let regex = /^([a-z0-9._+-])+([._+-]{0,})+([a-z0-9._+-]{0,})+@[a-z0-9]+([a-z]{0,})+\.[a-z0-9]{1,}$/
        //"test" is a predefined function to test the entered text with the given regular expression.
        const result = regex.test(e.target.value);
        if (result === false) {
            document.getElementById('error-msg').innerHTML = "Please enter a valid email id";
            document.getElementById('error-msg').style = "color:red";

        }
        else {
            document.getElementById('error-msg').innerHTML = "Valid email id";
            document.getElementById('error-msg').style = "color:green";
        }

    }

    return (
        <div>
            <form className="row mx-auto shadow col-lg-5 p-3">
                <div className="mx-auto">
                    <label></label>
                    <input type="text" data-testid="email-input" value={email} onChange={handleOnChange} className='form-control' placeholder='Enter your email' />
                    <small id='error-msg' data-testid="error-msg"></small><br />
                </div>
            </form>
        </div>
    )
}

export default EmailValidator