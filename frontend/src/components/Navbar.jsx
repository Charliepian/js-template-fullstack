import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBoolean,
} from "@chakra-ui/react";

function Navbar() {
  const [flag, setFlag] = useBoolean();

  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabPanels fontSize="30" color="#fff">
          <TabPanel bg="#118AB2" h="400px">
            <div onMouseEnter={setFlag.off} onMouseLeave={setFlag.on}>
              <h1>
                Tu as l'idée qui va{" "}
                {flag ? "révolutionenr le monde" : "te faire gagner un max"} ?
                Alors tu es bien tombé pour arriver ton objectif !
              </h1>
            </div>
          </TabPanel>
          <TabPanel bg="#06D6A0" h="400px">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>
          </TabPanel>
          <TabPanel bg="#FFD166" h="400px">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias debitis blanditiis accusamus!
            </p>
          </TabPanel>
          <TabPanel bg="#118AB2" h="400px">
            <p>Lorem ipsum dolor sit amet.</p>
          </TabPanel>
        </TabPanels>
        <TabList p="5">
          <Tab>Step 1! 📝</Tab>
          <Tab>Step 2! 👨‍💻</Tab>
          <Tab>Step 3! 📱</Tab>
          <Tab>Step 4! 🚀</Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export default Navbar;
