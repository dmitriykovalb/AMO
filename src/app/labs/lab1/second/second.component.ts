import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.scss"]
})
export class SecondComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public y: number | string;
  public k: number;
  public x: number;

  public second(k: number, x: number): number | string {
    let l = k * x;
    if (l > 0) {
      this.y = k * x * x * Math.log(k * x) + Math.sqrt(x);
    }
    if (l <= 0) {
      this.y = "Під логарифмом від`ємне значення";
    }
    if (x < 0) {
      this.y = "Під корнем від`ємне значення";
    }

    return this.y;
  }
}
