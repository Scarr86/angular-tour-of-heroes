import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent {
  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;

  constructor(private heroesService: HeroService) {}

  onSubmit() {
    this.submitted = true;
    let { name, power, alterEgo } = this.model;
    this.heroesService.addHero({ name, power, alterEgo } as Hero).subscribe(hero => {
      this.submitted = true;
    });
  }

  newHero() {
    this.model = new Hero(42, "", "");
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
