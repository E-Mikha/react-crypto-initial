import { createContext } from "react";

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false,
});
