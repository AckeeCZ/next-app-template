/**
 * @type {import('@svgr/core').Config}
 */
module.exports = {
    replaceAttrValues: {
        '#78787D': 'currentColor',
        '#0045CB': 'currentColor',
        '#008C49': 'currentColor',
        '#E1142C': 'currentColor',
        '#FF7324': 'currentColor',
        '#C5C5C9': 'currentColor',
        '#D9D9DD': 'currentColor',
        '#80A2E5': 'currentColor',
    },

    outDir: 'src/components/Icons/Icons',
    // Other options
    icon: true,
    typescript: true,

    template: (variables, { tpl }) => {
        return tpl`
            import type { SVGProps } from 'react';
            ${variables.interfaces};
         
            const ${variables.componentName} = (${variables.props}) => (
              ${variables.jsx}
            ); 

            ${variables.exports};`;
    },

    indexTemplate: (files, ...r) => {
        return files
            .map(file => {
                const fileName = file.path.split('/').pop().replace('.tsx', '');

                return `export { default as Icon${fileName} } from './${fileName}';`;
            })
            .join('\n');
    },
};
