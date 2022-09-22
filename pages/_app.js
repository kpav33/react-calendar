import "../styles/globals.css";

import ContextWrapper from "../context/ContextWrapper";

function MyApp({ Component, pageProps }) {
  return (
    // Consume the context
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}

export default MyApp;
