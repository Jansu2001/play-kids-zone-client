import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const TabComponent = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("ransformers");

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

    // console.log(toys);

  const result = toys.filter((toy) => toy.categoryName == activeTab);
  console.log(result);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="p-6 text-center ">
      <h1 className="text-4xl font-bold">Shop By Category</h1>
      <div className="pt-5">
        <Tabs>
          <div className="font-bold text-2xl ">
            <TabList>
              <Tab>
                <div onClick={() => handleTabClick("Avengers")}>Avengers</div>
              </Tab>
              <Tab>
                <div onClick={() => handleTabClick("Star wars")}>Star Wars</div>
              </Tab>
              <Tab>
                <div onClick={() => handleTabClick("transformers")}>Transfermers</div>
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            {toys.map((toy) => (
              <TabCard key={toy._id} toy={toy}></TabCard>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
