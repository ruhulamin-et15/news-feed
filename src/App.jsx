import Page from "./Page";
import { NewsProvider, SearchNewsProvider } from "./provider";

export default function App() {
  return (
    <>
      <NewsProvider>
        <SearchNewsProvider>
          <Page />
        </SearchNewsProvider>
      </NewsProvider>
    </>
  );
}
