# React Navigation

## hook

### useNavigation

### useRoute

## Screen 组件入参

### route

- [Route prop reference](https://reactnavigation.org/docs/route-prop)

```tsx
export default function ProfileScreen({route}) {
  return (
    <View>
      <Text>This is the profile screen of the app</Text>
      <Text>{route.key}</Text>
      <Text>{route.name}</Text>
      <Text>{route.path}</Text>
      <Text>{route.params}</Text>
    </View>
  );
}
```

### navigation

```tsx
export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('main')}>To main screen</Text>
    </View>
  );
}
```

::: tip

- 仅 `screen` 组件可解构出 `navigation`, `screen` 组件的子组件内无法解构出 `navigation`
- 可使用 `useNavigation` hook 或使用 `NavigationContext`:

  ```tsx
  import {NavigationContext} from '@react-navigation/native';

  function SomeComponent() {
    const navigation1 = useNavigation();
    // We can access navigation object via context
    const navigation2 = React.useContext(NavigationContext);
    console.log(navigation1 === navigation2);
  }
  ```

- 或使用 [ref](https://reactnavigation.org/docs/navigating-without-navigation-prop) 获取全局 `navigation`

  :::
