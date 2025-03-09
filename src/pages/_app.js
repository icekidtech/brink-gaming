import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <SuiClientProvider networks={{ mainnet: { url: getFullnodeUrl("mainnet") } }} defaultNetwork="mainnet">
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </QueryClientProvider>
    </SuiClientProvider>
  );
}
