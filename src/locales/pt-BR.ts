import component from './pt-BR/component';
import globalHeader from './pt-BR/globalHeader';
import menu from './pt-BR/menu';
import pages from './pt-BR/pages';
import pwa from './pt-BR/pwa';
import settingDrawer from './pt-BR/settingDrawer';
import settings from './pt-BR/settings';

export default {
  'navBar.lang': 'Idiomas',
  'layout.user.link.help': 'Ajuda',
  'layout.user.link.privacy': 'Política de privacidade',
  'layout.user.link.terms': 'Termos de serviços',
  'app.preview.down.block': 'Download this page to your local project',
  'app.copyright.produced': 'Criado Por Welson Play',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
