import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module'

// 路由模块
import { appRouterModule } from './app-router.module';

// 注册组件
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
import { DefaultComponent } from './pages/public/default/default.component'
import { ListComponent as CommonList} from './pages/public/list/list.component'
// 注册管道
import { ClassifyPipe } from './pages/views/classify/classifyList.pipe'
// 注册服务
import { BanderService } from './guard/home-resolver.service'
import { ClassifyServicer } from './guard/classify-resolver.service'
import { ListServer } from './guard/list-resolver.server'

@NgModule({
	declarations: [
		AppComponent,
		homeComponent,
		ClassifyComponent,
		CartComponent,
		UserComponent,
		ClassifyPipe,
		PracticeComponent,
		SearchComponent,
		NewsComponent,
		ActivityComponent,
		SystemComponent,
		PlatformComponent,
		ProductComponent,
		ListComponent,
		ShopComponent,
		DefaultComponent,
		CommonList
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,		
		HttpModule,
		CoreModule,
		appRouterModule
	],
	providers: [
		BanderService,
		ClassifyServicer,
		ListServer
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
