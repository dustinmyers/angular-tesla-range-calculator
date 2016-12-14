/*
 * tesla-battery.module.ts
 */
import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import { BatteryService } from './tesla-battery.service'
import {TeslaBatteryComponent} from "./containers/tesla-battery/tesla-battery.component";

@NgModule({
  declarations: [
    TeslaBatteryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    BatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}
