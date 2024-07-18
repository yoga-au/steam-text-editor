import { ReactNode } from "react";

export type CommandLayout = {
  content?: ReactNode;
};

export const commandLayout: CommandLayout[] = [
  {
    content: "H1",
  },
  {
    content: "H2",
  },
  {
    content: "H3",
  },
  {
    content: "B",
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
