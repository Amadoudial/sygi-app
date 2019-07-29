import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SygiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SygiSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SygiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SygiSharedModule {
  static forRoot() {
    return {
      ngModule: SygiSharedModule
    };
  }
}
