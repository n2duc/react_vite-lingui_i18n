import { useEffect, useState } from "react";
import Inbox from "./Inbox";
import { loadCatalog } from "./i18n";
import { Trans, Plural } from "@lingui/react/macro";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useParams } from "react-router";
import { Button } from "./components/ui/button";
import DemoLongContent from "./components/DemoLongContent";

function App() {
  const [count, setCount] = useState(0);
  const { locale } = useParams();

  useEffect(() => {
    if (locale) {
      loadCatalog(locale);
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <Button onClick={() => setCount((count) => count + 1)} variant="outline">
            <Plural value={count} one="# month" other="# months" />
          </Button>
          <DemoLongContent />
        </div>
        <p>
          <Trans>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
        <LanguageSwitcher />
      </div>
      <Inbox />
    </div>
  );
}

export default App;
