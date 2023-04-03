import type { NextApiRequest, NextApiResponse } from 'next';

import { axiosInstance } from 'modules/api/config';
import { handleError } from 'modules/api';

export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { apiEndpoint } = req.query;

        const stringApiEndpoint = Array.isArray(apiEndpoint) ? apiEndpoint.join('/') : apiEndpoint;

        if (!stringApiEndpoint) return res.status(400).send('Endpoint not specified');

        await axiosInstance.post(stringApiEndpoint, req.body, {
            headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` },
        });

        res.status(200).send({ success: true });
    } catch (err) {
        // @ts-ignore
        // eslint-disable-next-line no-console
        console.error(err);

        const error = handleError(err);

        res.status(error?.status ?? 500).send(error);
    }
}
