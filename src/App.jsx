import { AddField } from "./containers/AddField";
import { Footer } from "./containers/Footer";
import { Header } from "./containers/Header";
import { List } from "./containers/List";

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <AddField />
      <List />
      <Footer />
    </div>
  );
};
