import Button from "../Button/Button"
import logincardclass from "./LoginCard.styles"

const LoginCard = (props) => {
    return (
        <div class={logincardclass}>
            <div class="row-span-2 justify gap-5">
                <input class="border-4 border-gray-300 rounded-lg text-gray-300" type="text" defaultValue="Email"/>
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    )
}

export default LoginCard