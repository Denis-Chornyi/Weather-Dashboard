import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app/routes";
import { AppComponent } from "./app/components/app.component";
import { appConfig } from "./app/app.config";

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideRouter(routes), ...appConfig.providers],
}).catch((err) => console.error(err));
