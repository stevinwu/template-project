import Vue from "vue";
import {
  Spin,
  Button,
  Layout,
  Header,
  Content,
  Footer,
  Menu,
  MenuItem,
  Submenu,
  Input,
  Icon,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Message,
  Drawer 
} from "view-design";

Vue.component("Button", Button);
Vue.component("Layout", Layout);
Vue.component("Header", Header);
Vue.component("Content", Content);
Vue.component("Footer", Footer);
Vue.component("Menu", Menu);
Vue.component("MenuItem", MenuItem);
Vue.component("Submenu", Submenu);
Vue.component("Input", Input);
Vue.component("Icon", Icon);
Vue.component("Dropdown", Dropdown);
Vue.component("DropdownMenu", DropdownMenu);
Vue.component("DropdownItem", DropdownItem);
Vue.component("Avatar", Avatar);
Vue.component("Drawer", Drawer);

Vue.prototype.$Spin = Spin;
Vue.prototype.$Message = Message;
