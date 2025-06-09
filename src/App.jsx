import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import routes from "@/routes/index.jsx";
import SuspenseWithOutlet from "@/components/suspense-with-outlet/SuspenseWithOutlet.jsx";

const App = () => (
  <>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SuspenseWithOutlet>
        <RouterProvider router={createBrowserRouter(routes)} />
      </SuspenseWithOutlet>
    </LocalizationProvider>
  </>
);

export default App;
