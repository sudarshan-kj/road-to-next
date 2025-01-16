import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";

const Header = () => (
  <nav
    className="support-backdrop-blur:bg-backgroud/60
fixed left-0 right-0 top-0 z-20
border-b bg-background/95 backdrop-blur
w-full flex py-2.5 px-5 justify-between"
  >
    <div>
      <Button asChild variant="ghost">
        <Link href={homePath()}>
          <LucideKanban />
          <h1 className="font-semibold text-lg tracking-tight">TicketBounty</h1>
        </Link>
      </Button>
    </div>
    <div>
      <Button asChild variant="default">
        <Link href={ticketsPath()}>Tickets</Link>
      </Button>
    </div>
  </nav>
);

export { Header };
