import singleSpa from 'single-spa';

singleSpa.registerApplication(
  'navbar',
  () => import('navbar'),
  location => true,
);

singleSpa.registerApplication(
  'app-1',
  () => import('app-1'),
  location => location.hash.includes('app-1'),
);

singleSpa.registerApplication(
  'app-2',
  () => import('app-2'),
  location => location.hash.includes('app-2'),
);

singleSpa.start();
