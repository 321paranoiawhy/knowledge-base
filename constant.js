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
// TODO nest
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
const NEXT = `${LOGOS}next`;
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
// TODO cocos godot
const UNITY = `${MDI}unity`;
const GODOT = `${LOGOS}godot-icon`;

export const ICONS_MAP = {
  // nav
  DOCKER,
  GAME,
  K8S,
  TOOLS,
  TEST,
  // sidebar-backend
  'C#': C_SHARP,
  GO,
  JAVA,
  PHP,
  PYTHON,
  RUST,
  // sidebar-frontend
  ANGULAR,
  ELECTRON,
  FLUTTER,
  'KOTLIN MULTIPLATFORM': KMP,
  NUXT,
  REACT,
  SWIFT,
  TAURI,
  VUE,
  // sidebar-game
  UNITY,
  GODOT
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
