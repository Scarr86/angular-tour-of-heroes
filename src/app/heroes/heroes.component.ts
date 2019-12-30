import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from "@angular/animations";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateX(0)" })),
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate(500)
      ]),
      transition(":leave", [
        animate(300, style({ transform: "translateX(100%)" }))
      ])
    ]),

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
        animate("5s", style({ opacity: 1 }))
      ]),
      transition(":leave", [animate("5s", style({ opacity: 0 }))])
    ])
  ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  isOpen = true;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void {
    console.log("delHero");

    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
