import { Component, OnInit } from '@angular/core';
import { PageHeaderModule } from '@delon/abc/page-header';
import { OnReuseInit } from '@delon/abc/reuse-tab';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [PageHeaderModule]
})
export class DashboardComponent implements OnInit, OnReuseInit {
  info: string = '仪表板页面';

  /**页面初始化 */
  ngOnInit(): void {
    this.info = '仪表板页面初始化！！';
    console.debug(this.info);
  }

  /**路由复用初始化 */
  _onReuseInit() {
    this.info = '仪表板页面路由复用初始化！！';
    console.debug(this.info);
  }
}
