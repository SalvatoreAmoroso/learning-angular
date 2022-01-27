import { PureVsImpurePipe } from './pure-vs-impure.pipe';

describe('PureVsImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new PureVsImpurePipe();
    expect(pipe).toBeTruthy();
  });
});
