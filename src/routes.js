// routes.js

import home from './components/home.vue';
import AddNew from './components/AddNew.vue';
import EditDetails from './components/EditDetails.vue';

const routes = [
    { path: '/', component: home },
    { path: '/AddNew', component: AddNew, name:'Add New' },
    { path: '/EditDetails', component: EditDetails, name:'EditDetails'},
];



export default routes;
