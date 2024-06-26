// eslint-disable-next-line no-restricted-imports
import {defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives} from 'unocss';
import {UNOCSS_SAFELIST_ICONS} from './constant.js';

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify()],
  transformers: [transformerDirectives()],
  shortcuts: [{'absolute-center': 'absolute top-0 bottom-0 left-0 right-0 m-auto'}],
  safelist: ['w-1em', 'h-1em', 'inline-block', 'v-mid', 'mr-4px', ...UNOCSS_SAFELIST_ICONS]
});
