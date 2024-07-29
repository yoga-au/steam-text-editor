import { useEditor, EditorContent } from "@tiptap/react";
import Commands from "@lib/components/Commands";
import { extensions } from "./extension";

const Editor = () => {
  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: "border border-gray-400 min-h-20 focus-visible:outline-none",
      },
    },
  });

  return (
    <>
      <Commands editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
