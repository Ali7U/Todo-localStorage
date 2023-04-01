import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { SimpleGrid, Box, Heading, Button } from "@chakra-ui/react";
// import { Box } from "framer-motion";

console.log(axios.isCancel("something ..."));

// interface Todo {
//   id: number;
//   dateTime: Date;
//   value: string;
//   isCompleted: boolean;
// }

function Effect(props:any) {
  const [task, setTask] = useState<any>([]);

  // const {items} = props;

  useEffect(() => {
    // setTask("Ali");
    localStorage.setItem("Task", JSON.stringify(task));
  }, [task]);

  return (
    // <SimpleGrid columns={[2, null, 3]} spacing="40px">
    //   {/* {data.map((item: any) => ( */}
    //     <Box bg="tomato"
    //     // key={item.id}
    //      height="80px">
    //       <Heading as="h4" size="md">
    //         {/* {item.task} */}
    //       </Heading>
    //       <Button
    //     //   colorScheme="blue" onClick={() => deleteItem(item.id)}
    //       >
    //         <FiDelete />
    //       </Button>
    //       <Heading as="h5" size="sm">
    //         {/* {item.dateTime} */}
    //       </Heading>
    //       <Button
    //     //   onClick={() => localStorage.setItem("id", item.id)}
    //       >
    //         <RxUpdate />
    //       </Button>
    //     </Box>
    //   {/* )
    //   )} */}
    // </SimpleGrid>
    <div></div>
  );
}

export default Effect;
