import { getHostRef, registerHost, renderVdom } from '@stencil/core/internal/client';

import { defineCustomElements } from '../loader';

defineCustomElements();

export const decorators = [
  (Story) => {
    const host = document.createElement('div');

    registerHost(host, { $flags$: 0, $tagName$: host.tagName.toLowerCase() });
    renderVdom(getHostRef(host), Story());

    return host.children[0];
  }
];
