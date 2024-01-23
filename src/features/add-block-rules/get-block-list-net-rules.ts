import {
  BlockItemDtoType,
  blockListControllerGetList,
} from "@/shared/api/generated";
import {
  NetRule,
  NetRuleActionType,
  NetRuleResourceType,
} from "@/shared/lib/chrome";

export async function getBlockListNetRules() {
  const blockList = await blockListControllerGetList();

  return blockList.items
    .filter(
      (item) =>
        item.type === BlockItemDtoType.Website ||
        item.type === BlockItemDtoType.KeyWord,
    )
    .map(
      (item): NetRule => ({
        id: item.id,
        action: { type: NetRuleActionType.BLOCK },
        condition: item.data.startsWith("regexp:")
          ? {
              regexFilter: item.data.replace("regexp:", ""),
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            }
          : {
              urlFilter: item.data,
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            },
      }),
    );
}
