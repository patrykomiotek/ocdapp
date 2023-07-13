type Data = string;

type State = {
  loading: boolean;
  error?: Error;
  data?: Data;
}

let state: State;
state = { loading: true };
state = { loading: false };
state = { loading: true, error: new Error(), data: 'abcd'};

type StateModified =
 | { type: 'LOADING' }
 | { type: 'ERROR', error: Error }
 | { type: 'DATA_LOADED', data: Data };

let state2: StateModified;
state2 = { type: 'LOADING' };
// state2 = { type: 'ERROR' } // error
// state2 = { type: 'ERROR', error: new Error(), data: 'abcd' }; // error


