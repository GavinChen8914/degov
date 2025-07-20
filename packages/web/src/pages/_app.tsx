import "../../globals.css";
import "../../markdown-body.css";
import { ConditionalLayout } from "../components/conditional-layout";
import { ToastContainer } from "../components/toast-container";
import { TooltipProvider } from "../components/ui/tooltip";
import { BlockDataProvider } from "../providers/block.provider";
import { ConfigProvider } from "../providers/config.provider";
import { DAppProvider } from "../providers/dapp.provider";
import { NextThemeProvider } from "../providers/theme.provider";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextThemeProvider>
      <ConfigProvider>
        <DAppProvider>
          <BlockDataProvider>
            <TooltipProvider delayDuration={0}>
              <ConditionalLayout>
                <Component {...pageProps} />
              </ConditionalLayout>
              <ToastContainer />
            </TooltipProvider>
          </BlockDataProvider>
        </DAppProvider>
      </ConfigProvider>
    </NextThemeProvider>
  );
} 