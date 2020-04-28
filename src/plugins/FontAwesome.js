import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// icons
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faList, faSkullCrossbones, faPhoneAlt, faUsers, faSearch, faUser, faHeadset, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faList, faHtml5, faSkullCrossbones, faPhoneAlt, faUsers, faSearch, faUser, faHeadset, faPlus, faTrashAlt);

export default {
  install(Vue) {
    Vue.component('fa-icon', FontAwesomeIcon);
  }
}