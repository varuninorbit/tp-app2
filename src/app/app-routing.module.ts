import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './exp/exp.component';
//import { TestComponent } from './test/test.component';

const app_routes: Routes = [    
  
    //{ path: 'chapters', component: ChaptersComponent },
    { path: 'exp', component: ExpComponent }
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


