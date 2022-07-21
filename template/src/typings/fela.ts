import type { TNormalizedMultiRule } from 'fela-tools';

declare module 'fela-tools' {
    function combineMultiRules<TRuleProps, Styles>(
        ...rules: Array<TMultiRule>
    ): TNormalizedMultiRule<TRuleProps, Styles>;
}
