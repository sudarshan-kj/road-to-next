import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === Number(ticketId),
  );
  return (
    <div>
      <h2>{ticketId}</h2>
      <p>Content: {ticket?.content}</p>
    </div>
  );
};

export default TicketPage;
