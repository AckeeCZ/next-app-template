module.exports = {
    replaceAttrValues: {
        '#828282': 'currentColor',
        '#000': 'currentColor',
        '#FFD618': 'currentColor',
        '#FFD824': 'currentColor',
    },

    outDir: 'src/modules/ui/components/Icons/Icons',
    // Other options
    icon: true,
    typescript: true,

    template: (variables, { tpl }) => {
        return tpl`
            /*
             * Until the issue with preserving empty lines is fixed, we need to suppress that rule 
             * https://github.com/gregberge/svgr/issues/774
             */
            /* eslint-disable padding-line-between-statements */
            import type { SVGProps } from 'react';
            ${variables.interfaces};
         
            const ${variables.componentName} = (${variables.props}) => (
              ${variables.jsx}
            ); 
    

            ${variables.exports};`;
    },
};
