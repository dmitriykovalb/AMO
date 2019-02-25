import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { WrapComponent } from "./wrap/wrap.component";
import { LabsComponent } from "./labs.component";
import { Lab1Component } from "./lab1/lab1.component";
import { FirstComponent } from "./lab1/first/first.component";
import { SecondComponent } from "./lab1/second/second.component";
import { ThirdComponent } from "./lab1/third/third.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { Lab2Component } from "./lab2/lab2.component";

const ROUTES: Route[] = [
  {
    path: "",
    component: WrapComponent,
    children: [
      {
        path: "",
        component: LabsComponent
      },
      {
        path: "lab1",
        component: Lab1Component,
        children: [
          {
            path: "first",
            component: FirstComponent
          },
          {
            path: "second",
            component: SecondComponent
          },
          {
            path: "third",
            component: ThirdComponent
          }
        ]
      },
      {
        path: "lab2",
        component: Lab2Component
      }
    ]
  }
];

@NgModule({
  declarations: [
    Lab1Component,
    LabsComponent,
    WrapComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    Lab2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonToggleModule
  ]
})
export class LabsModule {}
