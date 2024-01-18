import { ADMIN_SING_IN_URL } from "@/shared/constants";
import { createTab } from "@/shared/lib/chrome";
import Button from "@/shared/ui/button";
import Logo from "@/shared/ui/logo";

export function NotAuthPage() {
  return (
    <div className="p-8">
      <Logo />
      <h2 className="py-2">You are not authorized!</h2>
      <Button
        className="w-full"
        variant="primary"
        onClick={() => createTab(ADMIN_SING_IN_URL)}
      >
        Sign In
      </Button>
    </div>
  );
}
