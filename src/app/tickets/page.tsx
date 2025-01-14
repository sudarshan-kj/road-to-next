import { LucideCircleCheck, LucideFile, LucidePencil } from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: <LucideFile />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
};

const TicketPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <Heading title="Tickets" description="All your tickets in one page" />
      </div>
      <div className="flex flex-1 flex-col items-center gap-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px] ">
            <CardHeader>
              <CardTitle className="flex gap-x-2 items-center">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content +
                  ticket.content +
                  ticket.content +
                  ticket.content +
                  ticket.content +
                  ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
