// material design icons 前缀
// https://icon-sets.iconify.design/mdi
const MDI = 'i-mdi:';
const LOGOS = 'i-logos:';

// ****** 顶部导航栏 nav icons ******
// const DOCKER = `${MDI}docker`;
const DOCKER = `${LOGOS}docker-icon`;
const GAME = `${MDI}gamepad-classic`;
// const K8S = `${MDI}kubernetes`;
const K8S = `${LOGOS}kubernetes`;
const TOOLS = `${MDI}tools`;
const TEST = `${MDI}ab-testing`;

// ****** 侧边栏 sidebar icons ******
// sidebar-backend
// const C_SHARP = `${MDI}languag-csharp`;
const C_SHARP = `${LOGOS}c-sharp`;
// const GO = `${MDI}language-go`;
const GO = `${LOGOS}go`;
// const JAVA = `${MDI}java`;
const JAVA = `${LOGOS}java`;
// const NEST = `${MDI}nest`;
const NEST = `${LOGOS}nestjs`;
// const PHP = `${MDI}language-php`;
const PHP = `${LOGOS}php`;
// const PYTHON = `${MDI}python`;
const PYTHON = `${LOGOS}python`;
// const RUST = `${MDI}rust`;
const RUST = `${LOGOS}rust`;

// sidebar-frontend
// TODO jetpack-compose kmp react-native uniapp 鸿蒙
// const ANGULAR = `${MDI}angular`;
const ANGULAR = `${LOGOS}angular`;
// const ELECTRON = `${MDI}electron-framework`;
const ELECTRON = `${LOGOS}electron`;
const FLUTTER = `${LOGOS}flutter`;
const KMP = `${LOGOS}kotlin-icon`;
const NEXT = `${LOGOS}nextjs-icon`;
// const NUXT = `${MDI}nuxt`;
const NUXT = `${LOGOS}nuxt`;
// const REACT = `${MDI}react`;
const REACT = `${LOGOS}react`;
// const REACT_NATIVE = `${MDI}react-native`;
// const SWIFT = `${MDI}language-swift`;
const SWIFT = `${LOGOS}swift`;
const TAURI = `${LOGOS}tauri`;
// const UNIAPP = `${MDI}uniapp`;
// const VUE = `${MDI}vuejs`;
const VUE = `${LOGOS}vue`;
// const HM = `${MDI}hongmeng`;

// sidebar-game
const COCOS = `i-simple-icons:cocos`;
const GODOT = `${LOGOS}godot-icon`;
const UNITY = `${MDI}unity`;

export const ICONS_MAP = {
  // nav
  DOCKER,
  GAME,
  K8S,
  TOOLS,
  TEST,
  // sidebar-backend
  'C SHARP': C_SHARP,
  GO,
  JAVA,
  NEST,
  PHP,
  PYTHON,
  RUST,
  // sidebar-frontend
  ANGULAR,
  ELECTRON,
  FLUTTER,
  'KOTLIN MULTIPLATFORM': KMP,
  NEXT,
  NUXT,
  REACT,
  SWIFT,
  TAURI,
  VUE,
  // sidebar-game
  COCOS,
  GODOT,
  UNITY
};

export const UNOCSS_SAFELIST_ICONS = Object.values(ICONS_MAP);

export const generateInlineIcon = name => {
  const iconClass = ICONS_MAP[name.toUpperCase()];

  if (iconClass) {
    return `<span class="${iconClass} w-1em h-1em inline-block v-mid mr-4px"></span>`;
  } else {
    return '';
  }
};

export const ENV_DEVELOPMENT = 'development';
export const ENV_TEST = 'test';
export const ENV_PRODUCTION = 'production';
