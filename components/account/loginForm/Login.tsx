import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/router";
import Register from "@/components/account/registrate/Register";


import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema} from "@/utils/schemas/yupSchemas";

interface IFormInputs {
    email: string
    password: number
}


export default function Login() {
    const [errorMessage, setErrorMessage] = useState('')

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginSchema)
    })

    const onSubmit = (data: IFormInputs) => console.log(data);
    // const onSubmit = async (loginData) => {
    //     try {
    //         const data = await USerApi.loginForm(loginData)
    //         setCookie(null, 'authToken', data.token, {
    //             maxAge: 30 * 24 * 60 * 60,
    //             path: '/',
    //         })
    //         setErrorMessage('')
    //     } catch (err) {
    //         if (err.response) {
    //             setErrorMessage(err.response.data.message)
    //         }
    //     }
    //
    // }




    const router = useRouter()
    const [email, setEmail] = useState(false)
    const [register, setRegister] = useState(false)

    const handleEmail = () => setEmail(!email)
    const handleRegister = () => setRegister(!register)

    return (
        <>
            <div className='flex  h-full'>
                <div className=' hidden md:inline-flex w-72 '>
                    <div className=' relative w-52 sm:w-72  h-full' >
                        <Image src='/userLogin.png' layout='fill' className='absolute' />
                    </div>
                </div>

                <div className=' flex-1 h-full  px-1'>
                    {!email ? (
                        <div>
                            <h1 className='p-3 '>Login</h1>
                            <div className='cursor-pointer w-full h-10 mt-28 relative flex justify-center items-center rounded border-2  border-gray-500'>
                                <p className='absolute left-2 flex items-center'>
                                    <Image src='/google.svg' width={20} height={20} alt='google' />
                                </p>
                                <div className=''>
                                    <p className='ml-auto'>Google</p>
                                </div>
                            </div>
                            <div className='cursor-pointer w-full h-10 mt-6 relative flex justify-center items-center rounded border-2  border-gray-500'>
                                <p className='absolute left-2 flex items-center'>
                                    <Image src='/faceBook.svg' width={20} height={20} alt='facebook' />
                                </p>
                                <div className=''>
                                    <p className='ml-auto'>Facebook</p>
                                </div>
                            </div>
                            <div onClick={handleEmail}
                                 className='cursor-pointer w-full h-10 mt-6 relative flex justify-center items-center rounded border-2  border-gray-500'>
                                <p className='absolute left-2 flex items-center'>
                                    <Image src='/mail.svg' width={20} height={20} alt='mail' />
                                </p>
                                <div className=''>
                                    <p className='ml-auto'>E-mail</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='h-full w-full  '>
                            {!register ? (
                                <div className='  flex flex-col  justify-evenly items-center w-full h-full'>
                                    <button onClick={() => setEmail(false)}>
                                        <div className='flex items-center'>
                                            <Image src='/up.svg' width={30} height={30} alt='back' className='transform -rotate-90'/>
                                            <p  className='mr-3'>Sign up</p>
                                        </div>
                                    </button>
                                    <div className='mt-20 w-full  flex flex-col items-center'>
                                        <p className='font-semibold'>Login through email</p>

                                        <p>or <span onClick={handleRegister} className='cursor-pointer ml-2 text-green-400'>Registration</span></p>
                                    </div>
                                    {/*alert*/}

                                    <form onSubmit={form.handleSubmit(onSubmit)} className='px-3 sm:px-5 md:px-0 w-full sm:w-4/5'>
                                        <div  className='w-full   flex flex-col  mt-2 justify-between'>
                                            <p className='w-full mt-1 h-6 text-xs text-gray-700'>
                                                <p>{form.formState.errors.email?.message}</p>
                                            </p>

                                            {/*form*/}
                                            <input {...form.register("email")} name='email' type="text" placeholder='email'
                                                   className='rounded border p-1  border-gray-400 outline-none w-full'
                                            />
                                            <p className='w-full mt-1 h-6 text-xs text-gray-700'>
                                                {form.formState.errors.password?.message}
                                            </p>
                                            <input {...form.register("password")} name='password' type="text"
                                                   placeholder='password' className='rounded  border-gray-400 border p-1 outline-none w-full'
                                            />
                                        </div>
                                        {/*<div>*/}
                                        {/*    {errorMessage && <Alert severity="error" className='mt-2'>{errorMessage}</Alert>}*/}
                                        {/*</div>*/}
                                        <div className='w-full h-10 mt-4 flex items-center justify-between'>
                                            <button disabled={!form.formState.isValid || form.formState.isSubmitting} type='submit'
                                                    className='p-1 px-2 rounded bg-blue-300 hover:bg-blue-500'>
                                                <p className='font-bold text-white'>enter</p>
                                            </button>
                                            <button className='text-gray-500 hover:text-red-600'>forget password ?</button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <Register setRegister={setRegister}  setEmail={setEmail}/>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}