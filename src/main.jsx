import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import configureStore from "@/store";
import App from "@/App.jsx";
import GlobalStyles from "@/components/global-styles/GlobalStyles.jsx";
import {StrictMode} from "react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "@/dev/index.js";

const store = configureStore();

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>
            </GlobalStyles>
        </Provider>
    </StrictMode>
);
