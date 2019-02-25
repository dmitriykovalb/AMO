import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lab2",
  templateUrl: "./lab2.component.html",
  styleUrls: ["./lab2.component.scss"]
})
export class Lab2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  public selectionSort(arr: number[]) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
      let indexMin = i;
      for (let j = i + 1; j < l; j++) {
        if (arr[indexMin] > arr[j]) {
          indexMin = j;
        }
      }
      if (indexMin !== i) {
        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
      }
    }
    return arr;
  }
}
