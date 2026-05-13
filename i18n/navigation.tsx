import type {ComponentProps} from 'react';
import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

const nav = createNavigation(routing);

export const {redirect, usePathname, useRouter, getPathname} = nav;

// Default `prefetch={false}`: our static export strips Next 16's segment-cache
// `__next._tree.txt` payloads to stay under Cloudflare Pages' 20k-file cap
// (see scripts/strip-rsc-payloads.mjs), so the default `prefetch="auto"`
// would 404 in the browser. Pass `prefetch` explicitly to opt back in.
type LinkProps = ComponentProps<typeof nav.Link>;
export function Link({prefetch = false, ...props}: LinkProps) {
  return <nav.Link prefetch={prefetch} {...props} />;
}
