/*
 * Until the issue with preserving empty lines is fixed, we need to suppress that rule
 * https://github.com/gregberge/svgr/issues/774
 */
/* eslint-disable padding-line-between-statements */
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M16 1.4 14.6 0 8 6.6 1.4 0 0 1.4 6.6 8 0 14.6 1.4 16 8 9.4l6.6 6.6 1.4-1.4L9.4 8 16 1.4Z"
            fill="currentColor"
        />
    </svg>
);
export default SvgCross;
