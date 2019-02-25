import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from "./app.component";
import { LabsModule } from "./labs/labs.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

const ROUTES: Route[] = [
  {
    path: "",
    loadChildren: "./labs/labs.module#LabsModule"
  }
];
const modules = [
  BrowserModule,
  LabsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatButtonModule
];
@NgModule({
  declarations: [AppComponent],
  imports: [...modules, RouterModule.forRoot(ROUTES)],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
