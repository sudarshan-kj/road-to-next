import { Separator } from "./ui/separator";

type HeadingProps = {
  title: string;
  description?: string;
};

const Heading = ({ title, description }: HeadingProps) => (
  <div className="px-8">
    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    {description && (
      <p className="text-sm text-muted-foreground">{description}</p>
    )}
    <Separator className="my-4" />
  </div>
);

export { Heading };
