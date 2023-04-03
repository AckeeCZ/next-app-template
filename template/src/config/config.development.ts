const config = {
    api: {
        // TODO: Change with your API url
        url: 'https://my-json-server.typicode.com/AckeeCZ/web-task-cookbook-fake-api',
    },
} as const;

export type EnvConfig = typeof config;

export default config;
