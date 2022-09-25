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
    nftPort: "",
    nftStorage: "",
    covalent: "",
    graph: "",
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
      nftPort: "",
      nftStorage: "",
      covalent: "",
      graph: "",
      ...currentValues,
    };
    setPublisherForm(defaultValues);
  }, [services]);
  const setByos = async () => {
    const publisherFormEntry = "byos-" + JSON.stringify(publisherForm) + "-byos";
    console.log(publisherFormEntry);
    await merge({ description: publisherFormEntry });
    setServices(publisherForm);
  };
  const clearByos = async () => {
    await merge({ description: "" });
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
                  <Typography variant="h5">
                    Your Service keys have been safely saved on Ceramic. You can now use these credentials on any dApp
                    that integrates with the RM3 BYOS protocol.
                  </Typography>
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
                          name="graph"
                          variant="outlined"
                          type="password"
                          helperText="Visit https://thegraph.com/ to get started"
                          onChange={handleInputChange}
                          value={publisherForm.graph}
                        />
                        <TextField
                          id="covalent-private-key"
                          label="Covalent Private Key"
                          name="covalent"
                          variant="outlined"
                          type="password"
                          helperText="Visit https://www.covalenthq.com/ to get started"
                          onChange={handleInputChange}
                          value={publisherForm.covalent}
                        />
                        <TextField
                          id="nftport-private-key"
                          label="NFTPort Private Key"
                          name="nftPort"
                          variant="outlined"
                          type="password"
                          helperText="Visit https://www.nftport.xyz/ to get started"
                          onChange={handleInputChange}
                          value={publisherForm.nftPort}
                        />
                        <TextField
                          id="nftstorage-private-key"
                          label="nft.storage Private Key"
                          name="nftStorage"
                          variant="outlined"
                          type="password"
                          helperText="Visit https://nft.storage/ to get started"
                          onChange={handleInputChange}
                          value={publisherForm.nftStorage}
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
