import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated";
import { setBrowserInterval, setIcon } from "@/shared/lib/chrome";

export function toggleExtensionIcon() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      setIcon("../../../public/welcome.png");
      return;
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      setIcon("../../../public/sleep.png");
      return;
    }

    setIcon("../../../public/shield.png");
    return;
  });
}
