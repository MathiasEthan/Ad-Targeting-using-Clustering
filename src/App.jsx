import Payment from './pages/Payment';
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import Result from './pages/Result';
import background from './assets/background.png'
import {React, Component} from "react"


function App() {

const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100px",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  return (
    <>
    <div
      style={myStyle}
    ></div>
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
      </Theme>
    </>
  );
}

export default App
