import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { EditorMenuBar } from './EditorMenuBar'


export const Wins = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<p>Wins are here</>'
    })

    return (
        <div className=''>
            <EditorContent editor={editor} />
            <EditorMenuBar editor={editor} />
        </div>
    )
}