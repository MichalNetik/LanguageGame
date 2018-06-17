import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabularyComponent } from './vocabulary.component';
import { WordPairCategoriesComponent } from './word-pair-categories/word-pair-categories.component';
import { WordPairsComponent } from './word-pairs/word-pairs.component';

const vocabularyRoutes: Routes = [
  { path: '', component: VocabularyComponent, children: [
      { path: '', redirectTo: 'word-pair', pathMatch: 'full' },
      { path: 'word-pair', component:  WordPairsComponent },
      { path: 'category', component:  WordPairCategoriesComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(vocabularyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VocabularyRoutingModule {}
