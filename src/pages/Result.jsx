import {React,useState} from 'react';
import { Box, Flex, Text, Card, Inset, Strong, Section, Button } from "@radix-ui/themes";
import { ImageIcon, } from "@radix-ui/react-icons";
const Result = ({length,tags,caption, fileUrl, setTempfileUrl}) => {
  const [caption1, setcaption1] = useState("is the art and technique of arranging type to make written language legible, readable and appealing when displayed.");
  const [caption2, setcaption2] = useState("is the art and technique of arranging type to make written language legible, readable and appealing when displayed.");
  const [caption3, setcaption3] = useState("is the art and technique of arranging type to make written language legible, readable and appealing when displayed.");
  const [caption4, setcaption4] = useState("is the art and technique of arranging type to make written language legible, readable and appealing when displayed.");
  const [heading1, setHeading1] = useState("Test user")
  const [heading2, setHeading2] = useState("Test user")
  const [heading3, setHeading3] = useState("Test user")
  const [heading4, setHeading4] = useState("Test user")
  async function getValues(){
    let tempCaption = caption.replaceAll(" ","-")
    let generatedCaptions = await fetch(`http://127.0.0.1:5000/captions/${tempCaption}/${tags}/${length}`)
    let Result = await generatedCaptions.json()
    setcaption1(Result[0])
    setcaption2(Result[1])
    setcaption3(Result[2])
    setcaption4(Result[3])
    setHeading1("For A 15-year-old male teenager.")
    setHeading2("For A 45-year-old unmarried man")
    setHeading3("For A 60-year-old lady")
    setHeading4("For A 25-year-old married man")
    setTempfileUrl(fileUrl)
    
  }
    return (
      <Box position="relative" mb="9" mx="9">
        <Section></Section>
        <Flex direction="column" gap="5">
          <Flex gap="4">
            <Box maxWidth="240px">
              <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <ImageIcon height="130" width="100%" />
                </Inset>
                <Text as="p" size="3">
                  <Strong>
                    {heading1}.<br />
                  </Strong>{" "}
                  {caption1}
                </Text>
              </Card>
            </Box>
            <Box maxWidth="240px">
              <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <ImageIcon height="130" width="100%" />
                </Inset>
                <Text as="p" size="3">
                  <Strong>
                    {heading2}.<br />
                  </Strong>{" "}
                  {caption2}
                </Text>
              </Card>
            </Box>
          </Flex>
          <Button onClick={getValues}>Generate</Button>
          <Flex gap="4">
            <Box maxWidth="240px">
              <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <ImageIcon height="130" width="100%" />
                </Inset>
                <Text as="p" size="3">
                  <Strong>
                    {heading3}.<br />
                  </Strong>{" "}
                  {caption3}
                </Text>
              </Card>
            </Box>
            <Box maxWidth="240px">
              <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                  <ImageIcon height="130" width="100%" />
                </Inset>
                <Text as="p" size="3">
                  <Strong>
                    {heading4}.<br />
                  </Strong>{" "}
                  {caption4}
                </Text>
              </Card>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
};

export default Result;