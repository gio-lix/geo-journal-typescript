import {FC, useState} from "react"
import { useForm,FormProvider , SubmitHandler } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "@/utils/schemas/loginValidation";

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
    const [errorMessage, setErrorMessage] = useState('')
    const form = useForm({
        mode: "onChange",
        resolver: yupResolver(RegisterFormSchema)
    })
    const onSubmit = (data: IRegisterForm) => console.log(data);


    const handleBack = () => {
        setRegister(false)
        setEmail(false)
    }
    const handleRegisterFalse = () => setRegister(false)


  return (
      <>
          <button onClick={handleBack}>
              <div className='flex items-center '>
                  {/*<Image src='/up.svg' width={30} height={30} alt='back' className='transform -rotate-90'/>*/}
                  <p className='mr-3'>Sign up</p>
              </div>
          </button>
          <div>
              <div>Registration</div>
              <button onClick={handleRegisterFalse}
                      className='text-sm font-semibold text-gray-400  hover:underline'>Login page
              </button>
          </div>
          <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className='w-full flex flex-col  mt-10 justify-between'>
                      <p className='w-full mb-2 h-5 '>
                          <p>{form.formState.errors.fullName?.message}</p>
                      </p>
                      <input     {...form.register("fullName")} type="text" placeholder='full name'
                                 className='rounded border p-1 border-gray-400 outline-none  w-full'/>
                      <p className='w-full mt-1 h-5 '>
                          <p>{form.formState.errors.email?.message}</p>
                      </p>
                      <input  {...form.register("email")} type="email" placeholder='email'
                              className='rounded border mt-3 p-1 border-gray-400 outline-none w-full'/>
                      <p className='w-full mt-1 h-5 '>
                          <p>{form.formState.errors.password?.message}</p>
                      </p>
                      {/*<div>*/}
                      {/*    {errorMessage && <Alert severity="error" className='mt-2'>{errorMessage}</Alert>}*/}
                      {/*</div>*/}
                      <input {...form.register("password")} type="password" placeholder='password'
                             className='rounded mt-3 border p-1 border-gray-400 outline-none  w-full'/>
                      <button disabled={!form.formState.isValid || form.formState.isSubmitting}
                              type='submit' className='p-1 mt-3 px-2 rounded bg-blue-300 hover:bg-blue-500'>
                          <p className='font-bold text-white p-1'>Registration</p>
                      </button>
                  </div>
              </form>
          </FormProvider>
      </>
  )
}
export default Register