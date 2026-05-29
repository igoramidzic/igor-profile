# Images

The site is text-first and doesn't use photos in the layout. The only image
asset it references is the social share preview:

| File                    | Where it shows       | Notes                  |
| ----------------------- | -------------------- | ---------------------- |
| `og.png` (in `/public`) | Social share preview | 1200×630 recommended.  |

Brand logos live in `/public/logos/` and are referenced via `orgs[*].logo` in
`src/data/profile.ts`. Swap in official assets any time; keep the same filenames
and they'll just work.
