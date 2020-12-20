import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'
const localVue = createLocalVue()

localVue.use(Vuex)

describe('App.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      nightMode: () => false
    }

    store = new Vuex.Store({
      getters
    })
  });
  it('should have devjobs as text in header', () => {
    const wrapper = mount(App, { store, localVue });
    expect(wrapper.find('.dev-jobs-header').text()).toBe('devjobs');
  });
})
