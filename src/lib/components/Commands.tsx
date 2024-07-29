import CommandButton from "@lib/ui/CommandButton";
import clsx from "clsx";
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
  if (!editor) return null;

  function getActiveClass(name: string, attributes?: object) {
    if (!editor) return undefined;

    return clsx({ "bg-red-400": editor.isActive(name, attributes) });
  }

  const commandLayout: CommandLayout[] = [
    {
      content: (
        <span className={getActiveClass("heading", { level: 1 })}>H1</span>
      ),
      command: () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      },
    },
    {
      content: (
        <span className={getActiveClass("heading", { level: 2 })}>H2</span>
      ),
      command: () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
    },
    {
      content: (
        <span className={getActiveClass("heading", { level: 3 })}>H3</span>
      ),
      command: () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      },
    },
    {
      content: <span className={getActiveClass("bold")}>B</span>,
      command: () => {
        editor.chain().focus().toggleBold().run();
      },
    },
    {
      content: <span className={getActiveClass("underline")}>U</span>,
      command: () => {
        editor.chain().focus().toggleUnderline().run();
      },
    },
    {
      content: <span className={getActiveClass("strike")}>S</span>,
      command: () => {
        editor.chain().focus().toggleStrike().run();
      },
    },
    {
      content: <span className={getActiveClass("highlight")}>Sp</span>,
      command: () => {
        editor.chain().focus().toggleHighlight({ color: "#000000" }).run();
      },
    },
    {
      content: <span>Hr</span>,
      command: () => {
        editor.chain().focus().setHorizontalRule().run();
      },
    },
    {
      content: <span>URL</span>,
    },
    {
      content: <span>UL</span>,
      command: () => {
        editor.chain().focus().toggleBulletList().run();
      },
    },
    {
      content: <span>OL</span>,
      command: () => {
        editor.chain().focus().toggleOrderedList().run();
      },
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
