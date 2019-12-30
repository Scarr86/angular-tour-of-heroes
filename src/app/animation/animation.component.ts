import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from "@angular/animations";

@Component({
  selector: "app-animation",
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })
      ),
      // transition("open => closed", [animate("1s")]),
      // transition("closed => open", [animate("0.5s")])
      // or
      // transition("closed <=> open", [animate("0.5s")]),
      // or
      transition("* => closed", [animate("1s")]),
      transition("* => open", [animate("0.5s")])
    ]),

    trigger("myInsertRemoveTrigger", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("2s", style({ opacity: 1 }))
      ]),
      transition(":leave", [animate("2s", style({ opacity: 0 }))])
    ])
  ],
  templateUrl: "./animation.component.html",
  styleUrls: ["./animation.component.css"]
})
export class AnimationComponent implements OnInit {
  isOpen = true;
  check = true;
  constructor() {}
  ngOnInit() {}
  toggle() {
    this.isOpen = !this.isOpen;
  }
  onClick(el) {
    console.dir(el);
  }
}
