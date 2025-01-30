```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. Missing cleanup function
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```