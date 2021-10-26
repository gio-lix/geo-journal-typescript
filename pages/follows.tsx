import {FC} from "react"
import Layout from "@/components/Layout";

interface IFollows {

}
const Follows: FC<IFollows> = () => {
  return (
     <Layout title='follows'>
      <div>
          <h1>Follows</h1>
      </div>
     </Layout>
  )
}
export default Follows