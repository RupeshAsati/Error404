import { Error404pipePipe } from './error404pipe.pipe';

describe('Error404pipePipe', () => {
  it('create an instance', () => {
    const pipe = new Error404pipePipe();
    expect(pipe).toBeTruthy();
  });
});
