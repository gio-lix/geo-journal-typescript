import type {NextPage} from 'next'
import Layout from "@/components/Layout";
import AddPost from "@/components/post/AddPost";


const Home: NextPage = () => {
    return (
        <Layout title='geoJournal '>
            <div className='flex flex-col items-center  w-full '>
                <AddPost />
            </div>
        </Layout>
    )
}

export default Home
