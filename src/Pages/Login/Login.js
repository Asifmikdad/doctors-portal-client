import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user);
    }

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z 0-9] + @[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                              })}
                            
                             />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>

                            </label>
                        </div>

                        <input  />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && <p>Last name is required</p>}

                        <input {...register("mail", { required: "Email Address is required" })} />
                        <p>{errors.mail?.message}</p>

                        <input type="submit" />
                    </form>


                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline btn-accent"
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;