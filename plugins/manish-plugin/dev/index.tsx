import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { manishPluginPlugin, ManishPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(manishPluginPlugin)
  .addPage({
    element: <ManishPluginPage />,
    title: 'Root Page',
    path: '/manish-plugin'
  })
  .render();
