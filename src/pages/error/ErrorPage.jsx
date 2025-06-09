import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import SuspenseWithOutlet from "@/components/suspense-with-outlet/SuspenseWithOutlet.jsx";

export default function ErrorPage() {
    const error = useRouteError();

    let pageContent;

    if (isRouteErrorResponse(error)) {
        pageContent = (
            <div>
                Route error: {error.data}, status: {error.status}
            </div>
        );
    } else if (error instanceof Error) {
        pageContent = <div>Error: {error.message}</div>;
    } else {
        pageContent = <div>Unknown error</div>;
    }

    return <SuspenseWithOutlet title="Error">{pageContent}</SuspenseWithOutlet>;
}
