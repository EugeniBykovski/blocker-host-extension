import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated";
import { setBrowserInterval, setNetRules } from "@/shared/lib/chrome";
import { getBlockListNetRules } from "./get-block-list-net-rules";

export function updateBlockRules() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    console.log("start sync");
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      return await setNetRules([]);
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      return await setNetRules([]);
    }
    const rules = await getBlockListNetRules();
    setNetRules(rules);
  });
}
