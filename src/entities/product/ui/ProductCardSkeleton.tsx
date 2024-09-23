import {
  AspectRatio,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  PlaceholderImage,
  Skeleton,
} from '@/shared/ui';

type Props = React.ComponentProps<typeof Card> & {
  footerSlot?: React.ReactNode;
};

export const ProductCardSkeleton = ({ footerSlot, ...props }: Props) => {
  return (
    <Card {...props}>
      <CardHeader className="border-b p-0">
        <AspectRatio ratio={4 / 3}>
          <PlaceholderImage isSkeleton className="rounded-none" asChild />
        </AspectRatio>
      </CardHeader>
      <CardContent className="space-y-1.5 p-4">
        <CardTitle>
          <Skeleton className="h-7 w-3/4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-28" />
        </CardDescription>
      </CardContent>
      {footerSlot && <CardFooter className="p-4 pt-1">{footerSlot}</CardFooter>}
    </Card>
  );
};
