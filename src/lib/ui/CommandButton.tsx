import { type ComponentPropsWithRef, type ReactNode, forwardRef } from "react";

export type CommandButtonProps = {
  children?: ReactNode;
} & ComponentPropsWithRef<"button">;

// internal ref
type Ref = HTMLButtonElement;

const CommandButton = forwardRef<Ref, CommandButtonProps>(
  ({ children, ...restProps }, ref) => {
    return (
      <button ref={ref} {...restProps}>
        {children}
      </button>
    );
  }
);

CommandButton.displayName = "CommandButton";

export default CommandButton;
