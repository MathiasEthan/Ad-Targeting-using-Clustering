import React, { useState } from "react";
import { Box, Flex, Button, Heading, Card, TextArea, Text, RadioCards, TextField, Select, Dialog, CheckboxCards } from "@radix-ui/themes";
import { ImageIcon, Link1Icon, PlusIcon } from "@radix-ui/react-icons";


function Payment({ caption, setCaption, length, setLength, tags, setTags, fileUrl, setFileUrl,setLanguage }) {
  
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
const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    console.log(file)
    if (file) {
      const files = URL.createObjectURL(file); // Generate a temporary URL
      setFileUrl(files); // Update the parent state
      console.log(files); // Log the file URL
    }
  };
 

    return (
      <>
      
        <Flex direction="column" gap="4" width="40%" p="2" m="2">
          <Heading as="h1" mt="0">
            Create your campaign today!
          </Heading>
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
                    {fileUrl !==
                    "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" ? (
                      <Text as="div" size="2" color="gray">
                        Image uploaded
                      </Text>
                    ) : (
                      <Text as="div" size="2" color="gray">
                        Upload from your device
                      </Text>
                    )}
                    <Button
                      mt="4"
                      variant="soft"
                      radius="small"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                      style={{ zIndex: 100, cursor: "pointer" }}
                    >
                      <Link1Icon />
                      Upload
                    </Button>
                    <input
                      id="fileInput"
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </Box>
                </Flex>
              </Card>
              <Flex direction="column" mt="4">
                <Text as="label" weight="medium" mb="2">
                  Caption
                </Text>
                <TextArea
                  value={caption}
                  onChange={handleCaptionChange}
                  placeholder="Write a caption that will be used as a base for our AI powered caption generation"
                ></TextArea>
                <Text weight="medium" mb="-1" mt="4" size="1" color="gray">
                  Tags to use for caption generation
                </Text>
                <Flex direction="row" gap="3" mt="1" align="center">
                
                  <Text
                    as="label"
                    weight="medium"
                    mb="2"
                    color="gray"
                    size="2"
                    mt="2"
                  >
                    Tags: 
                    <br />
                  </Text>
                  <Text as="div" size="2" color="green">
                    {tags}
                  </Text>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button variant="soft" size="1" radius="large">
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
                          <TextArea
                            value={tags}
                            onChange={handleTagsChange}
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
              <Box maxWidth="600px" mt="4" mb="4">
                <RadioCards.Root
                  defaultValue="short"
                  columns={{ initial: "1", sm: "3" }}
                  variant="surface"
                  onValueChange={handleRadioChange}
                >
                  <RadioCards.Item value="short" name="length">
                    <Flex direction="column" width="100%">
                      <Text weight="bold">Short</Text>
                      <Text>1-2 Sentance</Text>
                    </Flex>
                  </RadioCards.Item>
                  <RadioCards.Item value="medium" name="length">
                    <Flex direction="column" width="100%">
                      <Text weight="bold">Medium</Text>
                      <Text>2-3 Sentences</Text>
                    </Flex>
                  </RadioCards.Item>
                  <RadioCards.Item value="long" name="length">
                    <Flex direction="column" width="100%">
                      <Text weight="bold">Long</Text>
                      <Text>3-4 Sentences</Text>
                    </Flex>
                  </RadioCards.Item>
                </RadioCards.Root>
              </Box>
              <Flex direction="column" mt="3">
                <Text weight="medium" mb="3">
                  language
                </Text>
                <Select.Root defaultValue="english" mt="0" size="3" onValueChange={(value) => setLanguage(value)}>
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Group>
                      <Select.Item value="english">English</Select.Item>
                      <Select.Item value="hindi">Hindi</Select.Item>
                      <Select.Item value="french">French</Select.Item>
                      <Select.Item value="spanish">Spanish</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Flex>
            </Flex>
          </Card>
          <Text size="2" weight="medium" mt="4" mb="-1">
            Model
          </Text>
          <Box maxWidth="100%">
            <CheckboxCards.Root
              defaultValue={["1"]}
              columns={{ initial: "1", sm: "2" }}
            >
              <CheckboxCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">SoftMax</Text>
                  <Text>Neural Network</Text>
                </Flex>
              </CheckboxCards.Item>
              <CheckboxCards.Item value="2">
                <Flex direction="column" width="100%">
                  <Text weight="bold">DB Cluster</Text>
                  <Text>ML Model</Text>
                </Flex>
              </CheckboxCards.Item>
            </CheckboxCards.Root>
          </Box>

          <Flex variant="row" justify="end" mt="4">
            <Button variant="surface">Cancel</Button>
          </Flex>
        </Flex>
      </>
    );
    
}

export default Payment