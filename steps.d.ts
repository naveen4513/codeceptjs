/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');

declare namespace CodeceptJS {
  import Test = Mocha.Test;

  interface SupportObject { I: I, current: any }
  interface Methods extends Protractor, Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
