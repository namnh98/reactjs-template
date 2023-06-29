import AboutPage from '../pages/aboutpage';
import HomePage from '../pages/homepage';
import ShopPage from '../pages/shoppage';

export const ROUTE_ID = {
  HOME: 'HomeRoute',
  ABOUT: 'AboutRoute',
  SHOP: 'ShopRoute',
};

export const PATHNAME_LIST = {
  HOME: '/',
  ABOUT: '/about',
  SHOP: '/shop',
};

export const NAME_LAYOUT = {
  DEFAULT_LAYOUT: 'DefaultLayout',
  MAIN_LAYOUT: 'MainLayout',
};

export const DEFAULT_PATHNAME = PATHNAME_LIST.HOME;

// Define routes
export const HomeRoute = {
  id: ROUTE_ID.HOME,
  path: PATHNAME_LIST.HOME,
  component: HomePage,
};

export const AboutRoute = {
  id: ROUTE_ID.ABOUT,
  path: PATHNAME_LIST.ABOUT,
  component: AboutPage,
  layout: null,
};

export const ShopRoute = {
  id: ROUTE_ID.SHOP,
  path: PATHNAME_LIST.SHOP,
  component: ShopPage,
  layout: null,
};

export const appRoute = [HomeRoute, AboutRoute, ShopRoute];
