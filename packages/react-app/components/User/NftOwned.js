import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useNftPortNfts } from "../../hooks/useNftPort";
import { AssetsContext } from "../Contexts/AssetsContext";
import { useContext } from "react";
import { Grid } from "./../Grid";

export function NftOwned({ address }) {
  const { services } = useContext(AssetsContext);
  const { nftPortPrivateKey } = services;
  const { data: contracts } = useNftPortNfts(address, nftPortPrivateKey);
  let rows = [];
  if (contracts) {
    rows = contracts.contracts;
  }
  return (
    <Container>
      <Grid dataList={rows} title="NFTs Owned" />
    </Container>
  );
}
