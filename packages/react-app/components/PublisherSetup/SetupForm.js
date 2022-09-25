import React, { useState, useEffect, useContext } from "react";
import { Typography, Button, Box, Stack, TextField } from "@mui/material";
import { AssetsContext } from "../Contexts/AssetsContext";
import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";
import { CeramicConnect } from "./CeramicConnect";
import { useViewerRecord } from "@self.id/framework";
import { getByos } from "./getByos";

export default function SetupForm({ web3 }) {
  const [connection, connect, disconnect] = useViewerConnection();
  const connected = connection.status === "connected";
  const { merge, isLoading, content } = useViewerRecord("basicProfile");
  let didName, didDescription, byos;
  let hasByos = false;
  if (content) {
    didName = content.name;
    didDescription = content.description;
    byos = getByos(didDescription);
    if (byos) {
      hasByos = true;
    }
  }
  useEffect(() => {
    if (hasByos) {
      setPublisherForm(byos);
    }
  }, [hasByos]);
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
  const onSave = async () => {
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
  const setByos = async () => {
    const publisherFormEntry = "rm3-byos-" + btoa(JSON.stringify(publisherForm)) + "-rm3-byos";
    await merge({ description: publisherFormEntry });
    setServices(publisherForm);
  };
  const clearByos = async () => {
    await merge({ description: "" });
    // clearServices();
  };
  return (
    <>
      <CeramicConnect web3={web3} connection={connection} connect={connect} disconnect={disconnect} />
      {connected && (
        <>
          {content && (
            <>
              {hasByos && (
                <>
                  <Typography variant="h4">Congratulations, Your BYOS Setup Is Complete!</Typography>
                  <Button variant="contained" onClick={clearByos}>
                    Clear BYOS
                  </Button>
                </>
              )}
              {!hasByos && (
                <>
                  <>
                    <Box component="form" noValidate autoComplete="off">
                      <Stack spacing={2}>
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
                    <Button variant="contained" onClick={setByos}>
                      Create BYOS
                    </Button>
                  </>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
