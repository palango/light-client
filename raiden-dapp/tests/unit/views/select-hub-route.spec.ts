import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, Wrapper } from '@vue/test-utils';
import store from '@/store';
import { $identicon } from '../utils/mocks';
import { connectAccount } from '../utils/store-utils';
import SelectHubRoute from '@/views/SelectHubRoute.vue';

Vue.use(Vuetify);

describe('SelectHubRoute.vue', () => {
  let wrapper: Wrapper<SelectHubRoute>;
  let vuetify: typeof Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SelectHubRoute, {
      vuetify,
      store,
      stubs: ['home', 'select-hub'],
      mocks: {
        $identicon: $identicon(),
        $t: (msg: string) => msg,
      },
    });
  });

  test('disconnected displays home', async () => {
    expect(wrapper.find('home-stub').exists()).toBe(true);
  });

  test('connected displays actual route', async () => {
    connectAccount();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('home-stub').exists()).toBe(false);
    expect(wrapper.find('select-hub-stub').exists()).toBe(true);
  });
});
