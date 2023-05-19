import type { ValuesOf } from 'types/utils';

import type { languages } from '../config';

export type Language = ValuesOf<typeof languages>;
