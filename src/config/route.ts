import Index from '../pages/Index.vue';
import Team from '../pages/TeamPage.vue';
import UserPage from '../pages/UserPage.vue';
import SearchPage from '../pages/SearchPage.vue';
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserRegisterPage from "../pages/UserRegisterPage.vue";
import TeamIntroPage from "../pages/TeamIntroPage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/team', title:'找队伍', component: Team },
    { path: '/team/introduce', title:'队伍详情', component: TeamIntroPage },
    { path: '/team/update', title:'队伍信息修改', component: TeamUpdatePage },
    { path: '/team/add', title:'创建队伍', component: TeamAddPage },
    { path: '/user', title:'个人页面', component: UserPage },
    { path: '/search', title:'搜索', component: SearchPage },
    { path: '/user/listByTag', title:'搜索结果', component: SearchResultPage },
    { path: '/user/edit', title:'编辑信息', component: UserEditPage },
    { path: '/user/login', title:'登录', component: UserLoginPage },
    { path: '/user/register', title:'登录', component: UserRegisterPage },
    { path: '/user/update', title:'个人信息修改', component: UserUpdatePage },
    { path: '/user/team/join', title:'我加入的队伍', component: UserJoinPage },
    { path: '/user/team/create', title:'我创建的队伍', component: UserTeamCreatePage },
]

export default routes;