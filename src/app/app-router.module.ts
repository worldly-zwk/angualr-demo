import { NgModule } from '@angular/core'
import { RouterModule,Routes} from '@angular/router'
import { Http } from '@angular/http'

// 页面组件
import { homeComponent } from './pages/views/home/home.component'
import { ClassifyComponent } from './pages/views/classify/classify.component'
import { CartComponent } from './pages/views/cart/cart.component'
import { UserComponent } from './pages/views/user/user.component'
import { PracticeComponent } from './pages/views/practice/practice.component'
import { SearchComponent } from './pages/views/search/search.component'
import { NewsComponent } from './pages/views/news/news.component'
import { ActivityComponent } from './pages/views/news/activity.component'
import { SystemComponent } from './pages/views/news/system.component'
import { PlatformComponent } from './pages/views/news/platform.component'
import { ProductComponent } from './pages/views/product/product.component'
import { ListComponent } from './pages/views/list/list.component'
import { ShopComponent } from './pages/views/shop/shop.component'

// 路由守卫
import { BanderService } from './guard/home-resolver.service'
import { ClassifyServicer } from './guard/classify-resolver.service'
import { ListServer } from './guard/list-resolver.server'

export const routes:Routes=[
    {path: 'home',component: homeComponent,resolve:{bander:BanderService}},
	{path: 'classify',component: ClassifyComponent,resolve:{classify:ClassifyServicer}},
	{path: 'cart',component: CartComponent},
    {path: 'user',component: UserComponent},
    {path: 'practice',component: PracticeComponent},
    {path: 'search',component: SearchComponent},
    {
        path: 'news',
        component: NewsComponent,
        children:[
            {path:'activity',component: ActivityComponent},
            {path:'system',component: SystemComponent},
            {path:'platform',component: PlatformComponent},
            {path: '',redirectTo: 'activity',pathMatch:'full'}
        ]
    },
    {path:'product/:id',component: ProductComponent},
    {path:'list/:id',component:ListComponent,resolve:{list:ListServer}},
    {path:'shop/:id',component:ShopComponent},
    {path: '',redirectTo: 'home',pathMatch:'full'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes,{enableTracing: false})],
    exports: [RouterModule]
})

export class appRouterModule{ }