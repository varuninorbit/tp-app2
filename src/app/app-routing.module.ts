import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { TestComponent } from './test/test.component';

const app_routes: Routes = [    
  
    //{ path: 'chapters', component: ChaptersComponent },
    //{ path: 'test', component: TestComponent }
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


