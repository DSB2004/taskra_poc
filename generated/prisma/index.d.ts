
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organisations
 * 
 */
export type Organisations = $Result.DefaultSelection<Prisma.$OrganisationsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model OrganisationUser
 * 
 */
export type OrganisationUser = $Result.DefaultSelection<Prisma.$OrganisationUserPayload>
/**
 * Model Leads
 * 
 */
export type Leads = $Result.DefaultSelection<Prisma.$LeadsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LeadStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESSFUL: 'SUCCESSFUL',
  REJECTED: 'REJECTED',
  WARM: 'WARM'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]

}

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organisations
 * const organisations = await prisma.organisations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organisations
   * const organisations = await prisma.organisations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organisations`: Exposes CRUD operations for the **Organisations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisations.findMany()
    * ```
    */
  get organisations(): Prisma.OrganisationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organisationUser`: Exposes CRUD operations for the **OrganisationUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganisationUsers
    * const organisationUsers = await prisma.organisationUser.findMany()
    * ```
    */
  get organisationUser(): Prisma.OrganisationUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **Leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.LeadsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organisations: 'Organisations',
    Users: 'Users',
    OrganisationUser: 'OrganisationUser',
    Leads: 'Leads'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organisations" | "users" | "organisationUser" | "leads"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organisations: {
        payload: Prisma.$OrganisationsPayload<ExtArgs>
        fields: Prisma.OrganisationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganisationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>
          }
          findFirst: {
            args: Prisma.OrganisationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>
          }
          findMany: {
            args: Prisma.OrganisationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>[]
          }
          create: {
            args: Prisma.OrganisationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>
          }
          createMany: {
            args: Prisma.OrganisationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganisationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>[]
          }
          delete: {
            args: Prisma.OrganisationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>
          }
          update: {
            args: Prisma.OrganisationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganisationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>[]
          }
          upsert: {
            args: Prisma.OrganisationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationsPayload>
          }
          aggregate: {
            args: Prisma.OrganisationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisations>
          }
          groupBy: {
            args: Prisma.OrganisationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      OrganisationUser: {
        payload: Prisma.$OrganisationUserPayload<ExtArgs>
        fields: Prisma.OrganisationUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganisationUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>
          }
          findFirst: {
            args: Prisma.OrganisationUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>
          }
          findMany: {
            args: Prisma.OrganisationUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>[]
          }
          create: {
            args: Prisma.OrganisationUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>
          }
          createMany: {
            args: Prisma.OrganisationUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganisationUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>[]
          }
          delete: {
            args: Prisma.OrganisationUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>
          }
          update: {
            args: Prisma.OrganisationUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganisationUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>[]
          }
          upsert: {
            args: Prisma.OrganisationUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationUserPayload>
          }
          aggregate: {
            args: Prisma.OrganisationUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisationUser>
          }
          groupBy: {
            args: Prisma.OrganisationUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationUserCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationUserCountAggregateOutputType> | number
          }
        }
      }
      Leads: {
        payload: Prisma.$LeadsPayload<ExtArgs>
        fields: Prisma.LeadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          findFirst: {
            args: Prisma.LeadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          findMany: {
            args: Prisma.LeadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          create: {
            args: Prisma.LeadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          createMany: {
            args: Prisma.LeadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          delete: {
            args: Prisma.LeadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          update: {
            args: Prisma.LeadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          deleteMany: {
            args: Prisma.LeadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[]
          }
          upsert: {
            args: Prisma.LeadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.LeadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organisations?: OrganisationsOmit
    users?: UsersOmit
    organisationUser?: OrganisationUserOmit
    leads?: LeadsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganisationsCountOutputType
   */

  export type OrganisationsCountOutputType = {
    leads: number
  }

  export type OrganisationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | OrganisationsCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * OrganisationsCountOutputType without action
   */
  export type OrganisationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationsCountOutputType
     */
    select?: OrganisationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganisationsCountOutputType without action
   */
  export type OrganisationsCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    assignedLeads: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedLeads?: boolean | UsersCountOutputTypeCountAssignedLeadsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAssignedLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organisations
   */

  export type AggregateOrganisations = {
    _count: OrganisationsCountAggregateOutputType | null
    _min: OrganisationsMinAggregateOutputType | null
    _max: OrganisationsMaxAggregateOutputType | null
  }

  export type OrganisationsMinAggregateOutputType = {
    id: string | null
    organisationId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganisationsMaxAggregateOutputType = {
    id: string | null
    organisationId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganisationsCountAggregateOutputType = {
    id: number
    organisationId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganisationsMinAggregateInputType = {
    id?: true
    organisationId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganisationsMaxAggregateInputType = {
    id?: true
    organisationId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganisationsCountAggregateInputType = {
    id?: true
    organisationId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganisationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to aggregate.
     */
    where?: OrganisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationsOrderByWithRelationInput | OrganisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organisations
    **/
    _count?: true | OrganisationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationsMaxAggregateInputType
  }

  export type GetOrganisationsAggregateType<T extends OrganisationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisations[P]>
      : GetScalarType<T[P], AggregateOrganisations[P]>
  }




  export type OrganisationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationsWhereInput
    orderBy?: OrganisationsOrderByWithAggregationInput | OrganisationsOrderByWithAggregationInput[]
    by: OrganisationsScalarFieldEnum[] | OrganisationsScalarFieldEnum
    having?: OrganisationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationsCountAggregateInputType | true
    _min?: OrganisationsMinAggregateInputType
    _max?: OrganisationsMaxAggregateInputType
  }

  export type OrganisationsGroupByOutputType = {
    id: string
    organisationId: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganisationsCountAggregateOutputType | null
    _min: OrganisationsMinAggregateOutputType | null
    _max: OrganisationsMaxAggregateOutputType | null
  }

  type GetOrganisationsGroupByPayload<T extends OrganisationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationsGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organisationId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | Organisations$leadsArgs<ExtArgs>
    _count?: boolean | OrganisationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisations"]>

  export type OrganisationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organisationId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organisations"]>

  export type OrganisationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organisationId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organisations"]>

  export type OrganisationsSelectScalar = {
    id?: boolean
    organisationId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganisationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organisationId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["organisations"]>
  export type OrganisationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | Organisations$leadsArgs<ExtArgs>
    _count?: boolean | OrganisationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganisationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganisationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganisationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organisations"
    objects: {
      leads: Prisma.$LeadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organisationId: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organisations"]>
    composites: {}
  }

  type OrganisationsGetPayload<S extends boolean | null | undefined | OrganisationsDefaultArgs> = $Result.GetResult<Prisma.$OrganisationsPayload, S>

  type OrganisationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganisationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganisationsCountAggregateInputType | true
    }

  export interface OrganisationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organisations'], meta: { name: 'Organisations' } }
    /**
     * Find zero or one Organisations that matches the filter.
     * @param {OrganisationsFindUniqueArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationsFindUniqueArgs>(args: SelectSubset<T, OrganisationsFindUniqueArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organisations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganisationsFindUniqueOrThrowArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganisationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsFindFirstArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationsFindFirstArgs>(args?: SelectSubset<T, OrganisationsFindFirstArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsFindFirstOrThrowArgs} args - Arguments to find a Organisations
     * @example
     * // Get one Organisations
     * const organisations = await prisma.organisations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganisationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisations.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisationsWithIdOnly = await prisma.organisations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganisationsFindManyArgs>(args?: SelectSubset<T, OrganisationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organisations.
     * @param {OrganisationsCreateArgs} args - Arguments to create a Organisations.
     * @example
     * // Create one Organisations
     * const Organisations = await prisma.organisations.create({
     *   data: {
     *     // ... data to create a Organisations
     *   }
     * })
     * 
     */
    create<T extends OrganisationsCreateArgs>(args: SelectSubset<T, OrganisationsCreateArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organisations.
     * @param {OrganisationsCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisations = await prisma.organisations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganisationsCreateManyArgs>(args?: SelectSubset<T, OrganisationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisations and returns the data saved in the database.
     * @param {OrganisationsCreateManyAndReturnArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisations = await prisma.organisations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisations and only return the `id`
     * const organisationsWithIdOnly = await prisma.organisations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganisationsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganisationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organisations.
     * @param {OrganisationsDeleteArgs} args - Arguments to delete one Organisations.
     * @example
     * // Delete one Organisations
     * const Organisations = await prisma.organisations.delete({
     *   where: {
     *     // ... filter to delete one Organisations
     *   }
     * })
     * 
     */
    delete<T extends OrganisationsDeleteArgs>(args: SelectSubset<T, OrganisationsDeleteArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organisations.
     * @param {OrganisationsUpdateArgs} args - Arguments to update one Organisations.
     * @example
     * // Update one Organisations
     * const organisations = await prisma.organisations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganisationsUpdateArgs>(args: SelectSubset<T, OrganisationsUpdateArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organisations.
     * @param {OrganisationsDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganisationsDeleteManyArgs>(args?: SelectSubset<T, OrganisationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisations = await prisma.organisations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganisationsUpdateManyArgs>(args: SelectSubset<T, OrganisationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations and returns the data updated in the database.
     * @param {OrganisationsUpdateManyAndReturnArgs} args - Arguments to update many Organisations.
     * @example
     * // Update many Organisations
     * const organisations = await prisma.organisations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organisations and only return the `id`
     * const organisationsWithIdOnly = await prisma.organisations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganisationsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganisationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organisations.
     * @param {OrganisationsUpsertArgs} args - Arguments to update or create a Organisations.
     * @example
     * // Update or create a Organisations
     * const organisations = await prisma.organisations.upsert({
     *   create: {
     *     // ... data to create a Organisations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisations we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationsUpsertArgs>(args: SelectSubset<T, OrganisationsUpsertArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisations.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends OrganisationsCountArgs>(
      args?: Subset<T, OrganisationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganisationsAggregateArgs>(args: Subset<T, OrganisationsAggregateArgs>): Prisma.PrismaPromise<GetOrganisationsAggregateType<T>>

    /**
     * Group by Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganisationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationsGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganisationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organisations model
   */
  readonly fields: OrganisationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organisations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganisationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends Organisations$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Organisations$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organisations model
   */
  interface OrganisationsFieldRefs {
    readonly id: FieldRef<"Organisations", 'String'>
    readonly organisationId: FieldRef<"Organisations", 'String'>
    readonly name: FieldRef<"Organisations", 'String'>
    readonly createdAt: FieldRef<"Organisations", 'DateTime'>
    readonly updatedAt: FieldRef<"Organisations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organisations findUnique
   */
  export type OrganisationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where: OrganisationsWhereUniqueInput
  }

  /**
   * Organisations findUniqueOrThrow
   */
  export type OrganisationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where: OrganisationsWhereUniqueInput
  }

  /**
   * Organisations findFirst
   */
  export type OrganisationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationsOrderByWithRelationInput | OrganisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * Organisations findFirstOrThrow
   */
  export type OrganisationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationsOrderByWithRelationInput | OrganisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * Organisations findMany
   */
  export type OrganisationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationsOrderByWithRelationInput | OrganisationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organisations.
     */
    cursor?: OrganisationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    distinct?: OrganisationsScalarFieldEnum | OrganisationsScalarFieldEnum[]
  }

  /**
   * Organisations create
   */
  export type OrganisationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Organisations.
     */
    data: XOR<OrganisationsCreateInput, OrganisationsUncheckedCreateInput>
  }

  /**
   * Organisations createMany
   */
  export type OrganisationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationsCreateManyInput | OrganisationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisations createManyAndReturn
   */
  export type OrganisationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationsCreateManyInput | OrganisationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisations update
   */
  export type OrganisationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Organisations.
     */
    data: XOR<OrganisationsUpdateInput, OrganisationsUncheckedUpdateInput>
    /**
     * Choose, which Organisations to update.
     */
    where: OrganisationsWhereUniqueInput
  }

  /**
   * Organisations updateMany
   */
  export type OrganisationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationsUpdateManyMutationInput, OrganisationsUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationsWhereInput
    /**
     * Limit how many Organisations to update.
     */
    limit?: number
  }

  /**
   * Organisations updateManyAndReturn
   */
  export type OrganisationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationsUpdateManyMutationInput, OrganisationsUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationsWhereInput
    /**
     * Limit how many Organisations to update.
     */
    limit?: number
  }

  /**
   * Organisations upsert
   */
  export type OrganisationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Organisations to update in case it exists.
     */
    where: OrganisationsWhereUniqueInput
    /**
     * In case the Organisations found by the `where` argument doesn't exist, create a new Organisations with this data.
     */
    create: XOR<OrganisationsCreateInput, OrganisationsUncheckedCreateInput>
    /**
     * In case the Organisations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationsUpdateInput, OrganisationsUncheckedUpdateInput>
  }

  /**
   * Organisations delete
   */
  export type OrganisationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
    /**
     * Filter which Organisations to delete.
     */
    where: OrganisationsWhereUniqueInput
  }

  /**
   * Organisations deleteMany
   */
  export type OrganisationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to delete
     */
    where?: OrganisationsWhereInput
    /**
     * Limit how many Organisations to delete.
     */
    limit?: number
  }

  /**
   * Organisations.leads
   */
  export type Organisations$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    where?: LeadsWhereInput
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    cursor?: LeadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Organisations without action
   */
  export type OrganisationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisations
     */
    select?: OrganisationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisations
     */
    omit?: OrganisationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    email: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedLeads?: boolean | Users$assignedLeadsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedLeads?: boolean | Users$assignedLeadsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      assignedLeads: Prisma.$LeadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      email: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedLeads<T extends Users$assignedLeadsArgs<ExtArgs> = {}>(args?: Subset<T, Users$assignedLeadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly userId: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.assignedLeads
   */
  export type Users$assignedLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    where?: LeadsWhereInput
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    cursor?: LeadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model OrganisationUser
   */

  export type AggregateOrganisationUser = {
    _count: OrganisationUserCountAggregateOutputType | null
    _min: OrganisationUserMinAggregateOutputType | null
    _max: OrganisationUserMaxAggregateOutputType | null
  }

  export type OrganisationUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organisationId: string | null
  }

  export type OrganisationUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organisationId: string | null
  }

  export type OrganisationUserCountAggregateOutputType = {
    id: number
    userId: number
    organisationId: number
    _all: number
  }


  export type OrganisationUserMinAggregateInputType = {
    id?: true
    userId?: true
    organisationId?: true
  }

  export type OrganisationUserMaxAggregateInputType = {
    id?: true
    userId?: true
    organisationId?: true
  }

  export type OrganisationUserCountAggregateInputType = {
    id?: true
    userId?: true
    organisationId?: true
    _all?: true
  }

  export type OrganisationUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganisationUser to aggregate.
     */
    where?: OrganisationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationUsers to fetch.
     */
    orderBy?: OrganisationUserOrderByWithRelationInput | OrganisationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganisationUsers
    **/
    _count?: true | OrganisationUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationUserMaxAggregateInputType
  }

  export type GetOrganisationUserAggregateType<T extends OrganisationUserAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisationUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisationUser[P]>
      : GetScalarType<T[P], AggregateOrganisationUser[P]>
  }




  export type OrganisationUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationUserWhereInput
    orderBy?: OrganisationUserOrderByWithAggregationInput | OrganisationUserOrderByWithAggregationInput[]
    by: OrganisationUserScalarFieldEnum[] | OrganisationUserScalarFieldEnum
    having?: OrganisationUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationUserCountAggregateInputType | true
    _min?: OrganisationUserMinAggregateInputType
    _max?: OrganisationUserMaxAggregateInputType
  }

  export type OrganisationUserGroupByOutputType = {
    id: string
    userId: string
    organisationId: string
    _count: OrganisationUserCountAggregateOutputType | null
    _min: OrganisationUserMinAggregateOutputType | null
    _max: OrganisationUserMaxAggregateOutputType | null
  }

  type GetOrganisationUserGroupByPayload<T extends OrganisationUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationUserGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationUserGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organisationId?: boolean
  }, ExtArgs["result"]["organisationUser"]>

  export type OrganisationUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organisationId?: boolean
  }, ExtArgs["result"]["organisationUser"]>

  export type OrganisationUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organisationId?: boolean
  }, ExtArgs["result"]["organisationUser"]>

  export type OrganisationUserSelectScalar = {
    id?: boolean
    userId?: boolean
    organisationId?: boolean
  }

  export type OrganisationUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organisationId", ExtArgs["result"]["organisationUser"]>

  export type $OrganisationUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganisationUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organisationId: string
    }, ExtArgs["result"]["organisationUser"]>
    composites: {}
  }

  type OrganisationUserGetPayload<S extends boolean | null | undefined | OrganisationUserDefaultArgs> = $Result.GetResult<Prisma.$OrganisationUserPayload, S>

  type OrganisationUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganisationUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganisationUserCountAggregateInputType | true
    }

  export interface OrganisationUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganisationUser'], meta: { name: 'OrganisationUser' } }
    /**
     * Find zero or one OrganisationUser that matches the filter.
     * @param {OrganisationUserFindUniqueArgs} args - Arguments to find a OrganisationUser
     * @example
     * // Get one OrganisationUser
     * const organisationUser = await prisma.organisationUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationUserFindUniqueArgs>(args: SelectSubset<T, OrganisationUserFindUniqueArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganisationUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganisationUserFindUniqueOrThrowArgs} args - Arguments to find a OrganisationUser
     * @example
     * // Get one OrganisationUser
     * const organisationUser = await prisma.organisationUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationUserFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganisationUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganisationUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUserFindFirstArgs} args - Arguments to find a OrganisationUser
     * @example
     * // Get one OrganisationUser
     * const organisationUser = await prisma.organisationUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationUserFindFirstArgs>(args?: SelectSubset<T, OrganisationUserFindFirstArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganisationUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUserFindFirstOrThrowArgs} args - Arguments to find a OrganisationUser
     * @example
     * // Get one OrganisationUser
     * const organisationUser = await prisma.organisationUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationUserFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganisationUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganisationUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganisationUsers
     * const organisationUsers = await prisma.organisationUser.findMany()
     * 
     * // Get first 10 OrganisationUsers
     * const organisationUsers = await prisma.organisationUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisationUserWithIdOnly = await prisma.organisationUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganisationUserFindManyArgs>(args?: SelectSubset<T, OrganisationUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganisationUser.
     * @param {OrganisationUserCreateArgs} args - Arguments to create a OrganisationUser.
     * @example
     * // Create one OrganisationUser
     * const OrganisationUser = await prisma.organisationUser.create({
     *   data: {
     *     // ... data to create a OrganisationUser
     *   }
     * })
     * 
     */
    create<T extends OrganisationUserCreateArgs>(args: SelectSubset<T, OrganisationUserCreateArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganisationUsers.
     * @param {OrganisationUserCreateManyArgs} args - Arguments to create many OrganisationUsers.
     * @example
     * // Create many OrganisationUsers
     * const organisationUser = await prisma.organisationUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganisationUserCreateManyArgs>(args?: SelectSubset<T, OrganisationUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganisationUsers and returns the data saved in the database.
     * @param {OrganisationUserCreateManyAndReturnArgs} args - Arguments to create many OrganisationUsers.
     * @example
     * // Create many OrganisationUsers
     * const organisationUser = await prisma.organisationUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganisationUsers and only return the `id`
     * const organisationUserWithIdOnly = await prisma.organisationUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganisationUserCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganisationUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganisationUser.
     * @param {OrganisationUserDeleteArgs} args - Arguments to delete one OrganisationUser.
     * @example
     * // Delete one OrganisationUser
     * const OrganisationUser = await prisma.organisationUser.delete({
     *   where: {
     *     // ... filter to delete one OrganisationUser
     *   }
     * })
     * 
     */
    delete<T extends OrganisationUserDeleteArgs>(args: SelectSubset<T, OrganisationUserDeleteArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganisationUser.
     * @param {OrganisationUserUpdateArgs} args - Arguments to update one OrganisationUser.
     * @example
     * // Update one OrganisationUser
     * const organisationUser = await prisma.organisationUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganisationUserUpdateArgs>(args: SelectSubset<T, OrganisationUserUpdateArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganisationUsers.
     * @param {OrganisationUserDeleteManyArgs} args - Arguments to filter OrganisationUsers to delete.
     * @example
     * // Delete a few OrganisationUsers
     * const { count } = await prisma.organisationUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganisationUserDeleteManyArgs>(args?: SelectSubset<T, OrganisationUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganisationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganisationUsers
     * const organisationUser = await prisma.organisationUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganisationUserUpdateManyArgs>(args: SelectSubset<T, OrganisationUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganisationUsers and returns the data updated in the database.
     * @param {OrganisationUserUpdateManyAndReturnArgs} args - Arguments to update many OrganisationUsers.
     * @example
     * // Update many OrganisationUsers
     * const organisationUser = await prisma.organisationUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganisationUsers and only return the `id`
     * const organisationUserWithIdOnly = await prisma.organisationUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganisationUserUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganisationUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganisationUser.
     * @param {OrganisationUserUpsertArgs} args - Arguments to update or create a OrganisationUser.
     * @example
     * // Update or create a OrganisationUser
     * const organisationUser = await prisma.organisationUser.upsert({
     *   create: {
     *     // ... data to create a OrganisationUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganisationUser we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationUserUpsertArgs>(args: SelectSubset<T, OrganisationUserUpsertArgs<ExtArgs>>): Prisma__OrganisationUserClient<$Result.GetResult<Prisma.$OrganisationUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganisationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUserCountArgs} args - Arguments to filter OrganisationUsers to count.
     * @example
     * // Count the number of OrganisationUsers
     * const count = await prisma.organisationUser.count({
     *   where: {
     *     // ... the filter for the OrganisationUsers we want to count
     *   }
     * })
    **/
    count<T extends OrganisationUserCountArgs>(
      args?: Subset<T, OrganisationUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganisationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganisationUserAggregateArgs>(args: Subset<T, OrganisationUserAggregateArgs>): Prisma.PrismaPromise<GetOrganisationUserAggregateType<T>>

    /**
     * Group by OrganisationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganisationUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationUserGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganisationUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganisationUser model
   */
  readonly fields: OrganisationUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganisationUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganisationUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganisationUser model
   */
  interface OrganisationUserFieldRefs {
    readonly id: FieldRef<"OrganisationUser", 'String'>
    readonly userId: FieldRef<"OrganisationUser", 'String'>
    readonly organisationId: FieldRef<"OrganisationUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrganisationUser findUnique
   */
  export type OrganisationUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * Filter, which OrganisationUser to fetch.
     */
    where: OrganisationUserWhereUniqueInput
  }

  /**
   * OrganisationUser findUniqueOrThrow
   */
  export type OrganisationUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * Filter, which OrganisationUser to fetch.
     */
    where: OrganisationUserWhereUniqueInput
  }

  /**
   * OrganisationUser findFirst
   */
  export type OrganisationUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * Filter, which OrganisationUser to fetch.
     */
    where?: OrganisationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationUsers to fetch.
     */
    orderBy?: OrganisationUserOrderByWithRelationInput | OrganisationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganisationUsers.
     */
    cursor?: OrganisationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganisationUsers.
     */
    distinct?: OrganisationUserScalarFieldEnum | OrganisationUserScalarFieldEnum[]
  }

  /**
   * OrganisationUser findFirstOrThrow
   */
  export type OrganisationUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * Filter, which OrganisationUser to fetch.
     */
    where?: OrganisationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationUsers to fetch.
     */
    orderBy?: OrganisationUserOrderByWithRelationInput | OrganisationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganisationUsers.
     */
    cursor?: OrganisationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganisationUsers.
     */
    distinct?: OrganisationUserScalarFieldEnum | OrganisationUserScalarFieldEnum[]
  }

  /**
   * OrganisationUser findMany
   */
  export type OrganisationUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * Filter, which OrganisationUsers to fetch.
     */
    where?: OrganisationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganisationUsers to fetch.
     */
    orderBy?: OrganisationUserOrderByWithRelationInput | OrganisationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganisationUsers.
     */
    cursor?: OrganisationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganisationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganisationUsers.
     */
    skip?: number
    distinct?: OrganisationUserScalarFieldEnum | OrganisationUserScalarFieldEnum[]
  }

  /**
   * OrganisationUser create
   */
  export type OrganisationUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * The data needed to create a OrganisationUser.
     */
    data: XOR<OrganisationUserCreateInput, OrganisationUserUncheckedCreateInput>
  }

  /**
   * OrganisationUser createMany
   */
  export type OrganisationUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganisationUsers.
     */
    data: OrganisationUserCreateManyInput | OrganisationUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganisationUser createManyAndReturn
   */
  export type OrganisationUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * The data used to create many OrganisationUsers.
     */
    data: OrganisationUserCreateManyInput | OrganisationUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganisationUser update
   */
  export type OrganisationUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * The data needed to update a OrganisationUser.
     */
    data: XOR<OrganisationUserUpdateInput, OrganisationUserUncheckedUpdateInput>
    /**
     * Choose, which OrganisationUser to update.
     */
    where: OrganisationUserWhereUniqueInput
  }

  /**
   * OrganisationUser updateMany
   */
  export type OrganisationUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganisationUsers.
     */
    data: XOR<OrganisationUserUpdateManyMutationInput, OrganisationUserUncheckedUpdateManyInput>
    /**
     * Filter which OrganisationUsers to update
     */
    where?: OrganisationUserWhereInput
    /**
     * Limit how many OrganisationUsers to update.
     */
    limit?: number
  }

  /**
   * OrganisationUser updateManyAndReturn
   */
  export type OrganisationUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * The data used to update OrganisationUsers.
     */
    data: XOR<OrganisationUserUpdateManyMutationInput, OrganisationUserUncheckedUpdateManyInput>
    /**
     * Filter which OrganisationUsers to update
     */
    where?: OrganisationUserWhereInput
    /**
     * Limit how many OrganisationUsers to update.
     */
    limit?: number
  }

  /**
   * OrganisationUser upsert
   */
  export type OrganisationUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * The filter to search for the OrganisationUser to update in case it exists.
     */
    where: OrganisationUserWhereUniqueInput
    /**
     * In case the OrganisationUser found by the `where` argument doesn't exist, create a new OrganisationUser with this data.
     */
    create: XOR<OrganisationUserCreateInput, OrganisationUserUncheckedCreateInput>
    /**
     * In case the OrganisationUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationUserUpdateInput, OrganisationUserUncheckedUpdateInput>
  }

  /**
   * OrganisationUser delete
   */
  export type OrganisationUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
    /**
     * Filter which OrganisationUser to delete.
     */
    where: OrganisationUserWhereUniqueInput
  }

  /**
   * OrganisationUser deleteMany
   */
  export type OrganisationUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganisationUsers to delete
     */
    where?: OrganisationUserWhereInput
    /**
     * Limit how many OrganisationUsers to delete.
     */
    limit?: number
  }

  /**
   * OrganisationUser without action
   */
  export type OrganisationUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationUser
     */
    select?: OrganisationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganisationUser
     */
    omit?: OrganisationUserOmit<ExtArgs> | null
  }


  /**
   * Model Leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsMinAggregateOutputType = {
    id: string | null
    organisationId: string | null
    leadOn: string | null
    source: string | null
    status: $Enums.LeadStatus | null
    mobileNo: string | null
    email: string | null
    website: string | null
    name: string | null
    nextFlowup: string | null
    value: string | null
    notes: string | null
    assignedToId: string | null
    isArchived: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: string | null
    organisationId: string | null
    leadOn: string | null
    source: string | null
    status: $Enums.LeadStatus | null
    mobileNo: string | null
    email: string | null
    website: string | null
    name: string | null
    nextFlowup: string | null
    value: string | null
    notes: string | null
    assignedToId: string | null
    isArchived: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    organisationId: number
    leadOn: number
    source: number
    status: number
    mobileNo: number
    email: number
    website: number
    name: number
    nextFlowup: number
    value: number
    notes: number
    assignedToId: number
    isArchived: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadsMinAggregateInputType = {
    id?: true
    organisationId?: true
    leadOn?: true
    source?: true
    status?: true
    mobileNo?: true
    email?: true
    website?: true
    name?: true
    nextFlowup?: true
    value?: true
    notes?: true
    assignedToId?: true
    isArchived?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    organisationId?: true
    leadOn?: true
    source?: true
    status?: true
    mobileNo?: true
    email?: true
    website?: true
    name?: true
    nextFlowup?: true
    value?: true
    notes?: true
    assignedToId?: true
    isArchived?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    organisationId?: true
    leadOn?: true
    source?: true
    status?: true
    mobileNo?: true
    email?: true
    website?: true
    name?: true
    nextFlowup?: true
    value?: true
    notes?: true
    assignedToId?: true
    isArchived?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to aggregate.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type LeadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadsWhereInput
    orderBy?: LeadsOrderByWithAggregationInput | LeadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: LeadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: string
    organisationId: string
    leadOn: string
    source: string
    status: $Enums.LeadStatus
    mobileNo: string | null
    email: string | null
    website: string | null
    name: string | null
    nextFlowup: string | null
    value: string | null
    notes: string | null
    assignedToId: string
    isArchived: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: LeadsCountAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends LeadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type LeadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organisationId?: boolean
    leadOn?: boolean
    source?: boolean
    status?: boolean
    mobileNo?: boolean
    email?: boolean
    website?: boolean
    name?: boolean
    nextFlowup?: boolean
    value?: boolean
    notes?: boolean
    assignedToId?: boolean
    isArchived?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisation?: boolean | OrganisationsDefaultArgs<ExtArgs>
    assignedTo?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organisationId?: boolean
    leadOn?: boolean
    source?: boolean
    status?: boolean
    mobileNo?: boolean
    email?: boolean
    website?: boolean
    name?: boolean
    nextFlowup?: boolean
    value?: boolean
    notes?: boolean
    assignedToId?: boolean
    isArchived?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisation?: boolean | OrganisationsDefaultArgs<ExtArgs>
    assignedTo?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organisationId?: boolean
    leadOn?: boolean
    source?: boolean
    status?: boolean
    mobileNo?: boolean
    email?: boolean
    website?: boolean
    name?: boolean
    nextFlowup?: boolean
    value?: boolean
    notes?: boolean
    assignedToId?: boolean
    isArchived?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organisation?: boolean | OrganisationsDefaultArgs<ExtArgs>
    assignedTo?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type LeadsSelectScalar = {
    id?: boolean
    organisationId?: boolean
    leadOn?: boolean
    source?: boolean
    status?: boolean
    mobileNo?: boolean
    email?: boolean
    website?: boolean
    name?: boolean
    nextFlowup?: boolean
    value?: boolean
    notes?: boolean
    assignedToId?: boolean
    isArchived?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organisationId" | "leadOn" | "source" | "status" | "mobileNo" | "email" | "website" | "name" | "nextFlowup" | "value" | "notes" | "assignedToId" | "isArchived" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["leads"]>
  export type LeadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisation?: boolean | OrganisationsDefaultArgs<ExtArgs>
    assignedTo?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LeadsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisation?: boolean | OrganisationsDefaultArgs<ExtArgs>
    assignedTo?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LeadsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organisation?: boolean | OrganisationsDefaultArgs<ExtArgs>
    assignedTo?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LeadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leads"
    objects: {
      organisation: Prisma.$OrganisationsPayload<ExtArgs>
      assignedTo: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organisationId: string
      leadOn: string
      source: string
      status: $Enums.LeadStatus
      mobileNo: string | null
      email: string | null
      website: string | null
      name: string | null
      nextFlowup: string | null
      value: string | null
      notes: string | null
      assignedToId: string
      isArchived: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type LeadsGetPayload<S extends boolean | null | undefined | LeadsDefaultArgs> = $Result.GetResult<Prisma.$LeadsPayload, S>

  type LeadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface LeadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leads'], meta: { name: 'Leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {LeadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadsFindUniqueArgs>(args: SelectSubset<T, LeadsFindUniqueArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadsFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadsFindFirstArgs>(args?: SelectSubset<T, LeadsFindFirstArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadsFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadsFindManyArgs>(args?: SelectSubset<T, LeadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {LeadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends LeadsCreateArgs>(args: SelectSubset<T, LeadsCreateArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadsCreateManyArgs>(args?: SelectSubset<T, LeadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadsCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {LeadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends LeadsDeleteArgs>(args: SelectSubset<T, LeadsDeleteArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {LeadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadsUpdateArgs>(args: SelectSubset<T, LeadsUpdateArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadsDeleteManyArgs>(args?: SelectSubset<T, LeadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadsUpdateManyArgs>(args: SelectSubset<T, LeadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadsUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {LeadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends LeadsUpsertArgs>(args: SelectSubset<T, LeadsUpsertArgs<ExtArgs>>): Prisma__LeadsClient<$Result.GetResult<Prisma.$LeadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadsCountArgs>(
      args?: Subset<T, LeadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadsGroupByArgs['orderBy'] }
        : { orderBy?: LeadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leads model
   */
  readonly fields: LeadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organisation<T extends OrganisationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationsDefaultArgs<ExtArgs>>): Prisma__OrganisationsClient<$Result.GetResult<Prisma.$OrganisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leads model
   */
  interface LeadsFieldRefs {
    readonly id: FieldRef<"Leads", 'String'>
    readonly organisationId: FieldRef<"Leads", 'String'>
    readonly leadOn: FieldRef<"Leads", 'String'>
    readonly source: FieldRef<"Leads", 'String'>
    readonly status: FieldRef<"Leads", 'LeadStatus'>
    readonly mobileNo: FieldRef<"Leads", 'String'>
    readonly email: FieldRef<"Leads", 'String'>
    readonly website: FieldRef<"Leads", 'String'>
    readonly name: FieldRef<"Leads", 'String'>
    readonly nextFlowup: FieldRef<"Leads", 'String'>
    readonly value: FieldRef<"Leads", 'String'>
    readonly notes: FieldRef<"Leads", 'String'>
    readonly assignedToId: FieldRef<"Leads", 'String'>
    readonly isArchived: FieldRef<"Leads", 'Boolean'>
    readonly isDeleted: FieldRef<"Leads", 'Boolean'>
    readonly createdAt: FieldRef<"Leads", 'DateTime'>
    readonly updatedAt: FieldRef<"Leads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leads findUnique
   */
  export type LeadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads findUniqueOrThrow
   */
  export type LeadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads findFirst
   */
  export type LeadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads findFirstOrThrow
   */
  export type LeadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads findMany
   */
  export type LeadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Leads create
   */
  export type LeadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * The data needed to create a Leads.
     */
    data: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>
  }

  /**
   * Leads createMany
   */
  export type LeadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leads createManyAndReturn
   */
  export type LeadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leads update
   */
  export type LeadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * The data needed to update a Leads.
     */
    data: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>
    /**
     * Choose, which Leads to update.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads updateMany
   */
  export type LeadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Leads updateManyAndReturn
   */
  export type LeadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leads upsert
   */
  export type LeadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * The filter to search for the Leads to update in case it exists.
     */
    where: LeadsWhereUniqueInput
    /**
     * In case the Leads found by the `where` argument doesn't exist, create a new Leads with this data.
     */
    create: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>
    /**
     * In case the Leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>
  }

  /**
   * Leads delete
   */
  export type LeadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
    /**
     * Filter which Leads to delete.
     */
    where: LeadsWhereUniqueInput
  }

  /**
   * Leads deleteMany
   */
  export type LeadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadsWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Leads without action
   */
  export type LeadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganisationsScalarFieldEnum: {
    id: 'id',
    organisationId: 'organisationId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganisationsScalarFieldEnum = (typeof OrganisationsScalarFieldEnum)[keyof typeof OrganisationsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OrganisationUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organisationId: 'organisationId'
  };

  export type OrganisationUserScalarFieldEnum = (typeof OrganisationUserScalarFieldEnum)[keyof typeof OrganisationUserScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    organisationId: 'organisationId',
    leadOn: 'leadOn',
    source: 'source',
    status: 'status',
    mobileNo: 'mobileNo',
    email: 'email',
    website: 'website',
    name: 'name',
    nextFlowup: 'nextFlowup',
    value: 'value',
    notes: 'notes',
    assignedToId: 'assignedToId',
    isArchived: 'isArchived',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganisationsWhereInput = {
    AND?: OrganisationsWhereInput | OrganisationsWhereInput[]
    OR?: OrganisationsWhereInput[]
    NOT?: OrganisationsWhereInput | OrganisationsWhereInput[]
    id?: StringFilter<"Organisations"> | string
    organisationId?: StringFilter<"Organisations"> | string
    name?: StringNullableFilter<"Organisations"> | string | null
    createdAt?: DateTimeFilter<"Organisations"> | Date | string
    updatedAt?: DateTimeFilter<"Organisations"> | Date | string
    leads?: LeadsListRelationFilter
  }

  export type OrganisationsOrderByWithRelationInput = {
    id?: SortOrder
    organisationId?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadsOrderByRelationAggregateInput
  }

  export type OrganisationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organisationId?: string
    AND?: OrganisationsWhereInput | OrganisationsWhereInput[]
    OR?: OrganisationsWhereInput[]
    NOT?: OrganisationsWhereInput | OrganisationsWhereInput[]
    name?: StringNullableFilter<"Organisations"> | string | null
    createdAt?: DateTimeFilter<"Organisations"> | Date | string
    updatedAt?: DateTimeFilter<"Organisations"> | Date | string
    leads?: LeadsListRelationFilter
  }, "id" | "organisationId">

  export type OrganisationsOrderByWithAggregationInput = {
    id?: SortOrder
    organisationId?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganisationsCountOrderByAggregateInput
    _max?: OrganisationsMaxOrderByAggregateInput
    _min?: OrganisationsMinOrderByAggregateInput
  }

  export type OrganisationsScalarWhereWithAggregatesInput = {
    AND?: OrganisationsScalarWhereWithAggregatesInput | OrganisationsScalarWhereWithAggregatesInput[]
    OR?: OrganisationsScalarWhereWithAggregatesInput[]
    NOT?: OrganisationsScalarWhereWithAggregatesInput | OrganisationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organisations"> | string
    organisationId?: StringWithAggregatesFilter<"Organisations"> | string
    name?: StringNullableWithAggregatesFilter<"Organisations"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organisations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organisations"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    userId?: StringFilter<"Users"> | string
    name?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    assignedLeads?: LeadsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedLeads?: LeadsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    assignedLeads?: LeadsListRelationFilter
  }, "id" | "userId">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    userId?: StringWithAggregatesFilter<"Users"> | string
    name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type OrganisationUserWhereInput = {
    AND?: OrganisationUserWhereInput | OrganisationUserWhereInput[]
    OR?: OrganisationUserWhereInput[]
    NOT?: OrganisationUserWhereInput | OrganisationUserWhereInput[]
    id?: StringFilter<"OrganisationUser"> | string
    userId?: StringFilter<"OrganisationUser"> | string
    organisationId?: StringFilter<"OrganisationUser"> | string
  }

  export type OrganisationUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organisationId?: SortOrder
  }

  export type OrganisationUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_organisationId?: OrganisationUserUserIdOrganisationIdCompoundUniqueInput
    AND?: OrganisationUserWhereInput | OrganisationUserWhereInput[]
    OR?: OrganisationUserWhereInput[]
    NOT?: OrganisationUserWhereInput | OrganisationUserWhereInput[]
    userId?: StringFilter<"OrganisationUser"> | string
    organisationId?: StringFilter<"OrganisationUser"> | string
  }, "id" | "userId_organisationId">

  export type OrganisationUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organisationId?: SortOrder
    _count?: OrganisationUserCountOrderByAggregateInput
    _max?: OrganisationUserMaxOrderByAggregateInput
    _min?: OrganisationUserMinOrderByAggregateInput
  }

  export type OrganisationUserScalarWhereWithAggregatesInput = {
    AND?: OrganisationUserScalarWhereWithAggregatesInput | OrganisationUserScalarWhereWithAggregatesInput[]
    OR?: OrganisationUserScalarWhereWithAggregatesInput[]
    NOT?: OrganisationUserScalarWhereWithAggregatesInput | OrganisationUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganisationUser"> | string
    userId?: StringWithAggregatesFilter<"OrganisationUser"> | string
    organisationId?: StringWithAggregatesFilter<"OrganisationUser"> | string
  }

  export type LeadsWhereInput = {
    AND?: LeadsWhereInput | LeadsWhereInput[]
    OR?: LeadsWhereInput[]
    NOT?: LeadsWhereInput | LeadsWhereInput[]
    id?: StringFilter<"Leads"> | string
    organisationId?: StringFilter<"Leads"> | string
    leadOn?: StringFilter<"Leads"> | string
    source?: StringFilter<"Leads"> | string
    status?: EnumLeadStatusFilter<"Leads"> | $Enums.LeadStatus
    mobileNo?: StringNullableFilter<"Leads"> | string | null
    email?: StringNullableFilter<"Leads"> | string | null
    website?: StringNullableFilter<"Leads"> | string | null
    name?: StringNullableFilter<"Leads"> | string | null
    nextFlowup?: StringNullableFilter<"Leads"> | string | null
    value?: StringNullableFilter<"Leads"> | string | null
    notes?: StringNullableFilter<"Leads"> | string | null
    assignedToId?: StringFilter<"Leads"> | string
    isArchived?: BoolFilter<"Leads"> | boolean
    isDeleted?: BoolFilter<"Leads"> | boolean
    createdAt?: DateTimeFilter<"Leads"> | Date | string
    updatedAt?: DateTimeFilter<"Leads"> | Date | string
    organisation?: XOR<OrganisationsScalarRelationFilter, OrganisationsWhereInput>
    assignedTo?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type LeadsOrderByWithRelationInput = {
    id?: SortOrder
    organisationId?: SortOrder
    leadOn?: SortOrder
    source?: SortOrder
    status?: SortOrder
    mobileNo?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    nextFlowup?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    isArchived?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organisation?: OrganisationsOrderByWithRelationInput
    assignedTo?: UsersOrderByWithRelationInput
  }

  export type LeadsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadsWhereInput | LeadsWhereInput[]
    OR?: LeadsWhereInput[]
    NOT?: LeadsWhereInput | LeadsWhereInput[]
    organisationId?: StringFilter<"Leads"> | string
    leadOn?: StringFilter<"Leads"> | string
    source?: StringFilter<"Leads"> | string
    status?: EnumLeadStatusFilter<"Leads"> | $Enums.LeadStatus
    mobileNo?: StringNullableFilter<"Leads"> | string | null
    email?: StringNullableFilter<"Leads"> | string | null
    website?: StringNullableFilter<"Leads"> | string | null
    name?: StringNullableFilter<"Leads"> | string | null
    nextFlowup?: StringNullableFilter<"Leads"> | string | null
    value?: StringNullableFilter<"Leads"> | string | null
    notes?: StringNullableFilter<"Leads"> | string | null
    assignedToId?: StringFilter<"Leads"> | string
    isArchived?: BoolFilter<"Leads"> | boolean
    isDeleted?: BoolFilter<"Leads"> | boolean
    createdAt?: DateTimeFilter<"Leads"> | Date | string
    updatedAt?: DateTimeFilter<"Leads"> | Date | string
    organisation?: XOR<OrganisationsScalarRelationFilter, OrganisationsWhereInput>
    assignedTo?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type LeadsOrderByWithAggregationInput = {
    id?: SortOrder
    organisationId?: SortOrder
    leadOn?: SortOrder
    source?: SortOrder
    status?: SortOrder
    mobileNo?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    nextFlowup?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    isArchived?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadsCountOrderByAggregateInput
    _max?: LeadsMaxOrderByAggregateInput
    _min?: LeadsMinOrderByAggregateInput
  }

  export type LeadsScalarWhereWithAggregatesInput = {
    AND?: LeadsScalarWhereWithAggregatesInput | LeadsScalarWhereWithAggregatesInput[]
    OR?: LeadsScalarWhereWithAggregatesInput[]
    NOT?: LeadsScalarWhereWithAggregatesInput | LeadsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leads"> | string
    organisationId?: StringWithAggregatesFilter<"Leads"> | string
    leadOn?: StringWithAggregatesFilter<"Leads"> | string
    source?: StringWithAggregatesFilter<"Leads"> | string
    status?: EnumLeadStatusWithAggregatesFilter<"Leads"> | $Enums.LeadStatus
    mobileNo?: StringNullableWithAggregatesFilter<"Leads"> | string | null
    email?: StringNullableWithAggregatesFilter<"Leads"> | string | null
    website?: StringNullableWithAggregatesFilter<"Leads"> | string | null
    name?: StringNullableWithAggregatesFilter<"Leads"> | string | null
    nextFlowup?: StringNullableWithAggregatesFilter<"Leads"> | string | null
    value?: StringNullableWithAggregatesFilter<"Leads"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Leads"> | string | null
    assignedToId?: StringWithAggregatesFilter<"Leads"> | string
    isArchived?: BoolWithAggregatesFilter<"Leads"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Leads"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Leads"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leads"> | Date | string
  }

  export type OrganisationsCreateInput = {
    id?: string
    organisationId: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadsCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationsUncheckedCreateInput = {
    id?: string
    organisationId: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadsUncheckedCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadsUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadsUncheckedUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationsCreateManyInput = {
    id?: string
    organisationId: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganisationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    userId: string
    name?: string | null
    email?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLeads?: LeadsCreateNestedManyWithoutAssignedToInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    email?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedLeads?: LeadsUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLeads?: LeadsUpdateManyWithoutAssignedToNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedLeads?: LeadsUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    email?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationUserCreateInput = {
    id?: string
    userId: string
    organisationId: string
  }

  export type OrganisationUserUncheckedCreateInput = {
    id?: string
    userId: string
    organisationId: string
  }

  export type OrganisationUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationUserCreateManyInput = {
    id?: string
    userId: string
    organisationId: string
  }

  export type OrganisationUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganisationUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
  }

  export type LeadsCreateInput = {
    id?: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation: OrganisationsCreateNestedOneWithoutLeadsInput
    assignedTo: UsersCreateNestedOneWithoutAssignedLeadsInput
  }

  export type LeadsUncheckedCreateInput = {
    id?: string
    organisationId: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    assignedToId: string
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationsUpdateOneRequiredWithoutLeadsNestedInput
    assignedTo?: UsersUpdateOneRequiredWithoutAssignedLeadsNestedInput
  }

  export type LeadsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsCreateManyInput = {
    id?: string
    organisationId: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    assignedToId: string
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeadsListRelationFilter = {
    every?: LeadsWhereInput
    some?: LeadsWhereInput
    none?: LeadsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganisationsCountOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganisationsMaxOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganisationsMinOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganisationUserUserIdOrganisationIdCompoundUniqueInput = {
    userId: string
    organisationId: string
  }

  export type OrganisationUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organisationId?: SortOrder
  }

  export type OrganisationUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organisationId?: SortOrder
  }

  export type OrganisationUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organisationId?: SortOrder
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrganisationsScalarRelationFilter = {
    is?: OrganisationsWhereInput
    isNot?: OrganisationsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type LeadsCountOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
    leadOn?: SortOrder
    source?: SortOrder
    status?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    website?: SortOrder
    name?: SortOrder
    nextFlowup?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    assignedToId?: SortOrder
    isArchived?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadsMaxOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
    leadOn?: SortOrder
    source?: SortOrder
    status?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    website?: SortOrder
    name?: SortOrder
    nextFlowup?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    assignedToId?: SortOrder
    isArchived?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadsMinOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
    leadOn?: SortOrder
    source?: SortOrder
    status?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    website?: SortOrder
    name?: SortOrder
    nextFlowup?: SortOrder
    value?: SortOrder
    notes?: SortOrder
    assignedToId?: SortOrder
    isArchived?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LeadsCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<LeadsCreateWithoutOrganisationInput, LeadsUncheckedCreateWithoutOrganisationInput> | LeadsCreateWithoutOrganisationInput[] | LeadsUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutOrganisationInput | LeadsCreateOrConnectWithoutOrganisationInput[]
    createMany?: LeadsCreateManyOrganisationInputEnvelope
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
  }

  export type LeadsUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<LeadsCreateWithoutOrganisationInput, LeadsUncheckedCreateWithoutOrganisationInput> | LeadsCreateWithoutOrganisationInput[] | LeadsUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutOrganisationInput | LeadsCreateOrConnectWithoutOrganisationInput[]
    createMany?: LeadsCreateManyOrganisationInputEnvelope
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LeadsUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<LeadsCreateWithoutOrganisationInput, LeadsUncheckedCreateWithoutOrganisationInput> | LeadsCreateWithoutOrganisationInput[] | LeadsUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutOrganisationInput | LeadsCreateOrConnectWithoutOrganisationInput[]
    upsert?: LeadsUpsertWithWhereUniqueWithoutOrganisationInput | LeadsUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: LeadsCreateManyOrganisationInputEnvelope
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    update?: LeadsUpdateWithWhereUniqueWithoutOrganisationInput | LeadsUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: LeadsUpdateManyWithWhereWithoutOrganisationInput | LeadsUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
  }

  export type LeadsUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<LeadsCreateWithoutOrganisationInput, LeadsUncheckedCreateWithoutOrganisationInput> | LeadsCreateWithoutOrganisationInput[] | LeadsUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutOrganisationInput | LeadsCreateOrConnectWithoutOrganisationInput[]
    upsert?: LeadsUpsertWithWhereUniqueWithoutOrganisationInput | LeadsUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: LeadsCreateManyOrganisationInputEnvelope
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    update?: LeadsUpdateWithWhereUniqueWithoutOrganisationInput | LeadsUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: LeadsUpdateManyWithWhereWithoutOrganisationInput | LeadsUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
  }

  export type LeadsCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<LeadsCreateWithoutAssignedToInput, LeadsUncheckedCreateWithoutAssignedToInput> | LeadsCreateWithoutAssignedToInput[] | LeadsUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutAssignedToInput | LeadsCreateOrConnectWithoutAssignedToInput[]
    createMany?: LeadsCreateManyAssignedToInputEnvelope
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
  }

  export type LeadsUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<LeadsCreateWithoutAssignedToInput, LeadsUncheckedCreateWithoutAssignedToInput> | LeadsCreateWithoutAssignedToInput[] | LeadsUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutAssignedToInput | LeadsCreateOrConnectWithoutAssignedToInput[]
    createMany?: LeadsCreateManyAssignedToInputEnvelope
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
  }

  export type LeadsUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<LeadsCreateWithoutAssignedToInput, LeadsUncheckedCreateWithoutAssignedToInput> | LeadsCreateWithoutAssignedToInput[] | LeadsUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutAssignedToInput | LeadsCreateOrConnectWithoutAssignedToInput[]
    upsert?: LeadsUpsertWithWhereUniqueWithoutAssignedToInput | LeadsUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: LeadsCreateManyAssignedToInputEnvelope
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    update?: LeadsUpdateWithWhereUniqueWithoutAssignedToInput | LeadsUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: LeadsUpdateManyWithWhereWithoutAssignedToInput | LeadsUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
  }

  export type LeadsUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<LeadsCreateWithoutAssignedToInput, LeadsUncheckedCreateWithoutAssignedToInput> | LeadsCreateWithoutAssignedToInput[] | LeadsUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: LeadsCreateOrConnectWithoutAssignedToInput | LeadsCreateOrConnectWithoutAssignedToInput[]
    upsert?: LeadsUpsertWithWhereUniqueWithoutAssignedToInput | LeadsUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: LeadsCreateManyAssignedToInputEnvelope
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[]
    update?: LeadsUpdateWithWhereUniqueWithoutAssignedToInput | LeadsUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: LeadsUpdateManyWithWhereWithoutAssignedToInput | LeadsUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
  }

  export type OrganisationsCreateNestedOneWithoutLeadsInput = {
    create?: XOR<OrganisationsCreateWithoutLeadsInput, OrganisationsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: OrganisationsCreateOrConnectWithoutLeadsInput
    connect?: OrganisationsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutAssignedLeadsInput = {
    create?: XOR<UsersCreateWithoutAssignedLeadsInput, UsersUncheckedCreateWithoutAssignedLeadsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAssignedLeadsInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganisationsUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<OrganisationsCreateWithoutLeadsInput, OrganisationsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: OrganisationsCreateOrConnectWithoutLeadsInput
    upsert?: OrganisationsUpsertWithoutLeadsInput
    connect?: OrganisationsWhereUniqueInput
    update?: XOR<XOR<OrganisationsUpdateToOneWithWhereWithoutLeadsInput, OrganisationsUpdateWithoutLeadsInput>, OrganisationsUncheckedUpdateWithoutLeadsInput>
  }

  export type UsersUpdateOneRequiredWithoutAssignedLeadsNestedInput = {
    create?: XOR<UsersCreateWithoutAssignedLeadsInput, UsersUncheckedCreateWithoutAssignedLeadsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAssignedLeadsInput
    upsert?: UsersUpsertWithoutAssignedLeadsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAssignedLeadsInput, UsersUpdateWithoutAssignedLeadsInput>, UsersUncheckedUpdateWithoutAssignedLeadsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LeadsCreateWithoutOrganisationInput = {
    id?: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UsersCreateNestedOneWithoutAssignedLeadsInput
  }

  export type LeadsUncheckedCreateWithoutOrganisationInput = {
    id?: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    assignedToId: string
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadsCreateOrConnectWithoutOrganisationInput = {
    where: LeadsWhereUniqueInput
    create: XOR<LeadsCreateWithoutOrganisationInput, LeadsUncheckedCreateWithoutOrganisationInput>
  }

  export type LeadsCreateManyOrganisationInputEnvelope = {
    data: LeadsCreateManyOrganisationInput | LeadsCreateManyOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type LeadsUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: LeadsWhereUniqueInput
    update: XOR<LeadsUpdateWithoutOrganisationInput, LeadsUncheckedUpdateWithoutOrganisationInput>
    create: XOR<LeadsCreateWithoutOrganisationInput, LeadsUncheckedCreateWithoutOrganisationInput>
  }

  export type LeadsUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: LeadsWhereUniqueInput
    data: XOR<LeadsUpdateWithoutOrganisationInput, LeadsUncheckedUpdateWithoutOrganisationInput>
  }

  export type LeadsUpdateManyWithWhereWithoutOrganisationInput = {
    where: LeadsScalarWhereInput
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyWithoutOrganisationInput>
  }

  export type LeadsScalarWhereInput = {
    AND?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
    OR?: LeadsScalarWhereInput[]
    NOT?: LeadsScalarWhereInput | LeadsScalarWhereInput[]
    id?: StringFilter<"Leads"> | string
    organisationId?: StringFilter<"Leads"> | string
    leadOn?: StringFilter<"Leads"> | string
    source?: StringFilter<"Leads"> | string
    status?: EnumLeadStatusFilter<"Leads"> | $Enums.LeadStatus
    mobileNo?: StringNullableFilter<"Leads"> | string | null
    email?: StringNullableFilter<"Leads"> | string | null
    website?: StringNullableFilter<"Leads"> | string | null
    name?: StringNullableFilter<"Leads"> | string | null
    nextFlowup?: StringNullableFilter<"Leads"> | string | null
    value?: StringNullableFilter<"Leads"> | string | null
    notes?: StringNullableFilter<"Leads"> | string | null
    assignedToId?: StringFilter<"Leads"> | string
    isArchived?: BoolFilter<"Leads"> | boolean
    isDeleted?: BoolFilter<"Leads"> | boolean
    createdAt?: DateTimeFilter<"Leads"> | Date | string
    updatedAt?: DateTimeFilter<"Leads"> | Date | string
  }

  export type LeadsCreateWithoutAssignedToInput = {
    id?: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organisation: OrganisationsCreateNestedOneWithoutLeadsInput
  }

  export type LeadsUncheckedCreateWithoutAssignedToInput = {
    id?: string
    organisationId: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadsCreateOrConnectWithoutAssignedToInput = {
    where: LeadsWhereUniqueInput
    create: XOR<LeadsCreateWithoutAssignedToInput, LeadsUncheckedCreateWithoutAssignedToInput>
  }

  export type LeadsCreateManyAssignedToInputEnvelope = {
    data: LeadsCreateManyAssignedToInput | LeadsCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type LeadsUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: LeadsWhereUniqueInput
    update: XOR<LeadsUpdateWithoutAssignedToInput, LeadsUncheckedUpdateWithoutAssignedToInput>
    create: XOR<LeadsCreateWithoutAssignedToInput, LeadsUncheckedCreateWithoutAssignedToInput>
  }

  export type LeadsUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: LeadsWhereUniqueInput
    data: XOR<LeadsUpdateWithoutAssignedToInput, LeadsUncheckedUpdateWithoutAssignedToInput>
  }

  export type LeadsUpdateManyWithWhereWithoutAssignedToInput = {
    where: LeadsScalarWhereInput
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type OrganisationsCreateWithoutLeadsInput = {
    id?: string
    organisationId: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganisationsUncheckedCreateWithoutLeadsInput = {
    id?: string
    organisationId: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganisationsCreateOrConnectWithoutLeadsInput = {
    where: OrganisationsWhereUniqueInput
    create: XOR<OrganisationsCreateWithoutLeadsInput, OrganisationsUncheckedCreateWithoutLeadsInput>
  }

  export type UsersCreateWithoutAssignedLeadsInput = {
    id?: string
    userId: string
    name?: string | null
    email?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutAssignedLeadsInput = {
    id?: string
    userId: string
    name?: string | null
    email?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutAssignedLeadsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAssignedLeadsInput, UsersUncheckedCreateWithoutAssignedLeadsInput>
  }

  export type OrganisationsUpsertWithoutLeadsInput = {
    update: XOR<OrganisationsUpdateWithoutLeadsInput, OrganisationsUncheckedUpdateWithoutLeadsInput>
    create: XOR<OrganisationsCreateWithoutLeadsInput, OrganisationsUncheckedCreateWithoutLeadsInput>
    where?: OrganisationsWhereInput
  }

  export type OrganisationsUpdateToOneWithWhereWithoutLeadsInput = {
    where?: OrganisationsWhereInput
    data: XOR<OrganisationsUpdateWithoutLeadsInput, OrganisationsUncheckedUpdateWithoutLeadsInput>
  }

  export type OrganisationsUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationsUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpsertWithoutAssignedLeadsInput = {
    update: XOR<UsersUpdateWithoutAssignedLeadsInput, UsersUncheckedUpdateWithoutAssignedLeadsInput>
    create: XOR<UsersCreateWithoutAssignedLeadsInput, UsersUncheckedCreateWithoutAssignedLeadsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAssignedLeadsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAssignedLeadsInput, UsersUncheckedUpdateWithoutAssignedLeadsInput>
  }

  export type UsersUpdateWithoutAssignedLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutAssignedLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsCreateManyOrganisationInput = {
    id?: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    assignedToId: string
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadsUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UsersUpdateOneRequiredWithoutAssignedLeadsNestedInput
  }

  export type LeadsUncheckedUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsUncheckedUpdateManyWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: StringFieldUpdateOperationsInput | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsCreateManyAssignedToInput = {
    id?: string
    organisationId: string
    leadOn: string
    source: string
    status?: $Enums.LeadStatus
    mobileNo?: string | null
    email?: string | null
    website?: string | null
    name?: string | null
    nextFlowup?: string | null
    value?: string | null
    notes?: string | null
    isArchived: boolean
    isDeleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadsUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organisation?: OrganisationsUpdateOneRequiredWithoutLeadsNestedInput
  }

  export type LeadsUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadsUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    leadOn?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nextFlowup?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}