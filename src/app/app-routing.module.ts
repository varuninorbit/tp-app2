import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './exp/exp.component';
import { Exp2Component } from './exp/exp2.component';
import { RedirectGuard } from './_guards/redirect.guard';
//import { TestComponent } from './test/test.component';
const app_routes: Routes = [    
  
    //{ path: 'chapters', component: ChaptersComponent },
    //{ path: 'exp', component: ExpComponent },
    //{ path: 'exp', component: ExpComponent },
    //{ path: 'exp/:id', component: Exp2Component },
    {
      path: 'login',
      canActivate: [RedirectGuard], component: RedirectGuard,
      data: {
        externalUrl: 'http://qpw_manage.test/login' //TODO: To be removed for production.
      }
    }
]


@NgModule(
  {
  imports: [ RouterModule.forRoot(app_routes)],
  exports: [ RouterModule ],
  declarations: [],
  providers: []
})
export class AppRoutingModule { 
    static components = [
      //ExpComponent,Exp2Component
    ];
}


