import Payment from './pages/Payment';
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import Result from './pages/Result';
import background from './assets/background.jpeg'
import {React, useState} from "react";



function App() {
   // State to store the selected length value
   const [length, setLength] = useState("short");
   const [tags,setTags] = useState("")
   const [caption, setCaption] = useState("")


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
    <Payment length={length} setLength={setLength} tags={tags} setTags={setTags} caption={caption} setCaption={setCaption} />
    <Result length={length} tags={tags} caption={caption} />
    </Flex>
    </Theme></div>
  );
}

export default App
