/** This file was generated by Nexus Schema Do not make changes to this file directly */

import type { core } from '../../src'

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreatePostInput: {
    // input type
    author: string // ID!
    geo: Array<Array<number | null>> // [[Float]!]!
    name: string // String!
  }
  PostFilters: {
    // input type
    order: NexusGenEnums['OrderEnum'] // OrderEnum!
    search?: string | null // String
  }
}

export interface NexusGenEnums {
  OrderEnum: 'ASC' | 'DESC'
  SomeEnum: 'A' | 'B'
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  UUID: any
}

export interface NexusGenObjects {
  Mutation: {}
  Post: {}
  Query: {}
  User: {}
}

export interface NexusGenInterfaces {
  Node: core.Discriminate<'Post', 'required'> | core.Discriminate<'User', 'required'>
}

export interface NexusGenUnions {
  ExampleUnion: core.Discriminate<'Post', 'required'> | core.Discriminate<'User', 'required'>
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: {
    // field return type
    createPost: NexusGenRootTypes['Post'] // Post!
    registerClick: NexusGenRootTypes['Query'] // Query!
    someList: Array<string | null> // [String]!
  }
  Post: {
    // field return type
    author: NexusGenRootTypes['User'] // User!
    geo: number[][] // [[Float!]!]!
    id: string // ID!
    messyGeo: Array<number[] | null> | null // [[Float!]]
    uuid: NexusGenScalars['UUID'] // UUID!
  }
  Query: {
    // field return type
    posts: NexusGenRootTypes['Post'][] // [Post!]!
    unionField: NexusGenRootTypes['ExampleUnion'] // ExampleUnion!
    user: NexusGenRootTypes['User'] // User!
  }
  User: {
    // field return type
    email: string // String!
    id: string // ID!
    name: string // String!
    outEnum: NexusGenEnums['SomeEnum'] | null // SomeEnum
    phone: string | null // String
    posts: NexusGenRootTypes['Post'][] // [Post!]!
  }
  Node: {
    // field return type
    id: string // ID!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: {
    // field return type name
    createPost: 'Post'
    registerClick: 'Query'
    someList: 'String'
  }
  Post: {
    // field return type name
    author: 'User'
    geo: 'Float'
    id: 'ID'
    messyGeo: 'Float'
    uuid: 'UUID'
  }
  Query: {
    // field return type name
    posts: 'Post'
    unionField: 'ExampleUnion'
    user: 'User'
  }
  User: {
    // field return type name
    email: 'String'
    id: 'ID'
    name: 'String'
    outEnum: 'SomeEnum'
    phone: 'String'
    posts: 'Post'
  }
  Node: {
    // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: {
      // args
      input: NexusGenInputs['CreatePostInput'] // CreatePostInput!
    }
    registerClick: {
      // args
      uuid?: NexusGenScalars['UUID'] | null // UUID
    }
    someList: {
      // args
      items: Array<string | null> // [String]!
    }
  }
  Query: {
    posts: {
      // args
      filters: NexusGenInputs['PostFilters'] // PostFilters!
    }
  }
  User: {
    name: {
      // args
      prefix?: string | null // String
    }
    posts: {
      // args
      filters?: NexusGenInputs['PostFilters'] | null // PostFilters
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  ExampleUnion: 'Post' | 'User'
  Node: 'Post' | 'User'
}

export interface NexusGenTypeInterfaces {
  Post: 'Node'
  User: 'Node'
}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = keyof NexusGenInputs

export type NexusGenEnumNames = keyof NexusGenEnums

export type NexusGenInterfaceNames = keyof NexusGenInterfaces

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = keyof NexusGenUnions

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    __typename: true
    isTypeOf: false
    resolveType: false
  }
}

export interface NexusGenTypes {
  context: any
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
