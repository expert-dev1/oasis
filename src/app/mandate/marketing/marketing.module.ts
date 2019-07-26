import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceService,
  FormioResourceCreateComponent,
  FormioResourceViewComponent,
  FormioResourceIndexComponent,
  FormioResourceEditComponent,
  FormioResourceDeleteComponent
} from 'angular-formio/resource';
import { FormioGrid } from 'angular-formio/grid';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioGrid,
    FormioResource,
      RouterModule.forChild([
        {
          path: '',
          component: FormioResourceIndexComponent
        },
        {
          path: 'new',
          component: FormioResourceCreateComponent
        },
        {
          path: ':id',
          component: ResourceComponent,
          children: [
            {
              path: '',
              redirectTo: 'view',
              pathMatch: 'full'
            },
            {
              path: 'view',
              component: FormioResourceViewComponent
            },
            {
              path: 'edit',
              component: FormioResourceEditComponent
            },
            {
              path: 'delete',
              component: FormioResourceDeleteComponent
            },
            {
              path: 'web',
              loadChildren: './web/web.module#WebModule'
            },
            {
              path: 'property24',
              loadChildren: './property24/property24.module#Property24Module'
            },
            {
              path: 'brochures',
              loadChildren: './brochures/brochures.module#BrochuresModule'
            },
            {
              path: 'private-property',
              loadChildren: './private-property/private-property.module#PrivatePropertyModule'
            },
            {
              path: 'facebook',
              loadChildren: './facebook/facebook.module#FacebookModule'
            }
          ]
        },
      ])
    ],
  declarations: [ResourceComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'marketing',
        form: 'marketing',
        parents: [
          'mandate'
        ]
      }
    }
  ]
})
export class MarketingModule { }
