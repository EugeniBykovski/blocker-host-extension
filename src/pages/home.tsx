import { useSessionQuery } from "@/entities/session/queries";

export function HomePage() {
  const { data: session } = useSessionQuery();
  return <div>HomePage {session?.email}</div>;
}
