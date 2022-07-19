import felaPluginExtend from 'fela-plugin-extend';
import felaPluginEmbedded from 'fela-plugin-embedded';
import felaPluginPrefixer from 'fela-plugin-prefixer';
import felaPluginPlaceholderPrefixer from 'fela-plugin-placeholder-prefixer';
import felaPluginValidator from 'fela-plugin-validator';
import felaPluginUnit from 'fela-plugin-unit';
import felaPluginNamedKeys from 'fela-plugin-named-keys';
import felaPluginFallbackValue from 'fela-plugin-fallback-value';
import felaPluginFriendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';

import namedKeys from './namedKeys';

const defaultUnit = 'px';

const plugins = [
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-extend
    felaPluginExtend(),
    // docs: https://github.com/robinweser/fela/tree/master/packages/fela-plugin-embedded
    felaPluginEmbedded(),
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-friendly-pseudo-class
    felaPluginFriendlyPseudoClass(),
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-named-keys
    felaPluginNamedKeys(namedKeys),
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-placeholder-prefixer
    felaPluginPlaceholderPrefixer(),
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-prefixer
    felaPluginPrefixer(),
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-fallback-value
    felaPluginFallbackValue(),
    // docs: https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-unit
    felaPluginUnit(defaultUnit),
];

// felaPluginValidator should be the last plugin
if (process.env.NODE_ENV === 'development') {
    plugins.push(
        felaPluginValidator({
            logInvalid: true,
            deleteInvalid: false,
            useCSSLint: false,
        }),
    );
}

export default plugins;
