import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location =useLocation()
    const navigate = useNavigate()
    const [loginError,setLoginError]=useState('')

    const handleLoginUser = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        console.log(form)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        setLoginError('')

        signIn(email, password)
            .then(result => {
                console.log(result)
                navigate(location?.state? location.state:"/")

            })

            .catch(error => {
                console.log(error)
                setLoginError('password is not correct')
            })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLoginUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p>New User? <Link to="/register" className="text-blue-600 font-bold text-xl my-4">Register</Link></p>
                        </div>

                        {
                            loginError && <p className="text-red-700 font-bold text-3xl"> {loginError}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;