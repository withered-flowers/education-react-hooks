import { useState } from "react";

import { NavigationValue } from "./ts-related/enums";

import NavBar from "./components/NavBar";
import DataTableJsonPlaceholder from "./components/DataTableJsonPlaceholder";
import DataTableReqresIn from "./components/DataTableReqResIn";

function App() {
  // Ingat bahwa useState adalah suatu Hooks, sehingga harus didefinisikan
  // di dalam Function component yang ada

  // Enum:
  // - JP = JSONPlaceholder
  // - RR = ReqResIn
  const [whichData, setWhichData] = useState<NavigationValue>(
    NavigationValue.JsonPlaceholder
  );

  return (
    <section className="p-4">
      {/* Pass setWhichData untuk bisa meng-set halaman */}
      <NavBar setWhichData={setWhichData} />

      <section className="py-4">
        {whichData === "JP" ? (
          <DataTableJsonPlaceholder />
        ) : (
          <DataTableReqresIn />
        )}
      </section>
    </section>
  );
}

export default App;
