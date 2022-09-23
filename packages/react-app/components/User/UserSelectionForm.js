import React, { useState } from "react";
import { Container, Button, Box, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";

export function UserSelectionForm({ web3 }) {
  const router = useRouter();
  const { address } = web3;
  const [user, setUser] = useState(address ? address : "");
  const handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    setUser(value);
  };
  const onView = () => {
    router.push({
      pathname: "/dapp/user/[user]",
      query: { user },
    });
  };
  return (
    <Container maxWidth="xl" sx={{ padding: 6 }}>
      <Box component="form" noValidate autoComplete="off">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <TextField
            sx={{ width: "md" }}
            id="user-address"
            label="User Address"
            name="user"
            variant="outlined"
            type="text"
            helperText="Please enter the address of the user that you want to view"
            onChange={handleInputChange}
            value={user}
          />
          <Button variant="contained" onClick={onView} sx={{ width: 100 }}>
            View
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
