import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { ADMIN_URL } from "@/shared/constants";
import { createTab } from "@/shared/lib/chrome";
import Button from "@/shared/ui/button";
import Logo from "@/shared/ui/logo";

export function HomePage() {
  return (
    <div className="p-8 flex flex-col gap-3 ">
      <Logo />
      <ToggleBlockingButton />
      <Button variant="outline" onClick={() => createTab(ADMIN_URL)}>
        Manage extension
      </Button>
    </div>
  );
}
