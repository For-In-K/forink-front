import ForinkMenu from './ForinkMenu';
import ServiceMenu from './ServiceMenu';
import SupportMenu from './SupportMenu';
import ContactMenu from './ContactMenu';

const Footer = () => {
  return (
    <footer className="min-h-footer text-text-primary bg-text-muted mt-36 flex w-full items-start justify-center">
      <div className="container mx-auto flex h-full min-w-0 flex-col gap-10 p-15">
        <div className="flex flex-col justify-start gap-15 lg:flex-row lg:items-start lg:gap-36">
          <ForinkMenu />
          <ServiceMenu />
          <SupportMenu />
          <ContactMenu />
        </div>
        <div className="border-t border-slate-500/30" />
        <p className="text-center text-sm text-slate-400">
          © 2025 ForinK. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
