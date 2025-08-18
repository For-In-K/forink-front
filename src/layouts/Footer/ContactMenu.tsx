import { useTranslation } from 'react-i18next';
import { Mail, ClockFading } from 'lucide-react';

const ContactMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <p className="text-body mb-3 font-medium text-white">
        {t('footer.contact.title')}
      </p>
      <ul className="space-y-2 text-sm text-slate-400">
        <li>
          <div className="flex items-center">
            <Mail className="mr-2 inline h-4" />
            forinkbysync@gmail.com
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ClockFading className="mr-2 inline h-4" />
            {t('footer.contact.schedule')}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactMenu;
