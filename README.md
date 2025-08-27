# React + Vite + Lingui i18n Internationalization

A modern React application with internationalization (i18n) support using Lingui, featuring URL-based locale switching and smooth language transitions.

## Features

- 🌍 **Multi-language support**: English, Vietnamese, Korean, Japanese, French
- 🔗 **URL-based routing**: `/en`, `/vi`, `/ko`, `/ja`, `/fr`, `/ru`
- 🎯 **Smart locale detection**: Detects language from URL and localStorage
- ⚡ **No flash transitions**: Smooth language switching without content flashing
- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- 📱 **Responsive design**: Works seamlessly on all devices

## Usage

### Basic Translation Components

- **`Trans`**: For translating fixed strings and text with HTML elements
- **`Plural`**: For translating strings with quantities following language-specific plural rules

```tsx
// Basic text translation
<Trans>This is a fixed string</Trans>

// Text with HTML elements
<Trans>
  Edit <code>src/App.tsx</code> and save to test HMR
</Trans>

// Plural forms
<Plural 
  value={count} 
  one="# item" 
  other="# items" 
/>

// Complex plurals with full sentences
<Plural 
  value={messagesCount}
  one="There's # message in your inbox"
  other="There are # messages in your inbox"
/>
```

### Language Switching

The app includes a language switcher component with flag icons:

```tsx
import { LanguageSwitcher } from "./LanguageSwitcher";

function App() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your app content */}
    </div>
  );
}
```

## Setup and Development

### 1. Configure Languages

Add your target languages in [lingui.config.ts](./lingui.config.ts):

```typescript
const config: LinguiConfig = {
  locales: ["en", "vi", "ko", "ja", "fr"],
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src"],
    },
  ],
}
```

### 2. Wrap Translatable Content

Wrap strings that need translation with `Trans` or `Plural`:

```tsx
import { Trans, Plural } from "@lingui/react/macro";

function MyComponent() {
  return (
    <div>
      <h1>
        <Trans>Welcome to our app</Trans>
      </h1>
      <p>
        <Plural 
          value={userCount} 
          one="# user online" 
          other="# users online" 
        />
      </p>
    </div>
  );
}
```

### 3. Extract Translatable Strings

Extract all translatable strings from your code:

```bash
npm run extract
```

This command scans your code and updates the `.po` files in [src/locales](./src/locales) with new translatable strings.

### 4. Add Translations

Edit the `.po` files in the `src/locales` folder to add your translations:

```po
#: src/App.tsx:16
msgid "Welcome to our app"
msgstr "Chào mừng đến với ứng dụng của chúng tôi"

#: src/App.tsx:20
msgid "{userCount, plural, one {# user online} other {# users online}}"
msgstr "{userCount, plural, other {# người dùng trực tuyến}}"
```

### 5. Compile Translations

Compile the `.po` files into JavaScript modules:

```bash
npm run compile
```

This generates the necessary JavaScript files that your app can import and use.

## Project Structure

```
src/
├── locales/          # Translation files
│   ├── en.po        # English translations
│   ├── vi.po        # Vietnamese translations
│   ├── ko.po        # Korean translations
│   ├── ja.po        # Japanese translations
│   └── fr.po        # French translations
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── DemoLongContent.tsx
├── i18n.ts          # i18n configuration
├── route.tsx        # Router configuration
├── LanguageSwitcher.tsx  # Language selector component
└── main.tsx         # App entry point
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Lingui** - Internationalization framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **TypeScript** - Type safety
