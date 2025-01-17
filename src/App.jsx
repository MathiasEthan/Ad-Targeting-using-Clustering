import Payment from './pages/Payment';
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import Result from './pages/Result';
import background from './assets/background.jpeg'



function App() {


  return (
    <div style={{backgroundImage: `url(${background})`,
                backgroundSize: "100% 100%"
    }}>
    <Theme
      accentColor="indigo"
      panelBackground="solid"
      scaling="100%"
      radius="medium"
      appearance="dark"
    >
    <Flex justify="between">
    <Payment />
    <Result />
    </Flex>
    </Theme></div>
  );
}

export default App
