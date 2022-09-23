import { useState, useEffect } from "react";
import axios from "axios";

const NFTPORT_BASE_URL = "https://api.nftport.xyz";

export const useNftPortTransactions = (address, apiKey) => {
  const [nftTransactions, setNftTransactions] = useState({
    loading: false,
    success: false,
    error: false,
  });
  useEffect(() => {
    const loadTransactions = async () => {
      setNftTransactions({
        loading: true,
        success: false,
        error: false,
      });
      try {
        const queryUrl = `${NFTPORT_BASE_URL}/v0/transactions/accounts/${address}`;
        const { data: transactions, status } = await axios.get(queryUrl, {
          params: { chain: "ethereum", type: "all" },
          headers: {
            Authorization: apiKey,
          },
        });
        if (status !== 200) {
          throw new Error("Invalid response status");
        }
        setNftTransactions({
          loading: false,
          success: true,
          error: false,
          data: transactions,
        });
      } catch (e) {
        setNftTransactions({
          loading: false,
          success: false,
          error: true,
        });
      }
    };
    if (address && apiKey) {
      loadTransactions();
    }
  }, [address, apiKey]);
  return nftTransactions;
};

export const useNftPortContracts = (address, apiKey) => {
  const [contracts, setContracts] = useState({
    loading: false,
    success: false,
    error: false,
  });
  useEffect(() => {
    const loadContracts = async () => {
      setContracts({
        loading: true,
        success: false,
        error: false,
      });
      try {
        const queryUrl = `${NFTPORT_BASE_URL}/v0/accounts/contracts/${address}`;
        const { data: transactions, status } = await axios.get(queryUrl, {
          params: { chain: "ethereum", type: "owns_contracts" },
          headers: {
            Authorization: apiKey,
          },
        });
        if (status !== 200) {
          throw new Error("Invalid response status");
        }
        setContracts({
          loading: false,
          success: true,
          error: false,
          data: transactions,
        });
      } catch (e) {
        setContracts({
          loading: false,
          success: false,
          error: true,
        });
      }
    };
    if (address && apiKey) {
      loadContracts();
    }
  }, [address, apiKey]);
  return contracts;
};

export const useNftPortNfts = (address, apiKey) => {
  const [contracts, setContracts] = useState({
    loading: false,
    success: false,
    error: false,
  });
  useEffect(() => {
    const loadContracts = async () => {
      setContracts({
        loading: true,
        success: false,
        error: false,
      });
      try {
        const queryUrl = `${NFTPORT_BASE_URL}/v0/accounts/contracts/${address}`;
        const { data: transactions, status } = await axios.get(queryUrl, {
          params: { chain: "ethereum", type: "owns_contract_nfts" },
          headers: {
            Authorization: apiKey,
          },
        });
        if (status !== 200) {
          throw new Error("Invalid response status");
        }
        setContracts({
          loading: false,
          success: true,
          error: false,
          data: transactions,
        });
      } catch (e) {
        setContracts({
          loading: false,
          success: false,
          error: true,
        });
      }
    };
    if (address && apiKey) {
      loadContracts();
    }
  }, [address, apiKey]);
  return contracts;
};
