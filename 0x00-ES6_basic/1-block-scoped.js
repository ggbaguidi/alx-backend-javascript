export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line no-use-before-define, block-scoped-var
  task = false;
  // eslint-disable-next-line no-use-before-define, block-scoped-var
  task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line vars-on-top, no-var
    var task = false;
    // eslint-disable-next-line vars-on-top, no-var
    var task2 = true;
  }

  // eslint-disable-next-line block-scoped-var
  return [task, task2];
}
