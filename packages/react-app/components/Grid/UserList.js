import * as React from "react";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Blockies from "react-blockies";
import { Web3Consumer } from "../../helpers/Web3Context";
import { useEnsProfile } from "../../hooks/useEnsProfile";
import { UserCard } from "../User/UserCard";
import Paper from "@mui/material/Paper";

const UserRow = ({ user, web3 }) => {
  const { mainnetProvider } = web3;
  const { loading, success, error, data: ensProfile } = useEnsProfile(mainnetProvider, user);
  return (
    <Grid item xs={4}>
      <UserCard address={user} ensProfile={ensProfile} miniMode={true} />
    </Grid>
  );
};

const UserRowWeb3 = Web3Consumer(UserRow);

export function UserList({ users, hideMessages }) {
  const userList = users.map((user, index) => <UserRowWeb3 user={user} key={index} hideMessages={hideMessages} />);
  return (
    <Container justifyContent="center" alignItems="center" maxWidth="xl">
      <Grid container spacing={2}>
        {userList}
      </Grid>
    </Container>
  );
}
