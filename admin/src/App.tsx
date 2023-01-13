import { fetchUtils, Admin, Resource, ListGuesser } from "react-admin";
import { dataprovider } from "./providers/dataProvider";

function App() {
  return (
    <Admin dataProvider={dataprovider}>
      <Resource name="Artwork" list={ListGuesser} />
      <Resource name="Category" list={ListGuesser} />
      <Resource name="" list={ListGuesser} />
    </Admin>
  );
}

export default App;
