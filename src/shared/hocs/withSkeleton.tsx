import { Skeleton } from '@/shared/ui';

interface Props {
  isLoading: boolean;
}

export const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>
) =>
  function WithSkeleton({ isLoading, ...restProps }: Props & P) {
    return isLoading ? <Skeleton /> : <Component {...(restProps as P)} />;
  };
