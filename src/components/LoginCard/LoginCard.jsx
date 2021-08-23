import Button from "../Button/Button"
import logincardclass from "./LoginCard.styles"
import { useState } from "react";

const LoginCard = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length>0 && password.length>0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <div class={logincardclass}>
            <form onSubmit={handleSubmit}>
                <div class="row-span-2 justify gap-5">
                    <input class="border-4 border-gray-300 rounded-lg text-gray-300" type="text" defaultValue="Email"/>
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
                </div>
                <Button onclick={validateForm}></Button>
            </form>
        </div> 
        
    )
}
export default LoginCard