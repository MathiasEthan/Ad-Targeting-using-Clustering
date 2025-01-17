import Payment from './pages/Payment';
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import Result from './pages/Result';
import background from './assets/background.png'
import {React, useState} from "react"


function App() {
  // State to store the selected length value
  const [length, setLength] = useState("short");
  const [tags, setTags] = useState("");
  const [caption, setCaption] = useState("");
  const [fileUrl, setFileUrl] = useState(null); // State to store the file URL

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100px",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle}></div>
      <Theme
        accentColor="indigo"
        panelBackground="solid"
        scaling="100%"
        radius="medium"
        appearance="dark"
      >
        <Flex justify="between">
          <Payment
            length={length}
            setLength={setLength}
            tags={tags}
            setTags={setTags}
            caption={caption}
            setCaption={setCaption}
            fileUrl={fileUrl}
            setFileUrl={setFileUrl}
          />
          <Result length={length} tags={tags} caption={caption} />
        </Flex>
      </Theme>
    </>
  );
}

export default App
