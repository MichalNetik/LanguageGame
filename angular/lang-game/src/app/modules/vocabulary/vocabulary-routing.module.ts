import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabularyComponent } from './vocabulary.component';
import { WordPairCategoriesComponent } from './word-pair-categories/word-pair-categories.component';
import { WordPairsComponent } from './word-pairs/word-pairs.component';
import { WordPairsFormComponent } from './word-pairs/word-pairs-form/word-pairs-form.component';

const vocabularyRoutes: Routes = [
  { path: '', component: VocabularyComponent, children: [
      { path: '', redirectTo: 'word-pairs', pathMatch: 'full' },
      {
        path: 'word-pairs', component:  WordPairsComponent, children: [
          { path: 'new', component: WordPairsFormComponent },
          { path: ':id', component: WordPairsFormComponent }
        ]
      },
      { path: 'word-pair-categories', component:  WordPairCategoriesComponent }
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
