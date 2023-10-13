import React from "react";
import { useHttp } from "../../hooks/useHttp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../../layouts/main-layout/MainLayout";
import { Home } from "../../pages/home/Home";
import { OurCoffee } from "../../pages/our-coffee/OurCofee";
import { SingleCoffeePage } from "../../pages/single-coffee-page/SingleCoffeePage";
import { Coffee } from "../../layouts/coffee/Coffee";
import { ForYourPleasure } from "../../pages/for-your-pleasure/ForYourPleasure";
import { NotFound } from "../../pages/not-found/NotFound";
import "./app.scss";

function App() {
  const coffeeData = useHttp();
  const bestCoffee = useHttp();

  console.log("lst update");
  React.useEffect(() => {
    (async () => {
      await coffeeData.request("https://6501d205736d26322f5c5699.mockapi.io/coffeeData");
      await bestCoffee.request("https://6501d205736d26322f5c5699.mockapi.io/bestCoffee");
    })();
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLayout />}>
          <Route exact path="/" element={<Home status={bestCoffee.statusLoading} data={bestCoffee.data} />} />
          <Route path="/ourCoffee" element={<Coffee Component={OurCoffee} status={coffeeData.statusLoading} data={coffeeData.data} />} />
          <Route path="/ourCoffee/:idCoffee" element={<Coffee Component={SingleCoffeePage} />} />
          <Route path="/forYourPleasure" element={<ForYourPleasure status={coffeeData.statusLoading} data={coffeeData.data} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
