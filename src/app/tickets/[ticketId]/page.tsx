import Link from "next/link";
import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket)
    return (
      <div className="flex flex-1">
        <PlaceHolder
          message="Ticket not found"
          button={
            <Button asChild variant="outline">
              <Link href={ticketsPath()}>Go to Tickets</Link>
            </Button>
          }
        />
        <PlaceHolder message="Ticket not found" />
      </div>
    );

  return (
    <div>
      <h1 className="text-lg">{ticket?.title}</h1>
      <p className="text-sm">{ticket?.content}</p>
    </div>
  );
};

export default TicketPage;
