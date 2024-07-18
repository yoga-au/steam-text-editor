import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import CommandButton from "@lib/ui/CommandButton";
import { commandLayout } from "@lib/editor/layout";

const extensions = [
  StarterKit,
  Underline,
  Highlight,
  Link,
  Table,
  TableCell,
  TableHeader,
  TableRow,
];

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
      <div>
        {commandLayout.map((item, index) => {
          return (
            <CommandButton key={index} className="mx-2">
              {item.content}
            </CommandButton>
          );
        })}
      </div>

      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
