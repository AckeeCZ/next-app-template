import type { TEnhancer } from 'fela';
import felaMonolithic from 'fela-monolithic';

const enhancers: TEnhancer[] = [];

if (process.env.NODE_ENV === 'development') {
    enhancers.push(
        felaMonolithic({
            prettySelectors: true,
        }),
    );
}

export default enhancers;
