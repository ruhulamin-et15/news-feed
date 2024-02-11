import Page from "./Page";
import { NewsProvider } from "./provider";

export default function App() {
  return (
    <>
      <NewsProvider>
        <Page />
      </NewsProvider>
    </>
  );
}
