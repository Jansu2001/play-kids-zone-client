import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const TabComponent = ({ tabCategory }) => {
  const tabToys = tabCategory;
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Avengers");

  useEffect(() => {
    const filtered = tabToys.filter((toy) => toy.subCategory === activeTab);
    setToys(filtered);
  }, [tabToys, activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // console.log(toys);
  return (
    <div className="py-6 text-center ">
      <h1 className="lg:text-4xl text-2xl font-bold mx-auto bg bg-indigo-600 text-white lg:w-1/3 p-3 rounded-lg ">
        Shop By Category
      </h1>
      <div className="pt-5">
        <Tabs>
          <div className="font-bold  text-2xl ">
            <TabList>
              <Tab>
                <div className="" onClick={() => handleTabClick("Avengers")}>
                  Avengers
                </div>
              </Tab>
              <Tab>
                <div onClick={() => handleTabClick("Star Wars")}>Star Wars</div>
              </Tab>
              <Tab>
                <div onClick={() => handleTabClick("transformers")}>
                  Transfermers
                </div>
              </Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
              {toys.slice(0,4).map((toy) => (
                <TabCard key={toy._id} toy={toy}></TabCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
              {toys.slice(0,4).map((toy) => (
                <TabCard key={toy._id} toy={toy}></TabCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
              {toys.slice(0,4).map((toy) => (
                <TabCard key={toy._id} toy={toy}></TabCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
