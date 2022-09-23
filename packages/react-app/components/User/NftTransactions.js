import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useNftPortTransactions } from "../../hooks/useNftPortTransactions";
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
      <Grid dataList={tx} />
    </Container>
  );
}
