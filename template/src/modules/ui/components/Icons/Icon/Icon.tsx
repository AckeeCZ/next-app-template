import { forwardRef, type FC } from 'react';

import type { CSS, VariantProps } from '@stitches/react';

import * as Styled from './Icon.styles';

export interface IconProps extends VariantProps<typeof Styled.IconBox> {
    icon: FC<{ className?: string }>;
    css?: CSS;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon({ icon: IconComponent, css, ...rest }, ref) {
    return (
        <Styled.IconBox css={css} ref={ref} {...rest}>
            <IconComponent />
        </Styled.IconBox>
    );
});
