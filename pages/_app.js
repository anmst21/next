import { Provider, useSelector, useDispatch } from "react-redux";
import { useStore } from "../store";
import _ from "lodash"; // React
import { useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  let editPage = router.pathname.includes("edit");
  return (
    <Provider store={store}>
      <div className="app">
        <Link href="/">Home</Link>
        <div>
          <Link href="/counter">Counter</Link>
        </div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
