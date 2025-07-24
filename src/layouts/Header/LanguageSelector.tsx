import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Flag from 'react-world-flags';
import { motion } from 'framer-motion';

type Language = 'en' | 'ko';

const LANGUAGES: { code: Language; label: string; countryCode: string }[] = [
  { code: 'en', label: 'English', countryCode: 'US' },
  { code: 'ko', label: '한국어', countryCode: 'KR' },
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
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="size-10 min-w-10 overflow-hidden rounded-full"
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
          className="absolute z-10 mt-2 flex flex-col gap-2 rounded-full bg-white shadow-md"
        >
          {LANGUAGES.filter((l) => l.code !== currentLang.code).map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className="hover:ring-primary size-10 min-w-10 overflow-hidden rounded-full transition hover:ring-2"
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
