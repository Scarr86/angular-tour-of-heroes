import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { DynamicViewComponent } from "./dynamic-form/dynamic-view/dynamic-view.component";
import { AnimationComponent } from "./animation/animation.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { animation: "DashBoardAnim" }
  },
  { path: "detail/:id", component: HeroDetailComponent },
  {
    path: "heroes",
    component: HeroesComponent,
    data: { animation: "HeroesAnim" }
  },
  {
    path: "heroform",
    component: HeroFormComponent,
    data: { animation: "HeroesAnim1" }
  },
  {
    path: "dynamic-form",
    component: DynamicViewComponent,
    data: { animation: "HeroesAnim2" }
  },
  {
    path: "animation",
    component: AnimationComponent,
    data: { animation: "HeroesAnim3" }
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
