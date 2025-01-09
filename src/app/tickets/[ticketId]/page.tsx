import { initialTickets } from "@/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) return <h1>Ticket not found</h1>;

  return (
    <div>
      <h1 className="text-lg">{ticket?.title}</h1>
      <p className="text-sm">{ticket?.content}</p>
    </div>
  );
};

export default TicketPage;
