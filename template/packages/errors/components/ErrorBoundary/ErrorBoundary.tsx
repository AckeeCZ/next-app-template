import {
    ErrorBoundary as SentryErrorBoundary,
    type ErrorBoundaryProps as SentryErrorBoundaryProps,
} from '@sentry/nextjs';

export interface ErrorBoundaryProps extends Partial<SentryErrorBoundaryProps> {}

export const ErrorBoundary = ({ children, ...props }: ErrorBoundaryProps) => (
    <SentryErrorBoundary showDialog {...props} children={children} />
);
