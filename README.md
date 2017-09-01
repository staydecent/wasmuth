# wasmuth
Practical, functional utilities that fallback on native implementations as much as possible.

Named after the Frank Lloyd Wright Wasmuth portfolio. I could argue how Wright's design philosophy aligns with that of this library, but I should let you know that I had a book of his work on my desk when I decided to make this repo...

## Why?

I love Ramda. But, some of the naming/semantics is not obvious for those newer to functional programming. Also, filesize 😵. Also, why not fallback to native implementations? Any performance concerns are not actually a bottleneck, and JavaScript VMs will continue to optimize these (map, filter, reduce, some etc.).

I've also included a few functions I use on most projects, that I'm tired of
copy-n-pasting around.

## Docs

This is used in Production, but you should probably wait for at least tests to be added 😄
