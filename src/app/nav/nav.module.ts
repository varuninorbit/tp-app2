import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NavComponent } from "./nav/nav.component";
import { FaIconsComponent } from "./fa-icons/fa-icons.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  imports: [CommonModule, 
    RouterModule,
    MaterialModule
  ],
  declarations: [
    FaIconsComponent,
    NavComponent
  ],
  exports: [NavComponent]
})
export class NavModule {}
