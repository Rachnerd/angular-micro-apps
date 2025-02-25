import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m) => m.routes),
  },
];
