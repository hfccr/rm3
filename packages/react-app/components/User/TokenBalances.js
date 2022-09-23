import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useCovalentTokenBalances } from "../../hooks/useCovalent";
import { AssetsContext } from "../Contexts/AssetsContext";
import { useContext } from "react";
import { Grid } from "./../Grid";

export function TokenBalances({ address }) {
  const { services } = useContext(AssetsContext);
  const { covalentPrivateKey } = services;
  const { data: balances } = useCovalentTokenBalances(address, covalentPrivateKey);
  let rows = [];
  if (balances) {
    rows = balances.data.items;
  }
  return (
    <Container>
      <Grid dataList={rows} title="Token Balances" />
    </Container>
  );
}
