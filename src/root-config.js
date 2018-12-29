import singleSpa from 'single-spa';

singleSpa.registerApplication(
  'navbar',
  () => System.import('navbar'),
  location => true,
);

singleSpa.registerApplication(
  'app-1',
  () => System.import('app-1'),
  location => location.hash.includes('app-1'),
);

singleSpa.registerApplication(
  'app-2',
  () => System.import('app-2'),
  location => location.hash.includes('app-2'),
);

singleSpa.start();
