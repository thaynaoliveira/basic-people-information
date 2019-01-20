import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios';
import * as actions from '../../src/Actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('setReducer - actions', () => {
    it('creates REDUCER', () => {  
      const store = mockStore();
      expect(store.dispatch(actions.setReducer({type:'LOADING', data: false}).type)).toEqual({type:'LOADING', data: false})
    });
});

describe('getPeople - actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates PEOPLE', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });

    const store = mockStore();

    return store.dispatch(actions.getPeople()).then(() => {
        let res = store.getActions();
        expect(res.length).toBeGreaterThan(1);
        // expect(res.find(i => i.type == "PEOPLE").data.length).toBeGreaterThan(1);
    });
  });
});