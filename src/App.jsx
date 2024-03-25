import { MainLayout } from "./layout/MainLayout.jsx";
import { WeatherPage } from "./pages/WeatherPage.jsx";

function App() {
  return (
    <>
      <MainLayout>
        <WeatherPage />
      </MainLayout>
    </>
  );
}

export default App;
