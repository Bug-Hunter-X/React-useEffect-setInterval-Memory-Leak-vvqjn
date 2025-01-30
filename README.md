# React useEffect setInterval Memory Leak

This repository demonstrates a common React bug involving memory leaks caused by the improper use of `setInterval` within the `useEffect` hook.  The example shows a component that increments a counter every second. However, because the `setInterval` is not properly cleaned up when the component unmounts, it continues to run in the background, leading to a memory leak.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected implementation.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the counter incrementing.  Even when you navigate away from the component, the counter continues to update in the background (you can see this in your browser's developer tools under memory usage).

## Solution

The solution involves using the cleanup function provided by the `useEffect` hook's return value to clear the interval before the component is unmounted.