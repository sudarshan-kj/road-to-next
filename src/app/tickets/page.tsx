import Link from "next/link";
import { ticketPath } from "@/paths";
import { initialTickets } from "@/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PencilIcon, CircleCheckIcon, FileTextIcon } from "lucide-react";

const TICKET_ICONS = {
  OPEN: <FileTextIcon />,
  IN_PROGRESS: <PencilIcon />,
  DONE: <CircleCheckIcon />,
};

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="font-bold text-3xl tracking-tight">Tickets Page</h1>
        <p className="text-sm text-muted-foreground">
          Find all your tickets here
        </p>
      </div>
      <Separator />
      <div className="flex-1 flex flex-col  items-center gap-y-4">
        {initialTickets.map((ticket, index) => (
          <Card
            key={ticket.id}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
            className="max-w-105 animate-fade-from-top"
          >
            <CardHeader className="flex gap-2 items-center">
              {TICKET_ICONS[ticket.status]}
              {ticket.title}
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              {ticket.content}

              <Link
                className="text-sm underline block"
                href={ticketPath(String(ticket.id))}
              >
                View
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
