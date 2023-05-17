import { QueryClient } from '@tanstack/react-query';

let queryClient: QueryClient;

export const getQueryClient = () => queryClient ?? (queryClient = new QueryClient());
