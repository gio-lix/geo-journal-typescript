import EditorJS from '@editorjs/editorjs';
import {useEffect} from "react";

export default function Editor() {
    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: 'please write text'
        });
        return () => {
            editor.isReady.then(() => {
                editor.destroy()
            }).catch(e => console.log('editor clean up', e))
        }
    } ,[])
    return (
        <>
            <div id="editor" />
        </>
    )
}