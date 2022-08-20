import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId="G-5GFVZV2DZ5" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
