// eslint-disable-next-line no-restricted-imports
import {defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives} from 'unocss';
import {UNOCSS_SAFELIST_ICONS} from './constant';

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify()],
  transformers: [transformerDirectives()],
  safelist: ['w-1em', 'h-1em', 'inline-block', 'v-mid', 'mr-4px', ...UNOCSS_SAFELIST_ICONS]
});
