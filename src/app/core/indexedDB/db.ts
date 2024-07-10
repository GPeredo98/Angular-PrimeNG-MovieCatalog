import Dexie, { Table } from 'dexie';

export interface Movie {
  id?: number;
  name: string;
  year: string;
  genre: string;
  imageCover: string;
  imageBackground: string;
  score: number;
}

export class AppDB extends Dexie {
  movies!: Table<Movie, number>;

  constructor() {
    super('movieCatalogDB');
    this.version(1).stores({
      movies: '++id'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    // const todoListId = await db.todoLists.add({
    //   title: 'To Do Today',
    // });
    // const todoListId2 = await db.todoLists.add({
    //   title: 'To Do Today Awake',
    // });
    await db.movies.bulkAdd([
      {
        name: 'Feed the birds',
        year: '2020',
        genre: 'Fantasy',
        score: 4.5,
        imageCover: '',
        imageBackground: ''
      },
      {
        name: 'Feed the birds',
        year: '2020',
        genre: 'Fantasy',
        score: 4.5,
        imageCover: '',
        imageBackground: ''
      },
    ]);
  }
}

export const db = new AppDB();