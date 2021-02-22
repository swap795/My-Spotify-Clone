export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type LibraryParamList = {
  LibraryScreen: undefined;
};

export type PremiumParamList = {
  PremiumScreen: undefined;
};

export type Album = {
  id: string;
  name: string;
  by: string;
  likes: number;
  imageUri: string;
  artistsHeadline: string;
};

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
}
