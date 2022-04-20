import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const manishPluginPlugin = createPlugin({
  id: 'manish-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const ManishPluginPage = manishPluginPlugin.provide(
  createRoutableExtension({
    name: 'ManishPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
