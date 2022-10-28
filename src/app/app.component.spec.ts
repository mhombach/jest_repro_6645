import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('test123', () => {
    /* const testMock = {
      works: jest.fn().mockImplementation(() => Promise.resolve(undefined)),
      fails: jest.fn().mockResolvedValue(undefined),
    }; */

    /* it('test-mockImplementation', fakeAsync(async () => {
      console.log('new Promise instanceof Promise:' + (new Promise(() => null) instanceof Promise)); // true
      console.log('mockImplementation instanceof Promise: ' + (testMock.works() instanceof Promise)); // true
      console.log('mockResolvedValue instanceof Promise:' + (testMock.fails() instanceof Promise)); // FALSE
      expect(true).toBeTruthy();
    })); */

    /* it('without fakeAsnyc', () => {
      console.log('new Promise instanceof Promise:' + (new Promise(() => null) instanceof Promise)); // true
      console.log('mockImplementation instanceof Promise: ' + (testMock.works() instanceof Promise)); // true
      console.log('mockResolvedValue instanceof Promise:' + (testMock.fails() instanceof Promise)); // FALSE
      expect(true).toBeTruthy();
    }); */

    it('test123', () => {
      const resolvedPromise = jest.fn().mockResolvedValue('hello')();
      const rejectedPromise = jest.fn().mockRejectedValue('hello')();

      expect(resolvedPromise).toBeInstanceOf(Promise);
      expect(rejectedPromise).toBeInstanceOf(Promise);

      // await expect(resolvedPromise).resolves.toBe('hello');
      // await expect(rejectedPromise).rejects.toBe('hello');
    });

  });
});
