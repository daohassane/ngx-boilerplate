import { NgModule } from '@angular/core';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [PageLoaderComponent, EmptyStateComponent],
  imports: [],
  exports: []
})
export class UtilitiesModule {}
