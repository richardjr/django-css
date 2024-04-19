# IBTW - Itzy Bitzy Teeny Weeny JS frame work

A very simple and small typescript framework for prototyping. If you need something small and fleet, ibtw is your lib and
for all the python developers we have done a few renames and wrappers to make the language gap a little easier.

# Quick start

```typescript
import {IBTW} from './ibtw';

let ibtw = new IBTW();

ibtw.onLoad(() => {
    print('The DOM is loaded');
});
```

# API

## onLoad(callback: () => void)

Run events after dom has load

## click(query: string, callback: (e: Event) => void)

Add click event to a query