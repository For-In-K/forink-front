import SupportCardWrapper from './info/SupportCardWrapper';
import BasicInfoWrapper from './info/BasicInfoWrapper';

const HomePage = () => {
  return (
    <main>
      <BasicInfoWrapper />
      <div className="h-25" />
      <SupportCardWrapper />
    </main>
  );
};

export default HomePage;
