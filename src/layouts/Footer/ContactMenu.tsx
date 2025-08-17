import { Mail, ClockFading } from 'lucide-react';

const ContactMenu = () => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-body mb-3 font-medium text-white">연락처</p>
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
            평일 09:00-18:00
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactMenu;
