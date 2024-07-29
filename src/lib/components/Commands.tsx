import CommandButton from "@lib/ui/CommandButton";
import type { Editor } from "@tiptap/react";
import type { ReactNode } from "react";

export type CommandLayout = {
  content?: ReactNode;
  command?: () => void;
};

export type CommandsProps = {
  editor: Editor | null;
};

const Commands = ({ editor }: CommandsProps) => {
  if (!editor) {
    return null;
  }

  const commandLayout: CommandLayout[] = [
    {
      content: <span>H1</span>,
      command: () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      },
    },
    {
      content: <span>H2</span>,
      command: () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
    },
    {
      content: <span>H3</span>,
      command: () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      },
    },
    {
      content: <span>B</span>,
    },
    {
      content: <span>U</span>,
    },
    {
      content: <span>S</span>,
    },
    {
      content: <span>Sp</span>,
    },
    {
      content: <span>Hr</span>,
    },
    {
      content: <span>URL</span>,
    },
    {
      content: <span>List</span>,
    },
    {
      content: <span>Quote</span>,
    },
    {
      content: <span>code</span>,
    },
    {
      content: <span>Table</span>,
    },
  ];

  return (
    <div>
      {commandLayout.map((item, index) => {
        return (
          <CommandButton
            key={index}
            className="mx-2"
            onClick={() => item.command && item.command()}
          >
            {item.content}
          </CommandButton>
        );
      })}
    </div>
  );
};

export default Commands;
