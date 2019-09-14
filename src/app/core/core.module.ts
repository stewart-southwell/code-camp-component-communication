import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { DataService } from "./services/data.service";
import { ClonerService } from "./services/cloner.service";
import { EventBusService } from "./services/event-bus.service";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [DataService, ClonerService, EventBusService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "Core is already loaded. Import it in the AppModule only"
      );
    }
  }
}
