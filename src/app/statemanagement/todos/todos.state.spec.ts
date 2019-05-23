import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TodosState, TodosStateModel } from './todos.state';
import { TodosAction } from './todos.actions';

describe('Todos store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TodosState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: TodosStateModel = {
      items: ['item-1']
    };
    store.dispatch(new TodosAction('item-1'));
    const actual = store.selectSnapshot(TodosState.getState);
    expect(actual).toEqual(expected);
  });

});
