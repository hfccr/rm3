import * as React from "react";
import { Container } from "@mui/material";
import { useNftPortTransactions } from "../../hooks/useNftPort";
import { AssetsContext } from "../Contexts/AssetsContext";
import { useContext } from "react";
import { Grid } from "./../Grid";

export function NftTransactions({ address }) {
  const { services } = useContext(AssetsContext);
  const { nftPortPrivateKey } = services;
  const { data: transactions } = useNftPortTransactions(address, nftPortPrivateKey);
  let tx = [];
  if (transactions) {
    tx = transactions.transactions;
  }
  return (
    <Container>
      <Grid dataList={tx} title="Transactions" />
    </Container>
  );
}
