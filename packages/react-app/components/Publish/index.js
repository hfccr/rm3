import React, { useContext, useState } from "react";
import { Stack, Button, Container, Typography } from "@mui/material";
import { NFTStorage } from "nft.storage/dist/bundle.esm.min.js";
import { AssetsContext } from "./../Contexts/AssetsContext";

const dataURI =
  "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7";

export function Publish() {
  const [ipfsCid, setIpfsCid] = useState("");
  const { services, dashboards, templates, segments, campaigns } = useContext(AssetsContext);
  const publishOnIpfs = async () => {
    const { nftStorage } = services;
    const nftClient = new NFTStorage({ token: nftStorage });
    const blob = await (await fetch(dataURI)).blob();
    const nft = {
      image: blob,
      name: "RM3",
      description: "Web3 CRM for Web3",
      properties: {
        dashboards,
        templates,
        segments,
        campaigns,
      },
    };
    const metadata = await nftClient.store(nft);
    setIpfsCid(metadata.url);
  };
  const publishOnChain = async () => {};
  return (
    <Container maxWidth="xl" sx={{ padding: 4 }}>
      <Stack direction="column" spacing={4}>
        <Typography variant="h4">Publish Your RM3</Typography>
        <Stack direction="row" spacing={2}>
          <Typography>Dashboards: {dashboards.length}</Typography>
          <Typography>Campaigns: {campaigns.length}</Typography>
          <Typography>Templates: {templates.length}</Typography>
          <Typography>Segments: {segments.length}</Typography>
        </Stack>
        {!ipfsCid && (
          <Button variant="contained" onClick={publishOnIpfs} sx={{ width: 300 }}>
            Publish On IPFS
          </Button>
        )}
        {ipfsCid && <Typography>RM3 Published On IPFS At {ipfsCid}</Typography>}
        {ipfsCid && (
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={publishOnChain} sx={{ width: 300 }}>
              Mint On Polygon
            </Button>
            <Button variant="contained" onClick={publishOnChain} sx={{ width: 300 }}>
              Mint On Optimistic Goerli
            </Button>
            <Button variant="contained" onClick={publishOnChain} sx={{ width: 300 }}>
              Mint On Aurora
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
