import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const blockListKey = ["block-list"] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
  });
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      // @ts-ignore
      await queryClient.invalidateQueries(blockListKey);
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      // @ts-ignore
      await queryClient.invalidateQueries(blockListKey);
    },
  });
}
