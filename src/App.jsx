import Payment from './pages/Payment';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";



function App() {


  return (
    <Theme
      accentColor="indigo"
      panelBackground="solid"
      scaling="100%"
      radius="medium"
      appearance="dark"
    >
      <Payment />
    </Theme>
  );
}

export default App
