import { cn } from "@/lib/utils";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

type EditorProps = {
    content: string;
    onChange?: (content: string) => void;
    className?: string;
}

export function Editor({ content, onChange, className }: EditorProps) {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc pl-4',
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal pl-4',
                    },
                },
            }),
            Document,
            Paragraph,
            Text,
          
        ],
        content: '<p>Hello World! 🌎️</p>',
      })
    return (
        <div className={cn("w-full h-full", className)} >
           <EditorContent editor={editor} />
        </div>
    )
}
