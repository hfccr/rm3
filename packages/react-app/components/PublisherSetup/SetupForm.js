import React, { useState, useEffect, useContext } from "react";
import { Button, Box, Stack, TextField } from "@mui/material";
import { sendNotification } from "./../../helpers/sendNotification";
import { AssetsContext } from "../Contexts/AssetsContext";

export default function SetupForm({ web3 }) {
  const { services, clearServices, setServices } = useContext(AssetsContext);
  let currentValues = services;
  if (typeof currentValues !== "object") {
    currentValues = {};
  }
  const defaultValues = {
    nftPortPrivateKey: "",
    covalentPrivateKey: "",
    graphPrivateKey: "",
    infuraPrivateKey: "",
    alchemyPrivateKey: "",
    ...currentValues,
  };
  const [publisherForm, setPublisherForm] = useState(defaultValues);
  const onSave = () => {
    setServices(publisherForm);
  };
  const handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;
    setPublisherForm({
      ...publisherForm,
      [name]: value,
    });
  };
  const onClear = () => {
    clearServices();
  };
  useEffect(() => {
    let currentValues = services;
    if (typeof currentValues !== "object") {
      currentValues = {};
    }
    const defaultValues = {
      nftPortPrivateKey: "",
      covalentPrivateKey: "",
      graphPrivateKey: "",
      infuraPrivateKey: "",
      alchemyPrivateKey: "",
      ...currentValues,
    };
    setPublisherForm(defaultValues);
  }, [services]);
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Stack spacing={2}>
          <TextField
            id="nftport-private-key"
            label="NFTPort Private Key"
            name="nftPortPrivateKey"
            variant="outlined"
            type="password"
            helperText="Please enter your NFTPort private key"
            onChange={handleInputChange}
            value={publisherForm.nftPortPrivateKey}
          />
          <TextField
            id="covalent-private-key"
            label="Covalent Private Key"
            name="covalentPrivateKey"
            variant="outlined"
            type="password"
            helperText="Please enter your Covalent private key"
            onChange={handleInputChange}
            value={publisherForm.covalentPrivateKey}
          />
          <TextField
            id="graph-private-key"
            label="The Graph Private Key"
            name="graphPrivateKey"
            variant="outlined"
            type="password"
            helperText="Please enter your Graph private key"
            onChange={handleInputChange}
            value={publisherForm.graphPrivateKey}
          />
          <TextField
            id="infura-private-key"
            label="Infura Private Key"
            name="infuraPrivateKey"
            variant="outlined"
            type="password"
            helperText="Please enter your Infura private key"
            onChange={handleInputChange}
            value={publisherForm.infuraPrivateKey}
          />
          <TextField
            id="alchemy-private-key"
            label="Alchemy Private Key"
            name="alchemyPrivateKey"
            variant="outlined"
            type="password"
            helperText="Please enter your Alchemy private key"
            onChange={handleInputChange}
            value={publisherForm.alchemyPrivateKey}
          />
        </Stack>
      </Box>
      <Button variant="contained" onClick={onSave}>
        Save
      </Button>
      <Button variant="contained" onClick={onClear}>
        Clear
      </Button>
      <Button variant="contained">Import</Button>
    </>
  );
}
