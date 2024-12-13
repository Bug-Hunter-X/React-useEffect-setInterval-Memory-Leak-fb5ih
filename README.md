# React useEffect setInterval Memory Leak

This repository demonstrates a common bug in React applications involving the `useEffect` hook and `setInterval`.  The bug leads to memory leaks because the cleanup function within `useEffect` isn't effectively stopping the interval when the component unmounts or updates. 

## Bug Description
The provided `MyComponent` uses `setInterval` within a `useEffect` hook.  The intention is to update a count every second. However, the return function, which is supposed to clear the interval, is incorrectly handling the cleanup. This results in multiple intervals running concurrently, consuming excessive memory and potentially causing performance issues. 

## Solution
The solution addresses the improper cleanup of the interval in the `useEffect` hook, ensuring that only one interval is running at any given time, preventing memory leaks. 