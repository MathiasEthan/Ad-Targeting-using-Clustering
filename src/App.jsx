import Payment from './pages/Payment';
import "@radix-ui/themes/styles.css";
import { Flex, Theme } from "@radix-ui/themes";
import Result from './pages/Result';
import background from './assets/background.png'
import background1 from './assets/transparent.png'
import {React, useState} from "react"
import './App.css';
import { AlignCenterHorizontallyIcon } from '@radix-ui/react-icons';


function App() {
  // State to store the selected length value
  const [length, setLength] = useState("short");
  const [language, setLanguage] = useState("English");
  const [tags, setTags] = useState("");
  const [caption, setCaption] = useState("");
  const [fileUrl, setFileUrl] = useState("https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"); // State to store the file URL
  const [tempfileUrl, setTempfileUrl] = useState("https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"); // State to store the file URL

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100px",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    top: "0",
  };

  return (
    <div>
      <div style={myStyle}></div>
      <Theme
        accentColor="blue"
        panelBackground="translucent"
        radius="medium"
        appearance="dark"
      >
        <Flex justify="between" style={{backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
          <Payment
            length={length}
            setLength={setLength}
            tags={tags}
            setTags={setTags}
            caption={caption}
            setCaption={setCaption}
            fileUrl={fileUrl}
            setFileUrl={setFileUrl}
            setLanguage={setLanguage}
          />
          <Result length={length} tags={tags} caption={caption} fileUrl={fileUrl} tempfileUrl={tempfileUrl} setTempfileUrl={setTempfileUrl} language={language} />
        </Flex>
      </Theme>
    </div>
  );
}

export default App
