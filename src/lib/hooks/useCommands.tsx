import { useCurrentEditor } from "@tiptap/react";
import type { Level } from "@tiptap/extension-heading";

export type CommandList = {
  heading: (level: Level) => void;
  bold: () => void;
  strike: () => void;
};

const useCommands = () => {
  const { editor } = useCurrentEditor();

  const runCommand = (key: keyof CommandList) => {
    if (!editor) {
      return null;
    }

    const _commandList: CommandList = {
      heading: (level: Level) => {
        editor.chain().focus().toggleHeading({ level }).run();
      },
      bold: () => {
        editor.chain().focus().toggleBold().run();
      },
      strike: () => {
        editor.chain().focus().toggleStrike().run();
      },
    };

    return _commandList[key];
  };

  return { runCommand };
};

export default useCommands;
