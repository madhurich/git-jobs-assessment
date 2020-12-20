import { mount, createLocalVue } from '@vue/test-utils';
import Search from '@/components/Search.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Search.vue', () => {
    it('should have devjobs as text in header', async () => {
        const wrapper = mount(Search, localVue);
        expect(wrapper).toBeTruthy();
    });
})
