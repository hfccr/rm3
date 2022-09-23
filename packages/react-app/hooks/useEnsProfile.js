import { useState, useEffect } from "react";
import { ENS } from "@ensdomains/ensjs";

const ENSInstance = new ENS();

export const useEnsProfile = (provider, address) => {
  const [ensProfile, setEnsProfile] = useState({
    loading: false,
    success: false,
    error: false,
  });
  useEffect(() => {
    const loadProfile = async () => {
      setEnsProfile({
        loading: true,
        success: false,
        error: false,
      });
      if (!ENSInstance.provider) {
        await ENSInstance.setProvider(provider);
      }
      try {
        const profile = await ENSInstance.getProfile(address, {
          texts: true,
          coinTypes: true,
          contentHash: true,
        });
        console.log("Profile", profile);
        setEnsProfile({
          loading: false,
          success: true,
          error: false,
          data: profile,
        });
      } catch (e) {
        console.log(e);
        setEnsProfile({
          loading: false,
          success: false,
          error: true,
        });
      }
    };
    if (address) {
      loadProfile();
    }
  }, [address]);
  return ensProfile;
};
