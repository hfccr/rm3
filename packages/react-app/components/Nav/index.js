import React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function MenuItem({ href, title }) {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link href={href}>{title}</Link>
    </Typography>
  );
}

export function Nav({ web3 }) {
  const { web3Modal } = web3;
  let showMenu = false;
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      showMenu = true;
    }
  }
  return (
    <>
      {showMenu && (
        <>
          <MenuItem href="/dapp/setup" title="Setup" />
          <MenuItem href="/dapp/dashboards" title="Dashboards" />
          <MenuItem href="/dapp/campaigns" title="Campaigns" />
          <MenuItem href="/dapp/user" title="User" />
          <MenuItem href="/dapp/templates" title="Templates" />
          <MenuItem href="/dapp/segments" title="Segments" />
          <MenuItem href="/dapp/publish" title="Publish" />
          <MenuItem href="/dapp/discover" title="Discover" />
        </>
      )}
    </>
  );
}
