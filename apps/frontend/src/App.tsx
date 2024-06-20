function App() {
  const handleClick = () =>
    fetch("/api")
      .then((res) => res.text())
      .then(console.log);

  return <button onClick={handleClick}>Click me</button>;
}

export default App;
