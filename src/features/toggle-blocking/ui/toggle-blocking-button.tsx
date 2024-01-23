import { useToggleBlocking } from "../model/use-toggle-blocking";
import Button from "@/shared/ui/button";

export function ToggleBlockingButton() {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <Button
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </Button>
  );
}
