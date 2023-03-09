import React from 'react';
// import { useState, useEffect } from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import FormInput from './FormInput';
// import SheetButton from './SheetButton';

// // This is a wrapper for google.script.run that lets us use promises.
// import { serverFunctions } from '../../utils/serverFunctions';

const SheetEditor1 = () => {
  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //   // Call a server global function here and handle the response with .then() and .catch()
  //   serverFunctions.getSheetsData().then(setNames).catch(alert);
  // }, []);

  // const deleteSheet = (sheetIndex) => {
  //   serverFunctions.deleteSheet(sheetIndex).then(setNames).catch(alert);
  // };

  // const setActiveSheet = (sheetName) => {
  //   serverFunctions.setActiveSheet(sheetName).then(setNames).catch(alert);
  // };

  // // You can also use async/await notation for server calls with our server wrapper.
  // // (This does the same thing as .then().catch() in the above handlers.)
  // const submitNewSheet = async (newSheetName) => {
  //   try {
  //     const response = await serverFunctions.addSheet(newSheetName);
  //     setNames(response);
  //   } catch (error) {
  //     // eslint-disable-next-line no-alert
  //     alert(error);
  //   }
  // };

  return (
    <div>
      <p>
        {/* <b style={{width:"100%", fontWeight: "bold", alignSelf:"center", justifySelf:"center", textAlign:"center"}}>☀️ Email-Validator ADD ON ☀️</b> */}
        <b>Manage Credits</b>
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
        fugit provident. Consectetur, eos alias! Obcaecati dolor, temporibus
        quos quibusdam alias rerum enim quam eos corrupti, sapiente corporis
        blanditiis error ex!
      </p>
    </div>
  );
};

export default SheetEditor1;
