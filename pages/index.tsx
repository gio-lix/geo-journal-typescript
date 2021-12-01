import type {GetServerSideProps, NextPage} from 'next'
import Layout from "@/components/Layout";
import AddPost from "@/components/post/AddPost";
import {wrapper} from "@/redux/store";
import {parseCookies} from "nookies";
import {UserApi} from "@/utils/api";
import {setUserData} from "@/redux/slices/user";
import {useAppSelector} from "@/redux/hooks";


const Home: NextPage = () => {
    const data = useAppSelector(state => state.user)
    console.log(data)
    return (
        <Layout title='geoJournal '>
            <div className='flex flex-col items-center  w-full h-auto '>
                <AddPost />
            </div>
        </Layout>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    try {
        const { _token} = parseCookies(ctx)
        const data = await UserApi.getMe(_token)
        store.dispatch(setUserData(data))
        return {props: {}}
    } catch (err) {
        console.log(err)
        return {props: {}}
    }

})