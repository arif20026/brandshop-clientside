import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError,setRegisterError] = useState('')
    const[success,setSuccess] =useState(false)

    const handleCreateUser = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form)
        const name = form.get('name')
        const photoURL = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photoURL, email, password)

        setRegisterError('')
        setSuccess('')

        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)) {
            setRegisterError('Password should be at least 6 characters and  contain a capital letter and a special character ! ')
            return
        }

        createUser(email, password, name, photoURL)
            .then(result => {
                console.log(result.error)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleCreateUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p>Already have an Account ? Please <Link to="/login" className="text-blue-600 font-bold text-xl my-4">Login</Link></p>
                        </div>
                        {
                            registerError && <p className="text-red-500  font-bold text-3xl">{registerError}</p>
                        }

                        {
                            success && <p className="text-green-800 font-bold text-3xl">Congratulation! User Created</p>
                        }

                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;