import { Provider, useSelector, useDispatch } from "react-redux";
import { useStore } from "../store";
import _ from "lodash"; // React
import { useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  let editPage = router.pathname.includes("edit");
  return (
    <Provider store={store}>
      <div className="app">
        Header
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
