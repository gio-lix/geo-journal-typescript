import {FC} from "react"
import Layout from "@/components/Layout";
import MessagePage from "@/components/pages/messagePage/MassagePage";


interface IMessages {

}

const Messages: FC<IMessages> = () => {
    return (
        <Layout title='Messages' hideSideComments hideSideMenu>
           <MessagePage />
        </Layout>
    )
}
export default Messages