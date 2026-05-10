export const initialTickets = [
  {
    id: 1,
    title: "Ticket 1",
    content:
      "First ticket. This is the content of the first ticket which is very long.",
    status: "DONE" as const,
  },
  {
    id: 2,
    title: "Ticket 2",
    content:
      "Second ticket. This is the content of the first ticket which is very long.",
    status: "OPEN" as const,
  },
  {
    id: 3,
    title: "Ticket 3",
    content:
      "Third ticket. This is the content of the first ticket which is very long.",
    status: "IN_PROGRESS" as const,
  },
];
