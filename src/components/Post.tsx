import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Grid,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

function Post() {
  const [task, setTask] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const [arrayTask, setArrayTask] = useState(
    JSON.parse(localStorage.getItem("Task"))
  );

  const navigate = useNavigate();

  // localStorage.clear()
  
  localStorage.setItem("Task", JSON.stringify(arrayTask));

  const toggleIsCompleted = () => {
    // 👇️ passed function to setState
    setIsCompleted((current) => !current);
  };

  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const day = new Date().getDay();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  console.log(month);

  const fullYear = `${day}/${month}/${year} at ${hours}:${minutes} o'clock`;


  
const ifComplete = isCompleted ? "task is complete" : "task is not completed"
  const Data = () => {
    const addItem = {
      id: Math.floor(Math.random() * 1000),
      dateTime: fullYear,
      task: task,
      isCompleted: ifComplete,
    };

    setArrayTask((oldList: any) => [...oldList, addItem]);
    setTask("");
    // navigate('/')
  };

  const items = arrayTask.map((item: any) => (
    <Card bg={"red"} color={"white"} key={item.id}>
      <CardHeader>
        <Heading size="md">{item.task}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{item.dateTime}</Text>
      </CardBody>
      <CardFooter>
        <Text>{item.isCompleted}</Text>
        <Button onClick={toggleIsCompleted}>Complete ?</Button>
      </CardFooter>
    </Card>
  ));

  

  return (
    <Box h={"100vh"}>
      <Heading as="h2" size="xl" textAlign={"center"}>
        Tasks
      </Heading>

      <SimpleGrid
        pt={10}
        columns={1}
        w={"100%"}
        rowGap={5}
        alignItems={"center"}
        justifyItems={"center"}
        spacing={1}
      >
        <Box w={"50%"} height="50px">
          <Input
            placeholder="large size"
            size="lg"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Box>
        {/* <Box w={"50%"} height="50px">
          <Input
            placeholder="large size"
            size="lg"
            type="date"
            onChange={(e) => setDateTime(e.target.value)}
          />
        </Box> */}
        {/* <Box  w={"50%"} height="50px">
        <Input
        placeholder="large size"
        size="lg"
        type="text"
        onChange={(e) => setIsCompleted(e.target.value)}
        />
    </Box> */}

        <Button colorScheme="blue" onClick={Data}>
          Button
        </Button>
      </SimpleGrid>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {/* {items.isCompleted ? (
          <Card>
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        ) : ( */}
         {items}
        {/* )} */}
      </SimpleGrid>
    </Box>
  );
}

export default Post;
