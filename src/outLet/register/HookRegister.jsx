import { useForm } from "react-hook-form";
// import Register from "./Register";
import logo from '../../assets/images/login/login.svg'

const HookRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="flex justify-between px-6">

            <div className="invisible lg:visible w-1/2">
                <img src={logo} alt="" />

            </div>

            <div className="w-1/2">
                <form className=" text-center shadow-2xl bg-cyan-600" onSubmit={handleSubmit(onSubmit)}>

                    <h1 className="text-4xl text-center font-bold">Register Now!</h1>
                    <div>
                        <input className="mt-2 px-3 py-1 rounded" placeholder="Name" {...register("example")} />
                    </div>

                    <div>
                        <input className="mt-2 px-3 py-1 rounded" placeholder="Email" {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}

                    </div>
                    <input className="btn btn-primary" type="submit" />

                    {/* <Register></Register> */}
                </form>
            </div>
        </div>
    );
};

export default HookRegister;