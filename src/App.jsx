import { BrowserRouter } from "react-router-dom";
import { AuthUserProvider } from "./context/AuthUser";
import { AppRouter } from "./routers/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthUserProvider>
          <AppRouter />
        </AuthUserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
