import {React, useState} from "react";
import { Box, Flex, Button, Heading, Card, TextArea, Text, RadioCards, TextField, Select, Slider, Dialog } from "@radix-ui/themes";
import { ImageIcon, Link1Icon, PlusIcon } from "@radix-ui/react-icons";


function Payment({caption,setCaption,length,setLength,tags,setTags}){
  
   // Function to handle radio button change
  const handleRadioChange = (value) => {
     setLength(value); // Update the state with the selected value
     console.log(value)
  };
  const handleTagsChange = (e) => {
     setTags(e.target.value); // Update the state with the selected value
     console.log(e.target.value)
  };
  const handleCaptionChange = (e) => {
    setCaption(e.target.value); // Update the state with the selected value
    console.log(e.target.value)
 };
 function sendValues(){
  console.log(length)
  console.log(caption)
  console.log(tags)
 }

    return (
      <>  
        <Box
          width="100%"
          mt="0"
          pt="4"
          p="3"
          position="fixed"
          top="0"
          style={{
            backgroundColor: "#111113",
            zIndex: 100,
          }}
        >
          <Flex gap="3" justify="between">
            <Box>
              <Button variant="outline" radius="full">
                Get Started
              </Button>
            </Box>
            <Box mr="3">
              <Flex gap="2" justify="between">
                <Button variant="outline" radius="full">
                  Register
                </Button>
                <Button variant="outline" radius="full">
                  Login
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex direction="column" gap="4" width="40%" p="5" m="2">
          <Heading as="h1" mt="7">Create your campaign today!</Heading>
          <Card variant="ghost">
            <Flex direction="column">
              <Text as="label" weight="medium" mb="2">
                Campaign Name
              </Text>
              <TextField.Root placeholder="Enter campaign name...">
                <TextField.Slot></TextField.Slot>
              </TextField.Root>
            </Flex>
          </Card>
          <Card variant="ghost">
            <Flex direction="column">
              <Text as="p" size="3" weight="bold">
                Assets
              </Text>
              <Text size="2" ml="0" color="gray">
                show us what you're working with
              </Text>
              <Card mt="2">
                <Flex gap="3" align="center">
                  <Box position="fixed" top="4" left="4">
                    <ImageIcon height="19" width="19" />
                  </Box>
                  <Box ml="6">
                    <Text as="div" size="2" weight="bold">
                      Add Image
                    </Text>
                    <Text as="div" size="2" color="gray">
                      Upload from your device
                    </Text>
                    <Button mt="4" variant="soft" radius="small" onClick={function handleChange(){}}>
                      <Link1Icon />
                      Upload
                    </Button>
                  </Box>
                </Flex>
              </Card>
              <Flex direction="column" mt="4">
                <Text as="label" weight="medium" mb="2">
                  Caption
                </Text>
                <TextArea value={caption} onChange={handleCaptionChange} placeholder="Write a caption that will be used as a base for our AI powered caption generation"></TextArea>
                <Flex direction="row" gap="3" mt="2" align="center">
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button variant="soft">
                        <PlusIcon />
                        Tags
                      </Button>
                    </Dialog.Trigger>

                    <Dialog.Content maxWidth="450px">
                      <Dialog.Title>Add Tags</Dialog.Title>
                      <Dialog.Description size="2" mb="4">
                        Add tags you want to use for caption generation
                      </Dialog.Description>

                      <Flex direction="column" gap="3">
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Tags
                          </Text>
                          <TextArea value={tags} onChange={handleTagsChange}
                            placeholder="Add tags separated by commas for example: fun, casual, lighthearted, inspirational..."
                          />
                        </label>
                      </Flex>

                      <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button>Save</Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                </Flex>
              </Flex>
              <Box maxWidth="600px" mt="4">
                <RadioCards.Root
                  defaultValue="short"
                  columns={{ initial: "1", sm: "3" }}
                  variant="surface"
                  onValueChange={handleRadioChange}>
                
                  <RadioCards.Item value="short" name= "length">
                    <Flex direction="column" width="100%">
                      <Text weight="bold">Short</Text>
                      <Text>1-2 Sentance</Text>
                    </Flex>
                  </RadioCards.Item>
                  <RadioCards.Item value="medium" name= "length">
                    <Flex direction="column" width="100%">
                      <Text weight="bold">Medium</Text>
                      <Text>2-3 Sentences</Text>
                    </Flex>
                  </RadioCards.Item>
                  <RadioCards.Item value="long" name= "length">
                    <Flex direction="column" width="100%">
                      <Text weight="bold">Long</Text>
                      <Text>3-4 Sentences</Text>
                    </Flex>
                  </RadioCards.Item>
                </RadioCards.Root>
              </Box>
              <Flex direction="column" mt="3">
                <Text weight="medium" mb="3">
                  Primary Location
                </Text>
                <Select.Root defaultValue="india" mt="0" size="3">
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Group>
                      <Select.Item value="india">India</Select.Item>
                      <Select.Item value="usa">
                        United States of America
                      </Select.Item>
                      <Select.Item value="United Kingdom">
                        United Kingdom
                      </Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Flex>
            </Flex>
          </Card>
          <Text size="2" weight="medium">
            Budget
          </Text>
          <Slider defaultValue={[25, 70]} variant="soft" />
          <Flex variant="row" justify="between" mt="-2">
            <Text size="1" color="gray">
              $0
            </Text>
            <Text size="1" color="gray">
              $10000
            </Text>
          </Flex>
          <Flex variant="row" justify="between" mt="4">
            <Button variant="surface">Cancel</Button>
            <Button variant="soft" onClick={sendValues}>Next</Button>
          </Flex>
        </Flex>
      </>
    );
    
}

export default Payment