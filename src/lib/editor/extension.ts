import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import type { Extensions } from "@tiptap/react";

export const extensions: Extensions | undefined = [
  StarterKit,
  Underline,
  Highlight,
  Link,
  Table,
  TableCell,
  TableHeader,
  TableRow,
];
