import {FC} from "react"
import mailbox from '/public/mailbox.jpg'
import cat from '/public/cat.jpg'
import bridge from '/public/bridge.webp'
import Post from "@/components/post/index";

const dataText = [
    {
        id: 1,
        title: 'title for real',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolore error explicabo harum maiores non quam! Commodi corporis distinctio eum eveniet exercitationem, fugit ipsa laboriosam non quisquam quo quos unde',
        image: mailbox
    },
    {id: 2, title: 'no way', text: ' hiuwvue efewufh ewfef', image: bridge}
]

const AddPost: FC = () => {

    return (

        <>
            {dataText.map(item => (
                <Post key={item.id} title={item.title} image={item.image} text={item.text}/>
            ))}
        </>
    )
}
export default AddPost