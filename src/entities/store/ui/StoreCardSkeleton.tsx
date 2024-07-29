import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/shared/ui';

type Props = React.ComponentProps<typeof Card>;

export const StoreCardSkeleton = ({ ...props }: Props) => {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-7 w-32" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-44" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[0.8rem] w-32" />
      </CardContent>
    </Card>
  );
};
