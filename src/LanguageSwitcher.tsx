import { Trans } from "@lingui/react/macro";
import { useLocation, useNavigate, useParams } from "react-router";
import { getDefaultLocale } from "./route";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CircleFlagLanguage } from "react-circle-flags";

const languages = [
  { code: "en", name: "English" },
  { code: "vi", name: "Vietnamese" },
  { code: "ko", name: "Korean" },
  { code: "ja", name: "Japanese" },
  { code: "fr", name: "French" },
];

export function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  const { locale } = useParams();

  const switchLanguage = (newLocale: string) => {
    const path = location.pathname.replace(`/${locale}`, `/${newLocale}`);
    localStorage.setItem("locale", newLocale);
    navigate(path);
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <label htmlFor="language-select">
        <Trans>Language:</Trans>{" "}
      </label>
      <Select onValueChange={(value) => switchLanguage(value)} defaultValue={locale || getDefaultLocale()}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                <CircleFlagLanguage languageCode={language.code} />
              </div>
              {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
