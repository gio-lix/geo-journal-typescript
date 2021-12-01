import {FC} from "react"
import Post from "@/components/post/index";


import mailbox from "../../public/mailbox.jpg";
import bridge from "../../public/bridge.webp";

 const dataText = [
    {
        id: 1,
        title: 'title for real',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolore error explicabo harum maiores non quam! Commodi corporis distinctio eum eveniet exercitationem, fugit ipsa laboriosam non quisquam quo quos unde',
        image: mailbox
    },
    {
        id: 2,
        title: 'no way',
        text: ' hiuwvue efewufh ewfef',
        image: bridge
    },
    {
        id: 3,
        title: 'no dfdsfd',
        text: ' jhiuhiu ubuihiu loji oijijoi  ui jbh h hu u h h jbh',
        image: bridge
    }
]

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