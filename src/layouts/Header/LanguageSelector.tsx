import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Flag from 'react-world-flags';
import { motion } from 'framer-motion';

type Language = 'ko' | 'en' | 'zh' | 'vi';

const LANGUAGES: { code: Language; label: string; countryCode: string }[] = [
  { code: 'ko', label: '한국어', countryCode: 'KR' },
  { code: 'en', label: 'English', countryCode: 'US' },
  { code: 'zh', label: '中文', countryCode: 'CN' },
  { code: 'vi', label: 'Tiếng Việt', countryCode: 'VN' },
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
    <div className="relative flex items-center">
      <button
        onClick={toggleDropdown}
        className="border-border size-8 overflow-hidden rounded-full border"
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
          className="absolute top-12 left-1/2 z-10 flex -translate-x-1/2 flex-col gap-2 rounded-full bg-white p-1 shadow-md"
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
