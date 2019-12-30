import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  date: string;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    let options: Intl.DateTimeFormatOptions = {
      weekday: "narrow",
      month: "long",
      year: "2-digit",
      day: "numeric"
    };
    this.date = new Date().toLocaleDateString("ru-Ru", options);
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.slice(1, 5);
    });
  }
}
