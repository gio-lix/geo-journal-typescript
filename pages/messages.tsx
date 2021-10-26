import {FC} from "react"
import Layout from "@/components/Layout";

interface IMessages {

}
const Messages: FC<IMessages> = () => {
  return (
     <Layout title='Messages'>
      <div>
          <h1>Messages</h1>
      </div>
     </Layout>
  )
}
export default Messages