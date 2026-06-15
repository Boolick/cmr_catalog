import { makeAutoObservable, autorun } from 'mobx';
import type { GridFilterModel, GridSortModel } from '@mui/x-data-grid';

export class UIStore {
  themeMode: 'light' | 'dark' = 'light';
  filterModel: GridFilterModel = { items: [] };
  sortModel: GridSortModel = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
    this.setupPersistence();
  }

  setThemeMode(mode: 'light' | 'dark') {
    this.themeMode = mode;
  }

  toggleThemeMode() {
    this.themeMode = this.themeMode === 'light' ? 'dark' : 'light';
  }

  setFilterModel(model: GridFilterModel) {
    this.filterModel = model;
  }

  setSortModel(model: GridSortModel) {
    this.sortModel = model;
  }

  private loadFromLocalStorage() {
    if (typeof localStorage === 'undefined') return;
    try {
      const theme = localStorage.getItem('themeMode');
      if (theme === 'light' || theme === 'dark') {
        this.themeMode = theme;
      }
      
      const filter = localStorage.getItem('filterModel');
      if (filter) {
        this.filterModel = JSON.parse(filter);
      }
      
      const sort = localStorage.getItem('sortModel');
      if (sort) {
        this.sortModel = JSON.parse(sort);
      }
    } catch (e) {
      console.error('Failed to load UIStore state from localStorage', e);
    }
  }

  private setupPersistence() {
    if (typeof localStorage === 'undefined') return;
    autorun(() => {
      localStorage.setItem('themeMode', this.themeMode);
    });
    autorun(() => {
      localStorage.setItem('filterModel', JSON.stringify(this.filterModel));
    });
    autorun(() => {
      localStorage.setItem('sortModel', JSON.stringify(this.sortModel));
    });
  }
}

export const uiStore = new UIStore();
