import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"]
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public arr: number | string;
  public a: number;
  public b: number;

  public sqrt(a: number, b: number): number | string {
    let c = Math.sin(a / 6) + Math.cos(b / 6);
    let d = 2 * Math.sin(a / 6) * Math.cos(b / 6);

    if (c >= 0 && d >= 0) {
      this.arr = Math.sqrt(c) + Math.sqrt(d);
    } else {
      this.arr = "Під корнем від`ємне значення";
    }
    return this.arr;
  }
}
