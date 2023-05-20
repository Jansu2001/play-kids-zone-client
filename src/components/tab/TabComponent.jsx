import { useEffect, useState } from "react";
import { Tab, TabList,  Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const TabComponent = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Avengers");

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  // console.log(toys);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="p-6 text-center ">
      <h1 className="lg:text-4xl text-2xl font-bold mx-auto bg bg-indigo-600 text-white lg:w-1/3 p-3 rounded-lg ">Shop By Category</h1>
      <div className="pt-5">
        <Tabs>
          <div className="font-bold  text-2xl ">
            <TabList>
              <Tab>
                <div className="" onClick={() => handleTabClick("Avengers")}>Avengers</div>
              </Tab>
              <Tab>
                <div onClick={() => handleTabClick("Star wars")}>Star Wars</div>
              </Tab>
              <Tab>
                <div onClick={() => handleTabClick("transformers")}>
                  Transfermers
                </div>
              </Tab>
            </TabList>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0">
            {toys?.map((toy) => (
              <TabCard key={toy._id} toy={toy}></TabCard>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default TabComponent;
