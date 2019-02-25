import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-third",
  templateUrl: "./third.component.html",
  styleUrls: ["./third.component.scss"]
})
export class ThirdComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // public n: number;
  // public a: number;
  // public a1: number;
  // public b: number;
  // public k: number;
  // public y: number;
  // public y1: number;
  public n: number;
  public b: number;
  public res: number = 1;
  public resTemp: number = 0;

  public sumTo(n, b) {
    for (let a = 1; a < n; a++) {
      for (let k = 1; k < a; k++) {
        this.resTemp += Math.pow(a, k) + b / k;
      }
      this.res *= this.resTemp;
    }
    return this.res;
  }

  // public arr: Array<Number> = [this.n, this.a, this.a1, this.b, this.k];

  // public sumTo(...arr) {
  //   let y: number = 0;
  //   let y1: number;
  //   for (let i = 1; i < this.n; i++) {
  //     for (let j = 1; j < this.a; j++) {
  //       y += Math.pow(this.a1, this.k) + this.b / this.k;
  //     }
  //     y1 *= y;
  //   }
  //   return y1;
  // }
  // public f1 = 1;
  // public sumTo() {
  //   let a1 = 10;
  //   let k = 4;
  //   let b = 9;
  //   let n = 10;
  //   let a = 23;
  //   let f = 1;
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= a1; j++) {
  //       this.y += Math.pow(a, k) + b / k;
  //       return this.y;
  //     }
  //     this.y1 *= this.y;
  //   }
  //   return this.y1;
  // }
}
