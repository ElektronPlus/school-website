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
  Date: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type Alert = {
  __typename?: 'Alert';
  createdAt?: Maybe<Scalars['DateTime']>;
  isVisible: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
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
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<WriterEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
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
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type ArticleInput = {
  author?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type AwesomeHelpHelp = {
  __typename?: 'AwesomeHelpHelp';
  componentName?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fieldName?: Maybe<Scalars['String']>;
  helpContent?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zoneName?: Maybe<Scalars['String']>;
};

export type AwesomeHelpHelpEntity = {
  __typename?: 'AwesomeHelpHelpEntity';
  attributes?: Maybe<AwesomeHelpHelp>;
  id?: Maybe<Scalars['ID']>;
};

export type AwesomeHelpHelpEntityResponse = {
  __typename?: 'AwesomeHelpHelpEntityResponse';
  data?: Maybe<AwesomeHelpHelpEntity>;
};

export type AwesomeHelpHelpEntityResponseCollection = {
  __typename?: 'AwesomeHelpHelpEntityResponseCollection';
  data: Array<AwesomeHelpHelpEntity>;
  meta: ResponseCollectionMeta;
};

export type AwesomeHelpHelpFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AwesomeHelpHelpFiltersInput>>>;
  componentName?: InputMaybe<StringFilterInput>;
  containerType?: InputMaybe<StringFilterInput>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fieldName?: InputMaybe<StringFilterInput>;
  helpContent?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AwesomeHelpHelpFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AwesomeHelpHelpFiltersInput>>>;
  path?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  zoneName?: InputMaybe<StringFilterInput>;
};

export type AwesomeHelpHelpInput = {
  componentName?: InputMaybe<Scalars['String']>;
  containerType?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  fieldName?: InputMaybe<Scalars['String']>;
  helpContent?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  zoneName?: InputMaybe<Scalars['String']>;
};

export type Blog = {
  __typename?: 'Blog';
  articlesSection: ComponentArticlesArticlesSection;
  categorySection?: Maybe<ComponentArticlesArticlesSection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogInput = {
  articlesSection?: InputMaybe<ComponentArticlesArticlesSectionInput>;
  categorySection?: InputMaybe<ComponentArticlesArticlesSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  url_path_id?: InputMaybe<Scalars['String']>;
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
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};


export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type ComponentArticlesArticlesSection = {
  __typename?: 'ComponentArticlesArticlesSection';
  entriesPerPage: Scalars['Int'];
  header: Scalars['String'];
  id: Scalars['ID'];
  previewMaxCharacters?: Maybe<Scalars['Int']>;
};

export type ComponentArticlesArticlesSectionInput = {
  entriesPerPage?: InputMaybe<Scalars['Int']>;
  header?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  previewMaxCharacters?: InputMaybe<Scalars['Int']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID'];
  metaDescription?: Maybe<Scalars['String']>;
  preventIndexing?: Maybe<Scalars['Boolean']>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  metaDescription?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  preventIndexing?: InputMaybe<BooleanFilterInput>;
};

export type ComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  preventIndexing?: InputMaybe<Scalars['Boolean']>;
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

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

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
  url_path_id?: Maybe<Scalars['String']>;
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
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type GenericMorph = Alert | Article | AwesomeHelpHelp | Blog | Category | ComponentArticlesArticlesSection | ComponentSharedMetaSocial | ComponentSharedSeo | Footer | Global | Homepage | PublisherAction | SocialMedia | Substitusion | Translation | UploadFile | UrlAliasPath | UrlAliasPattern | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Writer;

export type Global = {
  __typename?: 'Global';
  background?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  favicon?: Maybe<UploadFileEntityResponse>;
  language: Enum_Global_Language;
  logo?: Maybe<UploadFileEntityResponse>;
  shareImage?: Maybe<UploadFileEntityResponse>;
  siteDescription: Scalars['String'];
  siteName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
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
  favicon?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Enum_Global_Language>;
  logo?: InputMaybe<Scalars['ID']>;
  shareImage?: InputMaybe<Scalars['ID']>;
  siteDescription?: InputMaybe<Scalars['String']>;
  siteName?: InputMaybe<Scalars['String']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  articlesSection?: Maybe<ComponentArticlesArticlesSection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
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
  articlesSection?: InputMaybe<ComponentArticlesArticlesSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  url_path_id?: InputMaybe<Scalars['String']>;
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
  createAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createPublisherAction?: Maybe<PublisherActionEntityResponse>;
  createSocialMedia?: Maybe<SocialMediaEntityResponse>;
  createSubstitusion?: Maybe<SubstitusionEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUrlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  createUrlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWriter?: Maybe<WriterEntityResponse>;
  deleteAlert?: Maybe<AlertEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deletePublisherAction?: Maybe<PublisherActionEntityResponse>;
  deleteSocialMedia?: Maybe<SocialMediaEntityResponse>;
  deleteSubstitusion?: Maybe<SubstitusionEntityResponse>;
  deleteTranslation?: Maybe<TranslationEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUrlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  deleteUrlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
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
  updateAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updatePublisherAction?: Maybe<PublisherActionEntityResponse>;
  updateSocialMedia?: Maybe<SocialMediaEntityResponse>;
  updateSubstitusion?: Maybe<SubstitusionEntityResponse>;
  updateTranslation?: Maybe<TranslationEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUrlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  updateUrlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
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


export type MutationCreateAwesomeHelpHelpArgs = {
  data: AwesomeHelpHelpInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreatePublisherActionArgs = {
  data: PublisherActionInput;
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


export type MutationCreateUrlAliasPathArgs = {
  data: UrlAliasPathInput;
};


export type MutationCreateUrlAliasPatternArgs = {
  data: UrlAliasPatternInput;
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


export type MutationDeleteAwesomeHelpHelpArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePublisherActionArgs = {
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


export type MutationDeleteUrlAliasPathArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUrlAliasPatternArgs = {
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


export type MutationUpdateAwesomeHelpHelpArgs = {
  data: AwesomeHelpHelpInput;
  id: Scalars['ID'];
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
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


export type MutationUpdatePublisherActionArgs = {
  data: PublisherActionInput;
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


export type MutationUpdateTranslationArgs = {
  data: TranslationInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUrlAliasPathArgs = {
  data: UrlAliasPathInput;
  id: Scalars['ID'];
};


export type MutationUpdateUrlAliasPatternArgs = {
  data: UrlAliasPatternInput;
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

export type NavigationItem = {
  __typename?: 'NavigationItem';
  audience?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  externalPath?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  master?: Maybe<Scalars['Int']>;
  menuAttached: Scalars['Boolean'];
  order: Scalars['Int'];
  parent?: Maybe<NavigationItem>;
  path?: Maybe<Scalars['String']>;
  related?: Maybe<NavigationRelated>;
  title: Scalars['String'];
  type: Scalars['String'];
  uiRouterKey: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type NavigationRelated = {
  __typename?: 'NavigationRelated';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum NavigationRenderType {
  Flat = 'FLAT',
  Rfr = 'RFR',
  Tree = 'TREE'
}

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

export type PublisherAction = {
  __typename?: 'PublisherAction';
  createdAt?: Maybe<Scalars['DateTime']>;
  entityId?: Maybe<Scalars['Int']>;
  entitySlug?: Maybe<Scalars['String']>;
  executeAt?: Maybe<Scalars['DateTime']>;
  mode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PublisherActionEntity = {
  __typename?: 'PublisherActionEntity';
  attributes?: Maybe<PublisherAction>;
  id?: Maybe<Scalars['ID']>;
};

export type PublisherActionEntityResponse = {
  __typename?: 'PublisherActionEntityResponse';
  data?: Maybe<PublisherActionEntity>;
};

export type PublisherActionEntityResponseCollection = {
  __typename?: 'PublisherActionEntityResponseCollection';
  data: Array<PublisherActionEntity>;
  meta: ResponseCollectionMeta;
};

export type PublisherActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PublisherActionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  entityId?: InputMaybe<IntFilterInput>;
  entitySlug?: InputMaybe<StringFilterInput>;
  executeAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mode?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PublisherActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PublisherActionFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PublisherActionInput = {
  entityId?: InputMaybe<Scalars['Int']>;
  entitySlug?: InputMaybe<Scalars['String']>;
  executeAt?: InputMaybe<Scalars['DateTime']>;
  mode?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  alert?: Maybe<AlertEntityResponse>;
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  awesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  awesomeHelpHelps?: Maybe<AwesomeHelpHelpEntityResponseCollection>;
  blog?: Maybe<BlogEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  global?: Maybe<GlobalEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  publisherAction?: Maybe<PublisherActionEntityResponse>;
  publisherActions?: Maybe<PublisherActionEntityResponseCollection>;
  renderNavigation: Array<Maybe<NavigationItem>>;
  renderNavigationChild: Array<Maybe<NavigationItem>>;
  socialMedia?: Maybe<SocialMediaEntityResponse>;
  socialMedias?: Maybe<SocialMediaEntityResponseCollection>;
  substitusion?: Maybe<SubstitusionEntityResponse>;
  substitusions?: Maybe<SubstitusionEntityResponseCollection>;
  translation?: Maybe<TranslationEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  urlAliasPath?: Maybe<UrlAliasPathEntityResponse>;
  urlAliasPaths?: Maybe<UrlAliasPathEntityResponseCollection>;
  urlAliasPattern?: Maybe<UrlAliasPatternEntityResponse>;
  urlAliasPatterns?: Maybe<UrlAliasPatternEntityResponseCollection>;
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


export type QueryAwesomeHelpHelpArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAwesomeHelpHelpsArgs = {
  filters?: InputMaybe<AwesomeHelpHelpFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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


export type QueryPublisherActionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPublisherActionsArgs = {
  filters?: InputMaybe<PublisherActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRenderNavigationArgs = {
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  navigationIdOrSlug: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NavigationRenderType>;
};


export type QueryRenderNavigationChildArgs = {
  childUiKey: Scalars['String'];
  id: Scalars['String'];
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<NavigationRenderType>;
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


export type QueryUrlAliasPathArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUrlAliasPathsArgs = {
  filters?: InputMaybe<UrlAliasPathFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUrlAliasPatternArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUrlAliasPatternsArgs = {
  filters?: InputMaybe<UrlAliasPatternFiltersInput>;
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
  url_path_id?: Maybe<Scalars['String']>;
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
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type SocialMediaInput = {
  iconSlug?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  showInFooter?: InputMaybe<Scalars['Boolean']>;
  url_path_id?: InputMaybe<Scalars['String']>;
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
  url_path_id?: Maybe<Scalars['String']>;
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
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type SubstitusionInput = {
  author?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type SubstitusionRelationResponseCollection = {
  __typename?: 'SubstitusionRelationResponseCollection';
  data: Array<SubstitusionEntity>;
};

export type Translation = {
  __typename?: 'Translation';
  articleReadMore: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  paginationNextPage: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
};

export type TranslationEntity = {
  __typename?: 'TranslationEntity';
  attributes?: Maybe<Translation>;
  id?: Maybe<Scalars['ID']>;
};

export type TranslationEntityResponse = {
  __typename?: 'TranslationEntityResponse';
  data?: Maybe<TranslationEntity>;
};

export type TranslationInput = {
  articleReadMore?: InputMaybe<Scalars['String']>;
  paginationNextPage?: InputMaybe<Scalars['String']>;
  url_path_id?: InputMaybe<Scalars['String']>;
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
  placeholder?: Maybe<Scalars['String']>;
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
  placeholder?: InputMaybe<StringFilterInput>;
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
  placeholder?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UrlAliasPath = {
  __typename?: 'UrlAliasPath';
  contenttype: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  generated?: Maybe<Scalars['Boolean']>;
  path: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UrlAliasPathEntity = {
  __typename?: 'UrlAliasPathEntity';
  attributes?: Maybe<UrlAliasPath>;
  id?: Maybe<Scalars['ID']>;
};

export type UrlAliasPathEntityResponse = {
  __typename?: 'UrlAliasPathEntityResponse';
  data?: Maybe<UrlAliasPathEntity>;
};

export type UrlAliasPathEntityResponseCollection = {
  __typename?: 'UrlAliasPathEntityResponseCollection';
  data: Array<UrlAliasPathEntity>;
  meta: ResponseCollectionMeta;
};

export type UrlAliasPathFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UrlAliasPathFiltersInput>>>;
  contenttype?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  generated?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UrlAliasPathFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UrlAliasPathFiltersInput>>>;
  path?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UrlAliasPathInput = {
  contenttype?: InputMaybe<Scalars['String']>;
  generated?: InputMaybe<Scalars['Boolean']>;
  path?: InputMaybe<Scalars['String']>;
};

export type UrlAliasPattern = {
  __typename?: 'UrlAliasPattern';
  code: Scalars['String'];
  contenttype: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
  languages: Scalars['JSON'];
  pattern: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UrlAliasPatternEntity = {
  __typename?: 'UrlAliasPatternEntity';
  attributes?: Maybe<UrlAliasPattern>;
  id?: Maybe<Scalars['ID']>;
};

export type UrlAliasPatternEntityResponse = {
  __typename?: 'UrlAliasPatternEntityResponse';
  data?: Maybe<UrlAliasPatternEntity>;
};

export type UrlAliasPatternEntityResponseCollection = {
  __typename?: 'UrlAliasPatternEntityResponseCollection';
  data: Array<UrlAliasPatternEntity>;
  meta: ResponseCollectionMeta;
};

export type UrlAliasPatternFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UrlAliasPatternFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  contenttype?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  languages?: InputMaybe<JsonFilterInput>;
  not?: InputMaybe<UrlAliasPatternFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UrlAliasPatternFiltersInput>>>;
  pattern?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UrlAliasPatternInput = {
  code?: InputMaybe<Scalars['String']>;
  contenttype?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Scalars['JSON']>;
  pattern?: InputMaybe<Scalars['String']>;
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
  url_path_id?: Maybe<Scalars['String']>;
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
  url_path_id?: InputMaybe<StringFilterInput>;
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
  url_path_id?: InputMaybe<Scalars['String']>;
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
  description: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: Maybe<UploadFileEntityResponse>;
  substitusions?: Maybe<SubstitusionRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url_path_id?: Maybe<Scalars['String']>;
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
  url_path_id?: InputMaybe<StringFilterInput>;
};

export type WriterInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['ID']>;
  substitusions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  url_path_id?: InputMaybe<Scalars['String']>;
};

export type GetAlertQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAlertQuery = { __typename?: 'Query', alert?: { __typename?: 'AlertEntityResponse', data?: { __typename?: 'AlertEntity', attributes?: { __typename?: 'Alert', message?: string | null, link?: string | null, isVisible: boolean } | null } | null } | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', copyright?: string | null, showVercelBadge: boolean, email?: string | null } | null } | null } | null, socialMedias?: { __typename?: 'SocialMediaEntityResponseCollection', data: Array<{ __typename?: 'SocialMediaEntity', attributes?: { __typename?: 'SocialMedia', iconSlug: string, showInFooter: boolean, link: string } | null }> } | null };

export type GetArticlesQueryVariables = Exact<{
  articlesPerPage?: InputMaybe<Scalars['Int']>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, content: string, slug: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', attributes?: { __typename?: 'Writer', name: string, description: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription?: string | null, preventIndexing?: boolean | null } | null } | null }> } | null };

export type SeoFragment = { __typename?: 'ComponentSharedSeo', metaDescription?: string | null, preventIndexing?: boolean | null };

export type AuthorFragment = { __typename?: 'WriterEntity', attributes?: { __typename?: 'Writer', name: string, description: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null } | null };

export type ImageFragment = { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null };

export type GetGlobalQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalQuery = { __typename?: 'Query', global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', id?: string | null, attributes?: { __typename?: 'Global', siteName: string, siteDescription: string, createdAt?: any | null, updatedAt?: any | null, shareImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null } | null } | null } | null };

export type GetTranslationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTranslationsQuery = { __typename?: 'Query', translation?: { __typename?: 'TranslationEntityResponse', data?: { __typename?: 'TranslationEntity', attributes?: { __typename?: 'Translation', articleReadMore: string, paginationNextPage: string } | null } | null } | null };

export type GetCategoryArticlesBySlugQueryVariables = Exact<{
  entriesPerPage?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoryArticlesBySlugQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, seo?: { __typename?: 'ComponentSharedSeo', metaDescription?: string | null, preventIndexing?: boolean | null } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, content: string, slug: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', attributes?: { __typename?: 'Writer', name: string, description: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription?: string | null, preventIndexing?: boolean | null } | null } | null }> } | null } | null }> } | null };

export type GetArticleBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetArticleBySlugQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title: string, content: string, slug: string, createdAt?: any | null, publishedAt?: any | null, updatedAt?: any | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription?: string | null, preventIndexing?: boolean | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', attributes?: { __typename?: 'Writer', name: string, description: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null } | null } | null } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, placeholder?: string | null, updatedAt?: any | null, url: string } | null } | null } | null } | null }> } | null };

export type GetBlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPageQuery = { __typename?: 'Query', blog?: { __typename?: 'BlogEntityResponse', data?: { __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', articlesSection: { __typename?: 'ComponentArticlesArticlesSection', entriesPerPage: number, header: string, previewMaxCharacters?: number | null }, categorySection?: { __typename?: 'ComponentArticlesArticlesSection', entriesPerPage: number, header: string, previewMaxCharacters?: number | null } | null } | null } | null } | null };

export type ArticleSectionComponentFragment = { __typename?: 'ComponentArticlesArticlesSection', entriesPerPage: number, header: string, previewMaxCharacters?: number | null };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', attributes?: { __typename?: 'Homepage', seo?: { __typename?: 'ComponentSharedSeo', metaDescription?: string | null, preventIndexing?: boolean | null } | null, articlesSection?: { __typename?: 'ComponentArticlesArticlesSection', header: string, entriesPerPage: number, previewMaxCharacters?: number | null } | null } | null } | null } | null };

export type ArticlesSectionFragment = { __typename?: 'ComponentArticlesArticlesSection', header: string, entriesPerPage: number, previewMaxCharacters?: number | null };

export type GetArticlesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesSlugsQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', slug: string } | null }> } | null };

export type GetCategoriesSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesSlugsQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug: string } | null }> } | null };

export const SeoFragmentDoc = gql`
    fragment seo on ComponentSharedSeo {
  metaDescription
  preventIndexing
}
    `;
export const ImageFragmentDoc = gql`
    fragment image on UploadFileEntity {
  attributes {
    alternativeText
    width
    height
    placeholder
    updatedAt
    url
  }
}
    `;
export const AuthorFragmentDoc = gql`
    fragment author on WriterEntity {
  attributes {
    name
    description
    picture {
      data {
        ...image
      }
    }
  }
}
    ${ImageFragmentDoc}`;
export const ArticleSectionComponentFragmentDoc = gql`
    fragment articleSectionComponent on ComponentArticlesArticlesSection {
  entriesPerPage
  header
  previewMaxCharacters
}
    `;
export const ArticlesSectionFragmentDoc = gql`
    fragment articlesSection on ComponentArticlesArticlesSection {
  header
  entriesPerPage
  previewMaxCharacters
}
    `;
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
export const GetArticlesDocument = gql`
    query getArticles($articlesPerPage: Int) {
  articles(sort: "createdAt:desc", pagination: {limit: $articlesPerPage}) {
    data {
      id
      attributes {
        title
        content
        slug
        image {
          data {
            ...image
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
            ...author
          }
        }
        createdAt
        updatedAt
        publishedAt
        seo {
          ...seo
        }
      }
    }
  }
}
    ${ImageFragmentDoc}
${AuthorFragmentDoc}
${SeoFragmentDoc}`;

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
export const GetGlobalDocument = gql`
    query getGlobal {
  global {
    data {
      id
      attributes {
        siteName
        siteDescription
        shareImage {
          data {
            ...image
          }
        }
        createdAt
        updatedAt
        background {
          data {
            ...image
          }
        }
        favicon {
          data {
            ...image
          }
        }
        logo {
          data {
            ...image
          }
        }
      }
    }
  }
}
    ${ImageFragmentDoc}`;

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
export const GetTranslationsDocument = gql`
    query getTranslations {
  translation {
    data {
      attributes {
        articleReadMore
        paginationNextPage
      }
    }
  }
}
    `;

/**
 * __useGetTranslationsQuery__
 *
 * To run a query within a React component, call `useGetTranslationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTranslationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTranslationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTranslationsQuery(baseOptions?: Apollo.QueryHookOptions<GetTranslationsQuery, GetTranslationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTranslationsQuery, GetTranslationsQueryVariables>(GetTranslationsDocument, options);
      }
export function useGetTranslationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTranslationsQuery, GetTranslationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTranslationsQuery, GetTranslationsQueryVariables>(GetTranslationsDocument, options);
        }
export type GetTranslationsQueryHookResult = ReturnType<typeof useGetTranslationsQuery>;
export type GetTranslationsLazyQueryHookResult = ReturnType<typeof useGetTranslationsLazyQuery>;
export type GetTranslationsQueryResult = Apollo.QueryResult<GetTranslationsQuery, GetTranslationsQueryVariables>;
export const GetCategoryArticlesBySlugDocument = gql`
    query GetCategoryArticlesBySlug($entriesPerPage: Int, $slug: String) {
  categories(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        seo {
          ...seo
        }
        name
        articles(sort: "createdAt:desc", pagination: {limit: $entriesPerPage}) {
          data {
            id
            attributes {
              title
              content
              slug
              image {
                data {
                  ...image
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
                  ...author
                }
              }
              createdAt
              updatedAt
              publishedAt
              seo {
                ...seo
              }
            }
          }
        }
      }
    }
  }
}
    ${SeoFragmentDoc}
${ImageFragmentDoc}
${AuthorFragmentDoc}`;

/**
 * __useGetCategoryArticlesBySlugQuery__
 *
 * To run a query within a React component, call `useGetCategoryArticlesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryArticlesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryArticlesBySlugQuery({
 *   variables: {
 *      entriesPerPage: // value for 'entriesPerPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoryArticlesBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryArticlesBySlugQuery, GetCategoryArticlesBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryArticlesBySlugQuery, GetCategoryArticlesBySlugQueryVariables>(GetCategoryArticlesBySlugDocument, options);
      }
export function useGetCategoryArticlesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryArticlesBySlugQuery, GetCategoryArticlesBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryArticlesBySlugQuery, GetCategoryArticlesBySlugQueryVariables>(GetCategoryArticlesBySlugDocument, options);
        }
export type GetCategoryArticlesBySlugQueryHookResult = ReturnType<typeof useGetCategoryArticlesBySlugQuery>;
export type GetCategoryArticlesBySlugLazyQueryHookResult = ReturnType<typeof useGetCategoryArticlesBySlugLazyQuery>;
export type GetCategoryArticlesBySlugQueryResult = Apollo.QueryResult<GetCategoryArticlesBySlugQuery, GetCategoryArticlesBySlugQueryVariables>;
export const GetArticleBySlugDocument = gql`
    query GetArticleBySlug($slug: String) {
  articles(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        title
        content
        slug
        createdAt
        publishedAt
        updatedAt
        category {
          data {
            attributes {
              name
              slug
            }
          }
        }
        seo {
          ...seo
        }
        author {
          data {
            ...author
          }
        }
        image {
          data {
            ...image
          }
        }
      }
    }
  }
}
    ${SeoFragmentDoc}
${AuthorFragmentDoc}
${ImageFragmentDoc}`;

/**
 * __useGetArticleBySlugQuery__
 *
 * To run a query within a React component, call `useGetArticleBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetArticleBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>(GetArticleBySlugDocument, options);
      }
export function useGetArticleBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>(GetArticleBySlugDocument, options);
        }
export type GetArticleBySlugQueryHookResult = ReturnType<typeof useGetArticleBySlugQuery>;
export type GetArticleBySlugLazyQueryHookResult = ReturnType<typeof useGetArticleBySlugLazyQuery>;
export type GetArticleBySlugQueryResult = Apollo.QueryResult<GetArticleBySlugQuery, GetArticleBySlugQueryVariables>;
export const GetBlogPageDocument = gql`
    query getBlogPage {
  blog {
    data {
      attributes {
        articlesSection {
          ...articleSectionComponent
        }
        categorySection {
          ...articleSectionComponent
        }
      }
    }
  }
}
    ${ArticleSectionComponentFragmentDoc}`;

/**
 * __useGetBlogPageQuery__
 *
 * To run a query within a React component, call `useGetBlogPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlogPageQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogPageQuery, GetBlogPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogPageQuery, GetBlogPageQueryVariables>(GetBlogPageDocument, options);
      }
export function useGetBlogPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogPageQuery, GetBlogPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogPageQuery, GetBlogPageQueryVariables>(GetBlogPageDocument, options);
        }
export type GetBlogPageQueryHookResult = ReturnType<typeof useGetBlogPageQuery>;
export type GetBlogPageLazyQueryHookResult = ReturnType<typeof useGetBlogPageLazyQuery>;
export type GetBlogPageQueryResult = Apollo.QueryResult<GetBlogPageQuery, GetBlogPageQueryVariables>;
export const GetHomePageDocument = gql`
    query getHomePage {
  homepage {
    data {
      attributes {
        seo {
          ...seo
        }
        articlesSection {
          ...articlesSection
        }
      }
    }
  }
}
    ${SeoFragmentDoc}
${ArticlesSectionFragmentDoc}`;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
      }
export function useGetHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<typeof useGetHomePageLazyQuery>;
export type GetHomePageQueryResult = Apollo.QueryResult<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetArticlesSlugsDocument = gql`
    query getArticlesSlugs {
  articles {
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
 * __useGetArticlesSlugsQuery__
 *
 * To run a query within a React component, call `useGetArticlesSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticlesSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesSlugsQuery, GetArticlesSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesSlugsQuery, GetArticlesSlugsQueryVariables>(GetArticlesSlugsDocument, options);
      }
export function useGetArticlesSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesSlugsQuery, GetArticlesSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesSlugsQuery, GetArticlesSlugsQueryVariables>(GetArticlesSlugsDocument, options);
        }
export type GetArticlesSlugsQueryHookResult = ReturnType<typeof useGetArticlesSlugsQuery>;
export type GetArticlesSlugsLazyQueryHookResult = ReturnType<typeof useGetArticlesSlugsLazyQuery>;
export type GetArticlesSlugsQueryResult = Apollo.QueryResult<GetArticlesSlugsQuery, GetArticlesSlugsQueryVariables>;
export const GetCategoriesSlugsDocument = gql`
    query getCategoriesSlugs {
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