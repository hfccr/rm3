import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://gateway.thegraph.com/api";

export const useGraph = (graphId, query, apiKey) => {
  const [graph, setGraph] = useState({
    loading: false,
    success: false,
    error: false,
  });
  useEffect(() => {
    const loadGraph = async () => {
      setGraph({
        loading: true,
        success: false,
        error: false,
      });
      try {
        const queryUrl = `${BASE_URL}/${apiKey}/subgraphs/id/${graphId}`;
        const { data: graph, status } = await axios.post(
          queryUrl,
          {
            query,
          },
          {},
        );

        if (status !== 200) {
          throw new Error("Invalid response status");
        }
        setGraph({
          loading: false,
          success: true,
          error: false,
          data: graph,
        });
      } catch (e) {
        setGraph({
          loading: false,
          success: false,
          error: true,
        });
      }
    };
    if (query && graphId && apiKey) {
      loadGraph();
    }
  }, [query, graphId, apiKey]);
  return graph;
};
