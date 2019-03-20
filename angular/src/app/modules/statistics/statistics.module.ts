import { StatisticsComponent } from './statistics.component';
import { NgModule } from '@angular/core';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    SharedModule,
    StatisticsRoutingModule
  ],
  exports: [StatisticsComponent]
})
export class StatisticsModule {}
