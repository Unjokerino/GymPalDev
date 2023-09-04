export enum rootScreens {
  BottomTabs = "BottomTabs",
  EmptyPage = "EmptyPage",
  Home = "Home",
  GetStarted = "GetStarted",
}

export type RootStackParamList = {
  [rootScreens.BottomTabs]: undefined;
};
