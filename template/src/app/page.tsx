import { Hydrate, dehydrate } from '@tanstack/react-query';

import { config } from 'config/config';
import { getQueryClient, getQueryData } from 'modules/api/services';
import { QueryKey } from 'modules/api/types';
import { Posts } from 'modules/posts/components/Posts';

export default async function Home() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery([QueryKey.Posts], () => getQueryData(config.endpoints.posts));

    const dehydratedState = dehydrate(queryClient);

    return (
        <Hydrate state={dehydratedState}>
            <Posts />
        </Hydrate>
    );
}
