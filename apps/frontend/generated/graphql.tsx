import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Alert = {
  __typename?: 'Alert';
  createdAt?: Maybe<Scalars['DateTime']>;
  isVisible: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AlertEntity = {
  __typename?: 'AlertEntity';
  attributes?: Maybe<Alert>;
  id?: Maybe<Scalars['ID']>;
};

export type AlertEntityResponse = {
  __typename?: 'AlertEntityResponse';
  data?: Maybe<AlertEntity>;
};

export type AlertInput = {
  isVisible?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<WriterEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleConfig = {
  __typename?: 'ArticleConfig';
  articlesPerPage: Scalars['Int'];
  cardMaxCharacters: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  readMore: Scalars['String'];
  sectionHeader: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleConfigEntity = {
  __typename?: 'ArticleConfigEntity';
  attributes?: Maybe<ArticleConfig>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleConfigEntityResponse = {
  __typename?: 'ArticleConfigEntityResponse';
  data?: Maybe<ArticleConfigEntity>;
};

export type ArticleConfigInput = {
  articlesPerPage?: InputMaybe<Scalars['Int']>;
  cardMaxCharacters?: InputMaybe<Scalars['Int']>;
  readMore?: InputMaybe<Scalars['String']>;
  sectionHeader?: InputMaybe<Scalars['String']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<WriterFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  author?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryConfig = {
  __typename?: 'CategoryConfig';
  createdAt?: Maybe<Scalars['DateTime']>;
  linkPath: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryConfigEntity = {
  __typename?: 'CategoryConfigEntity';
  attributes?: Maybe<CategoryConfig>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryConfigEntityResponse = {
  __typename?: 'CategoryConfigEntityResponse';
  data?: Maybe<CategoryConfigEntity>;
};

export type CategoryConfigInput = {
  linkPath?: InputMaybe<Scalars['String']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsHero = {
  __typename?: 'ComponentSectionsHero';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentSectionsHeroInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shareImage?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  shareImage?: InputMaybe<Scalars['ID']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Global_Language {
  Aa = 'aa',
  Ab = 'ab',
  Ae = 'ae',
  Af = 'af',
  Ak = 'ak',
  Am = 'am',
  An = 'an',
  Ar = 'ar',
  As = 'as',
  Av = 'av',
  Ay = 'ay',
  Az = 'az',
  Ba = 'ba',
  Be = 'be',
  Bg = 'bg',
  Bh = 'bh',
  Bi = 'bi',
  Bm = 'bm',
  Bn = 'bn',
  Bo = 'bo',
  Br = 'br',
  Bs = 'bs',
  Ca = 'ca',
  Ce = 'ce',
  Ch = 'ch',
  Co = 'co',
  Cr = 'cr',
  Cs = 'cs',
  Cu = 'cu',
  Cv = 'cv',
  Cy = 'cy',
  Da = 'da',
  De = 'de',
  Dv = 'dv',
  Dz = 'dz',
  Ee = 'ee',
  El = 'el',
  En = 'en',
  Eo = 'eo',
  Es = 'es',
  Et = 'et',
  Eu = 'eu',
  Fa = 'fa',
  Ff = 'ff',
  Fi = 'fi',
  Fj = 'fj',
  Fo = 'fo',
  Fr = 'fr',
  Fy = 'fy',
  Ga = 'ga',
  Gd = 'gd',
  Gl = 'gl',
  Gn = 'gn',
  Gu = 'gu',
  Gv = 'gv',
  Ha = 'ha',
  He = 'he',
  Hi = 'hi',
  Ho = 'ho',
  Hr = 'hr',
  Ht = 'ht',
  Hu = 'hu',
  Hy = 'hy',
  Hz = 'hz',
  Ia = 'ia',
  Id = 'id',
  Ie = 'ie',
  Ig = 'ig',
  Ii = 'ii',
  Ik = 'ik',
  Io = 'io',
  Is = 'is',
  It = 'it',
  Iu = 'iu',
  Ja = 'ja',
  Jv = 'jv',
  Ka = 'ka',
  Kg = 'kg',
  Ki = 'ki',
  Kj = 'kj',
  Kk = 'kk',
  Kl = 'kl',
  Km = 'km',
  Kn = 'kn',
  Ko = 'ko',
  Kr = 'kr',
  Ks = 'ks',
  Ku = 'ku',
  Kv = 'kv',
  Kw = 'kw',
  Ky = 'ky',
  La = 'la',
  Lb = 'lb',
  Lg = 'lg',
  Li = 'li',
  Ln = 'ln',
  Lo = 'lo',
  Lt = 'lt',
  Lu = 'lu',
  Lv = 'lv',
  Mg = 'mg',
  Mh = 'mh',
  Mi = 'mi',
  Mk = 'mk',
  Ml = 'ml',
  Mn = 'mn',
  Mr = 'mr',
  Ms = 'ms',
  Mt = 'mt',
  My = 'my',
  Na = 'na',
  Nb = 'nb',
  Nd = 'nd',
  Ne = 'ne',
  Ng = 'ng',
  Nl = 'nl',
  Nn = 'nn',
  No = 'no',
  Nr = 'nr',
  Nv = 'nv',
  Ny = 'ny',
  Oc = 'oc',
  Oj = 'oj',
  Om = 'om',
  Or = 'or',
  Os = 'os',
  Pa = 'pa',
  Pi = 'pi',
  Pl = 'pl',
  Ps = 'ps',
  Pt = 'pt',
  Qu = 'qu',
  Rm = 'rm',
  Rn = 'rn',
  Ro = 'ro',
  Ru = 'ru',
  Rw = 'rw',
  Sa = 'sa',
  Sc = 'sc',
  Sd = 'sd',
  Se = 'se',
  Sg = 'sg',
  Si = 'si',
  Sk = 'sk',
  Sl = 'sl',
  Sm = 'sm',
  Sn = 'sn',
  So = 'so',
  Sq = 'sq',
  Sr = 'sr',
  Ss = 'ss',
  St = 'st',
  Su = 'su',
  Sv = 'sv',
  Sw = 'sw',
  Ta = 'ta',
  Te = 'te',
  Tg = 'tg',
  Th = 'th',
  Ti = 'ti',
  Tk = 'tk',
  Tl = 'tl',
  Tn = 'tn',
  To = 'to',
  Tr = 'tr',
  Ts = 'ts',
  Tt = 'tt',
  Tw = 'tw',
  Ty = 'ty',
  Ug = 'ug',
  Uk = 'uk',
  Ur = 'ur',
  Uz = 'uz',
  Ve = 've',
  Vi = 'vi',
  Vo = 'vo',
  Wa = 'wa',
  Wo = 'wo',
  Xh = 'xh',
  Yi = 'yi',
  Yo = 'yo',
  Za = 'za',
  Zh = 'zh',
  Zu = 'zu'
}

export enum Enum_Navigationnavigationitem_Type {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
  Wrapper = 'WRAPPER'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  copyright?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  showVercelBadge: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  copyright?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  showVercelBadge?: InputMaybe<Scalars['Boolean']>;
};

export type GenericMorph = Alert | Article | ArticleConfig | Category | CategoryConfig | ComponentSectionsHero | ComponentSharedSeo | Footer | Global | Homepage | I18NLocale | NavigationAudience | NavigationNavigation | NavigationNavigationItem | NavigationNavigationsItemsRelated | SocialMedia | Substitusion | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Writer;

export type Global = {
  __typename?: 'Global';
  background?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultSeo: ComponentSharedSeo;
  favicon?: Maybe<UploadFileEntityResponse>;
  language: Enum_Global_Language;
  logo?: Maybe<UploadFileEntityResponse>;
  siteName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  background?: InputMaybe<Scalars['ID']>;
  defaultSeo?: InputMaybe<ComponentSharedSeoInput>;
  favicon?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Enum_Global_Language>;
  logo?: InputMaybe<Scalars['ID']>;
  siteName?: InputMaybe<Scalars['String']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  createdAt?: Maybe<Scalars['DateTime']>;
  hero: ComponentSectionsHero;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  hero?: InputMaybe<ComponentSectionsHeroInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<ArticleEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  createNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  createNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  createNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  createSocialMedia?: Maybe<SocialMediaEntityResponse>;
  createSubstitusion?: Maybe<SubstitusionEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWriter?: Maybe<WriterEntityResponse>;
  deleteAlert?: Maybe<AlertEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteArticleConfig?: Maybe<ArticleConfigEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCategoryConfig?: Maybe<CategoryConfigEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  deleteNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  deleteNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  deleteNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  deleteSocialMedia?: Maybe<SocialMediaEntityResponse>;
  deleteSubstitusion?: Maybe<SubstitusionEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWriter?: Maybe<WriterEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAlert?: Maybe<AlertEntityResponse>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateArticleConfig?: Maybe<ArticleConfigEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCategoryConfig?: Maybe<CategoryConfigEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateNavigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  updateNavigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  updateNavigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  updateNavigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  updateSocialMedia?: Maybe<SocialMediaEntityResponse>;
  updateSubstitusion?: Maybe<SubstitusionEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWriter?: Maybe<WriterEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateNavigationAudienceArgs = {
  data: NavigationAudienceInput;
};


export type MutationCreateNavigationNavigationArgs = {
  data: NavigationNavigationInput;
};


export type MutationCreateNavigationNavigationItemArgs = {
  data: NavigationNavigationItemInput;
};


export type MutationCreateNavigationNavigationsItemsRelatedArgs = {
  data: NavigationNavigationsItemsRelatedInput;
};


export type MutationCreateSocialMediaArgs = {
  data: SocialMediaInput;
};


export type MutationCreateSubstitusionArgs = {
  data: SubstitusionInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWriterArgs = {
  data: WriterInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationAudienceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationNavigationsItemsRelatedArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSocialMediaArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSubstitusionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWriterArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAlertArgs = {
  data: AlertInput;
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateArticleConfigArgs = {
  data: ArticleConfigInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryConfigArgs = {
  data: CategoryConfigInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
};


export type MutationUpdateNavigationAudienceArgs = {
  data: NavigationAudienceInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationArgs = {
  data: NavigationNavigationInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationItemArgs = {
  data: NavigationNavigationItemInput;
  id: Scalars['ID'];
};


export type MutationUpdateNavigationNavigationsItemsRelatedArgs = {
  data: NavigationNavigationsItemsRelatedInput;
  id: Scalars['ID'];
};


export type MutationUpdateSocialMediaArgs = {
  data: SocialMediaInput;
  id: Scalars['ID'];
};


export type MutationUpdateSubstitusionArgs = {
  data: SubstitusionInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateWriterArgs = {
  data: WriterInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavigationAudience = {
  __typename?: 'NavigationAudience';
  createdAt?: Maybe<Scalars['DateTime']>;
  key?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationAudienceEntity = {
  __typename?: 'NavigationAudienceEntity';
  attributes?: Maybe<NavigationAudience>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationAudienceEntityResponse = {
  __typename?: 'NavigationAudienceEntityResponse';
  data?: Maybe<NavigationAudienceEntity>;
};

export type NavigationAudienceEntityResponseCollection = {
  __typename?: 'NavigationAudienceEntityResponseCollection';
  data: Array<NavigationAudienceEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationAudienceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationAudienceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationAudienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationAudienceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationAudienceInput = {
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NavigationAudienceRelationResponseCollection = {
  __typename?: 'NavigationAudienceRelationResponseCollection';
  data: Array<NavigationAudienceEntity>;
};

export type NavigationNavigation = {
  __typename?: 'NavigationNavigation';
  createdAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<NavigationNavigationItemRelationResponseCollection>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  visible?: Maybe<Scalars['Boolean']>;
};


export type NavigationNavigationItemsArgs = {
  filters?: InputMaybe<NavigationNavigationItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationNavigationEntity = {
  __typename?: 'NavigationNavigationEntity';
  attributes?: Maybe<NavigationNavigation>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationEntityResponse = {
  __typename?: 'NavigationNavigationEntityResponse';
  data?: Maybe<NavigationNavigationEntity>;
};

export type NavigationNavigationEntityResponseCollection = {
  __typename?: 'NavigationNavigationEntityResponseCollection';
  data: Array<NavigationNavigationEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<NavigationNavigationItemFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationNavigationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  visible?: InputMaybe<BooleanFilterInput>;
};

export type NavigationNavigationInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationNavigationItem = {
  __typename?: 'NavigationNavigationItem';
  audience?: Maybe<NavigationAudienceRelationResponseCollection>;
  collapsed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  externalPath?: Maybe<Scalars['String']>;
  master?: Maybe<NavigationNavigationEntityResponse>;
  menuAttached?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<NavigationNavigationItemEntityResponse>;
  path?: Maybe<Scalars['String']>;
  related?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  title: Scalars['String'];
  type?: Maybe<Enum_Navigationnavigationitem_Type>;
  uiRouterKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavigationNavigationItemAudienceArgs = {
  filters?: InputMaybe<NavigationAudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationNavigationItemEntity = {
  __typename?: 'NavigationNavigationItemEntity';
  attributes?: Maybe<NavigationNavigationItem>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationItemEntityResponse = {
  __typename?: 'NavigationNavigationItemEntityResponse';
  data?: Maybe<NavigationNavigationItemEntity>;
};

export type NavigationNavigationItemEntityResponseCollection = {
  __typename?: 'NavigationNavigationItemEntityResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationItemFiltersInput>>>;
  audience?: InputMaybe<NavigationAudienceFiltersInput>;
  collapsed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  externalPath?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  master?: InputMaybe<NavigationNavigationFiltersInput>;
  menuAttached?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<NavigationNavigationItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<NavigationNavigationItemFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  related?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  uiRouterKey?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationNavigationItemInput = {
  audience?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  collapsed?: InputMaybe<Scalars['Boolean']>;
  externalPath?: InputMaybe<Scalars['String']>;
  master?: InputMaybe<Scalars['ID']>;
  menuAttached?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  related?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Navigationnavigationitem_Type>;
  uiRouterKey?: InputMaybe<Scalars['String']>;
};

export type NavigationNavigationItemRelationResponseCollection = {
  __typename?: 'NavigationNavigationItemRelationResponseCollection';
  data: Array<NavigationNavigationItemEntity>;
};

export type NavigationNavigationsItemsRelated = {
  __typename?: 'NavigationNavigationsItemsRelated';
  createdAt?: Maybe<Scalars['DateTime']>;
  field: Scalars['String'];
  master: Scalars['String'];
  order: Scalars['Int'];
  related_id: Scalars['String'];
  related_type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavigationNavigationsItemsRelatedEntity = {
  __typename?: 'NavigationNavigationsItemsRelatedEntity';
  attributes?: Maybe<NavigationNavigationsItemsRelated>;
  id?: Maybe<Scalars['ID']>;
};

export type NavigationNavigationsItemsRelatedEntityResponse = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponse';
  data?: Maybe<NavigationNavigationsItemsRelatedEntity>;
};

export type NavigationNavigationsItemsRelatedEntityResponseCollection = {
  __typename?: 'NavigationNavigationsItemsRelatedEntityResponseCollection';
  data: Array<NavigationNavigationsItemsRelatedEntity>;
  meta: ResponseCollectionMeta;
};

export type NavigationNavigationsItemsRelatedFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  field?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  master?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  related_id?: InputMaybe<StringFilterInput>;
  related_type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NavigationNavigationsItemsRelatedInput = {
  field?: InputMaybe<Scalars['String']>;
  master?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  related_id?: InputMaybe<Scalars['String']>;
  related_type?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  alert?: Maybe<AlertEntityResponse>;
  article?: Maybe<ArticleEntityResponse>;
  articleConfig?: Maybe<ArticleConfigEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  categoryConfig?: Maybe<CategoryConfigEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  global?: Maybe<GlobalEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navigationAudience?: Maybe<NavigationAudienceEntityResponse>;
  navigationAudiences?: Maybe<NavigationAudienceEntityResponseCollection>;
  navigationNavigation?: Maybe<NavigationNavigationEntityResponse>;
  navigationNavigationItem?: Maybe<NavigationNavigationItemEntityResponse>;
  navigationNavigationItems?: Maybe<NavigationNavigationItemEntityResponseCollection>;
  navigationNavigations?: Maybe<NavigationNavigationEntityResponseCollection>;
  navigationNavigationsItemsRelated?: Maybe<NavigationNavigationsItemsRelatedEntityResponse>;
  navigationNavigationsItemsRelateds?: Maybe<NavigationNavigationsItemsRelatedEntityResponseCollection>;
  socialMedia?: Maybe<SocialMediaEntityResponse>;
  socialMedias?: Maybe<SocialMediaEntityResponseCollection>;
  substitusion?: Maybe<SubstitusionEntityResponse>;
  substitusions?: Maybe<SubstitusionEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  writer?: Maybe<WriterEntityResponse>;
  writers?: Maybe<WriterEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationAudienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationAudiencesArgs = {
  filters?: InputMaybe<NavigationAudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationItemsArgs = {
  filters?: InputMaybe<NavigationNavigationItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationsArgs = {
  filters?: InputMaybe<NavigationNavigationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationNavigationsItemsRelatedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNavigationNavigationsItemsRelatedsArgs = {
  filters?: InputMaybe<NavigationNavigationsItemsRelatedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySocialMediaArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySocialMediasArgs = {
  filters?: InputMaybe<SocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySubstitusionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySubstitusionsArgs = {
  filters?: InputMaybe<SubstitusionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWriterArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWritersArgs = {
  filters?: InputMaybe<WriterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  createdAt?: Maybe<Scalars['DateTime']>;
  iconSlug: Scalars['String'];
  link: Scalars['String'];
  showInFooter: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SocialMediaEntity = {
  __typename?: 'SocialMediaEntity';
  attributes?: Maybe<SocialMedia>;
  id?: Maybe<Scalars['ID']>;
};

export type SocialMediaEntityResponse = {
  __typename?: 'SocialMediaEntityResponse';
  data?: Maybe<SocialMediaEntity>;
};

export type SocialMediaEntityResponseCollection = {
  __typename?: 'SocialMediaEntityResponseCollection';
  data: Array<SocialMediaEntity>;
  meta: ResponseCollectionMeta;
};

export type SocialMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  iconSlug?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SocialMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SocialMediaFiltersInput>>>;
  showInFooter?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SocialMediaInput = {
  iconSlug?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  showInFooter?: InputMaybe<Scalars['Boolean']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Substitusion = {
  __typename?: 'Substitusion';
  author?: Maybe<WriterEntityResponse>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubstitusionEntity = {
  __typename?: 'SubstitusionEntity';
  attributes?: Maybe<Substitusion>;
  id?: Maybe<Scalars['ID']>;
};

export type SubstitusionEntityResponse = {
  __typename?: 'SubstitusionEntityResponse';
  data?: Maybe<SubstitusionEntity>;
};

export type SubstitusionEntityResponseCollection = {
  __typename?: 'SubstitusionEntityResponseCollection';
  data: Array<SubstitusionEntity>;
  meta: ResponseCollectionMeta;
};

export type SubstitusionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SubstitusionFiltersInput>>>;
  author?: InputMaybe<WriterFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SubstitusionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubstitusionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SubstitusionInput = {
  author?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubstitusionRelationResponseCollection = {
  __typename?: 'SubstitusionRelationResponseCollection';
  data: Array<SubstitusionEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Writer = {
  __typename?: 'Writer';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  substitusions?: Maybe<SubstitusionRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WriterArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type WriterSubstitusionsArgs = {
  filters?: InputMaybe<SubstitusionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WriterEntity = {
  __typename?: 'WriterEntity';
  attributes?: Maybe<Writer>;
  id?: Maybe<Scalars['ID']>;
};

export type WriterEntityResponse = {
  __typename?: 'WriterEntityResponse';
  data?: Maybe<WriterEntity>;
};

export type WriterEntityResponseCollection = {
  __typename?: 'WriterEntityResponseCollection';
  data: Array<WriterEntity>;
  meta: ResponseCollectionMeta;
};

export type WriterFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WriterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  substitusions?: InputMaybe<SubstitusionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WriterInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['ID']>;
  substitusions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type GetAlertQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAlertQuery = { __typename?: 'Query', alert?: { __typename?: 'AlertEntityResponse', data?: { __typename?: 'AlertEntity', attributes?: { __typename?: 'Alert', message?: string | null, link?: string | null, isVisible: boolean } | null } | null } | null };

export type GetArticlesQueryVariables = Exact<{
  articlesPerPage?: InputMaybe<Scalars['Int']>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', publishedAt?: any | null, title: string, content: string, slug: string, createdAt?: any | null, updatedAt?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', attributes?: { __typename?: 'Writer', name?: string | null, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type GetArticlesConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesConfigQuery = { __typename?: 'Query', articleConfig?: { __typename?: 'ArticleConfigEntityResponse', data?: { __typename?: 'ArticleConfigEntity', attributes?: { __typename?: 'ArticleConfig', articlesPerPage: number, sectionHeader: string, cardMaxCharacters: number, readMore: string } | null } | null } | null };

export type GetCategoriesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesSlugsQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug: string } | null }> } | null };

export type GetCategoriesBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoriesBySlugQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', publishedAt?: any | null, title: string, content: string, slug: string, createdAt?: any | null, updatedAt?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', attributes?: { __typename?: 'Writer', name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null }> } | null } | null }> } | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', copyright?: string | null, showVercelBadge: boolean, email?: string | null } | null } | null } | null, socialMedias?: { __typename?: 'SocialMediaEntityResponseCollection', data: Array<{ __typename?: 'SocialMediaEntity', attributes?: { __typename?: 'SocialMedia', iconSlug: string, showInFooter: boolean, link: string } | null }> } | null };

export type GetGlobalQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalQuery = { __typename?: 'Query', global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', id?: string | null, attributes?: { __typename?: 'Global', siteName: string, createdAt?: any | null, updatedAt?: any | null, defaultSeo: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null }, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null } | null } | null } | null };

export type GetHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', attributes?: { __typename?: 'Homepage', hero: { __typename?: 'ComponentSectionsHero', id: string, title: string }, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null } | null } | null } | null };

export type GetIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIndexQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', attributes?: { __typename?: 'Homepage', hero: { __typename?: 'ComponentSectionsHero', id: string, title: string }, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, url: string } | null } | null } | null } | null } | null } | null } | null, articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, content: string, slug: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, alternativeText?: string | null, width?: number | null, height?: number | null, url: string } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', attributes?: { __typename?: 'Writer', name?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', updatedAt?: any | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null }> } | null };


export const GetAlertDocument = gql`
    query getAlert {
  alert {
    data {
      attributes {
        message
        link
        isVisible
      }
    }
  }
}
    `;

/**
 * __useGetAlertQuery__
 *
 * To run a query within a React component, call `useGetAlertQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlertQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlertQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAlertQuery(baseOptions?: Apollo.QueryHookOptions<GetAlertQuery, GetAlertQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAlertQuery, GetAlertQueryVariables>(GetAlertDocument, options);
      }
export function useGetAlertLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAlertQuery, GetAlertQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAlertQuery, GetAlertQueryVariables>(GetAlertDocument, options);
        }
export type GetAlertQueryHookResult = ReturnType<typeof useGetAlertQuery>;
export type GetAlertLazyQueryHookResult = ReturnType<typeof useGetAlertLazyQuery>;
export type GetAlertQueryResult = Apollo.QueryResult<GetAlertQuery, GetAlertQueryVariables>;
export const GetArticlesDocument = gql`
    query GetArticles($articlesPerPage: Int) {
  articles(sort: "createdAt:desc", pagination: {limit: $articlesPerPage}) {
    data {
      id
      attributes {
        publishedAt
        title
        content
        slug
        image {
          data {
            attributes {
              updatedAt
              alternativeText
              width
              height
              url
            }
          }
        }
        category {
          data {
            attributes {
              name
              slug
            }
          }
        }
        author {
          data {
            attributes {
              name
              description
              picture {
                data {
                  attributes {
                    updatedAt
                    url
                    alternativeText
                    width
                    height
                  }
                }
              }
            }
          }
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *      articlesPerPage: // value for 'articlesPerPage'
 *   },
 * });
 */
export function useGetArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
      }
export function useGetArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
        }
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<typeof useGetArticlesLazyQuery>;
export type GetArticlesQueryResult = Apollo.QueryResult<GetArticlesQuery, GetArticlesQueryVariables>;
export const GetArticlesConfigDocument = gql`
    query GetArticlesConfig {
  articleConfig {
    data {
      attributes {
        articlesPerPage
        sectionHeader
        cardMaxCharacters
        readMore
      }
    }
  }
}
    `;

/**
 * __useGetArticlesConfigQuery__
 *
 * To run a query within a React component, call `useGetArticlesConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticlesConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesConfigQuery, GetArticlesConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesConfigQuery, GetArticlesConfigQueryVariables>(GetArticlesConfigDocument, options);
      }
export function useGetArticlesConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesConfigQuery, GetArticlesConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesConfigQuery, GetArticlesConfigQueryVariables>(GetArticlesConfigDocument, options);
        }
export type GetArticlesConfigQueryHookResult = ReturnType<typeof useGetArticlesConfigQuery>;
export type GetArticlesConfigLazyQueryHookResult = ReturnType<typeof useGetArticlesConfigLazyQuery>;
export type GetArticlesConfigQueryResult = Apollo.QueryResult<GetArticlesConfigQuery, GetArticlesConfigQueryVariables>;
export const GetCategoriesSlugsDocument = gql`
    query GetCategoriesSlugs {
  categories {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesSlugsQuery__
 *
 * To run a query within a React component, call `useGetCategoriesSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesSlugsQuery, GetCategoriesSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesSlugsQuery, GetCategoriesSlugsQueryVariables>(GetCategoriesSlugsDocument, options);
      }
export function useGetCategoriesSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesSlugsQuery, GetCategoriesSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesSlugsQuery, GetCategoriesSlugsQueryVariables>(GetCategoriesSlugsDocument, options);
        }
export type GetCategoriesSlugsQueryHookResult = ReturnType<typeof useGetCategoriesSlugsQuery>;
export type GetCategoriesSlugsLazyQueryHookResult = ReturnType<typeof useGetCategoriesSlugsLazyQuery>;
export type GetCategoriesSlugsQueryResult = Apollo.QueryResult<GetCategoriesSlugsQuery, GetCategoriesSlugsQueryVariables>;
export const GetCategoriesBySlugDocument = gql`
    query GetCategoriesBySlug($slug: String) {
  categories(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        name
        articles {
          data {
            id
            attributes {
              publishedAt
              title
              content
              slug
              image {
                data {
                  attributes {
                    updatedAt
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              category {
                data {
                  attributes {
                    name
                    slug
                  }
                }
              }
              author {
                data {
                  attributes {
                    name
                    picture {
                      data {
                        attributes {
                          url
                          updatedAt
                          alternativeText
                          width
                          height
                        }
                      }
                    }
                  }
                }
              }
              createdAt
              updatedAt
              publishedAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesBySlugQuery__
 *
 * To run a query within a React component, call `useGetCategoriesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoriesBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesBySlugQuery, GetCategoriesBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesBySlugQuery, GetCategoriesBySlugQueryVariables>(GetCategoriesBySlugDocument, options);
      }
export function useGetCategoriesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesBySlugQuery, GetCategoriesBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesBySlugQuery, GetCategoriesBySlugQueryVariables>(GetCategoriesBySlugDocument, options);
        }
export type GetCategoriesBySlugQueryHookResult = ReturnType<typeof useGetCategoriesBySlugQuery>;
export type GetCategoriesBySlugLazyQueryHookResult = ReturnType<typeof useGetCategoriesBySlugLazyQuery>;
export type GetCategoriesBySlugQueryResult = Apollo.QueryResult<GetCategoriesBySlugQuery, GetCategoriesBySlugQueryVariables>;
export const GetFooterDocument = gql`
    query getFooter {
  footer {
    data {
      attributes {
        copyright
        showVercelBadge
        email
      }
    }
  }
  socialMedias {
    data {
      attributes {
        iconSlug
        showInFooter
        link
      }
    }
  }
}
    `;

/**
 * __useGetFooterQuery__
 *
 * To run a query within a React component, call `useGetFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFooterQuery(baseOptions?: Apollo.QueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
      }
export function useGetFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
        }
export type GetFooterQueryHookResult = ReturnType<typeof useGetFooterQuery>;
export type GetFooterLazyQueryHookResult = ReturnType<typeof useGetFooterLazyQuery>;
export type GetFooterQueryResult = Apollo.QueryResult<GetFooterQuery, GetFooterQueryVariables>;
export const GetGlobalDocument = gql`
    query GetGlobal {
  global {
    data {
      id
      attributes {
        siteName
        createdAt
        updatedAt
        defaultSeo {
          metaTitle
          metaDescription
          shareImage {
            data {
              attributes {
                updatedAt
                alternativeText
                width
                height
                url
              }
            }
          }
        }
        background {
          data {
            attributes {
              updatedAt
              alternativeText
              width
              height
              url
            }
          }
        }
        favicon {
          data {
            attributes {
              updatedAt
              alternativeText
              width
              height
              url
            }
          }
        }
        logo {
          data {
            attributes {
              updatedAt
              alternativeText
              width
              height
              url
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetGlobalQuery__
 *
 * To run a query within a React component, call `useGetGlobalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGlobalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGlobalQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGlobalQuery(baseOptions?: Apollo.QueryHookOptions<GetGlobalQuery, GetGlobalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGlobalQuery, GetGlobalQueryVariables>(GetGlobalDocument, options);
      }
export function useGetGlobalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGlobalQuery, GetGlobalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGlobalQuery, GetGlobalQueryVariables>(GetGlobalDocument, options);
        }
export type GetGlobalQueryHookResult = ReturnType<typeof useGetGlobalQuery>;
export type GetGlobalLazyQueryHookResult = ReturnType<typeof useGetGlobalLazyQuery>;
export type GetGlobalQueryResult = Apollo.QueryResult<GetGlobalQuery, GetGlobalQueryVariables>;
export const GetHomepageDocument = gql`
    query GetHomepage {
  homepage {
    data {
      attributes {
        hero {
          id
          title
        }
        seo {
          metaTitle
          metaDescription
          shareImage {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetHomepageQuery__
 *
 * To run a query within a React component, call `useGetHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomepageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, options);
      }
export function useGetHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, options);
        }
export type GetHomepageQueryHookResult = ReturnType<typeof useGetHomepageQuery>;
export type GetHomepageLazyQueryHookResult = ReturnType<typeof useGetHomepageLazyQuery>;
export type GetHomepageQueryResult = Apollo.QueryResult<GetHomepageQuery, GetHomepageQueryVariables>;
export const GetIndexDocument = gql`
    query getIndex {
  homepage {
    data {
      attributes {
        hero {
          id
          title
        }
        seo {
          metaTitle
          metaDescription
          shareImage {
            data {
              attributes {
                updatedAt
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
  articles {
    data {
      id
      attributes {
        title
        content
        slug
        image {
          data {
            attributes {
              updatedAt
              alternativeText
              width
              height
              url
            }
          }
        }
        category {
          data {
            attributes {
              name
              slug
            }
          }
        }
        author {
          data {
            attributes {
              name
              picture {
                data {
                  attributes {
                    updatedAt
                    url
                    alternativeText
                    width
                    height
                  }
                }
              }
            }
          }
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;

/**
 * __useGetIndexQuery__
 *
 * To run a query within a React component, call `useGetIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndexQuery(baseOptions?: Apollo.QueryHookOptions<GetIndexQuery, GetIndexQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndexQuery, GetIndexQueryVariables>(GetIndexDocument, options);
      }
export function useGetIndexLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndexQuery, GetIndexQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndexQuery, GetIndexQueryVariables>(GetIndexDocument, options);
        }
export type GetIndexQueryHookResult = ReturnType<typeof useGetIndexQuery>;
export type GetIndexLazyQueryHookResult = ReturnType<typeof useGetIndexLazyQuery>;
export type GetIndexQueryResult = Apollo.QueryResult<GetIndexQuery, GetIndexQueryVariables>;