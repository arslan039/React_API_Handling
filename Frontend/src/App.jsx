import { useState } from "react";
import ReactQuery from "./ReactQuery";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [controller, setController] = useState(new AbortController());
  const { data: products, error, loading } = ReactQuery("/api/products?search=" + search, {
    signal: controller.signal,
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    // When the search input changes, cancel the previous request
    controller.abort();
    // Create a new AbortController for the upcoming request
    setController(new AbortController());
  };

  if (error) {
    return <h2>Something went Wrong</h2>;
  }

  return (
    <>
      <h2>Work with API like a Pro in React.</h2>
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={handleSearchChange}
      />

      {loading && <h2>Loading...</h2>}
      <h3>Number of Products: {products.length}</h3>
    </>
  );
}

export default App;

