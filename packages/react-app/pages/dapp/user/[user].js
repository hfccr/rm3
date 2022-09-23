import React, { useEffect } from "react";
import { Web3Consumer } from "../../../helpers/Web3Context";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { useEnsProfile } from "./../../../hooks/useEnsProfile";
import { Stack, Container, Button } from "@mui/material";
import { UserCard } from "./../../../components/User/UserCard";
import { NftTransactions } from "../../../components/User/NftTransactions";
import { NftContracts } from "../../../components/User/NftContracts";
import { NftOwned } from "../../../components/User/NftOwned";
import { TokenBalances } from "../../../components/User/TokenBalances";

function Web3User({ web3 }) {
  const { mainnetProvider } = web3;
  const router = useRouter();
  const user = router.query.user;
  const { loading, success, error, data: ensProfile } = useEnsProfile(mainnetProvider, user);
  const onBack = () => {
    router.push({
      pathname: "/dapp/user",
      query: {},
    });
  };
  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <Stack direction="row" spacing={4} justifyContent="flex-start" alignItems="center">
        <Button variant="contained" onClick={onBack} sx={{ width: 200 }}>
          Search Another User
        </Button>
        <Typography variant="h4">{user}</Typography>
      </Stack>
      <Stack direction="row" spacing={4} sx={{ marginTop: 4 }}>
        <UserCard address={user} ensProfile={ensProfile} />
        <Stack direction="column" spacing={3} sx={{ width: "100%" }}>
          <NftTransactions address={user} />
          <NftOwned address={user} />
          <NftContracts address={user} />
          <TokenBalances address={user} />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Web3Consumer(Web3User);
