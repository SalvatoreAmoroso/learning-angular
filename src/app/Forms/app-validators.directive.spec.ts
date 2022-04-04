import { EmailValidator } from './app-validators.directive';

describe('EmailValidator', () => {
  it('should create an instance', () => {
    const directive = new EmailValidator();
    expect(directive).toBeTruthy();
  });
});
