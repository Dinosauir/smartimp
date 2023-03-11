import Search from "@/components/search";
import { SearchProvider } from "@/contexts/search";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <SearchProvider>
        <Search />
        <Component {...pageProps} />
      </SearchProvider>
    </main>
  );
}
