import { createSignal, onMount } from "solid-js";
import { getSecretData } from "../server/server"; // Adjust the import path if needed

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const [data, setData] = createSignal({}); // Store fetched data
  const [loading, setLoading] = createSignal(true); // Store loading state

  onMount(async () => {
    const secret = await getSecretData();
    setData(secret); // Set data when fetched
    setLoading(false); // Mark loading as complete
  });

  return (
    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()} 
      {loading() ? <span>Loading...</span> : <span>{JSON.stringify(data())}</span>} {/* Show loading or data */}
    </button>
  );
}

