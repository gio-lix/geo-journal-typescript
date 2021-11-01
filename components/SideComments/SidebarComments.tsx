import {FC} from "react"
import Image from "next/image";

// @ts-ignore
import data from '/data'
import {motion} from "framer-motion";
// @ts-ignore
import {fadeInUp, leftInUp, routeAnimation, stagger} from "/animation";
import {useRouter} from "next/router";


const SideComments: FC = () => {
    const router = useRouter()
    const commentsData = data.comments.popular

    return (
        <motion.div variants={routeAnimation} initial="initial"
                    animate="animate"
                    exit="exit">
            <motion.div variants={stagger} initial="initial" animate='animate'>
                <div>
                    {commentsData.map((obj: any) => (
                        <motion.div variants={fadeInUp} key={obj.id} className='my-4 '>
                            <div className='flex flex-col group'>
                                <div onClick={() => router.push(`/profile/${obj.user.id}`)}
                                     className='flex space-x-2 cursor-pointer'>
                                    <Image src={obj.user.avatarUrl} width={25} height={25} className='rounded'
                                           alt='image'/>
                                    <p className='text-xs font-semibold font-poppins'>{obj.user.fullName}</p>
                                </div>
                                <div>
                                    <p className='text-xs text-gray-600'>{obj.text}</p>
                                </div>
                                <div>
                                    <p onClick={() => router.push(`/news/${obj.user.id}`)}
                                       className='text-xs font-semibold text-gray-800 cursor-pointer group-hover:underline '>{obj.post.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}
export default SideComments