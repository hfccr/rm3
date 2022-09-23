import * as React from "react";
import { Container } from "@mui/material";
import { useNftPortContracts, useNftPortTransactions } from "../../hooks/useNftPort";
import { AssetsContext } from "../Contexts/AssetsContext";
import { useContext } from "react";
import { Grid } from "./../Grid";

export function NftContracts({ address }) {
  const { services } = useContext(AssetsContext);
  const { nftPortPrivateKey } = services;
  const { data: contracts } = useNftPortContracts(address, nftPortPrivateKey);
  let rows = [];
  if (contracts) {
    rows = contracts.contracts;
  }
  return (
    <Container>
      <Grid dataList={rows} title="Contracts Owned" />
    </Container>
  );
}
