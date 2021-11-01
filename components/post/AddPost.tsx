import {FC} from "react"
import Post from "@/components/post/index";
import {dataText} from "../../textData";



const AddPost: FC = () => {

    return (

        <>
            {dataText.map(item => (
                <Post key={item.id} id={item.id} title={item.title} image={item.image} text={item.text}/>
            ))}
        </>
    )
}
export default AddPost