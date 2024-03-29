import { useState, useEffect } from "react";
import { Layout, Space } from "antd";
import { Switch } from "antd";
import {
  BulbOutlined,
  BulbFilled,
  GithubFilled,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  ConfigProvider,
  theme,
  Card,
  Button,
  Input,
  List,
  DatePicker,
  Select,
} from "antd";
import DynamicTable from "./Journal.jsx";
import DynamicLedger from "./Ledger.jsx";
import DynamicTrialBalance from "./Trialbalance.jsx";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [inputValueAssets, setInputValueAssets] = useState("");
  const [listItemsAssets, setListItemsAssets] = useState([]);
  const [inputValueLiab, setInputValueLiab] = useState("");
  const [listItemsLiab, setListItemsLiab] = useState([]);
  const [inputValueOE, setInputValueOE] = useState("");
  const [listItemsOE, setListItemsOE] = useState([]);
  const [journalData, setJournalData] = useState([]);


  const handleClearData = () => {
    // Clear data from local storage and state
    localStorage.clear();
    setListItemsAssets([]);
    setListItemsLiab([]);
    setListItemsOE([]);
  };

  const handleInputChange = (e) => {
    setInputValueAssets(e.target.value);
  };

  const handleAddItem = () => {
    if (
      inputValueAssets &&
      inputValueAssets !== "" &&
      !listItemsAssets.includes(inputValueAssets)
    ) {
      setListItemsAssets([...listItemsAssets, inputValueAssets]);
      setInputValueAssets("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedList = [...listItemsAssets];
    updatedList.splice(index, 1);
    setListItemsAssets(updatedList);
  };

  const handleAddItem2 = () => {
    if (
      inputValueLiab &&
      inputValueLiab !== "" &&
      !listItemsLiab.includes(inputValueLiab)
    ) {
      setListItemsLiab([...listItemsLiab, inputValueLiab]);
      setInputValueLiab("");
    }
  };

  const handleRemoveItem2 = (index) => {
    const updatedList = [...listItemsLiab];
    updatedList.splice(index, 1);
    setListItemsLiab(updatedList);
  };

  const handleAddItem3 = () => {
    if (
      inputValueOE &&
      inputValueOE !== "" &&
      !listItemsOE.includes(inputValueOE)
    ) {
      setListItemsOE([...listItemsOE, inputValueOE]);
      console.log(inputValueOE);
      setInputValueOE("");
    }
  };

  const handleRemoveItem3 = (index) => {
    console.log(index);

    const updatedList = [...listItemsOE];
    updatedList.splice(index, 1);
    setListItemsOE(updatedList);
  };

  const handleThemeChange = (checked) => {
    setIsDarkMode(checked);
  };

  const handleJournalData = (data) => {
    setJournalData(data);
    console.log(data);
  };

  return (
    <Layout className="flex flex-col w-screen bg-red-400">
      <Content className="flex flex-col w-full px-5 items-center ">
        <p className="text-2xl font-bold w-fit px-2 py-1 mt-10 mb-5 text">
          Generate Ledgers  
        </p>
        <div className="flex flex-row justify-around w-full">
          <div className="flex flex-col w-100 pt-10 justify-around">
            <div className="bg-white rounded-md shadow-md px-5 py-2 mb-5">
              <div className="flex flex-col text-xl font-bold">
                <span className="mb-4 ml-auto mr-auto">Assets</span>
                <div className="rounded-md">
                  <div>
                    <Input
                      placeholder="Enter an Asset"
                      value={inputValueAssets}
                      onChange={handleInputChange}
                      onPressEnter={handleAddItem}
                      addonAfter={null}
                      className="text-lg font-semibold shadow-md mb-2"
                    />
                    <ul>
                      {listItemsAssets.length > 0 &&
                        listItemsAssets.map((oe, index) => {
                          return (
                            <li>
                              <p>
                                <span className="font-normal p-2"> {oe} </span>
                                {/* <Button
                                  type="text"
                                  icon={<DeleteOutlined />}
                                  onClick={() => handleRemoveItem3(index)}
                                /> */}
                              </p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>

              {/* --------------------------------------------- */}

              <div className="flex flex-col text-xl font-bold mt-5">
                <span className="mb-4 ml-auto mr-auto">Liability</span>
                <div className="rounded-md">
                  <div>
                    <Input
                      placeholder="Enter a Liability"
                      value={inputValueLiab}
                      onChange={(e) => setInputValueLiab(e.target.value)}
                      onPressEnter={handleAddItem2}
                      addonAfter={null}
                      className="text-lg font-semibold shadow-md mb-2"
                    />
                    <ul>
                      {listItemsLiab.length > 0 &&
                        listItemsLiab.map((oe, index) => {
                          return (
                            <li>
                              <p>
                                <span className="font-normal p-2"> {oe} </span>
                                {/* <Button
                                  type="text"
                                  icon={<DeleteOutlined />}
                                  onClick={() => handleRemoveItem3(index)}
                                /> */}
                              </p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>


              {/* ------------------------------------------------ */}

              <div className="flex flex-col text-xl font-bold mt-5">
                <span className="mb-4 ml-auto mr-auto">Owner's Equity</span>
                <div className="rounded-md">
                  <div>
                    <Input
                      placeholder="Enter an Owner's Equity"
                      value={inputValueOE}
                      onChange={(e) => setInputValueOE(e.target.value)}
                      onPressEnter={handleAddItem3}
                      addonAfter={null}
                      className="text-lg font-semibold shadow-md mb-2"
                    />
                    <ul>
                      {listItemsOE.length > 0 &&
                        listItemsOE.map((oe, index) => {
                          return (
                            <li>
                              <p className="font-normal p-2 ml-auto mr-auto">
                                <span className="font-normal p-2 ml-auto mr-auto"> {oe} </span>
                                {/* <Button
                                  type="text"
                                  icon={<DeleteOutlined />}
                                  onClick={() => handleRemoveItem3(index)}
                                /> */}
                              </p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
          <div className="flex flex-row mt-5">
            {/* <button onClick={handleSaveData} className="bg-green-500 w-full pl-10 pr-10 py-5 rounded-md text-white font-bold">
            
              Save
            </button> */}
            {/* <button
              onClick={handleClearData}
              className="btn  btn-error"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1024 1024"
              >
                <defs></defs>
                <path
                  d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"
                  fill="currentColor"
                ></path>
              </svg>
              Clear All
            </button> */}
          </div>

          <div className="flex flex-col w-full min-h-96 items-center bg-red-400">
            <p className="text-2xl  font-bold w-1/2 px-2 py-1 mt-10 mb-5 text ml-auto mr-auto">
              General Journal
            </p>

            <div className=" rounded-md flex flex-col items-center w-full">
              <DynamicTable
                assets={listItemsAssets}
                liabilities={listItemsLiab}
                ownersEquity={listItemsOE}
                data={handleJournalData}
              />
            </div>

            <p className="text-2xl font-bold  text-left w-11/12 px-2 py-1 mt-10 mb-5 text">
              Ledger
            </p>
            <div className="text-black rounded-md  w-full px-32">
              {journalData.length > 0 ? (
                <div className="rounded-lg bg-white p-10 shadow-lg">
                  <DynamicLedger data={journalData} />
                </div>
              ) : (
                <p className="text-2xl text-gray-500 font-bold">No Data</p>
              )}
            </div>

            <p className="text-2xl text-left font-bold w-11/12 px-2 py-1 mt-10 mb-5 text">
              Trial Balance
            </p>
            <div className="text-black rounded-md  w-full px-32 mb-10">
              {journalData.length > 0 ? (
                <div className="rounded-lg bg-white p-10 shadow-lg">
                  <DynamicTrialBalance data={journalData} />
                </div>
              ) : (
                <p className="text-2xl text-gray-500 font-bold">No Data 2</p>
              )}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
