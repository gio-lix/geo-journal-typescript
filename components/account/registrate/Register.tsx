import {FC, useEffect, useState} from "react"
import { useForm,FormProvider , SubmitHandler } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "@/utils/schemas/yupSchemas";
import {UserApi} from "@/utils/api";
import {createUserDto} from "@/utils/api/types";
import {setCookie} from 'nookies'
import {useAppDispatch} from "@/redux/hooks";
import {setUserData} from "@/redux/slices/user";

interface IRegisterForm {
    fullName: string,
    email: string
    password: number
}


interface IRegister {
    setRegister: Function,
    setEmail: Function
}
const Register: FC<IRegister> = ({setRegister,setEmail}) => {
    const dispatch = useAppDispatch()
    const [errorMessage, setErrorMessage] = useState('')
    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = async (dto: createUserDto) => {
            try {
                const  data = await UserApi.register(dto)
                setCookie(null, '_token', data.token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                })
                setErrorMessage('')
                dispatch(setUserData(data))
            } catch (err: any) {
                if (err.response) setErrorMessage(err.response.data.message)
            }
    }

    useEffect(() => {
        const time = setTimeout(() =>  setErrorMessage(''), 1400)
        return () => clearTimeout(time)
    }, [errorMessage]);

    const handleBack = () => {
        setRegister(false)
        setEmail(false)
    }
    const handleRegisterFalse = () => setRegister(false)


  return (
      <div className='flex flex-col items-center h-full justify-center'>
          <button onClick={handleBack} className='mt-8'>
              <div className='flex items-center '>
                  {/*<Image src='/up.svg' width={30} height={30} alt='back' className='transform -rotate-90'/>*/}
                  <p className='mr-3'>Sign up</p>
              </div>
          </button>
          <div className='flex flex-col justify-center'>
              <p className='text-center'>Registration</p>
              <button onClick={handleRegisterFalse}
                      className='text-sm font-semibold text-gray-400  hover:underline'>Login page
              </button>
          </div>
          <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='px-3 sm:px-5 md:px-0 w-full h-full sm:w-4/5'>
                  <div className='flex justify-center pb-7 '>
                      {errorMessage && <p  className='mt-2 absolute text-base  text-red-700'>{errorMessage}</p>}
                  </div>
                  <div className='w-full flex flex-col  mt-10 justify-between'>
                      <p className='w-full mb-2 h-5 '>
                          <span>{form.formState.errors.fullName?.message}</span>
                      </p>
                      <input {...form.register("fullName")} type="text" placeholder='full name'
                                 className='rounded border p-1 border-gray-400 outline-none  w-full'/>
                      <p className='w-full mt-1 h-5  text-xs'>
                          <span>{form.formState.errors.email?.message}</span>
                      </p>
                      <input  {...form.register("email")} type="email" placeholder='email'
                              className='rounded border mt-3 p-1 border-gray-400 outline-none w-full'/>
                      <p className='w-full mt-1 h-5 text-xs'>
                          <span>{form.formState.errors.password?.message}</span>
                      </p>

                      <input {...form.register("password")} type="password" placeholder='password'
                             className='rounded mt-3 border p-1 border-gray-400 outline-none  w-full'/>
                      <button disabled={!form.formState.isValid || form.formState.isSubmitting}
                              type='submit' className='p-1 mt-3 px-2 rounded bg-blue-300 hover:bg-blue-500'>
                          <span className='font-bold text-white p-1'>Registration</span>
                      </button>
                  </div>
              </form>
          </FormProvider>
      </div>
  )
}
export default Register