import Link from "next/link";
import { ticketsPath } from "@/paths";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="font-bold text-3xl tracking-tight">Home page</h1>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link className="underline" href={ticketsPath()}>
          Go to Tickets
        </Link>
      </div>
    </div>
  );
}
