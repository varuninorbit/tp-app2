import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './exp/exp.component';
import { RedirectGuard } from './_guards/redirect.guard';
//import { TestComponent } from './test/test.component';

const app_routes: Routes = [    
  
    //{ path: 'chapters', component: ChaptersComponent },
    { path: 'exp', component: ExpComponent },
    {
      path: 'login',
      canActivate: [RedirectGuard], component: RedirectGuard,
      data: {
        externalUrl: 'http://qpw_manage.test/login'
      }
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(app_routes)],
  exports: [ RouterModule ],
  declarations: [],
  providers: []
})
export class AppRoutingModule { 
    static components = [
      //TestComponent
    ];
}


