import { Routes } from "@angular/router"
import { DetailsComponent } from "./details/details.component"
import { ViewComponent } from "./view/view.component"

export const USER_CHILD_ROUTES:Routes = [
    {path: 'details', component: DetailsComponent},
    {path: 'view', component: ViewComponent}
]