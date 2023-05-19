import type { ValuesOf } from 'types/utils';

import type { languages } from '../config';

export type Languages = ValuesOf<typeof languages>;
