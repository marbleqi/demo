import { Component, OnInit } from '@angular/core';
import { PageHeaderModule } from '@delon/abc/page-header';
import { OnReuseInit } from '@delon/abc/reuse-tab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [PageHeaderModule]
})
export class HomeComponent implements OnInit, OnReuseInit {
  info: string = '首页页面';

  /**页面初始化 */
  ngOnInit(): void {
    this.info = '首页页面初始化！！';
    console.debug(this.info);
  }

  /**路由复用初始化 */
  _onReuseInit() {
    this.info = '首页页面路由复用初始化！！';
    console.debug(this.info);
  }
}
