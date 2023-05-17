import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';

import { getCssText } from '../theme';

export function StitchesRegistry({ children }: { children: React.ReactNode }) {
    const [isRendered, setIsRendered] = useState(false);

    useServerInsertedHTML(() => {
        if (!isRendered) {
            setIsRendered(true);

            return <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />;
        }
    });

    return <>{children}</>;
}
