import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Flag from 'react-world-flags';
import { motion } from 'framer-motion';

type Language = 'eng' | 'kor' | 'chi' | 'vie';

const LANGUAGES: { code: Language; label: string; countryCode: string }[] = [
  { code: 'eng', label: 'English', countryCode: 'US' },
  { code: 'kor', label: '한국어', countryCode: 'KR' },
  { code: 'chi', label: '中文', countryCode: 'CN' },
  { code: 'vie', label: 'Tiếng Việt', countryCode: 'VN' },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleChange = (lang: Language) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative flex">
      <button
        onClick={toggleDropdown}
        className="border-border size-10 min-w-10 overflow-hidden rounded-full border"
      >
        <Flag
          code={currentLang.countryCode}
          className="h-full w-full object-cover"
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 z-10 mt-12 flex -translate-x-1/2 flex-col gap-2 rounded-full bg-white p-1 shadow-md"
        >
          {LANGUAGES.filter((l) => l.code !== currentLang.code).map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className="hover:ring-primary size-9 overflow-hidden rounded-full shadow-xs transition hover:ring-2"
            >
              <Flag
                code={lang.countryCode}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSelector;
