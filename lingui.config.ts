import type { LinguiConfig } from "@lingui/conf"

const config: LinguiConfig = {
  locales: ["en", "vi", "ja", "ko", "fr"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src"],
    },
  ],
  format: "po",
}

export default config