import { Routes } from "@angular/router";
import { LoginComponent } from "../components/core/login/login.component";
import { AdminComponent } from "../components/core/admin/admin.component";
import { AuthGuard } from "../guards/auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("../components/feature/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("../components/feature/contact/contact.module").then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
];
