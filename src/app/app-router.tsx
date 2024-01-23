import { useSessionQuery } from "@/entities/session";
import { HomePage } from "@/pages/home.page";
import { NotAuthPage } from "@/pages/not-auth.page";
import PageSpinner from "@/shared/ui/page-spinner";

export function AppRouter() {
  const { isLoading, isSuccess } = useSessionQuery();

  if (isLoading) return <PageSpinner />;
  if (isSuccess) return <HomePage />;

  return <NotAuthPage />;
}
