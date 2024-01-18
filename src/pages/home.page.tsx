import { useSessionQuery } from "@/entities/session/queries";

export function HomePage() {
  const { data: session } = useSessionQuery();

  return <div className="text-rose-500">HomePage {session?.email}</div>;
}
