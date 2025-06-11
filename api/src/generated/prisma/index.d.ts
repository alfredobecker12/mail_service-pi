
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AutenticacaoLogin
 * 
 */
export type AutenticacaoLogin = $Result.DefaultSelection<Prisma.$AutenticacaoLoginPayload>
/**
 * Model CategoriaProduto
 * 
 */
export type CategoriaProduto = $Result.DefaultSelection<Prisma.$CategoriaProdutoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Login
 * 
 */
export type Login = $Result.DefaultSelection<Prisma.$LoginPayload>
/**
 * Model Marca
 * 
 */
export type Marca = $Result.DefaultSelection<Prisma.$MarcaPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidoProduto
 * 
 */
export type PedidoProduto = $Result.DefaultSelection<Prisma.$PedidoProdutoPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Representante
 * 
 */
export type Representante = $Result.DefaultSelection<Prisma.$RepresentantePayload>
/**
 * Model RepresentanteMarca
 * 
 */
export type RepresentanteMarca = $Result.DefaultSelection<Prisma.$RepresentanteMarcaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CatCliente: {
  P: 'P',
  M: 'M',
  G: 'G'
};

export type CatCliente = (typeof CatCliente)[keyof typeof CatCliente]


export const StatusPedido: {
  PENDENTE: 'PENDENTE',
  CANCELADO: 'CANCELADO',
  FINALIZADO: 'FINALIZADO'
};

export type StatusPedido = (typeof StatusPedido)[keyof typeof StatusPedido]


export const StatusUser: {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO'
};

export type StatusUser = (typeof StatusUser)[keyof typeof StatusUser]

}

export type CatCliente = $Enums.CatCliente

export const CatCliente: typeof $Enums.CatCliente

export type StatusPedido = $Enums.StatusPedido

export const StatusPedido: typeof $Enums.StatusPedido

export type StatusUser = $Enums.StatusUser

export const StatusUser: typeof $Enums.StatusUser

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AutenticacaoLogins
 * const autenticacaoLogins = await prisma.autenticacaoLogin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more AutenticacaoLogins
   * const autenticacaoLogins = await prisma.autenticacaoLogin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.autenticacaoLogin`: Exposes CRUD operations for the **AutenticacaoLogin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutenticacaoLogins
    * const autenticacaoLogins = await prisma.autenticacaoLogin.findMany()
    * ```
    */
  get autenticacaoLogin(): Prisma.AutenticacaoLoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriaProduto`: Exposes CRUD operations for the **CategoriaProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriaProdutos
    * const categoriaProdutos = await prisma.categoriaProduto.findMany()
    * ```
    */
  get categoriaProduto(): Prisma.CategoriaProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.login`: Exposes CRUD operations for the **Login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.login.findMany()
    * ```
    */
  get login(): Prisma.LoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marca`: Exposes CRUD operations for the **Marca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marcas
    * const marcas = await prisma.marca.findMany()
    * ```
    */
  get marca(): Prisma.MarcaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoProduto`: Exposes CRUD operations for the **PedidoProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoProdutos
    * const pedidoProdutos = await prisma.pedidoProduto.findMany()
    * ```
    */
  get pedidoProduto(): Prisma.PedidoProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.representante`: Exposes CRUD operations for the **Representante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Representantes
    * const representantes = await prisma.representante.findMany()
    * ```
    */
  get representante(): Prisma.RepresentanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.representanteMarca`: Exposes CRUD operations for the **RepresentanteMarca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepresentanteMarcas
    * const representanteMarcas = await prisma.representanteMarca.findMany()
    * ```
    */
  get representanteMarca(): Prisma.RepresentanteMarcaDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    AutenticacaoLogin: 'AutenticacaoLogin',
    CategoriaProduto: 'CategoriaProduto',
    Cliente: 'Cliente',
    Login: 'Login',
    Marca: 'Marca',
    Pedido: 'Pedido',
    PedidoProduto: 'PedidoProduto',
    Produto: 'Produto',
    Representante: 'Representante',
    RepresentanteMarca: 'RepresentanteMarca'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "autenticacaoLogin" | "categoriaProduto" | "cliente" | "login" | "marca" | "pedido" | "pedidoProduto" | "produto" | "representante" | "representanteMarca"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AutenticacaoLogin: {
        payload: Prisma.$AutenticacaoLoginPayload<ExtArgs>
        fields: Prisma.AutenticacaoLoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutenticacaoLoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutenticacaoLoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>
          }
          findFirst: {
            args: Prisma.AutenticacaoLoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutenticacaoLoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>
          }
          findMany: {
            args: Prisma.AutenticacaoLoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>[]
          }
          create: {
            args: Prisma.AutenticacaoLoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>
          }
          createMany: {
            args: Prisma.AutenticacaoLoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutenticacaoLoginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>[]
          }
          delete: {
            args: Prisma.AutenticacaoLoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>
          }
          update: {
            args: Prisma.AutenticacaoLoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>
          }
          deleteMany: {
            args: Prisma.AutenticacaoLoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutenticacaoLoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutenticacaoLoginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>[]
          }
          upsert: {
            args: Prisma.AutenticacaoLoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutenticacaoLoginPayload>
          }
          aggregate: {
            args: Prisma.AutenticacaoLoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutenticacaoLogin>
          }
          groupBy: {
            args: Prisma.AutenticacaoLoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutenticacaoLoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutenticacaoLoginCountArgs<ExtArgs>
            result: $Utils.Optional<AutenticacaoLoginCountAggregateOutputType> | number
          }
        }
      }
      CategoriaProduto: {
        payload: Prisma.$CategoriaProdutoPayload<ExtArgs>
        fields: Prisma.CategoriaProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          findFirst: {
            args: Prisma.CategoriaProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          findMany: {
            args: Prisma.CategoriaProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>[]
          }
          create: {
            args: Prisma.CategoriaProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          createMany: {
            args: Prisma.CategoriaProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>[]
          }
          delete: {
            args: Prisma.CategoriaProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          update: {
            args: Prisma.CategoriaProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          aggregate: {
            args: Prisma.CategoriaProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriaProduto>
          }
          groupBy: {
            args: Prisma.CategoriaProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaProdutoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Login: {
        payload: Prisma.$LoginPayload<ExtArgs>
        fields: Prisma.LoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findFirst: {
            args: Prisma.LoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findMany: {
            args: Prisma.LoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>[]
          }
          create: {
            args: Prisma.LoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          createMany: {
            args: Prisma.LoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>[]
          }
          delete: {
            args: Prisma.LoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          update: {
            args: Prisma.LoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          deleteMany: {
            args: Prisma.LoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>[]
          }
          upsert: {
            args: Prisma.LoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          aggregate: {
            args: Prisma.LoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin>
          }
          groupBy: {
            args: Prisma.LoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginCountArgs<ExtArgs>
            result: $Utils.Optional<LoginCountAggregateOutputType> | number
          }
        }
      }
      Marca: {
        payload: Prisma.$MarcaPayload<ExtArgs>
        fields: Prisma.MarcaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findFirst: {
            args: Prisma.MarcaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findMany: {
            args: Prisma.MarcaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          create: {
            args: Prisma.MarcaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          createMany: {
            args: Prisma.MarcaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          delete: {
            args: Prisma.MarcaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          update: {
            args: Prisma.MarcaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          deleteMany: {
            args: Prisma.MarcaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          upsert: {
            args: Prisma.MarcaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          aggregate: {
            args: Prisma.MarcaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarca>
          }
          groupBy: {
            args: Prisma.MarcaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcaCountArgs<ExtArgs>
            result: $Utils.Optional<MarcaCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidoProduto: {
        payload: Prisma.$PedidoProdutoPayload<ExtArgs>
        fields: Prisma.PedidoProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>
          }
          findFirst: {
            args: Prisma.PedidoProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>
          }
          findMany: {
            args: Prisma.PedidoProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>[]
          }
          create: {
            args: Prisma.PedidoProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>
          }
          createMany: {
            args: Prisma.PedidoProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>[]
          }
          delete: {
            args: Prisma.PedidoProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>
          }
          update: {
            args: Prisma.PedidoProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProdutoPayload>
          }
          aggregate: {
            args: Prisma.PedidoProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoProduto>
          }
          groupBy: {
            args: Prisma.PedidoProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoProdutoCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Representante: {
        payload: Prisma.$RepresentantePayload<ExtArgs>
        fields: Prisma.RepresentanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepresentanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepresentanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          findFirst: {
            args: Prisma.RepresentanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepresentanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          findMany: {
            args: Prisma.RepresentanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>[]
          }
          create: {
            args: Prisma.RepresentanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          createMany: {
            args: Prisma.RepresentanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepresentanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>[]
          }
          delete: {
            args: Prisma.RepresentanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          update: {
            args: Prisma.RepresentanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          deleteMany: {
            args: Prisma.RepresentanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepresentanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepresentanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>[]
          }
          upsert: {
            args: Prisma.RepresentanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentantePayload>
          }
          aggregate: {
            args: Prisma.RepresentanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepresentante>
          }
          groupBy: {
            args: Prisma.RepresentanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepresentanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepresentanteCountArgs<ExtArgs>
            result: $Utils.Optional<RepresentanteCountAggregateOutputType> | number
          }
        }
      }
      RepresentanteMarca: {
        payload: Prisma.$RepresentanteMarcaPayload<ExtArgs>
        fields: Prisma.RepresentanteMarcaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepresentanteMarcaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepresentanteMarcaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>
          }
          findFirst: {
            args: Prisma.RepresentanteMarcaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepresentanteMarcaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>
          }
          findMany: {
            args: Prisma.RepresentanteMarcaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>[]
          }
          create: {
            args: Prisma.RepresentanteMarcaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>
          }
          createMany: {
            args: Prisma.RepresentanteMarcaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepresentanteMarcaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>[]
          }
          delete: {
            args: Prisma.RepresentanteMarcaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>
          }
          update: {
            args: Prisma.RepresentanteMarcaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>
          }
          deleteMany: {
            args: Prisma.RepresentanteMarcaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepresentanteMarcaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepresentanteMarcaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>[]
          }
          upsert: {
            args: Prisma.RepresentanteMarcaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepresentanteMarcaPayload>
          }
          aggregate: {
            args: Prisma.RepresentanteMarcaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepresentanteMarca>
          }
          groupBy: {
            args: Prisma.RepresentanteMarcaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepresentanteMarcaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepresentanteMarcaCountArgs<ExtArgs>
            result: $Utils.Optional<RepresentanteMarcaCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    autenticacaoLogin?: AutenticacaoLoginOmit
    categoriaProduto?: CategoriaProdutoOmit
    cliente?: ClienteOmit
    login?: LoginOmit
    marca?: MarcaOmit
    pedido?: PedidoOmit
    pedidoProduto?: PedidoProdutoOmit
    produto?: ProdutoOmit
    representante?: RepresentanteOmit
    representanteMarca?: RepresentanteMarcaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CategoriaProdutoCountOutputType
   */

  export type CategoriaProdutoCountOutputType = {
    Produto: number
  }

  export type CategoriaProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | CategoriaProdutoCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaProdutoCountOutputType without action
   */
  export type CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProdutoCountOutputType
     */
    select?: CategoriaProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaProdutoCountOutputType without action
   */
  export type CategoriaProdutoCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    Pedido: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | ClienteCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type LoginCountOutputType
   */

  export type LoginCountOutputType = {
    Cliente: number
    Representante: number
  }

  export type LoginCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | LoginCountOutputTypeCountClienteArgs
    Representante?: boolean | LoginCountOutputTypeCountRepresentanteArgs
  }

  // Custom InputTypes
  /**
   * LoginCountOutputType without action
   */
  export type LoginCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginCountOutputType
     */
    select?: LoginCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoginCountOutputType without action
   */
  export type LoginCountOutputTypeCountClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * LoginCountOutputType without action
   */
  export type LoginCountOutputTypeCountRepresentanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepresentanteWhereInput
  }


  /**
   * Count Type MarcaCountOutputType
   */

  export type MarcaCountOutputType = {
    Produto: number
    RepresentanteMarca: number
  }

  export type MarcaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | MarcaCountOutputTypeCountProdutoArgs
    RepresentanteMarca?: boolean | MarcaCountOutputTypeCountRepresentanteMarcaArgs
  }

  // Custom InputTypes
  /**
   * MarcaCountOutputType without action
   */
  export type MarcaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaCountOutputType
     */
    select?: MarcaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarcaCountOutputType without action
   */
  export type MarcaCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * MarcaCountOutputType without action
   */
  export type MarcaCountOutputTypeCountRepresentanteMarcaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepresentanteMarcaWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    PedidoProduto: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PedidoProduto?: boolean | PedidoCountOutputTypeCountPedidoProdutoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPedidoProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProdutoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    PedidoProduto: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PedidoProduto?: boolean | ProdutoCountOutputTypeCountPedidoProdutoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountPedidoProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProdutoWhereInput
  }


  /**
   * Count Type RepresentanteCountOutputType
   */

  export type RepresentanteCountOutputType = {
    Pedido: number
    RepresentanteMarca: number
  }

  export type RepresentanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | RepresentanteCountOutputTypeCountPedidoArgs
    RepresentanteMarca?: boolean | RepresentanteCountOutputTypeCountRepresentanteMarcaArgs
  }

  // Custom InputTypes
  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteCountOutputType
     */
    select?: RepresentanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * RepresentanteCountOutputType without action
   */
  export type RepresentanteCountOutputTypeCountRepresentanteMarcaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepresentanteMarcaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AutenticacaoLogin
   */

  export type AggregateAutenticacaoLogin = {
    _count: AutenticacaoLoginCountAggregateOutputType | null
    _avg: AutenticacaoLoginAvgAggregateOutputType | null
    _sum: AutenticacaoLoginSumAggregateOutputType | null
    _min: AutenticacaoLoginMinAggregateOutputType | null
    _max: AutenticacaoLoginMaxAggregateOutputType | null
  }

  export type AutenticacaoLoginAvgAggregateOutputType = {
    id: number | null
    codigo: number | null
  }

  export type AutenticacaoLoginSumAggregateOutputType = {
    id: number | null
    codigo: number | null
  }

  export type AutenticacaoLoginMinAggregateOutputType = {
    id: number | null
    email: string | null
    codigo: number | null
    data_criacao: Date | null
  }

  export type AutenticacaoLoginMaxAggregateOutputType = {
    id: number | null
    email: string | null
    codigo: number | null
    data_criacao: Date | null
  }

  export type AutenticacaoLoginCountAggregateOutputType = {
    id: number
    email: number
    codigo: number
    data_criacao: number
    _all: number
  }


  export type AutenticacaoLoginAvgAggregateInputType = {
    id?: true
    codigo?: true
  }

  export type AutenticacaoLoginSumAggregateInputType = {
    id?: true
    codigo?: true
  }

  export type AutenticacaoLoginMinAggregateInputType = {
    id?: true
    email?: true
    codigo?: true
    data_criacao?: true
  }

  export type AutenticacaoLoginMaxAggregateInputType = {
    id?: true
    email?: true
    codigo?: true
    data_criacao?: true
  }

  export type AutenticacaoLoginCountAggregateInputType = {
    id?: true
    email?: true
    codigo?: true
    data_criacao?: true
    _all?: true
  }

  export type AutenticacaoLoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutenticacaoLogin to aggregate.
     */
    where?: AutenticacaoLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutenticacaoLogins to fetch.
     */
    orderBy?: AutenticacaoLoginOrderByWithRelationInput | AutenticacaoLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutenticacaoLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutenticacaoLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutenticacaoLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutenticacaoLogins
    **/
    _count?: true | AutenticacaoLoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutenticacaoLoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutenticacaoLoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutenticacaoLoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutenticacaoLoginMaxAggregateInputType
  }

  export type GetAutenticacaoLoginAggregateType<T extends AutenticacaoLoginAggregateArgs> = {
        [P in keyof T & keyof AggregateAutenticacaoLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutenticacaoLogin[P]>
      : GetScalarType<T[P], AggregateAutenticacaoLogin[P]>
  }




  export type AutenticacaoLoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutenticacaoLoginWhereInput
    orderBy?: AutenticacaoLoginOrderByWithAggregationInput | AutenticacaoLoginOrderByWithAggregationInput[]
    by: AutenticacaoLoginScalarFieldEnum[] | AutenticacaoLoginScalarFieldEnum
    having?: AutenticacaoLoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutenticacaoLoginCountAggregateInputType | true
    _avg?: AutenticacaoLoginAvgAggregateInputType
    _sum?: AutenticacaoLoginSumAggregateInputType
    _min?: AutenticacaoLoginMinAggregateInputType
    _max?: AutenticacaoLoginMaxAggregateInputType
  }

  export type AutenticacaoLoginGroupByOutputType = {
    id: number
    email: string
    codigo: number
    data_criacao: Date
    _count: AutenticacaoLoginCountAggregateOutputType | null
    _avg: AutenticacaoLoginAvgAggregateOutputType | null
    _sum: AutenticacaoLoginSumAggregateOutputType | null
    _min: AutenticacaoLoginMinAggregateOutputType | null
    _max: AutenticacaoLoginMaxAggregateOutputType | null
  }

  type GetAutenticacaoLoginGroupByPayload<T extends AutenticacaoLoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutenticacaoLoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutenticacaoLoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutenticacaoLoginGroupByOutputType[P]>
            : GetScalarType<T[P], AutenticacaoLoginGroupByOutputType[P]>
        }
      >
    >


  export type AutenticacaoLoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    codigo?: boolean
    data_criacao?: boolean
  }, ExtArgs["result"]["autenticacaoLogin"]>

  export type AutenticacaoLoginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    codigo?: boolean
    data_criacao?: boolean
  }, ExtArgs["result"]["autenticacaoLogin"]>

  export type AutenticacaoLoginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    codigo?: boolean
    data_criacao?: boolean
  }, ExtArgs["result"]["autenticacaoLogin"]>

  export type AutenticacaoLoginSelectScalar = {
    id?: boolean
    email?: boolean
    codigo?: boolean
    data_criacao?: boolean
  }

  export type AutenticacaoLoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "codigo" | "data_criacao", ExtArgs["result"]["autenticacaoLogin"]>

  export type $AutenticacaoLoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutenticacaoLogin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      codigo: number
      data_criacao: Date
    }, ExtArgs["result"]["autenticacaoLogin"]>
    composites: {}
  }

  type AutenticacaoLoginGetPayload<S extends boolean | null | undefined | AutenticacaoLoginDefaultArgs> = $Result.GetResult<Prisma.$AutenticacaoLoginPayload, S>

  type AutenticacaoLoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutenticacaoLoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutenticacaoLoginCountAggregateInputType | true
    }

  export interface AutenticacaoLoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutenticacaoLogin'], meta: { name: 'AutenticacaoLogin' } }
    /**
     * Find zero or one AutenticacaoLogin that matches the filter.
     * @param {AutenticacaoLoginFindUniqueArgs} args - Arguments to find a AutenticacaoLogin
     * @example
     * // Get one AutenticacaoLogin
     * const autenticacaoLogin = await prisma.autenticacaoLogin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutenticacaoLoginFindUniqueArgs>(args: SelectSubset<T, AutenticacaoLoginFindUniqueArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutenticacaoLogin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutenticacaoLoginFindUniqueOrThrowArgs} args - Arguments to find a AutenticacaoLogin
     * @example
     * // Get one AutenticacaoLogin
     * const autenticacaoLogin = await prisma.autenticacaoLogin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutenticacaoLoginFindUniqueOrThrowArgs>(args: SelectSubset<T, AutenticacaoLoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutenticacaoLogin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutenticacaoLoginFindFirstArgs} args - Arguments to find a AutenticacaoLogin
     * @example
     * // Get one AutenticacaoLogin
     * const autenticacaoLogin = await prisma.autenticacaoLogin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutenticacaoLoginFindFirstArgs>(args?: SelectSubset<T, AutenticacaoLoginFindFirstArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutenticacaoLogin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutenticacaoLoginFindFirstOrThrowArgs} args - Arguments to find a AutenticacaoLogin
     * @example
     * // Get one AutenticacaoLogin
     * const autenticacaoLogin = await prisma.autenticacaoLogin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutenticacaoLoginFindFirstOrThrowArgs>(args?: SelectSubset<T, AutenticacaoLoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutenticacaoLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutenticacaoLoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutenticacaoLogins
     * const autenticacaoLogins = await prisma.autenticacaoLogin.findMany()
     * 
     * // Get first 10 AutenticacaoLogins
     * const autenticacaoLogins = await prisma.autenticacaoLogin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autenticacaoLoginWithIdOnly = await prisma.autenticacaoLogin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutenticacaoLoginFindManyArgs>(args?: SelectSubset<T, AutenticacaoLoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutenticacaoLogin.
     * @param {AutenticacaoLoginCreateArgs} args - Arguments to create a AutenticacaoLogin.
     * @example
     * // Create one AutenticacaoLogin
     * const AutenticacaoLogin = await prisma.autenticacaoLogin.create({
     *   data: {
     *     // ... data to create a AutenticacaoLogin
     *   }
     * })
     * 
     */
    create<T extends AutenticacaoLoginCreateArgs>(args: SelectSubset<T, AutenticacaoLoginCreateArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutenticacaoLogins.
     * @param {AutenticacaoLoginCreateManyArgs} args - Arguments to create many AutenticacaoLogins.
     * @example
     * // Create many AutenticacaoLogins
     * const autenticacaoLogin = await prisma.autenticacaoLogin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutenticacaoLoginCreateManyArgs>(args?: SelectSubset<T, AutenticacaoLoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutenticacaoLogins and returns the data saved in the database.
     * @param {AutenticacaoLoginCreateManyAndReturnArgs} args - Arguments to create many AutenticacaoLogins.
     * @example
     * // Create many AutenticacaoLogins
     * const autenticacaoLogin = await prisma.autenticacaoLogin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutenticacaoLogins and only return the `id`
     * const autenticacaoLoginWithIdOnly = await prisma.autenticacaoLogin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutenticacaoLoginCreateManyAndReturnArgs>(args?: SelectSubset<T, AutenticacaoLoginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AutenticacaoLogin.
     * @param {AutenticacaoLoginDeleteArgs} args - Arguments to delete one AutenticacaoLogin.
     * @example
     * // Delete one AutenticacaoLogin
     * const AutenticacaoLogin = await prisma.autenticacaoLogin.delete({
     *   where: {
     *     // ... filter to delete one AutenticacaoLogin
     *   }
     * })
     * 
     */
    delete<T extends AutenticacaoLoginDeleteArgs>(args: SelectSubset<T, AutenticacaoLoginDeleteArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutenticacaoLogin.
     * @param {AutenticacaoLoginUpdateArgs} args - Arguments to update one AutenticacaoLogin.
     * @example
     * // Update one AutenticacaoLogin
     * const autenticacaoLogin = await prisma.autenticacaoLogin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutenticacaoLoginUpdateArgs>(args: SelectSubset<T, AutenticacaoLoginUpdateArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutenticacaoLogins.
     * @param {AutenticacaoLoginDeleteManyArgs} args - Arguments to filter AutenticacaoLogins to delete.
     * @example
     * // Delete a few AutenticacaoLogins
     * const { count } = await prisma.autenticacaoLogin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutenticacaoLoginDeleteManyArgs>(args?: SelectSubset<T, AutenticacaoLoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutenticacaoLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutenticacaoLoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutenticacaoLogins
     * const autenticacaoLogin = await prisma.autenticacaoLogin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutenticacaoLoginUpdateManyArgs>(args: SelectSubset<T, AutenticacaoLoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutenticacaoLogins and returns the data updated in the database.
     * @param {AutenticacaoLoginUpdateManyAndReturnArgs} args - Arguments to update many AutenticacaoLogins.
     * @example
     * // Update many AutenticacaoLogins
     * const autenticacaoLogin = await prisma.autenticacaoLogin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutenticacaoLogins and only return the `id`
     * const autenticacaoLoginWithIdOnly = await prisma.autenticacaoLogin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutenticacaoLoginUpdateManyAndReturnArgs>(args: SelectSubset<T, AutenticacaoLoginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AutenticacaoLogin.
     * @param {AutenticacaoLoginUpsertArgs} args - Arguments to update or create a AutenticacaoLogin.
     * @example
     * // Update or create a AutenticacaoLogin
     * const autenticacaoLogin = await prisma.autenticacaoLogin.upsert({
     *   create: {
     *     // ... data to create a AutenticacaoLogin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutenticacaoLogin we want to update
     *   }
     * })
     */
    upsert<T extends AutenticacaoLoginUpsertArgs>(args: SelectSubset<T, AutenticacaoLoginUpsertArgs<ExtArgs>>): Prisma__AutenticacaoLoginClient<$Result.GetResult<Prisma.$AutenticacaoLoginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutenticacaoLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutenticacaoLoginCountArgs} args - Arguments to filter AutenticacaoLogins to count.
     * @example
     * // Count the number of AutenticacaoLogins
     * const count = await prisma.autenticacaoLogin.count({
     *   where: {
     *     // ... the filter for the AutenticacaoLogins we want to count
     *   }
     * })
    **/
    count<T extends AutenticacaoLoginCountArgs>(
      args?: Subset<T, AutenticacaoLoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutenticacaoLoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutenticacaoLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutenticacaoLoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutenticacaoLoginAggregateArgs>(args: Subset<T, AutenticacaoLoginAggregateArgs>): Prisma.PrismaPromise<GetAutenticacaoLoginAggregateType<T>>

    /**
     * Group by AutenticacaoLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutenticacaoLoginGroupByArgs} args - Group by arguments.
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
      T extends AutenticacaoLoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutenticacaoLoginGroupByArgs['orderBy'] }
        : { orderBy?: AutenticacaoLoginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutenticacaoLoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutenticacaoLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutenticacaoLogin model
   */
  readonly fields: AutenticacaoLoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutenticacaoLogin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutenticacaoLoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AutenticacaoLogin model
   */
  interface AutenticacaoLoginFieldRefs {
    readonly id: FieldRef<"AutenticacaoLogin", 'Int'>
    readonly email: FieldRef<"AutenticacaoLogin", 'String'>
    readonly codigo: FieldRef<"AutenticacaoLogin", 'Int'>
    readonly data_criacao: FieldRef<"AutenticacaoLogin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutenticacaoLogin findUnique
   */
  export type AutenticacaoLoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * Filter, which AutenticacaoLogin to fetch.
     */
    where: AutenticacaoLoginWhereUniqueInput
  }

  /**
   * AutenticacaoLogin findUniqueOrThrow
   */
  export type AutenticacaoLoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * Filter, which AutenticacaoLogin to fetch.
     */
    where: AutenticacaoLoginWhereUniqueInput
  }

  /**
   * AutenticacaoLogin findFirst
   */
  export type AutenticacaoLoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * Filter, which AutenticacaoLogin to fetch.
     */
    where?: AutenticacaoLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutenticacaoLogins to fetch.
     */
    orderBy?: AutenticacaoLoginOrderByWithRelationInput | AutenticacaoLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutenticacaoLogins.
     */
    cursor?: AutenticacaoLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutenticacaoLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutenticacaoLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutenticacaoLogins.
     */
    distinct?: AutenticacaoLoginScalarFieldEnum | AutenticacaoLoginScalarFieldEnum[]
  }

  /**
   * AutenticacaoLogin findFirstOrThrow
   */
  export type AutenticacaoLoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * Filter, which AutenticacaoLogin to fetch.
     */
    where?: AutenticacaoLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutenticacaoLogins to fetch.
     */
    orderBy?: AutenticacaoLoginOrderByWithRelationInput | AutenticacaoLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutenticacaoLogins.
     */
    cursor?: AutenticacaoLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutenticacaoLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutenticacaoLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutenticacaoLogins.
     */
    distinct?: AutenticacaoLoginScalarFieldEnum | AutenticacaoLoginScalarFieldEnum[]
  }

  /**
   * AutenticacaoLogin findMany
   */
  export type AutenticacaoLoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * Filter, which AutenticacaoLogins to fetch.
     */
    where?: AutenticacaoLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutenticacaoLogins to fetch.
     */
    orderBy?: AutenticacaoLoginOrderByWithRelationInput | AutenticacaoLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutenticacaoLogins.
     */
    cursor?: AutenticacaoLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutenticacaoLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutenticacaoLogins.
     */
    skip?: number
    distinct?: AutenticacaoLoginScalarFieldEnum | AutenticacaoLoginScalarFieldEnum[]
  }

  /**
   * AutenticacaoLogin create
   */
  export type AutenticacaoLoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * The data needed to create a AutenticacaoLogin.
     */
    data: XOR<AutenticacaoLoginCreateInput, AutenticacaoLoginUncheckedCreateInput>
  }

  /**
   * AutenticacaoLogin createMany
   */
  export type AutenticacaoLoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutenticacaoLogins.
     */
    data: AutenticacaoLoginCreateManyInput | AutenticacaoLoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutenticacaoLogin createManyAndReturn
   */
  export type AutenticacaoLoginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * The data used to create many AutenticacaoLogins.
     */
    data: AutenticacaoLoginCreateManyInput | AutenticacaoLoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutenticacaoLogin update
   */
  export type AutenticacaoLoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * The data needed to update a AutenticacaoLogin.
     */
    data: XOR<AutenticacaoLoginUpdateInput, AutenticacaoLoginUncheckedUpdateInput>
    /**
     * Choose, which AutenticacaoLogin to update.
     */
    where: AutenticacaoLoginWhereUniqueInput
  }

  /**
   * AutenticacaoLogin updateMany
   */
  export type AutenticacaoLoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutenticacaoLogins.
     */
    data: XOR<AutenticacaoLoginUpdateManyMutationInput, AutenticacaoLoginUncheckedUpdateManyInput>
    /**
     * Filter which AutenticacaoLogins to update
     */
    where?: AutenticacaoLoginWhereInput
    /**
     * Limit how many AutenticacaoLogins to update.
     */
    limit?: number
  }

  /**
   * AutenticacaoLogin updateManyAndReturn
   */
  export type AutenticacaoLoginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * The data used to update AutenticacaoLogins.
     */
    data: XOR<AutenticacaoLoginUpdateManyMutationInput, AutenticacaoLoginUncheckedUpdateManyInput>
    /**
     * Filter which AutenticacaoLogins to update
     */
    where?: AutenticacaoLoginWhereInput
    /**
     * Limit how many AutenticacaoLogins to update.
     */
    limit?: number
  }

  /**
   * AutenticacaoLogin upsert
   */
  export type AutenticacaoLoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * The filter to search for the AutenticacaoLogin to update in case it exists.
     */
    where: AutenticacaoLoginWhereUniqueInput
    /**
     * In case the AutenticacaoLogin found by the `where` argument doesn't exist, create a new AutenticacaoLogin with this data.
     */
    create: XOR<AutenticacaoLoginCreateInput, AutenticacaoLoginUncheckedCreateInput>
    /**
     * In case the AutenticacaoLogin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutenticacaoLoginUpdateInput, AutenticacaoLoginUncheckedUpdateInput>
  }

  /**
   * AutenticacaoLogin delete
   */
  export type AutenticacaoLoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
    /**
     * Filter which AutenticacaoLogin to delete.
     */
    where: AutenticacaoLoginWhereUniqueInput
  }

  /**
   * AutenticacaoLogin deleteMany
   */
  export type AutenticacaoLoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutenticacaoLogins to delete
     */
    where?: AutenticacaoLoginWhereInput
    /**
     * Limit how many AutenticacaoLogins to delete.
     */
    limit?: number
  }

  /**
   * AutenticacaoLogin without action
   */
  export type AutenticacaoLoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutenticacaoLogin
     */
    select?: AutenticacaoLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutenticacaoLogin
     */
    omit?: AutenticacaoLoginOmit<ExtArgs> | null
  }


  /**
   * Model CategoriaProduto
   */

  export type AggregateCategoriaProduto = {
    _count: CategoriaProdutoCountAggregateOutputType | null
    _avg: CategoriaProdutoAvgAggregateOutputType | null
    _sum: CategoriaProdutoSumAggregateOutputType | null
    _min: CategoriaProdutoMinAggregateOutputType | null
    _max: CategoriaProdutoMaxAggregateOutputType | null
  }

  export type CategoriaProdutoAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaProdutoSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaProdutoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type CategoriaProdutoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type CategoriaProdutoCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type CategoriaProdutoAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaProdutoSumAggregateInputType = {
    id?: true
  }

  export type CategoriaProdutoMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaProdutoMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaProdutoCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaProduto to aggregate.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriaProdutos
    **/
    _count?: true | CategoriaProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaProdutoMaxAggregateInputType
  }

  export type GetCategoriaProdutoAggregateType<T extends CategoriaProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriaProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriaProduto[P]>
      : GetScalarType<T[P], AggregateCategoriaProduto[P]>
  }




  export type CategoriaProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaProdutoWhereInput
    orderBy?: CategoriaProdutoOrderByWithAggregationInput | CategoriaProdutoOrderByWithAggregationInput[]
    by: CategoriaProdutoScalarFieldEnum[] | CategoriaProdutoScalarFieldEnum
    having?: CategoriaProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaProdutoCountAggregateInputType | true
    _avg?: CategoriaProdutoAvgAggregateInputType
    _sum?: CategoriaProdutoSumAggregateInputType
    _min?: CategoriaProdutoMinAggregateInputType
    _max?: CategoriaProdutoMaxAggregateInputType
  }

  export type CategoriaProdutoGroupByOutputType = {
    id: number
    descricao: string
    _count: CategoriaProdutoCountAggregateOutputType | null
    _avg: CategoriaProdutoAvgAggregateOutputType | null
    _sum: CategoriaProdutoSumAggregateOutputType | null
    _min: CategoriaProdutoMinAggregateOutputType | null
    _max: CategoriaProdutoMaxAggregateOutputType | null
  }

  type GetCategoriaProdutoGroupByPayload<T extends CategoriaProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    Produto?: boolean | CategoriaProduto$ProdutoArgs<ExtArgs>
    _count?: boolean | CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriaProduto"]>

  export type CategoriaProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoriaProduto"]>

  export type CategoriaProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoriaProduto"]>

  export type CategoriaProdutoSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type CategoriaProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["categoriaProduto"]>
  export type CategoriaProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | CategoriaProduto$ProdutoArgs<ExtArgs>
    _count?: boolean | CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriaProduto"
    objects: {
      Produto: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["categoriaProduto"]>
    composites: {}
  }

  type CategoriaProdutoGetPayload<S extends boolean | null | undefined | CategoriaProdutoDefaultArgs> = $Result.GetResult<Prisma.$CategoriaProdutoPayload, S>

  type CategoriaProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaProdutoCountAggregateInputType | true
    }

  export interface CategoriaProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriaProduto'], meta: { name: 'CategoriaProduto' } }
    /**
     * Find zero or one CategoriaProduto that matches the filter.
     * @param {CategoriaProdutoFindUniqueArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaProdutoFindUniqueArgs>(args: SelectSubset<T, CategoriaProdutoFindUniqueArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriaProduto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaProdutoFindUniqueOrThrowArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindFirstArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaProdutoFindFirstArgs>(args?: SelectSubset<T, CategoriaProdutoFindFirstArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaProduto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindFirstOrThrowArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriaProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriaProdutos
     * const categoriaProdutos = await prisma.categoriaProduto.findMany()
     * 
     * // Get first 10 CategoriaProdutos
     * const categoriaProdutos = await prisma.categoriaProduto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaProdutoWithIdOnly = await prisma.categoriaProduto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaProdutoFindManyArgs>(args?: SelectSubset<T, CategoriaProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriaProduto.
     * @param {CategoriaProdutoCreateArgs} args - Arguments to create a CategoriaProduto.
     * @example
     * // Create one CategoriaProduto
     * const CategoriaProduto = await prisma.categoriaProduto.create({
     *   data: {
     *     // ... data to create a CategoriaProduto
     *   }
     * })
     * 
     */
    create<T extends CategoriaProdutoCreateArgs>(args: SelectSubset<T, CategoriaProdutoCreateArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriaProdutos.
     * @param {CategoriaProdutoCreateManyArgs} args - Arguments to create many CategoriaProdutos.
     * @example
     * // Create many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaProdutoCreateManyArgs>(args?: SelectSubset<T, CategoriaProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoriaProdutos and returns the data saved in the database.
     * @param {CategoriaProdutoCreateManyAndReturnArgs} args - Arguments to create many CategoriaProdutos.
     * @example
     * // Create many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoriaProdutos and only return the `id`
     * const categoriaProdutoWithIdOnly = await prisma.categoriaProduto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoriaProduto.
     * @param {CategoriaProdutoDeleteArgs} args - Arguments to delete one CategoriaProduto.
     * @example
     * // Delete one CategoriaProduto
     * const CategoriaProduto = await prisma.categoriaProduto.delete({
     *   where: {
     *     // ... filter to delete one CategoriaProduto
     *   }
     * })
     * 
     */
    delete<T extends CategoriaProdutoDeleteArgs>(args: SelectSubset<T, CategoriaProdutoDeleteArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriaProduto.
     * @param {CategoriaProdutoUpdateArgs} args - Arguments to update one CategoriaProduto.
     * @example
     * // Update one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaProdutoUpdateArgs>(args: SelectSubset<T, CategoriaProdutoUpdateArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriaProdutos.
     * @param {CategoriaProdutoDeleteManyArgs} args - Arguments to filter CategoriaProdutos to delete.
     * @example
     * // Delete a few CategoriaProdutos
     * const { count } = await prisma.categoriaProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaProdutoDeleteManyArgs>(args?: SelectSubset<T, CategoriaProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaProdutoUpdateManyArgs>(args: SelectSubset<T, CategoriaProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaProdutos and returns the data updated in the database.
     * @param {CategoriaProdutoUpdateManyAndReturnArgs} args - Arguments to update many CategoriaProdutos.
     * @example
     * // Update many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoriaProdutos and only return the `id`
     * const categoriaProdutoWithIdOnly = await prisma.categoriaProduto.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoriaProduto.
     * @param {CategoriaProdutoUpsertArgs} args - Arguments to update or create a CategoriaProduto.
     * @example
     * // Update or create a CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.upsert({
     *   create: {
     *     // ... data to create a CategoriaProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriaProduto we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaProdutoUpsertArgs>(args: SelectSubset<T, CategoriaProdutoUpsertArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriaProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoCountArgs} args - Arguments to filter CategoriaProdutos to count.
     * @example
     * // Count the number of CategoriaProdutos
     * const count = await prisma.categoriaProduto.count({
     *   where: {
     *     // ... the filter for the CategoriaProdutos we want to count
     *   }
     * })
    **/
    count<T extends CategoriaProdutoCountArgs>(
      args?: Subset<T, CategoriaProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriaProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaProdutoAggregateArgs>(args: Subset<T, CategoriaProdutoAggregateArgs>): Prisma.PrismaPromise<GetCategoriaProdutoAggregateType<T>>

    /**
     * Group by CategoriaProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoGroupByArgs} args - Group by arguments.
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
      T extends CategoriaProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaProdutoGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriaProduto model
   */
  readonly fields: CategoriaProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriaProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produto<T extends CategoriaProduto$ProdutoArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaProduto$ProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoriaProduto model
   */
  interface CategoriaProdutoFieldRefs {
    readonly id: FieldRef<"CategoriaProduto", 'Int'>
    readonly descricao: FieldRef<"CategoriaProduto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoriaProduto findUnique
   */
  export type CategoriaProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto findUniqueOrThrow
   */
  export type CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto findFirst
   */
  export type CategoriaProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaProdutos.
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaProdutos.
     */
    distinct?: CategoriaProdutoScalarFieldEnum | CategoriaProdutoScalarFieldEnum[]
  }

  /**
   * CategoriaProduto findFirstOrThrow
   */
  export type CategoriaProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaProdutos.
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaProdutos.
     */
    distinct?: CategoriaProdutoScalarFieldEnum | CategoriaProdutoScalarFieldEnum[]
  }

  /**
   * CategoriaProduto findMany
   */
  export type CategoriaProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProdutos to fetch.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriaProdutos.
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    distinct?: CategoriaProdutoScalarFieldEnum | CategoriaProdutoScalarFieldEnum[]
  }

  /**
   * CategoriaProduto create
   */
  export type CategoriaProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriaProduto.
     */
    data: XOR<CategoriaProdutoCreateInput, CategoriaProdutoUncheckedCreateInput>
  }

  /**
   * CategoriaProduto createMany
   */
  export type CategoriaProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriaProdutos.
     */
    data: CategoriaProdutoCreateManyInput | CategoriaProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriaProduto createManyAndReturn
   */
  export type CategoriaProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many CategoriaProdutos.
     */
    data: CategoriaProdutoCreateManyInput | CategoriaProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriaProduto update
   */
  export type CategoriaProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriaProduto.
     */
    data: XOR<CategoriaProdutoUpdateInput, CategoriaProdutoUncheckedUpdateInput>
    /**
     * Choose, which CategoriaProduto to update.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto updateMany
   */
  export type CategoriaProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriaProdutos.
     */
    data: XOR<CategoriaProdutoUpdateManyMutationInput, CategoriaProdutoUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaProdutos to update
     */
    where?: CategoriaProdutoWhereInput
    /**
     * Limit how many CategoriaProdutos to update.
     */
    limit?: number
  }

  /**
   * CategoriaProduto updateManyAndReturn
   */
  export type CategoriaProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * The data used to update CategoriaProdutos.
     */
    data: XOR<CategoriaProdutoUpdateManyMutationInput, CategoriaProdutoUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaProdutos to update
     */
    where?: CategoriaProdutoWhereInput
    /**
     * Limit how many CategoriaProdutos to update.
     */
    limit?: number
  }

  /**
   * CategoriaProduto upsert
   */
  export type CategoriaProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriaProduto to update in case it exists.
     */
    where: CategoriaProdutoWhereUniqueInput
    /**
     * In case the CategoriaProduto found by the `where` argument doesn't exist, create a new CategoriaProduto with this data.
     */
    create: XOR<CategoriaProdutoCreateInput, CategoriaProdutoUncheckedCreateInput>
    /**
     * In case the CategoriaProduto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaProdutoUpdateInput, CategoriaProdutoUncheckedUpdateInput>
  }

  /**
   * CategoriaProduto delete
   */
  export type CategoriaProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter which CategoriaProduto to delete.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto deleteMany
   */
  export type CategoriaProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaProdutos to delete
     */
    where?: CategoriaProdutoWhereInput
    /**
     * Limit how many CategoriaProdutos to delete.
     */
    limit?: number
  }

  /**
   * CategoriaProduto.Produto
   */
  export type CategoriaProduto$ProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * CategoriaProduto without action
   */
  export type CategoriaProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_log: number | null
    receita_bruta: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id_log: number | null
    receita_bruta: number | null
  }

  export type ClienteMinAggregateOutputType = {
    cnpj: string | null
    razao_social: string | null
    status: $Enums.StatusUser | null
    email: string | null
    data_cadastro: Date | null
    id_log: number | null
    receita_bruta: number | null
    categoria_cliente: $Enums.CatCliente | null
  }

  export type ClienteMaxAggregateOutputType = {
    cnpj: string | null
    razao_social: string | null
    status: $Enums.StatusUser | null
    email: string | null
    data_cadastro: Date | null
    id_log: number | null
    receita_bruta: number | null
    categoria_cliente: $Enums.CatCliente | null
  }

  export type ClienteCountAggregateOutputType = {
    cnpj: number
    razao_social: number
    status: number
    email: number
    data_cadastro: number
    id_log: number
    receita_bruta: number
    categoria_cliente: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_log?: true
    receita_bruta?: true
  }

  export type ClienteSumAggregateInputType = {
    id_log?: true
    receita_bruta?: true
  }

  export type ClienteMinAggregateInputType = {
    cnpj?: true
    razao_social?: true
    status?: true
    email?: true
    data_cadastro?: true
    id_log?: true
    receita_bruta?: true
    categoria_cliente?: true
  }

  export type ClienteMaxAggregateInputType = {
    cnpj?: true
    razao_social?: true
    status?: true
    email?: true
    data_cadastro?: true
    id_log?: true
    receita_bruta?: true
    categoria_cliente?: true
  }

  export type ClienteCountAggregateInputType = {
    cnpj?: true
    razao_social?: true
    status?: true
    email?: true
    data_cadastro?: true
    id_log?: true
    receita_bruta?: true
    categoria_cliente?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro: Date
    id_log: number
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
    receita_bruta?: boolean
    categoria_cliente?: boolean
    Login?: boolean | LoginDefaultArgs<ExtArgs>
    Pedido?: boolean | Cliente$PedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
    receita_bruta?: boolean
    categoria_cliente?: boolean
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
    receita_bruta?: boolean
    categoria_cliente?: boolean
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
    receita_bruta?: boolean
    categoria_cliente?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cnpj" | "razao_social" | "status" | "email" | "data_cadastro" | "id_log" | "receita_bruta" | "categoria_cliente", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Login?: boolean | LoginDefaultArgs<ExtArgs>
    Pedido?: boolean | Cliente$PedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      Login: Prisma.$LoginPayload<ExtArgs>
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cnpj: string
      razao_social: string
      status: $Enums.StatusUser
      email: string
      data_cadastro: Date
      id_log: number
      receita_bruta: number
      categoria_cliente: $Enums.CatCliente
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cnpj`
     * const clienteWithCnpjOnly = await prisma.cliente.findMany({ select: { cnpj: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `cnpj`
     * const clienteWithCnpjOnly = await prisma.cliente.createManyAndReturn({
     *   select: { cnpj: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `cnpj`
     * const clienteWithCnpjOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { cnpj: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Login<T extends LoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoginDefaultArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pedido<T extends Cliente$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly cnpj: FieldRef<"Cliente", 'String'>
    readonly razao_social: FieldRef<"Cliente", 'String'>
    readonly status: FieldRef<"Cliente", 'StatusUser'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly data_cadastro: FieldRef<"Cliente", 'DateTime'>
    readonly id_log: FieldRef<"Cliente", 'Int'>
    readonly receita_bruta: FieldRef<"Cliente", 'Float'>
    readonly categoria_cliente: FieldRef<"Cliente", 'CatCliente'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.Pedido
   */
  export type Cliente$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Login
   */

  export type AggregateLogin = {
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  export type LoginAvgAggregateOutputType = {
    id: number | null
  }

  export type LoginSumAggregateOutputType = {
    id: number | null
  }

  export type LoginMinAggregateOutputType = {
    id: number | null
    password: string | null
  }

  export type LoginMaxAggregateOutputType = {
    id: number | null
    password: string | null
  }

  export type LoginCountAggregateOutputType = {
    id: number
    password: number
    _all: number
  }


  export type LoginAvgAggregateInputType = {
    id?: true
  }

  export type LoginSumAggregateInputType = {
    id?: true
  }

  export type LoginMinAggregateInputType = {
    id?: true
    password?: true
  }

  export type LoginMaxAggregateInputType = {
    id?: true
    password?: true
  }

  export type LoginCountAggregateInputType = {
    id?: true
    password?: true
    _all?: true
  }

  export type LoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Login to aggregate.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logins
    **/
    _count?: true | LoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginMaxAggregateInputType
  }

  export type GetLoginAggregateType<T extends LoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin[P]>
      : GetScalarType<T[P], AggregateLogin[P]>
  }




  export type LoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginWhereInput
    orderBy?: LoginOrderByWithAggregationInput | LoginOrderByWithAggregationInput[]
    by: LoginScalarFieldEnum[] | LoginScalarFieldEnum
    having?: LoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginCountAggregateInputType | true
    _avg?: LoginAvgAggregateInputType
    _sum?: LoginSumAggregateInputType
    _min?: LoginMinAggregateInputType
    _max?: LoginMaxAggregateInputType
  }

  export type LoginGroupByOutputType = {
    id: number
    password: string
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  type GetLoginGroupByPayload<T extends LoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginGroupByOutputType[P]>
            : GetScalarType<T[P], LoginGroupByOutputType[P]>
        }
      >
    >


  export type LoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    Cliente?: boolean | Login$ClienteArgs<ExtArgs>
    Representante?: boolean | Login$RepresentanteArgs<ExtArgs>
    _count?: boolean | LoginCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["login"]>

  export type LoginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
  }, ExtArgs["result"]["login"]>

  export type LoginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
  }, ExtArgs["result"]["login"]>

  export type LoginSelectScalar = {
    id?: boolean
    password?: boolean
  }

  export type LoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password", ExtArgs["result"]["login"]>
  export type LoginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | Login$ClienteArgs<ExtArgs>
    Representante?: boolean | Login$RepresentanteArgs<ExtArgs>
    _count?: boolean | LoginCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoginIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LoginIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Login"
    objects: {
      Cliente: Prisma.$ClientePayload<ExtArgs>[]
      Representante: Prisma.$RepresentantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      password: string
    }, ExtArgs["result"]["login"]>
    composites: {}
  }

  type LoginGetPayload<S extends boolean | null | undefined | LoginDefaultArgs> = $Result.GetResult<Prisma.$LoginPayload, S>

  type LoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginCountAggregateInputType | true
    }

  export interface LoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Login'], meta: { name: 'Login' } }
    /**
     * Find zero or one Login that matches the filter.
     * @param {LoginFindUniqueArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginFindUniqueArgs>(args: SelectSubset<T, LoginFindUniqueArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Login that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginFindUniqueOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginFindFirstArgs>(args?: SelectSubset<T, LoginFindFirstArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.login.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.login.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginWithIdOnly = await prisma.login.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginFindManyArgs>(args?: SelectSubset<T, LoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Login.
     * @param {LoginCreateArgs} args - Arguments to create a Login.
     * @example
     * // Create one Login
     * const Login = await prisma.login.create({
     *   data: {
     *     // ... data to create a Login
     *   }
     * })
     * 
     */
    create<T extends LoginCreateArgs>(args: SelectSubset<T, LoginCreateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logins.
     * @param {LoginCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginCreateManyArgs>(args?: SelectSubset<T, LoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logins and returns the data saved in the database.
     * @param {LoginCreateManyAndReturnArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logins and only return the `id`
     * const loginWithIdOnly = await prisma.login.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Login.
     * @param {LoginDeleteArgs} args - Arguments to delete one Login.
     * @example
     * // Delete one Login
     * const Login = await prisma.login.delete({
     *   where: {
     *     // ... filter to delete one Login
     *   }
     * })
     * 
     */
    delete<T extends LoginDeleteArgs>(args: SelectSubset<T, LoginDeleteArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Login.
     * @param {LoginUpdateArgs} args - Arguments to update one Login.
     * @example
     * // Update one Login
     * const login = await prisma.login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginUpdateArgs>(args: SelectSubset<T, LoginUpdateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logins.
     * @param {LoginDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginDeleteManyArgs>(args?: SelectSubset<T, LoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginUpdateManyArgs>(args: SelectSubset<T, LoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins and returns the data updated in the database.
     * @param {LoginUpdateManyAndReturnArgs} args - Arguments to update many Logins.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logins and only return the `id`
     * const loginWithIdOnly = await prisma.login.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoginUpdateManyAndReturnArgs>(args: SelectSubset<T, LoginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Login.
     * @param {LoginUpsertArgs} args - Arguments to update or create a Login.
     * @example
     * // Update or create a Login
     * const login = await prisma.login.upsert({
     *   create: {
     *     // ... data to create a Login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login we want to update
     *   }
     * })
     */
    upsert<T extends LoginUpsertArgs>(args: SelectSubset<T, LoginUpsertArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.login.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends LoginCountArgs>(
      args?: Subset<T, LoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginAggregateArgs>(args: Subset<T, LoginAggregateArgs>): Prisma.PrismaPromise<GetLoginAggregateType<T>>

    /**
     * Group by Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginGroupByArgs} args - Group by arguments.
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
      T extends LoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginGroupByArgs['orderBy'] }
        : { orderBy?: LoginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Login model
   */
  readonly fields: LoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cliente<T extends Login$ClienteArgs<ExtArgs> = {}>(args?: Subset<T, Login$ClienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Representante<T extends Login$RepresentanteArgs<ExtArgs> = {}>(args?: Subset<T, Login$RepresentanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Login model
   */
  interface LoginFieldRefs {
    readonly id: FieldRef<"Login", 'Int'>
    readonly password: FieldRef<"Login", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Login findUnique
   */
  export type LoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findUniqueOrThrow
   */
  export type LoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findFirst
   */
  export type LoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findFirstOrThrow
   */
  export type LoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findMany
   */
  export type LoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter, which Logins to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login create
   */
  export type LoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * The data needed to create a Login.
     */
    data: XOR<LoginCreateInput, LoginUncheckedCreateInput>
  }

  /**
   * Login createMany
   */
  export type LoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logins.
     */
    data: LoginCreateManyInput | LoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Login createManyAndReturn
   */
  export type LoginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * The data used to create many Logins.
     */
    data: LoginCreateManyInput | LoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Login update
   */
  export type LoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * The data needed to update a Login.
     */
    data: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
    /**
     * Choose, which Login to update.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login updateMany
   */
  export type LoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logins.
     */
    data: XOR<LoginUpdateManyMutationInput, LoginUncheckedUpdateManyInput>
    /**
     * Filter which Logins to update
     */
    where?: LoginWhereInput
    /**
     * Limit how many Logins to update.
     */
    limit?: number
  }

  /**
   * Login updateManyAndReturn
   */
  export type LoginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * The data used to update Logins.
     */
    data: XOR<LoginUpdateManyMutationInput, LoginUncheckedUpdateManyInput>
    /**
     * Filter which Logins to update
     */
    where?: LoginWhereInput
    /**
     * Limit how many Logins to update.
     */
    limit?: number
  }

  /**
   * Login upsert
   */
  export type LoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * The filter to search for the Login to update in case it exists.
     */
    where: LoginWhereUniqueInput
    /**
     * In case the Login found by the `where` argument doesn't exist, create a new Login with this data.
     */
    create: XOR<LoginCreateInput, LoginUncheckedCreateInput>
    /**
     * In case the Login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
  }

  /**
   * Login delete
   */
  export type LoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
    /**
     * Filter which Login to delete.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login deleteMany
   */
  export type LoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logins to delete
     */
    where?: LoginWhereInput
    /**
     * Limit how many Logins to delete.
     */
    limit?: number
  }

  /**
   * Login.Cliente
   */
  export type Login$ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Login.Representante
   */
  export type Login$RepresentanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    where?: RepresentanteWhereInput
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    cursor?: RepresentanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepresentanteScalarFieldEnum | RepresentanteScalarFieldEnum[]
  }

  /**
   * Login without action
   */
  export type LoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginInclude<ExtArgs> | null
  }


  /**
   * Model Marca
   */

  export type AggregateMarca = {
    _count: MarcaCountAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  export type MarcaMinAggregateOutputType = {
    razao_social: string | null
    cnpj: string | null
  }

  export type MarcaMaxAggregateOutputType = {
    razao_social: string | null
    cnpj: string | null
  }

  export type MarcaCountAggregateOutputType = {
    razao_social: number
    cnpj: number
    _all: number
  }


  export type MarcaMinAggregateInputType = {
    razao_social?: true
    cnpj?: true
  }

  export type MarcaMaxAggregateInputType = {
    razao_social?: true
    cnpj?: true
  }

  export type MarcaCountAggregateInputType = {
    razao_social?: true
    cnpj?: true
    _all?: true
  }

  export type MarcaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marca to aggregate.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marcas
    **/
    _count?: true | MarcaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcaMaxAggregateInputType
  }

  export type GetMarcaAggregateType<T extends MarcaAggregateArgs> = {
        [P in keyof T & keyof AggregateMarca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarca[P]>
      : GetScalarType<T[P], AggregateMarca[P]>
  }




  export type MarcaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcaWhereInput
    orderBy?: MarcaOrderByWithAggregationInput | MarcaOrderByWithAggregationInput[]
    by: MarcaScalarFieldEnum[] | MarcaScalarFieldEnum
    having?: MarcaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcaCountAggregateInputType | true
    _min?: MarcaMinAggregateInputType
    _max?: MarcaMaxAggregateInputType
  }

  export type MarcaGroupByOutputType = {
    razao_social: string
    cnpj: string
    _count: MarcaCountAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  type GetMarcaGroupByPayload<T extends MarcaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcaGroupByOutputType[P]>
            : GetScalarType<T[P], MarcaGroupByOutputType[P]>
        }
      >
    >


  export type MarcaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    razao_social?: boolean
    cnpj?: boolean
    Produto?: boolean | Marca$ProdutoArgs<ExtArgs>
    RepresentanteMarca?: boolean | Marca$RepresentanteMarcaArgs<ExtArgs>
    _count?: boolean | MarcaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    razao_social?: boolean
    cnpj?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    razao_social?: boolean
    cnpj?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectScalar = {
    razao_social?: boolean
    cnpj?: boolean
  }

  export type MarcaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"razao_social" | "cnpj", ExtArgs["result"]["marca"]>
  export type MarcaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | Marca$ProdutoArgs<ExtArgs>
    RepresentanteMarca?: boolean | Marca$RepresentanteMarcaArgs<ExtArgs>
    _count?: boolean | MarcaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarcaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarcaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarcaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marca"
    objects: {
      Produto: Prisma.$ProdutoPayload<ExtArgs>[]
      RepresentanteMarca: Prisma.$RepresentanteMarcaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      razao_social: string
      cnpj: string
    }, ExtArgs["result"]["marca"]>
    composites: {}
  }

  type MarcaGetPayload<S extends boolean | null | undefined | MarcaDefaultArgs> = $Result.GetResult<Prisma.$MarcaPayload, S>

  type MarcaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcaCountAggregateInputType | true
    }

  export interface MarcaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marca'], meta: { name: 'Marca' } }
    /**
     * Find zero or one Marca that matches the filter.
     * @param {MarcaFindUniqueArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcaFindUniqueArgs>(args: SelectSubset<T, MarcaFindUniqueArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcaFindUniqueOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcaFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcaFindFirstArgs>(args?: SelectSubset<T, MarcaFindFirstArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcaFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marcas
     * const marcas = await prisma.marca.findMany()
     * 
     * // Get first 10 Marcas
     * const marcas = await prisma.marca.findMany({ take: 10 })
     * 
     * // Only select the `razao_social`
     * const marcaWithRazao_socialOnly = await prisma.marca.findMany({ select: { razao_social: true } })
     * 
     */
    findMany<T extends MarcaFindManyArgs>(args?: SelectSubset<T, MarcaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marca.
     * @param {MarcaCreateArgs} args - Arguments to create a Marca.
     * @example
     * // Create one Marca
     * const Marca = await prisma.marca.create({
     *   data: {
     *     // ... data to create a Marca
     *   }
     * })
     * 
     */
    create<T extends MarcaCreateArgs>(args: SelectSubset<T, MarcaCreateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marcas.
     * @param {MarcaCreateManyArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcaCreateManyArgs>(args?: SelectSubset<T, MarcaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marcas and returns the data saved in the database.
     * @param {MarcaCreateManyAndReturnArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marcas and only return the `razao_social`
     * const marcaWithRazao_socialOnly = await prisma.marca.createManyAndReturn({
     *   select: { razao_social: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcaCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marca.
     * @param {MarcaDeleteArgs} args - Arguments to delete one Marca.
     * @example
     * // Delete one Marca
     * const Marca = await prisma.marca.delete({
     *   where: {
     *     // ... filter to delete one Marca
     *   }
     * })
     * 
     */
    delete<T extends MarcaDeleteArgs>(args: SelectSubset<T, MarcaDeleteArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marca.
     * @param {MarcaUpdateArgs} args - Arguments to update one Marca.
     * @example
     * // Update one Marca
     * const marca = await prisma.marca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcaUpdateArgs>(args: SelectSubset<T, MarcaUpdateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marcas.
     * @param {MarcaDeleteManyArgs} args - Arguments to filter Marcas to delete.
     * @example
     * // Delete a few Marcas
     * const { count } = await prisma.marca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcaDeleteManyArgs>(args?: SelectSubset<T, MarcaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcaUpdateManyArgs>(args: SelectSubset<T, MarcaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas and returns the data updated in the database.
     * @param {MarcaUpdateManyAndReturnArgs} args - Arguments to update many Marcas.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marcas and only return the `razao_social`
     * const marcaWithRazao_socialOnly = await prisma.marca.updateManyAndReturn({
     *   select: { razao_social: true },
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
    updateManyAndReturn<T extends MarcaUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marca.
     * @param {MarcaUpsertArgs} args - Arguments to update or create a Marca.
     * @example
     * // Update or create a Marca
     * const marca = await prisma.marca.upsert({
     *   create: {
     *     // ... data to create a Marca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marca we want to update
     *   }
     * })
     */
    upsert<T extends MarcaUpsertArgs>(args: SelectSubset<T, MarcaUpsertArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaCountArgs} args - Arguments to filter Marcas to count.
     * @example
     * // Count the number of Marcas
     * const count = await prisma.marca.count({
     *   where: {
     *     // ... the filter for the Marcas we want to count
     *   }
     * })
    **/
    count<T extends MarcaCountArgs>(
      args?: Subset<T, MarcaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcaAggregateArgs>(args: Subset<T, MarcaAggregateArgs>): Prisma.PrismaPromise<GetMarcaAggregateType<T>>

    /**
     * Group by Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaGroupByArgs} args - Group by arguments.
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
      T extends MarcaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcaGroupByArgs['orderBy'] }
        : { orderBy?: MarcaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarcaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marca model
   */
  readonly fields: MarcaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produto<T extends Marca$ProdutoArgs<ExtArgs> = {}>(args?: Subset<T, Marca$ProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RepresentanteMarca<T extends Marca$RepresentanteMarcaArgs<ExtArgs> = {}>(args?: Subset<T, Marca$RepresentanteMarcaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Marca model
   */
  interface MarcaFieldRefs {
    readonly razao_social: FieldRef<"Marca", 'String'>
    readonly cnpj: FieldRef<"Marca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Marca findUnique
   */
  export type MarcaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findUniqueOrThrow
   */
  export type MarcaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findFirst
   */
  export type MarcaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findFirstOrThrow
   */
  export type MarcaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findMany
   */
  export type MarcaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marcas to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca create
   */
  export type MarcaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The data needed to create a Marca.
     */
    data: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
  }

  /**
   * Marca createMany
   */
  export type MarcaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca createManyAndReturn
   */
  export type MarcaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca update
   */
  export type MarcaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The data needed to update a Marca.
     */
    data: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
    /**
     * Choose, which Marca to update.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca updateMany
   */
  export type MarcaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca updateManyAndReturn
   */
  export type MarcaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca upsert
   */
  export type MarcaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The filter to search for the Marca to update in case it exists.
     */
    where: MarcaWhereUniqueInput
    /**
     * In case the Marca found by the `where` argument doesn't exist, create a new Marca with this data.
     */
    create: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
    /**
     * In case the Marca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
  }

  /**
   * Marca delete
   */
  export type MarcaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter which Marca to delete.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca deleteMany
   */
  export type MarcaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marcas to delete
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to delete.
     */
    limit?: number
  }

  /**
   * Marca.Produto
   */
  export type Marca$ProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Marca.RepresentanteMarca
   */
  export type Marca$RepresentanteMarcaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    where?: RepresentanteMarcaWhereInput
    orderBy?: RepresentanteMarcaOrderByWithRelationInput | RepresentanteMarcaOrderByWithRelationInput[]
    cursor?: RepresentanteMarcaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepresentanteMarcaScalarFieldEnum | RepresentanteMarcaScalarFieldEnum[]
  }

  /**
   * Marca without action
   */
  export type MarcaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    valor_total: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    valor_total: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    data_pedido: Date | null
    status: $Enums.StatusPedido | null
    valor_total: number | null
    cnpj_cli: string | null
    cnpj_rep: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    data_pedido: Date | null
    status: $Enums.StatusPedido | null
    valor_total: number | null
    cnpj_cli: string | null
    cnpj_rep: string | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    data_pedido: number
    status: number
    valor_total: number
    cnpj_cli: number
    cnpj_rep: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    valor_total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    valor_total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    data_pedido?: true
    status?: true
    valor_total?: true
    cnpj_cli?: true
    cnpj_rep?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    data_pedido?: true
    status?: true
    valor_total?: true
    cnpj_cli?: true
    cnpj_rep?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    data_pedido?: true
    status?: true
    valor_total?: true
    cnpj_cli?: true
    cnpj_rep?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    data_pedido: Date
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_cli: string
    cnpj_rep: string
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_pedido?: boolean
    status?: boolean
    valor_total?: boolean
    cnpj_cli?: boolean
    cnpj_rep?: boolean
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    PedidoProduto?: boolean | Pedido$PedidoProdutoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_pedido?: boolean
    status?: boolean
    valor_total?: boolean
    cnpj_cli?: boolean
    cnpj_rep?: boolean
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_pedido?: boolean
    status?: boolean
    valor_total?: boolean
    cnpj_cli?: boolean
    cnpj_rep?: boolean
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    data_pedido?: boolean
    status?: boolean
    valor_total?: boolean
    cnpj_cli?: boolean
    cnpj_rep?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_pedido" | "status" | "valor_total" | "cnpj_cli" | "cnpj_rep", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
    PedidoProduto?: boolean | Pedido$PedidoProdutoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      Cliente: Prisma.$ClientePayload<ExtArgs>
      Representante: Prisma.$RepresentantePayload<ExtArgs>
      PedidoProduto: Prisma.$PedidoProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_pedido: Date
      status: $Enums.StatusPedido
      valor_total: number
      cnpj_cli: string
      cnpj_rep: string
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Representante<T extends RepresentanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepresentanteDefaultArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PedidoProduto<T extends Pedido$PedidoProdutoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$PedidoProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly data_pedido: FieldRef<"Pedido", 'DateTime'>
    readonly status: FieldRef<"Pedido", 'StatusPedido'>
    readonly valor_total: FieldRef<"Pedido", 'Float'>
    readonly cnpj_cli: FieldRef<"Pedido", 'String'>
    readonly cnpj_rep: FieldRef<"Pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.PedidoProduto
   */
  export type Pedido$PedidoProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    where?: PedidoProdutoWhereInput
    orderBy?: PedidoProdutoOrderByWithRelationInput | PedidoProdutoOrderByWithRelationInput[]
    cursor?: PedidoProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoProdutoScalarFieldEnum | PedidoProdutoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoProduto
   */

  export type AggregatePedidoProduto = {
    _count: PedidoProdutoCountAggregateOutputType | null
    _avg: PedidoProdutoAvgAggregateOutputType | null
    _sum: PedidoProdutoSumAggregateOutputType | null
    _min: PedidoProdutoMinAggregateOutputType | null
    _max: PedidoProdutoMaxAggregateOutputType | null
  }

  export type PedidoProdutoAvgAggregateOutputType = {
    id_prod: number | null
    id_ped: number | null
    quantidade: number | null
  }

  export type PedidoProdutoSumAggregateOutputType = {
    id_prod: number | null
    id_ped: number | null
    quantidade: number | null
  }

  export type PedidoProdutoMinAggregateOutputType = {
    id_prod: number | null
    id_ped: number | null
    quantidade: number | null
  }

  export type PedidoProdutoMaxAggregateOutputType = {
    id_prod: number | null
    id_ped: number | null
    quantidade: number | null
  }

  export type PedidoProdutoCountAggregateOutputType = {
    id_prod: number
    id_ped: number
    quantidade: number
    _all: number
  }


  export type PedidoProdutoAvgAggregateInputType = {
    id_prod?: true
    id_ped?: true
    quantidade?: true
  }

  export type PedidoProdutoSumAggregateInputType = {
    id_prod?: true
    id_ped?: true
    quantidade?: true
  }

  export type PedidoProdutoMinAggregateInputType = {
    id_prod?: true
    id_ped?: true
    quantidade?: true
  }

  export type PedidoProdutoMaxAggregateInputType = {
    id_prod?: true
    id_ped?: true
    quantidade?: true
  }

  export type PedidoProdutoCountAggregateInputType = {
    id_prod?: true
    id_ped?: true
    quantidade?: true
    _all?: true
  }

  export type PedidoProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoProduto to aggregate.
     */
    where?: PedidoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProdutos to fetch.
     */
    orderBy?: PedidoProdutoOrderByWithRelationInput | PedidoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoProdutos
    **/
    _count?: true | PedidoProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoProdutoMaxAggregateInputType
  }

  export type GetPedidoProdutoAggregateType<T extends PedidoProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoProduto[P]>
      : GetScalarType<T[P], AggregatePedidoProduto[P]>
  }




  export type PedidoProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProdutoWhereInput
    orderBy?: PedidoProdutoOrderByWithAggregationInput | PedidoProdutoOrderByWithAggregationInput[]
    by: PedidoProdutoScalarFieldEnum[] | PedidoProdutoScalarFieldEnum
    having?: PedidoProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoProdutoCountAggregateInputType | true
    _avg?: PedidoProdutoAvgAggregateInputType
    _sum?: PedidoProdutoSumAggregateInputType
    _min?: PedidoProdutoMinAggregateInputType
    _max?: PedidoProdutoMaxAggregateInputType
  }

  export type PedidoProdutoGroupByOutputType = {
    id_prod: number
    id_ped: number
    quantidade: number
    _count: PedidoProdutoCountAggregateOutputType | null
    _avg: PedidoProdutoAvgAggregateOutputType | null
    _sum: PedidoProdutoSumAggregateOutputType | null
    _min: PedidoProdutoMinAggregateOutputType | null
    _max: PedidoProdutoMaxAggregateOutputType | null
  }

  type GetPedidoProdutoGroupByPayload<T extends PedidoProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoProdutoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prod?: boolean
    id_ped?: boolean
    quantidade?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoProduto"]>

  export type PedidoProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prod?: boolean
    id_ped?: boolean
    quantidade?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoProduto"]>

  export type PedidoProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prod?: boolean
    id_ped?: boolean
    quantidade?: boolean
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoProduto"]>

  export type PedidoProdutoSelectScalar = {
    id_prod?: boolean
    id_ped?: boolean
    quantidade?: boolean
  }

  export type PedidoProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prod" | "id_ped" | "quantidade", ExtArgs["result"]["pedidoProduto"]>
  export type PedidoProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type PedidoProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type PedidoProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    Produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $PedidoProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoProduto"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>
      Produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prod: number
      id_ped: number
      quantidade: number
    }, ExtArgs["result"]["pedidoProduto"]>
    composites: {}
  }

  type PedidoProdutoGetPayload<S extends boolean | null | undefined | PedidoProdutoDefaultArgs> = $Result.GetResult<Prisma.$PedidoProdutoPayload, S>

  type PedidoProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoProdutoCountAggregateInputType | true
    }

  export interface PedidoProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoProduto'], meta: { name: 'PedidoProduto' } }
    /**
     * Find zero or one PedidoProduto that matches the filter.
     * @param {PedidoProdutoFindUniqueArgs} args - Arguments to find a PedidoProduto
     * @example
     * // Get one PedidoProduto
     * const pedidoProduto = await prisma.pedidoProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoProdutoFindUniqueArgs>(args: SelectSubset<T, PedidoProdutoFindUniqueArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoProduto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoProdutoFindUniqueOrThrowArgs} args - Arguments to find a PedidoProduto
     * @example
     * // Get one PedidoProduto
     * const pedidoProduto = await prisma.pedidoProduto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProdutoFindFirstArgs} args - Arguments to find a PedidoProduto
     * @example
     * // Get one PedidoProduto
     * const pedidoProduto = await prisma.pedidoProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoProdutoFindFirstArgs>(args?: SelectSubset<T, PedidoProdutoFindFirstArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoProduto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProdutoFindFirstOrThrowArgs} args - Arguments to find a PedidoProduto
     * @example
     * // Get one PedidoProduto
     * const pedidoProduto = await prisma.pedidoProduto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoProdutos
     * const pedidoProdutos = await prisma.pedidoProduto.findMany()
     * 
     * // Get first 10 PedidoProdutos
     * const pedidoProdutos = await prisma.pedidoProduto.findMany({ take: 10 })
     * 
     * // Only select the `id_prod`
     * const pedidoProdutoWithId_prodOnly = await prisma.pedidoProduto.findMany({ select: { id_prod: true } })
     * 
     */
    findMany<T extends PedidoProdutoFindManyArgs>(args?: SelectSubset<T, PedidoProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoProduto.
     * @param {PedidoProdutoCreateArgs} args - Arguments to create a PedidoProduto.
     * @example
     * // Create one PedidoProduto
     * const PedidoProduto = await prisma.pedidoProduto.create({
     *   data: {
     *     // ... data to create a PedidoProduto
     *   }
     * })
     * 
     */
    create<T extends PedidoProdutoCreateArgs>(args: SelectSubset<T, PedidoProdutoCreateArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoProdutos.
     * @param {PedidoProdutoCreateManyArgs} args - Arguments to create many PedidoProdutos.
     * @example
     * // Create many PedidoProdutos
     * const pedidoProduto = await prisma.pedidoProduto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoProdutoCreateManyArgs>(args?: SelectSubset<T, PedidoProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidoProdutos and returns the data saved in the database.
     * @param {PedidoProdutoCreateManyAndReturnArgs} args - Arguments to create many PedidoProdutos.
     * @example
     * // Create many PedidoProdutos
     * const pedidoProduto = await prisma.pedidoProduto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidoProdutos and only return the `id_prod`
     * const pedidoProdutoWithId_prodOnly = await prisma.pedidoProduto.createManyAndReturn({
     *   select: { id_prod: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidoProduto.
     * @param {PedidoProdutoDeleteArgs} args - Arguments to delete one PedidoProduto.
     * @example
     * // Delete one PedidoProduto
     * const PedidoProduto = await prisma.pedidoProduto.delete({
     *   where: {
     *     // ... filter to delete one PedidoProduto
     *   }
     * })
     * 
     */
    delete<T extends PedidoProdutoDeleteArgs>(args: SelectSubset<T, PedidoProdutoDeleteArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoProduto.
     * @param {PedidoProdutoUpdateArgs} args - Arguments to update one PedidoProduto.
     * @example
     * // Update one PedidoProduto
     * const pedidoProduto = await prisma.pedidoProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoProdutoUpdateArgs>(args: SelectSubset<T, PedidoProdutoUpdateArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoProdutos.
     * @param {PedidoProdutoDeleteManyArgs} args - Arguments to filter PedidoProdutos to delete.
     * @example
     * // Delete a few PedidoProdutos
     * const { count } = await prisma.pedidoProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoProdutoDeleteManyArgs>(args?: SelectSubset<T, PedidoProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoProdutos
     * const pedidoProduto = await prisma.pedidoProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoProdutoUpdateManyArgs>(args: SelectSubset<T, PedidoProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoProdutos and returns the data updated in the database.
     * @param {PedidoProdutoUpdateManyAndReturnArgs} args - Arguments to update many PedidoProdutos.
     * @example
     * // Update many PedidoProdutos
     * const pedidoProduto = await prisma.pedidoProduto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidoProdutos and only return the `id_prod`
     * const pedidoProdutoWithId_prodOnly = await prisma.pedidoProduto.updateManyAndReturn({
     *   select: { id_prod: true },
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
    updateManyAndReturn<T extends PedidoProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidoProduto.
     * @param {PedidoProdutoUpsertArgs} args - Arguments to update or create a PedidoProduto.
     * @example
     * // Update or create a PedidoProduto
     * const pedidoProduto = await prisma.pedidoProduto.upsert({
     *   create: {
     *     // ... data to create a PedidoProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoProduto we want to update
     *   }
     * })
     */
    upsert<T extends PedidoProdutoUpsertArgs>(args: SelectSubset<T, PedidoProdutoUpsertArgs<ExtArgs>>): Prisma__PedidoProdutoClient<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProdutoCountArgs} args - Arguments to filter PedidoProdutos to count.
     * @example
     * // Count the number of PedidoProdutos
     * const count = await prisma.pedidoProduto.count({
     *   where: {
     *     // ... the filter for the PedidoProdutos we want to count
     *   }
     * })
    **/
    count<T extends PedidoProdutoCountArgs>(
      args?: Subset<T, PedidoProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoProdutoAggregateArgs>(args: Subset<T, PedidoProdutoAggregateArgs>): Prisma.PrismaPromise<GetPedidoProdutoAggregateType<T>>

    /**
     * Group by PedidoProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProdutoGroupByArgs} args - Group by arguments.
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
      T extends PedidoProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoProdutoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoProduto model
   */
  readonly fields: PedidoProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PedidoProduto model
   */
  interface PedidoProdutoFieldRefs {
    readonly id_prod: FieldRef<"PedidoProduto", 'Int'>
    readonly id_ped: FieldRef<"PedidoProduto", 'Int'>
    readonly quantidade: FieldRef<"PedidoProduto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidoProduto findUnique
   */
  export type PedidoProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProduto to fetch.
     */
    where: PedidoProdutoWhereUniqueInput
  }

  /**
   * PedidoProduto findUniqueOrThrow
   */
  export type PedidoProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProduto to fetch.
     */
    where: PedidoProdutoWhereUniqueInput
  }

  /**
   * PedidoProduto findFirst
   */
  export type PedidoProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProduto to fetch.
     */
    where?: PedidoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProdutos to fetch.
     */
    orderBy?: PedidoProdutoOrderByWithRelationInput | PedidoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoProdutos.
     */
    cursor?: PedidoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoProdutos.
     */
    distinct?: PedidoProdutoScalarFieldEnum | PedidoProdutoScalarFieldEnum[]
  }

  /**
   * PedidoProduto findFirstOrThrow
   */
  export type PedidoProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProduto to fetch.
     */
    where?: PedidoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProdutos to fetch.
     */
    orderBy?: PedidoProdutoOrderByWithRelationInput | PedidoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoProdutos.
     */
    cursor?: PedidoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoProdutos.
     */
    distinct?: PedidoProdutoScalarFieldEnum | PedidoProdutoScalarFieldEnum[]
  }

  /**
   * PedidoProduto findMany
   */
  export type PedidoProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProdutos to fetch.
     */
    where?: PedidoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProdutos to fetch.
     */
    orderBy?: PedidoProdutoOrderByWithRelationInput | PedidoProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoProdutos.
     */
    cursor?: PedidoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProdutos.
     */
    skip?: number
    distinct?: PedidoProdutoScalarFieldEnum | PedidoProdutoScalarFieldEnum[]
  }

  /**
   * PedidoProduto create
   */
  export type PedidoProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoProduto.
     */
    data: XOR<PedidoProdutoCreateInput, PedidoProdutoUncheckedCreateInput>
  }

  /**
   * PedidoProduto createMany
   */
  export type PedidoProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoProdutos.
     */
    data: PedidoProdutoCreateManyInput | PedidoProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoProduto createManyAndReturn
   */
  export type PedidoProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many PedidoProdutos.
     */
    data: PedidoProdutoCreateManyInput | PedidoProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoProduto update
   */
  export type PedidoProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoProduto.
     */
    data: XOR<PedidoProdutoUpdateInput, PedidoProdutoUncheckedUpdateInput>
    /**
     * Choose, which PedidoProduto to update.
     */
    where: PedidoProdutoWhereUniqueInput
  }

  /**
   * PedidoProduto updateMany
   */
  export type PedidoProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoProdutos.
     */
    data: XOR<PedidoProdutoUpdateManyMutationInput, PedidoProdutoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoProdutos to update
     */
    where?: PedidoProdutoWhereInput
    /**
     * Limit how many PedidoProdutos to update.
     */
    limit?: number
  }

  /**
   * PedidoProduto updateManyAndReturn
   */
  export type PedidoProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * The data used to update PedidoProdutos.
     */
    data: XOR<PedidoProdutoUpdateManyMutationInput, PedidoProdutoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoProdutos to update
     */
    where?: PedidoProdutoWhereInput
    /**
     * Limit how many PedidoProdutos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoProduto upsert
   */
  export type PedidoProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoProduto to update in case it exists.
     */
    where: PedidoProdutoWhereUniqueInput
    /**
     * In case the PedidoProduto found by the `where` argument doesn't exist, create a new PedidoProduto with this data.
     */
    create: XOR<PedidoProdutoCreateInput, PedidoProdutoUncheckedCreateInput>
    /**
     * In case the PedidoProduto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoProdutoUpdateInput, PedidoProdutoUncheckedUpdateInput>
  }

  /**
   * PedidoProduto delete
   */
  export type PedidoProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    /**
     * Filter which PedidoProduto to delete.
     */
    where: PedidoProdutoWhereUniqueInput
  }

  /**
   * PedidoProduto deleteMany
   */
  export type PedidoProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoProdutos to delete
     */
    where?: PedidoProdutoWhereInput
    /**
     * Limit how many PedidoProdutos to delete.
     */
    limit?: number
  }

  /**
   * PedidoProduto without action
   */
  export type PedidoProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    peso: number | null
    preco: number | null
    id_cat: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    peso: number | null
    preco: number | null
    id_cat: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    validade: string | null
    peso: number | null
    preco: number | null
    id_cat: number | null
    cnpj_marca: string | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    validade: string | null
    peso: number | null
    preco: number | null
    id_cat: number | null
    cnpj_marca: string | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    descricao: number
    validade: number
    peso: number
    preco: number
    id_cat: number
    cnpj_marca: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    peso?: true
    preco?: true
    id_cat?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    peso?: true
    preco?: true
    id_cat?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    descricao?: true
    validade?: true
    peso?: true
    preco?: true
    id_cat?: true
    cnpj_marca?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    descricao?: true
    validade?: true
    peso?: true
    preco?: true
    id_cat?: true
    cnpj_marca?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    descricao?: true
    validade?: true
    peso?: true
    preco?: true
    id_cat?: true
    cnpj_marca?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    descricao: string
    validade: string | null
    peso: number | null
    preco: number
    id_cat: number
    cnpj_marca: string
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    validade?: boolean
    peso?: boolean
    preco?: boolean
    id_cat?: boolean
    cnpj_marca?: boolean
    PedidoProduto?: boolean | Produto$PedidoProdutoArgs<ExtArgs>
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    CategoriaProduto?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    validade?: boolean
    peso?: boolean
    preco?: boolean
    id_cat?: boolean
    cnpj_marca?: boolean
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    CategoriaProduto?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    validade?: boolean
    peso?: boolean
    preco?: boolean
    id_cat?: boolean
    cnpj_marca?: boolean
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    CategoriaProduto?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    descricao?: boolean
    validade?: boolean
    peso?: boolean
    preco?: boolean
    id_cat?: boolean
    cnpj_marca?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "validade" | "peso" | "preco" | "id_cat" | "cnpj_marca", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PedidoProduto?: boolean | Produto$PedidoProdutoArgs<ExtArgs>
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    CategoriaProduto?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    CategoriaProduto?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    CategoriaProduto?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      PedidoProduto: Prisma.$PedidoProdutoPayload<ExtArgs>[]
      Marca: Prisma.$MarcaPayload<ExtArgs>
      CategoriaProduto: Prisma.$CategoriaProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      validade: string | null
      peso: number | null
      preco: number
      id_cat: number
      cnpj_marca: string
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PedidoProduto<T extends Produto$PedidoProdutoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$PedidoProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Marca<T extends MarcaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarcaDefaultArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CategoriaProduto<T extends CategoriaProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaProdutoDefaultArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly validade: FieldRef<"Produto", 'String'>
    readonly peso: FieldRef<"Produto", 'Int'>
    readonly preco: FieldRef<"Produto", 'Float'>
    readonly id_cat: FieldRef<"Produto", 'Int'>
    readonly cnpj_marca: FieldRef<"Produto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.PedidoProduto
   */
  export type Produto$PedidoProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProduto
     */
    select?: PedidoProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProduto
     */
    omit?: PedidoProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProdutoInclude<ExtArgs> | null
    where?: PedidoProdutoWhereInput
    orderBy?: PedidoProdutoOrderByWithRelationInput | PedidoProdutoOrderByWithRelationInput[]
    cursor?: PedidoProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoProdutoScalarFieldEnum | PedidoProdutoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Representante
   */

  export type AggregateRepresentante = {
    _count: RepresentanteCountAggregateOutputType | null
    _avg: RepresentanteAvgAggregateOutputType | null
    _sum: RepresentanteSumAggregateOutputType | null
    _min: RepresentanteMinAggregateOutputType | null
    _max: RepresentanteMaxAggregateOutputType | null
  }

  export type RepresentanteAvgAggregateOutputType = {
    id_log: number | null
  }

  export type RepresentanteSumAggregateOutputType = {
    id_log: number | null
  }

  export type RepresentanteMinAggregateOutputType = {
    cnpj: string | null
    razao_social: string | null
    status: $Enums.StatusUser | null
    email: string | null
    data_cadastro: Date | null
    id_log: number | null
  }

  export type RepresentanteMaxAggregateOutputType = {
    cnpj: string | null
    razao_social: string | null
    status: $Enums.StatusUser | null
    email: string | null
    data_cadastro: Date | null
    id_log: number | null
  }

  export type RepresentanteCountAggregateOutputType = {
    cnpj: number
    razao_social: number
    status: number
    email: number
    data_cadastro: number
    id_log: number
    _all: number
  }


  export type RepresentanteAvgAggregateInputType = {
    id_log?: true
  }

  export type RepresentanteSumAggregateInputType = {
    id_log?: true
  }

  export type RepresentanteMinAggregateInputType = {
    cnpj?: true
    razao_social?: true
    status?: true
    email?: true
    data_cadastro?: true
    id_log?: true
  }

  export type RepresentanteMaxAggregateInputType = {
    cnpj?: true
    razao_social?: true
    status?: true
    email?: true
    data_cadastro?: true
    id_log?: true
  }

  export type RepresentanteCountAggregateInputType = {
    cnpj?: true
    razao_social?: true
    status?: true
    email?: true
    data_cadastro?: true
    id_log?: true
    _all?: true
  }

  export type RepresentanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Representante to aggregate.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Representantes
    **/
    _count?: true | RepresentanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepresentanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepresentanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepresentanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepresentanteMaxAggregateInputType
  }

  export type GetRepresentanteAggregateType<T extends RepresentanteAggregateArgs> = {
        [P in keyof T & keyof AggregateRepresentante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepresentante[P]>
      : GetScalarType<T[P], AggregateRepresentante[P]>
  }




  export type RepresentanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepresentanteWhereInput
    orderBy?: RepresentanteOrderByWithAggregationInput | RepresentanteOrderByWithAggregationInput[]
    by: RepresentanteScalarFieldEnum[] | RepresentanteScalarFieldEnum
    having?: RepresentanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepresentanteCountAggregateInputType | true
    _avg?: RepresentanteAvgAggregateInputType
    _sum?: RepresentanteSumAggregateInputType
    _min?: RepresentanteMinAggregateInputType
    _max?: RepresentanteMaxAggregateInputType
  }

  export type RepresentanteGroupByOutputType = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro: Date
    id_log: number
    _count: RepresentanteCountAggregateOutputType | null
    _avg: RepresentanteAvgAggregateOutputType | null
    _sum: RepresentanteSumAggregateOutputType | null
    _min: RepresentanteMinAggregateOutputType | null
    _max: RepresentanteMaxAggregateOutputType | null
  }

  type GetRepresentanteGroupByPayload<T extends RepresentanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepresentanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepresentanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepresentanteGroupByOutputType[P]>
            : GetScalarType<T[P], RepresentanteGroupByOutputType[P]>
        }
      >
    >


  export type RepresentanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
    Pedido?: boolean | Representante$PedidoArgs<ExtArgs>
    Login?: boolean | LoginDefaultArgs<ExtArgs>
    RepresentanteMarca?: boolean | Representante$RepresentanteMarcaArgs<ExtArgs>
    _count?: boolean | RepresentanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representante"]>

  export type RepresentanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representante"]>

  export type RepresentanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representante"]>

  export type RepresentanteSelectScalar = {
    cnpj?: boolean
    razao_social?: boolean
    status?: boolean
    email?: boolean
    data_cadastro?: boolean
    id_log?: boolean
  }

  export type RepresentanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cnpj" | "razao_social" | "status" | "email" | "data_cadastro" | "id_log", ExtArgs["result"]["representante"]>
  export type RepresentanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pedido?: boolean | Representante$PedidoArgs<ExtArgs>
    Login?: boolean | LoginDefaultArgs<ExtArgs>
    RepresentanteMarca?: boolean | Representante$RepresentanteMarcaArgs<ExtArgs>
    _count?: boolean | RepresentanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepresentanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }
  export type RepresentanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Login?: boolean | LoginDefaultArgs<ExtArgs>
  }

  export type $RepresentantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Representante"
    objects: {
      Pedido: Prisma.$PedidoPayload<ExtArgs>[]
      Login: Prisma.$LoginPayload<ExtArgs>
      RepresentanteMarca: Prisma.$RepresentanteMarcaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cnpj: string
      razao_social: string
      status: $Enums.StatusUser
      email: string
      data_cadastro: Date
      id_log: number
    }, ExtArgs["result"]["representante"]>
    composites: {}
  }

  type RepresentanteGetPayload<S extends boolean | null | undefined | RepresentanteDefaultArgs> = $Result.GetResult<Prisma.$RepresentantePayload, S>

  type RepresentanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepresentanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepresentanteCountAggregateInputType | true
    }

  export interface RepresentanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Representante'], meta: { name: 'Representante' } }
    /**
     * Find zero or one Representante that matches the filter.
     * @param {RepresentanteFindUniqueArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepresentanteFindUniqueArgs>(args: SelectSubset<T, RepresentanteFindUniqueArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Representante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepresentanteFindUniqueOrThrowArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepresentanteFindUniqueOrThrowArgs>(args: SelectSubset<T, RepresentanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Representante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteFindFirstArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepresentanteFindFirstArgs>(args?: SelectSubset<T, RepresentanteFindFirstArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Representante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteFindFirstOrThrowArgs} args - Arguments to find a Representante
     * @example
     * // Get one Representante
     * const representante = await prisma.representante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepresentanteFindFirstOrThrowArgs>(args?: SelectSubset<T, RepresentanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Representantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Representantes
     * const representantes = await prisma.representante.findMany()
     * 
     * // Get first 10 Representantes
     * const representantes = await prisma.representante.findMany({ take: 10 })
     * 
     * // Only select the `cnpj`
     * const representanteWithCnpjOnly = await prisma.representante.findMany({ select: { cnpj: true } })
     * 
     */
    findMany<T extends RepresentanteFindManyArgs>(args?: SelectSubset<T, RepresentanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Representante.
     * @param {RepresentanteCreateArgs} args - Arguments to create a Representante.
     * @example
     * // Create one Representante
     * const Representante = await prisma.representante.create({
     *   data: {
     *     // ... data to create a Representante
     *   }
     * })
     * 
     */
    create<T extends RepresentanteCreateArgs>(args: SelectSubset<T, RepresentanteCreateArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Representantes.
     * @param {RepresentanteCreateManyArgs} args - Arguments to create many Representantes.
     * @example
     * // Create many Representantes
     * const representante = await prisma.representante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepresentanteCreateManyArgs>(args?: SelectSubset<T, RepresentanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Representantes and returns the data saved in the database.
     * @param {RepresentanteCreateManyAndReturnArgs} args - Arguments to create many Representantes.
     * @example
     * // Create many Representantes
     * const representante = await prisma.representante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Representantes and only return the `cnpj`
     * const representanteWithCnpjOnly = await prisma.representante.createManyAndReturn({
     *   select: { cnpj: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepresentanteCreateManyAndReturnArgs>(args?: SelectSubset<T, RepresentanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Representante.
     * @param {RepresentanteDeleteArgs} args - Arguments to delete one Representante.
     * @example
     * // Delete one Representante
     * const Representante = await prisma.representante.delete({
     *   where: {
     *     // ... filter to delete one Representante
     *   }
     * })
     * 
     */
    delete<T extends RepresentanteDeleteArgs>(args: SelectSubset<T, RepresentanteDeleteArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Representante.
     * @param {RepresentanteUpdateArgs} args - Arguments to update one Representante.
     * @example
     * // Update one Representante
     * const representante = await prisma.representante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepresentanteUpdateArgs>(args: SelectSubset<T, RepresentanteUpdateArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Representantes.
     * @param {RepresentanteDeleteManyArgs} args - Arguments to filter Representantes to delete.
     * @example
     * // Delete a few Representantes
     * const { count } = await prisma.representante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepresentanteDeleteManyArgs>(args?: SelectSubset<T, RepresentanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Representantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Representantes
     * const representante = await prisma.representante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepresentanteUpdateManyArgs>(args: SelectSubset<T, RepresentanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Representantes and returns the data updated in the database.
     * @param {RepresentanteUpdateManyAndReturnArgs} args - Arguments to update many Representantes.
     * @example
     * // Update many Representantes
     * const representante = await prisma.representante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Representantes and only return the `cnpj`
     * const representanteWithCnpjOnly = await prisma.representante.updateManyAndReturn({
     *   select: { cnpj: true },
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
    updateManyAndReturn<T extends RepresentanteUpdateManyAndReturnArgs>(args: SelectSubset<T, RepresentanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Representante.
     * @param {RepresentanteUpsertArgs} args - Arguments to update or create a Representante.
     * @example
     * // Update or create a Representante
     * const representante = await prisma.representante.upsert({
     *   create: {
     *     // ... data to create a Representante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Representante we want to update
     *   }
     * })
     */
    upsert<T extends RepresentanteUpsertArgs>(args: SelectSubset<T, RepresentanteUpsertArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Representantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteCountArgs} args - Arguments to filter Representantes to count.
     * @example
     * // Count the number of Representantes
     * const count = await prisma.representante.count({
     *   where: {
     *     // ... the filter for the Representantes we want to count
     *   }
     * })
    **/
    count<T extends RepresentanteCountArgs>(
      args?: Subset<T, RepresentanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepresentanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Representante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepresentanteAggregateArgs>(args: Subset<T, RepresentanteAggregateArgs>): Prisma.PrismaPromise<GetRepresentanteAggregateType<T>>

    /**
     * Group by Representante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteGroupByArgs} args - Group by arguments.
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
      T extends RepresentanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepresentanteGroupByArgs['orderBy'] }
        : { orderBy?: RepresentanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepresentanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepresentanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Representante model
   */
  readonly fields: RepresentanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Representante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepresentanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pedido<T extends Representante$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Representante$PedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Login<T extends LoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoginDefaultArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    RepresentanteMarca<T extends Representante$RepresentanteMarcaArgs<ExtArgs> = {}>(args?: Subset<T, Representante$RepresentanteMarcaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Representante model
   */
  interface RepresentanteFieldRefs {
    readonly cnpj: FieldRef<"Representante", 'String'>
    readonly razao_social: FieldRef<"Representante", 'String'>
    readonly status: FieldRef<"Representante", 'StatusUser'>
    readonly email: FieldRef<"Representante", 'String'>
    readonly data_cadastro: FieldRef<"Representante", 'DateTime'>
    readonly id_log: FieldRef<"Representante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Representante findUnique
   */
  export type RepresentanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante findUniqueOrThrow
   */
  export type RepresentanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante findFirst
   */
  export type RepresentanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Representantes.
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Representantes.
     */
    distinct?: RepresentanteScalarFieldEnum | RepresentanteScalarFieldEnum[]
  }

  /**
   * Representante findFirstOrThrow
   */
  export type RepresentanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representante to fetch.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Representantes.
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Representantes.
     */
    distinct?: RepresentanteScalarFieldEnum | RepresentanteScalarFieldEnum[]
  }

  /**
   * Representante findMany
   */
  export type RepresentanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter, which Representantes to fetch.
     */
    where?: RepresentanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Representantes to fetch.
     */
    orderBy?: RepresentanteOrderByWithRelationInput | RepresentanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Representantes.
     */
    cursor?: RepresentanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Representantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Representantes.
     */
    skip?: number
    distinct?: RepresentanteScalarFieldEnum | RepresentanteScalarFieldEnum[]
  }

  /**
   * Representante create
   */
  export type RepresentanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Representante.
     */
    data: XOR<RepresentanteCreateInput, RepresentanteUncheckedCreateInput>
  }

  /**
   * Representante createMany
   */
  export type RepresentanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Representantes.
     */
    data: RepresentanteCreateManyInput | RepresentanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Representante createManyAndReturn
   */
  export type RepresentanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * The data used to create many Representantes.
     */
    data: RepresentanteCreateManyInput | RepresentanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Representante update
   */
  export type RepresentanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Representante.
     */
    data: XOR<RepresentanteUpdateInput, RepresentanteUncheckedUpdateInput>
    /**
     * Choose, which Representante to update.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante updateMany
   */
  export type RepresentanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Representantes.
     */
    data: XOR<RepresentanteUpdateManyMutationInput, RepresentanteUncheckedUpdateManyInput>
    /**
     * Filter which Representantes to update
     */
    where?: RepresentanteWhereInput
    /**
     * Limit how many Representantes to update.
     */
    limit?: number
  }

  /**
   * Representante updateManyAndReturn
   */
  export type RepresentanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * The data used to update Representantes.
     */
    data: XOR<RepresentanteUpdateManyMutationInput, RepresentanteUncheckedUpdateManyInput>
    /**
     * Filter which Representantes to update
     */
    where?: RepresentanteWhereInput
    /**
     * Limit how many Representantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Representante upsert
   */
  export type RepresentanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Representante to update in case it exists.
     */
    where: RepresentanteWhereUniqueInput
    /**
     * In case the Representante found by the `where` argument doesn't exist, create a new Representante with this data.
     */
    create: XOR<RepresentanteCreateInput, RepresentanteUncheckedCreateInput>
    /**
     * In case the Representante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepresentanteUpdateInput, RepresentanteUncheckedUpdateInput>
  }

  /**
   * Representante delete
   */
  export type RepresentanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
    /**
     * Filter which Representante to delete.
     */
    where: RepresentanteWhereUniqueInput
  }

  /**
   * Representante deleteMany
   */
  export type RepresentanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Representantes to delete
     */
    where?: RepresentanteWhereInput
    /**
     * Limit how many Representantes to delete.
     */
    limit?: number
  }

  /**
   * Representante.Pedido
   */
  export type Representante$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Representante.RepresentanteMarca
   */
  export type Representante$RepresentanteMarcaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    where?: RepresentanteMarcaWhereInput
    orderBy?: RepresentanteMarcaOrderByWithRelationInput | RepresentanteMarcaOrderByWithRelationInput[]
    cursor?: RepresentanteMarcaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepresentanteMarcaScalarFieldEnum | RepresentanteMarcaScalarFieldEnum[]
  }

  /**
   * Representante without action
   */
  export type RepresentanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Representante
     */
    select?: RepresentanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Representante
     */
    omit?: RepresentanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteInclude<ExtArgs> | null
  }


  /**
   * Model RepresentanteMarca
   */

  export type AggregateRepresentanteMarca = {
    _count: RepresentanteMarcaCountAggregateOutputType | null
    _avg: RepresentanteMarcaAvgAggregateOutputType | null
    _sum: RepresentanteMarcaSumAggregateOutputType | null
    _min: RepresentanteMarcaMinAggregateOutputType | null
    _max: RepresentanteMarcaMaxAggregateOutputType | null
  }

  export type RepresentanteMarcaAvgAggregateOutputType = {
    id: number | null
  }

  export type RepresentanteMarcaSumAggregateOutputType = {
    id: number | null
  }

  export type RepresentanteMarcaMinAggregateOutputType = {
    cnpjRepresentante: string | null
    id: number | null
    cnpjMarca: string | null
    categoria_representante: $Enums.CatCliente | null
    data_cadastro: Date | null
  }

  export type RepresentanteMarcaMaxAggregateOutputType = {
    cnpjRepresentante: string | null
    id: number | null
    cnpjMarca: string | null
    categoria_representante: $Enums.CatCliente | null
    data_cadastro: Date | null
  }

  export type RepresentanteMarcaCountAggregateOutputType = {
    cnpjRepresentante: number
    id: number
    cnpjMarca: number
    categoria_representante: number
    data_cadastro: number
    _all: number
  }


  export type RepresentanteMarcaAvgAggregateInputType = {
    id?: true
  }

  export type RepresentanteMarcaSumAggregateInputType = {
    id?: true
  }

  export type RepresentanteMarcaMinAggregateInputType = {
    cnpjRepresentante?: true
    id?: true
    cnpjMarca?: true
    categoria_representante?: true
    data_cadastro?: true
  }

  export type RepresentanteMarcaMaxAggregateInputType = {
    cnpjRepresentante?: true
    id?: true
    cnpjMarca?: true
    categoria_representante?: true
    data_cadastro?: true
  }

  export type RepresentanteMarcaCountAggregateInputType = {
    cnpjRepresentante?: true
    id?: true
    cnpjMarca?: true
    categoria_representante?: true
    data_cadastro?: true
    _all?: true
  }

  export type RepresentanteMarcaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepresentanteMarca to aggregate.
     */
    where?: RepresentanteMarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepresentanteMarcas to fetch.
     */
    orderBy?: RepresentanteMarcaOrderByWithRelationInput | RepresentanteMarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepresentanteMarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepresentanteMarcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepresentanteMarcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepresentanteMarcas
    **/
    _count?: true | RepresentanteMarcaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepresentanteMarcaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepresentanteMarcaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepresentanteMarcaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepresentanteMarcaMaxAggregateInputType
  }

  export type GetRepresentanteMarcaAggregateType<T extends RepresentanteMarcaAggregateArgs> = {
        [P in keyof T & keyof AggregateRepresentanteMarca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepresentanteMarca[P]>
      : GetScalarType<T[P], AggregateRepresentanteMarca[P]>
  }




  export type RepresentanteMarcaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepresentanteMarcaWhereInput
    orderBy?: RepresentanteMarcaOrderByWithAggregationInput | RepresentanteMarcaOrderByWithAggregationInput[]
    by: RepresentanteMarcaScalarFieldEnum[] | RepresentanteMarcaScalarFieldEnum
    having?: RepresentanteMarcaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepresentanteMarcaCountAggregateInputType | true
    _avg?: RepresentanteMarcaAvgAggregateInputType
    _sum?: RepresentanteMarcaSumAggregateInputType
    _min?: RepresentanteMarcaMinAggregateInputType
    _max?: RepresentanteMarcaMaxAggregateInputType
  }

  export type RepresentanteMarcaGroupByOutputType = {
    cnpjRepresentante: string
    id: number
    cnpjMarca: string
    categoria_representante: $Enums.CatCliente
    data_cadastro: Date
    _count: RepresentanteMarcaCountAggregateOutputType | null
    _avg: RepresentanteMarcaAvgAggregateOutputType | null
    _sum: RepresentanteMarcaSumAggregateOutputType | null
    _min: RepresentanteMarcaMinAggregateOutputType | null
    _max: RepresentanteMarcaMaxAggregateOutputType | null
  }

  type GetRepresentanteMarcaGroupByPayload<T extends RepresentanteMarcaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepresentanteMarcaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepresentanteMarcaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepresentanteMarcaGroupByOutputType[P]>
            : GetScalarType<T[P], RepresentanteMarcaGroupByOutputType[P]>
        }
      >
    >


  export type RepresentanteMarcaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpjRepresentante?: boolean
    id?: boolean
    cnpjMarca?: boolean
    categoria_representante?: boolean
    data_cadastro?: boolean
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representanteMarca"]>

  export type RepresentanteMarcaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpjRepresentante?: boolean
    id?: boolean
    cnpjMarca?: boolean
    categoria_representante?: boolean
    data_cadastro?: boolean
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representanteMarca"]>

  export type RepresentanteMarcaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cnpjRepresentante?: boolean
    id?: boolean
    cnpjMarca?: boolean
    categoria_representante?: boolean
    data_cadastro?: boolean
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["representanteMarca"]>

  export type RepresentanteMarcaSelectScalar = {
    cnpjRepresentante?: boolean
    id?: boolean
    cnpjMarca?: boolean
    categoria_representante?: boolean
    data_cadastro?: boolean
  }

  export type RepresentanteMarcaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cnpjRepresentante" | "id" | "cnpjMarca" | "categoria_representante" | "data_cadastro", ExtArgs["result"]["representanteMarca"]>
  export type RepresentanteMarcaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }
  export type RepresentanteMarcaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }
  export type RepresentanteMarcaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Marca?: boolean | MarcaDefaultArgs<ExtArgs>
    Representante?: boolean | RepresentanteDefaultArgs<ExtArgs>
  }

  export type $RepresentanteMarcaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepresentanteMarca"
    objects: {
      Marca: Prisma.$MarcaPayload<ExtArgs>
      Representante: Prisma.$RepresentantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cnpjRepresentante: string
      id: number
      cnpjMarca: string
      categoria_representante: $Enums.CatCliente
      data_cadastro: Date
    }, ExtArgs["result"]["representanteMarca"]>
    composites: {}
  }

  type RepresentanteMarcaGetPayload<S extends boolean | null | undefined | RepresentanteMarcaDefaultArgs> = $Result.GetResult<Prisma.$RepresentanteMarcaPayload, S>

  type RepresentanteMarcaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepresentanteMarcaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepresentanteMarcaCountAggregateInputType | true
    }

  export interface RepresentanteMarcaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepresentanteMarca'], meta: { name: 'RepresentanteMarca' } }
    /**
     * Find zero or one RepresentanteMarca that matches the filter.
     * @param {RepresentanteMarcaFindUniqueArgs} args - Arguments to find a RepresentanteMarca
     * @example
     * // Get one RepresentanteMarca
     * const representanteMarca = await prisma.representanteMarca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepresentanteMarcaFindUniqueArgs>(args: SelectSubset<T, RepresentanteMarcaFindUniqueArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepresentanteMarca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepresentanteMarcaFindUniqueOrThrowArgs} args - Arguments to find a RepresentanteMarca
     * @example
     * // Get one RepresentanteMarca
     * const representanteMarca = await prisma.representanteMarca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepresentanteMarcaFindUniqueOrThrowArgs>(args: SelectSubset<T, RepresentanteMarcaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepresentanteMarca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteMarcaFindFirstArgs} args - Arguments to find a RepresentanteMarca
     * @example
     * // Get one RepresentanteMarca
     * const representanteMarca = await prisma.representanteMarca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepresentanteMarcaFindFirstArgs>(args?: SelectSubset<T, RepresentanteMarcaFindFirstArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepresentanteMarca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteMarcaFindFirstOrThrowArgs} args - Arguments to find a RepresentanteMarca
     * @example
     * // Get one RepresentanteMarca
     * const representanteMarca = await prisma.representanteMarca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepresentanteMarcaFindFirstOrThrowArgs>(args?: SelectSubset<T, RepresentanteMarcaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepresentanteMarcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteMarcaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepresentanteMarcas
     * const representanteMarcas = await prisma.representanteMarca.findMany()
     * 
     * // Get first 10 RepresentanteMarcas
     * const representanteMarcas = await prisma.representanteMarca.findMany({ take: 10 })
     * 
     * // Only select the `cnpjRepresentante`
     * const representanteMarcaWithCnpjRepresentanteOnly = await prisma.representanteMarca.findMany({ select: { cnpjRepresentante: true } })
     * 
     */
    findMany<T extends RepresentanteMarcaFindManyArgs>(args?: SelectSubset<T, RepresentanteMarcaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepresentanteMarca.
     * @param {RepresentanteMarcaCreateArgs} args - Arguments to create a RepresentanteMarca.
     * @example
     * // Create one RepresentanteMarca
     * const RepresentanteMarca = await prisma.representanteMarca.create({
     *   data: {
     *     // ... data to create a RepresentanteMarca
     *   }
     * })
     * 
     */
    create<T extends RepresentanteMarcaCreateArgs>(args: SelectSubset<T, RepresentanteMarcaCreateArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepresentanteMarcas.
     * @param {RepresentanteMarcaCreateManyArgs} args - Arguments to create many RepresentanteMarcas.
     * @example
     * // Create many RepresentanteMarcas
     * const representanteMarca = await prisma.representanteMarca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepresentanteMarcaCreateManyArgs>(args?: SelectSubset<T, RepresentanteMarcaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepresentanteMarcas and returns the data saved in the database.
     * @param {RepresentanteMarcaCreateManyAndReturnArgs} args - Arguments to create many RepresentanteMarcas.
     * @example
     * // Create many RepresentanteMarcas
     * const representanteMarca = await prisma.representanteMarca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepresentanteMarcas and only return the `cnpjRepresentante`
     * const representanteMarcaWithCnpjRepresentanteOnly = await prisma.representanteMarca.createManyAndReturn({
     *   select: { cnpjRepresentante: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepresentanteMarcaCreateManyAndReturnArgs>(args?: SelectSubset<T, RepresentanteMarcaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepresentanteMarca.
     * @param {RepresentanteMarcaDeleteArgs} args - Arguments to delete one RepresentanteMarca.
     * @example
     * // Delete one RepresentanteMarca
     * const RepresentanteMarca = await prisma.representanteMarca.delete({
     *   where: {
     *     // ... filter to delete one RepresentanteMarca
     *   }
     * })
     * 
     */
    delete<T extends RepresentanteMarcaDeleteArgs>(args: SelectSubset<T, RepresentanteMarcaDeleteArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepresentanteMarca.
     * @param {RepresentanteMarcaUpdateArgs} args - Arguments to update one RepresentanteMarca.
     * @example
     * // Update one RepresentanteMarca
     * const representanteMarca = await prisma.representanteMarca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepresentanteMarcaUpdateArgs>(args: SelectSubset<T, RepresentanteMarcaUpdateArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepresentanteMarcas.
     * @param {RepresentanteMarcaDeleteManyArgs} args - Arguments to filter RepresentanteMarcas to delete.
     * @example
     * // Delete a few RepresentanteMarcas
     * const { count } = await prisma.representanteMarca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepresentanteMarcaDeleteManyArgs>(args?: SelectSubset<T, RepresentanteMarcaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepresentanteMarcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteMarcaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepresentanteMarcas
     * const representanteMarca = await prisma.representanteMarca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepresentanteMarcaUpdateManyArgs>(args: SelectSubset<T, RepresentanteMarcaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepresentanteMarcas and returns the data updated in the database.
     * @param {RepresentanteMarcaUpdateManyAndReturnArgs} args - Arguments to update many RepresentanteMarcas.
     * @example
     * // Update many RepresentanteMarcas
     * const representanteMarca = await prisma.representanteMarca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepresentanteMarcas and only return the `cnpjRepresentante`
     * const representanteMarcaWithCnpjRepresentanteOnly = await prisma.representanteMarca.updateManyAndReturn({
     *   select: { cnpjRepresentante: true },
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
    updateManyAndReturn<T extends RepresentanteMarcaUpdateManyAndReturnArgs>(args: SelectSubset<T, RepresentanteMarcaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepresentanteMarca.
     * @param {RepresentanteMarcaUpsertArgs} args - Arguments to update or create a RepresentanteMarca.
     * @example
     * // Update or create a RepresentanteMarca
     * const representanteMarca = await prisma.representanteMarca.upsert({
     *   create: {
     *     // ... data to create a RepresentanteMarca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepresentanteMarca we want to update
     *   }
     * })
     */
    upsert<T extends RepresentanteMarcaUpsertArgs>(args: SelectSubset<T, RepresentanteMarcaUpsertArgs<ExtArgs>>): Prisma__RepresentanteMarcaClient<$Result.GetResult<Prisma.$RepresentanteMarcaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepresentanteMarcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteMarcaCountArgs} args - Arguments to filter RepresentanteMarcas to count.
     * @example
     * // Count the number of RepresentanteMarcas
     * const count = await prisma.representanteMarca.count({
     *   where: {
     *     // ... the filter for the RepresentanteMarcas we want to count
     *   }
     * })
    **/
    count<T extends RepresentanteMarcaCountArgs>(
      args?: Subset<T, RepresentanteMarcaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepresentanteMarcaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepresentanteMarca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteMarcaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepresentanteMarcaAggregateArgs>(args: Subset<T, RepresentanteMarcaAggregateArgs>): Prisma.PrismaPromise<GetRepresentanteMarcaAggregateType<T>>

    /**
     * Group by RepresentanteMarca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepresentanteMarcaGroupByArgs} args - Group by arguments.
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
      T extends RepresentanteMarcaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepresentanteMarcaGroupByArgs['orderBy'] }
        : { orderBy?: RepresentanteMarcaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepresentanteMarcaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepresentanteMarcaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepresentanteMarca model
   */
  readonly fields: RepresentanteMarcaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepresentanteMarca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepresentanteMarcaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Marca<T extends MarcaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarcaDefaultArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Representante<T extends RepresentanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepresentanteDefaultArgs<ExtArgs>>): Prisma__RepresentanteClient<$Result.GetResult<Prisma.$RepresentantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RepresentanteMarca model
   */
  interface RepresentanteMarcaFieldRefs {
    readonly cnpjRepresentante: FieldRef<"RepresentanteMarca", 'String'>
    readonly id: FieldRef<"RepresentanteMarca", 'Int'>
    readonly cnpjMarca: FieldRef<"RepresentanteMarca", 'String'>
    readonly categoria_representante: FieldRef<"RepresentanteMarca", 'CatCliente'>
    readonly data_cadastro: FieldRef<"RepresentanteMarca", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RepresentanteMarca findUnique
   */
  export type RepresentanteMarcaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * Filter, which RepresentanteMarca to fetch.
     */
    where: RepresentanteMarcaWhereUniqueInput
  }

  /**
   * RepresentanteMarca findUniqueOrThrow
   */
  export type RepresentanteMarcaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * Filter, which RepresentanteMarca to fetch.
     */
    where: RepresentanteMarcaWhereUniqueInput
  }

  /**
   * RepresentanteMarca findFirst
   */
  export type RepresentanteMarcaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * Filter, which RepresentanteMarca to fetch.
     */
    where?: RepresentanteMarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepresentanteMarcas to fetch.
     */
    orderBy?: RepresentanteMarcaOrderByWithRelationInput | RepresentanteMarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepresentanteMarcas.
     */
    cursor?: RepresentanteMarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepresentanteMarcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepresentanteMarcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepresentanteMarcas.
     */
    distinct?: RepresentanteMarcaScalarFieldEnum | RepresentanteMarcaScalarFieldEnum[]
  }

  /**
   * RepresentanteMarca findFirstOrThrow
   */
  export type RepresentanteMarcaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * Filter, which RepresentanteMarca to fetch.
     */
    where?: RepresentanteMarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepresentanteMarcas to fetch.
     */
    orderBy?: RepresentanteMarcaOrderByWithRelationInput | RepresentanteMarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepresentanteMarcas.
     */
    cursor?: RepresentanteMarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepresentanteMarcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepresentanteMarcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepresentanteMarcas.
     */
    distinct?: RepresentanteMarcaScalarFieldEnum | RepresentanteMarcaScalarFieldEnum[]
  }

  /**
   * RepresentanteMarca findMany
   */
  export type RepresentanteMarcaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * Filter, which RepresentanteMarcas to fetch.
     */
    where?: RepresentanteMarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepresentanteMarcas to fetch.
     */
    orderBy?: RepresentanteMarcaOrderByWithRelationInput | RepresentanteMarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepresentanteMarcas.
     */
    cursor?: RepresentanteMarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepresentanteMarcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepresentanteMarcas.
     */
    skip?: number
    distinct?: RepresentanteMarcaScalarFieldEnum | RepresentanteMarcaScalarFieldEnum[]
  }

  /**
   * RepresentanteMarca create
   */
  export type RepresentanteMarcaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * The data needed to create a RepresentanteMarca.
     */
    data: XOR<RepresentanteMarcaCreateInput, RepresentanteMarcaUncheckedCreateInput>
  }

  /**
   * RepresentanteMarca createMany
   */
  export type RepresentanteMarcaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepresentanteMarcas.
     */
    data: RepresentanteMarcaCreateManyInput | RepresentanteMarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepresentanteMarca createManyAndReturn
   */
  export type RepresentanteMarcaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * The data used to create many RepresentanteMarcas.
     */
    data: RepresentanteMarcaCreateManyInput | RepresentanteMarcaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepresentanteMarca update
   */
  export type RepresentanteMarcaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * The data needed to update a RepresentanteMarca.
     */
    data: XOR<RepresentanteMarcaUpdateInput, RepresentanteMarcaUncheckedUpdateInput>
    /**
     * Choose, which RepresentanteMarca to update.
     */
    where: RepresentanteMarcaWhereUniqueInput
  }

  /**
   * RepresentanteMarca updateMany
   */
  export type RepresentanteMarcaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepresentanteMarcas.
     */
    data: XOR<RepresentanteMarcaUpdateManyMutationInput, RepresentanteMarcaUncheckedUpdateManyInput>
    /**
     * Filter which RepresentanteMarcas to update
     */
    where?: RepresentanteMarcaWhereInput
    /**
     * Limit how many RepresentanteMarcas to update.
     */
    limit?: number
  }

  /**
   * RepresentanteMarca updateManyAndReturn
   */
  export type RepresentanteMarcaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * The data used to update RepresentanteMarcas.
     */
    data: XOR<RepresentanteMarcaUpdateManyMutationInput, RepresentanteMarcaUncheckedUpdateManyInput>
    /**
     * Filter which RepresentanteMarcas to update
     */
    where?: RepresentanteMarcaWhereInput
    /**
     * Limit how many RepresentanteMarcas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepresentanteMarca upsert
   */
  export type RepresentanteMarcaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * The filter to search for the RepresentanteMarca to update in case it exists.
     */
    where: RepresentanteMarcaWhereUniqueInput
    /**
     * In case the RepresentanteMarca found by the `where` argument doesn't exist, create a new RepresentanteMarca with this data.
     */
    create: XOR<RepresentanteMarcaCreateInput, RepresentanteMarcaUncheckedCreateInput>
    /**
     * In case the RepresentanteMarca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepresentanteMarcaUpdateInput, RepresentanteMarcaUncheckedUpdateInput>
  }

  /**
   * RepresentanteMarca delete
   */
  export type RepresentanteMarcaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
    /**
     * Filter which RepresentanteMarca to delete.
     */
    where: RepresentanteMarcaWhereUniqueInput
  }

  /**
   * RepresentanteMarca deleteMany
   */
  export type RepresentanteMarcaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepresentanteMarcas to delete
     */
    where?: RepresentanteMarcaWhereInput
    /**
     * Limit how many RepresentanteMarcas to delete.
     */
    limit?: number
  }

  /**
   * RepresentanteMarca without action
   */
  export type RepresentanteMarcaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepresentanteMarca
     */
    select?: RepresentanteMarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepresentanteMarca
     */
    omit?: RepresentanteMarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepresentanteMarcaInclude<ExtArgs> | null
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


  export const AutenticacaoLoginScalarFieldEnum: {
    id: 'id',
    email: 'email',
    codigo: 'codigo',
    data_criacao: 'data_criacao'
  };

  export type AutenticacaoLoginScalarFieldEnum = (typeof AutenticacaoLoginScalarFieldEnum)[keyof typeof AutenticacaoLoginScalarFieldEnum]


  export const CategoriaProdutoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type CategoriaProdutoScalarFieldEnum = (typeof CategoriaProdutoScalarFieldEnum)[keyof typeof CategoriaProdutoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    cnpj: 'cnpj',
    razao_social: 'razao_social',
    status: 'status',
    email: 'email',
    data_cadastro: 'data_cadastro',
    id_log: 'id_log',
    receita_bruta: 'receita_bruta',
    categoria_cliente: 'categoria_cliente'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const LoginScalarFieldEnum: {
    id: 'id',
    password: 'password'
  };

  export type LoginScalarFieldEnum = (typeof LoginScalarFieldEnum)[keyof typeof LoginScalarFieldEnum]


  export const MarcaScalarFieldEnum: {
    razao_social: 'razao_social',
    cnpj: 'cnpj'
  };

  export type MarcaScalarFieldEnum = (typeof MarcaScalarFieldEnum)[keyof typeof MarcaScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    data_pedido: 'data_pedido',
    status: 'status',
    valor_total: 'valor_total',
    cnpj_cli: 'cnpj_cli',
    cnpj_rep: 'cnpj_rep'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidoProdutoScalarFieldEnum: {
    id_prod: 'id_prod',
    id_ped: 'id_ped',
    quantidade: 'quantidade'
  };

  export type PedidoProdutoScalarFieldEnum = (typeof PedidoProdutoScalarFieldEnum)[keyof typeof PedidoProdutoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    validade: 'validade',
    peso: 'peso',
    preco: 'preco',
    id_cat: 'id_cat',
    cnpj_marca: 'cnpj_marca'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const RepresentanteScalarFieldEnum: {
    cnpj: 'cnpj',
    razao_social: 'razao_social',
    status: 'status',
    email: 'email',
    data_cadastro: 'data_cadastro',
    id_log: 'id_log'
  };

  export type RepresentanteScalarFieldEnum = (typeof RepresentanteScalarFieldEnum)[keyof typeof RepresentanteScalarFieldEnum]


  export const RepresentanteMarcaScalarFieldEnum: {
    cnpjRepresentante: 'cnpjRepresentante',
    id: 'id',
    cnpjMarca: 'cnpjMarca',
    categoria_representante: 'categoria_representante',
    data_cadastro: 'data_cadastro'
  };

  export type RepresentanteMarcaScalarFieldEnum = (typeof RepresentanteMarcaScalarFieldEnum)[keyof typeof RepresentanteMarcaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'StatusUser'
   */
  export type EnumStatusUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusUser'>
    


  /**
   * Reference to a field of type 'StatusUser[]'
   */
  export type ListEnumStatusUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusUser[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CatCliente'
   */
  export type EnumCatClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CatCliente'>
    


  /**
   * Reference to a field of type 'CatCliente[]'
   */
  export type ListEnumCatClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CatCliente[]'>
    


  /**
   * Reference to a field of type 'StatusPedido'
   */
  export type EnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido'>
    


  /**
   * Reference to a field of type 'StatusPedido[]'
   */
  export type ListEnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido[]'>
    
  /**
   * Deep Input Types
   */


  export type AutenticacaoLoginWhereInput = {
    AND?: AutenticacaoLoginWhereInput | AutenticacaoLoginWhereInput[]
    OR?: AutenticacaoLoginWhereInput[]
    NOT?: AutenticacaoLoginWhereInput | AutenticacaoLoginWhereInput[]
    id?: IntFilter<"AutenticacaoLogin"> | number
    email?: StringFilter<"AutenticacaoLogin"> | string
    codigo?: IntFilter<"AutenticacaoLogin"> | number
    data_criacao?: DateTimeFilter<"AutenticacaoLogin"> | Date | string
  }

  export type AutenticacaoLoginOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    codigo?: SortOrder
    data_criacao?: SortOrder
  }

  export type AutenticacaoLoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutenticacaoLoginWhereInput | AutenticacaoLoginWhereInput[]
    OR?: AutenticacaoLoginWhereInput[]
    NOT?: AutenticacaoLoginWhereInput | AutenticacaoLoginWhereInput[]
    email?: StringFilter<"AutenticacaoLogin"> | string
    codigo?: IntFilter<"AutenticacaoLogin"> | number
    data_criacao?: DateTimeFilter<"AutenticacaoLogin"> | Date | string
  }, "id">

  export type AutenticacaoLoginOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    codigo?: SortOrder
    data_criacao?: SortOrder
    _count?: AutenticacaoLoginCountOrderByAggregateInput
    _avg?: AutenticacaoLoginAvgOrderByAggregateInput
    _max?: AutenticacaoLoginMaxOrderByAggregateInput
    _min?: AutenticacaoLoginMinOrderByAggregateInput
    _sum?: AutenticacaoLoginSumOrderByAggregateInput
  }

  export type AutenticacaoLoginScalarWhereWithAggregatesInput = {
    AND?: AutenticacaoLoginScalarWhereWithAggregatesInput | AutenticacaoLoginScalarWhereWithAggregatesInput[]
    OR?: AutenticacaoLoginScalarWhereWithAggregatesInput[]
    NOT?: AutenticacaoLoginScalarWhereWithAggregatesInput | AutenticacaoLoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AutenticacaoLogin"> | number
    email?: StringWithAggregatesFilter<"AutenticacaoLogin"> | string
    codigo?: IntWithAggregatesFilter<"AutenticacaoLogin"> | number
    data_criacao?: DateTimeWithAggregatesFilter<"AutenticacaoLogin"> | Date | string
  }

  export type CategoriaProdutoWhereInput = {
    AND?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    OR?: CategoriaProdutoWhereInput[]
    NOT?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    id?: IntFilter<"CategoriaProduto"> | number
    descricao?: StringFilter<"CategoriaProduto"> | string
    Produto?: ProdutoListRelationFilter
  }

  export type CategoriaProdutoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    Produto?: ProdutoOrderByRelationAggregateInput
  }

  export type CategoriaProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    OR?: CategoriaProdutoWhereInput[]
    NOT?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    descricao?: StringFilter<"CategoriaProduto"> | string
    Produto?: ProdutoListRelationFilter
  }, "id">

  export type CategoriaProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: CategoriaProdutoCountOrderByAggregateInput
    _avg?: CategoriaProdutoAvgOrderByAggregateInput
    _max?: CategoriaProdutoMaxOrderByAggregateInput
    _min?: CategoriaProdutoMinOrderByAggregateInput
    _sum?: CategoriaProdutoSumOrderByAggregateInput
  }

  export type CategoriaProdutoScalarWhereWithAggregatesInput = {
    AND?: CategoriaProdutoScalarWhereWithAggregatesInput | CategoriaProdutoScalarWhereWithAggregatesInput[]
    OR?: CategoriaProdutoScalarWhereWithAggregatesInput[]
    NOT?: CategoriaProdutoScalarWhereWithAggregatesInput | CategoriaProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoriaProduto"> | number
    descricao?: StringWithAggregatesFilter<"CategoriaProduto"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    cnpj?: StringFilter<"Cliente"> | string
    razao_social?: StringFilter<"Cliente"> | string
    status?: EnumStatusUserFilter<"Cliente"> | $Enums.StatusUser
    email?: StringFilter<"Cliente"> | string
    data_cadastro?: DateTimeFilter<"Cliente"> | Date | string
    id_log?: IntFilter<"Cliente"> | number
    receita_bruta?: FloatFilter<"Cliente"> | number
    categoria_cliente?: EnumCatClienteFilter<"Cliente"> | $Enums.CatCliente
    Login?: XOR<LoginScalarRelationFilter, LoginWhereInput>
    Pedido?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
    receita_bruta?: SortOrder
    categoria_cliente?: SortOrder
    Login?: LoginOrderByWithRelationInput
    Pedido?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cnpj?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    razao_social?: StringFilter<"Cliente"> | string
    status?: EnumStatusUserFilter<"Cliente"> | $Enums.StatusUser
    email?: StringFilter<"Cliente"> | string
    data_cadastro?: DateTimeFilter<"Cliente"> | Date | string
    id_log?: IntFilter<"Cliente"> | number
    receita_bruta?: FloatFilter<"Cliente"> | number
    categoria_cliente?: EnumCatClienteFilter<"Cliente"> | $Enums.CatCliente
    Login?: XOR<LoginScalarRelationFilter, LoginWhereInput>
    Pedido?: PedidoListRelationFilter
  }, "cnpj">

  export type ClienteOrderByWithAggregationInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
    receita_bruta?: SortOrder
    categoria_cliente?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    cnpj?: StringWithAggregatesFilter<"Cliente"> | string
    razao_social?: StringWithAggregatesFilter<"Cliente"> | string
    status?: EnumStatusUserWithAggregatesFilter<"Cliente"> | $Enums.StatusUser
    email?: StringWithAggregatesFilter<"Cliente"> | string
    data_cadastro?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    id_log?: IntWithAggregatesFilter<"Cliente"> | number
    receita_bruta?: FloatWithAggregatesFilter<"Cliente"> | number
    categoria_cliente?: EnumCatClienteWithAggregatesFilter<"Cliente"> | $Enums.CatCliente
  }

  export type LoginWhereInput = {
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    id?: IntFilter<"Login"> | number
    password?: StringFilter<"Login"> | string
    Cliente?: ClienteListRelationFilter
    Representante?: RepresentanteListRelationFilter
  }

  export type LoginOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    Cliente?: ClienteOrderByRelationAggregateInput
    Representante?: RepresentanteOrderByRelationAggregateInput
  }

  export type LoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    password?: string
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    Cliente?: ClienteListRelationFilter
    Representante?: RepresentanteListRelationFilter
  }, "id" | "password">

  export type LoginOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    _count?: LoginCountOrderByAggregateInput
    _avg?: LoginAvgOrderByAggregateInput
    _max?: LoginMaxOrderByAggregateInput
    _min?: LoginMinOrderByAggregateInput
    _sum?: LoginSumOrderByAggregateInput
  }

  export type LoginScalarWhereWithAggregatesInput = {
    AND?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    OR?: LoginScalarWhereWithAggregatesInput[]
    NOT?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Login"> | number
    password?: StringWithAggregatesFilter<"Login"> | string
  }

  export type MarcaWhereInput = {
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
    razao_social?: StringFilter<"Marca"> | string
    cnpj?: StringFilter<"Marca"> | string
    Produto?: ProdutoListRelationFilter
    RepresentanteMarca?: RepresentanteMarcaListRelationFilter
  }

  export type MarcaOrderByWithRelationInput = {
    razao_social?: SortOrder
    cnpj?: SortOrder
    Produto?: ProdutoOrderByRelationAggregateInput
    RepresentanteMarca?: RepresentanteMarcaOrderByRelationAggregateInput
  }

  export type MarcaWhereUniqueInput = Prisma.AtLeast<{
    cnpj?: string
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
    razao_social?: StringFilter<"Marca"> | string
    Produto?: ProdutoListRelationFilter
    RepresentanteMarca?: RepresentanteMarcaListRelationFilter
  }, "cnpj">

  export type MarcaOrderByWithAggregationInput = {
    razao_social?: SortOrder
    cnpj?: SortOrder
    _count?: MarcaCountOrderByAggregateInput
    _max?: MarcaMaxOrderByAggregateInput
    _min?: MarcaMinOrderByAggregateInput
  }

  export type MarcaScalarWhereWithAggregatesInput = {
    AND?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    OR?: MarcaScalarWhereWithAggregatesInput[]
    NOT?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    razao_social?: StringWithAggregatesFilter<"Marca"> | string
    cnpj?: StringWithAggregatesFilter<"Marca"> | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    data_pedido?: DateTimeFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    valor_total?: FloatFilter<"Pedido"> | number
    cnpj_cli?: StringFilter<"Pedido"> | string
    cnpj_rep?: StringFilter<"Pedido"> | string
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    Representante?: XOR<RepresentanteScalarRelationFilter, RepresentanteWhereInput>
    PedidoProduto?: PedidoProdutoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    data_pedido?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
    cnpj_cli?: SortOrder
    cnpj_rep?: SortOrder
    Cliente?: ClienteOrderByWithRelationInput
    Representante?: RepresentanteOrderByWithRelationInput
    PedidoProduto?: PedidoProdutoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    data_pedido?: DateTimeFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    valor_total?: FloatFilter<"Pedido"> | number
    cnpj_cli?: StringFilter<"Pedido"> | string
    cnpj_rep?: StringFilter<"Pedido"> | string
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    Representante?: XOR<RepresentanteScalarRelationFilter, RepresentanteWhereInput>
    PedidoProduto?: PedidoProdutoListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    data_pedido?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
    cnpj_cli?: SortOrder
    cnpj_rep?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    data_pedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoWithAggregatesFilter<"Pedido"> | $Enums.StatusPedido
    valor_total?: FloatWithAggregatesFilter<"Pedido"> | number
    cnpj_cli?: StringWithAggregatesFilter<"Pedido"> | string
    cnpj_rep?: StringWithAggregatesFilter<"Pedido"> | string
  }

  export type PedidoProdutoWhereInput = {
    AND?: PedidoProdutoWhereInput | PedidoProdutoWhereInput[]
    OR?: PedidoProdutoWhereInput[]
    NOT?: PedidoProdutoWhereInput | PedidoProdutoWhereInput[]
    id_prod?: IntFilter<"PedidoProduto"> | number
    id_ped?: IntFilter<"PedidoProduto"> | number
    quantidade?: IntFilter<"PedidoProduto"> | number
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    Produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type PedidoProdutoOrderByWithRelationInput = {
    id_prod?: SortOrder
    id_ped?: SortOrder
    quantidade?: SortOrder
    Pedido?: PedidoOrderByWithRelationInput
    Produto?: ProdutoOrderByWithRelationInput
  }

  export type PedidoProdutoWhereUniqueInput = Prisma.AtLeast<{
    id_prod_id_ped?: PedidoProdutoId_prodId_pedCompoundUniqueInput
    AND?: PedidoProdutoWhereInput | PedidoProdutoWhereInput[]
    OR?: PedidoProdutoWhereInput[]
    NOT?: PedidoProdutoWhereInput | PedidoProdutoWhereInput[]
    id_prod?: IntFilter<"PedidoProduto"> | number
    id_ped?: IntFilter<"PedidoProduto"> | number
    quantidade?: IntFilter<"PedidoProduto"> | number
    Pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    Produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id_prod_id_ped">

  export type PedidoProdutoOrderByWithAggregationInput = {
    id_prod?: SortOrder
    id_ped?: SortOrder
    quantidade?: SortOrder
    _count?: PedidoProdutoCountOrderByAggregateInput
    _avg?: PedidoProdutoAvgOrderByAggregateInput
    _max?: PedidoProdutoMaxOrderByAggregateInput
    _min?: PedidoProdutoMinOrderByAggregateInput
    _sum?: PedidoProdutoSumOrderByAggregateInput
  }

  export type PedidoProdutoScalarWhereWithAggregatesInput = {
    AND?: PedidoProdutoScalarWhereWithAggregatesInput | PedidoProdutoScalarWhereWithAggregatesInput[]
    OR?: PedidoProdutoScalarWhereWithAggregatesInput[]
    NOT?: PedidoProdutoScalarWhereWithAggregatesInput | PedidoProdutoScalarWhereWithAggregatesInput[]
    id_prod?: IntWithAggregatesFilter<"PedidoProduto"> | number
    id_ped?: IntWithAggregatesFilter<"PedidoProduto"> | number
    quantidade?: IntWithAggregatesFilter<"PedidoProduto"> | number
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    descricao?: StringFilter<"Produto"> | string
    validade?: StringNullableFilter<"Produto"> | string | null
    peso?: IntNullableFilter<"Produto"> | number | null
    preco?: FloatFilter<"Produto"> | number
    id_cat?: IntFilter<"Produto"> | number
    cnpj_marca?: StringFilter<"Produto"> | string
    PedidoProduto?: PedidoProdutoListRelationFilter
    Marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
    CategoriaProduto?: XOR<CategoriaProdutoScalarRelationFilter, CategoriaProdutoWhereInput>
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    validade?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    preco?: SortOrder
    id_cat?: SortOrder
    cnpj_marca?: SortOrder
    PedidoProduto?: PedidoProdutoOrderByRelationAggregateInput
    Marca?: MarcaOrderByWithRelationInput
    CategoriaProduto?: CategoriaProdutoOrderByWithRelationInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    descricao?: StringFilter<"Produto"> | string
    validade?: StringNullableFilter<"Produto"> | string | null
    peso?: IntNullableFilter<"Produto"> | number | null
    preco?: FloatFilter<"Produto"> | number
    id_cat?: IntFilter<"Produto"> | number
    cnpj_marca?: StringFilter<"Produto"> | string
    PedidoProduto?: PedidoProdutoListRelationFilter
    Marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
    CategoriaProduto?: XOR<CategoriaProdutoScalarRelationFilter, CategoriaProdutoWhereInput>
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    validade?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    preco?: SortOrder
    id_cat?: SortOrder
    cnpj_marca?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    descricao?: StringWithAggregatesFilter<"Produto"> | string
    validade?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    peso?: IntNullableWithAggregatesFilter<"Produto"> | number | null
    preco?: FloatWithAggregatesFilter<"Produto"> | number
    id_cat?: IntWithAggregatesFilter<"Produto"> | number
    cnpj_marca?: StringWithAggregatesFilter<"Produto"> | string
  }

  export type RepresentanteWhereInput = {
    AND?: RepresentanteWhereInput | RepresentanteWhereInput[]
    OR?: RepresentanteWhereInput[]
    NOT?: RepresentanteWhereInput | RepresentanteWhereInput[]
    cnpj?: StringFilter<"Representante"> | string
    razao_social?: StringFilter<"Representante"> | string
    status?: EnumStatusUserFilter<"Representante"> | $Enums.StatusUser
    email?: StringFilter<"Representante"> | string
    data_cadastro?: DateTimeFilter<"Representante"> | Date | string
    id_log?: IntFilter<"Representante"> | number
    Pedido?: PedidoListRelationFilter
    Login?: XOR<LoginScalarRelationFilter, LoginWhereInput>
    RepresentanteMarca?: RepresentanteMarcaListRelationFilter
  }

  export type RepresentanteOrderByWithRelationInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
    Pedido?: PedidoOrderByRelationAggregateInput
    Login?: LoginOrderByWithRelationInput
    RepresentanteMarca?: RepresentanteMarcaOrderByRelationAggregateInput
  }

  export type RepresentanteWhereUniqueInput = Prisma.AtLeast<{
    cnpj?: string
    AND?: RepresentanteWhereInput | RepresentanteWhereInput[]
    OR?: RepresentanteWhereInput[]
    NOT?: RepresentanteWhereInput | RepresentanteWhereInput[]
    razao_social?: StringFilter<"Representante"> | string
    status?: EnumStatusUserFilter<"Representante"> | $Enums.StatusUser
    email?: StringFilter<"Representante"> | string
    data_cadastro?: DateTimeFilter<"Representante"> | Date | string
    id_log?: IntFilter<"Representante"> | number
    Pedido?: PedidoListRelationFilter
    Login?: XOR<LoginScalarRelationFilter, LoginWhereInput>
    RepresentanteMarca?: RepresentanteMarcaListRelationFilter
  }, "cnpj">

  export type RepresentanteOrderByWithAggregationInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
    _count?: RepresentanteCountOrderByAggregateInput
    _avg?: RepresentanteAvgOrderByAggregateInput
    _max?: RepresentanteMaxOrderByAggregateInput
    _min?: RepresentanteMinOrderByAggregateInput
    _sum?: RepresentanteSumOrderByAggregateInput
  }

  export type RepresentanteScalarWhereWithAggregatesInput = {
    AND?: RepresentanteScalarWhereWithAggregatesInput | RepresentanteScalarWhereWithAggregatesInput[]
    OR?: RepresentanteScalarWhereWithAggregatesInput[]
    NOT?: RepresentanteScalarWhereWithAggregatesInput | RepresentanteScalarWhereWithAggregatesInput[]
    cnpj?: StringWithAggregatesFilter<"Representante"> | string
    razao_social?: StringWithAggregatesFilter<"Representante"> | string
    status?: EnumStatusUserWithAggregatesFilter<"Representante"> | $Enums.StatusUser
    email?: StringWithAggregatesFilter<"Representante"> | string
    data_cadastro?: DateTimeWithAggregatesFilter<"Representante"> | Date | string
    id_log?: IntWithAggregatesFilter<"Representante"> | number
  }

  export type RepresentanteMarcaWhereInput = {
    AND?: RepresentanteMarcaWhereInput | RepresentanteMarcaWhereInput[]
    OR?: RepresentanteMarcaWhereInput[]
    NOT?: RepresentanteMarcaWhereInput | RepresentanteMarcaWhereInput[]
    cnpjRepresentante?: StringFilter<"RepresentanteMarca"> | string
    id?: IntFilter<"RepresentanteMarca"> | number
    cnpjMarca?: StringFilter<"RepresentanteMarca"> | string
    categoria_representante?: EnumCatClienteFilter<"RepresentanteMarca"> | $Enums.CatCliente
    data_cadastro?: DateTimeFilter<"RepresentanteMarca"> | Date | string
    Marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
    Representante?: XOR<RepresentanteScalarRelationFilter, RepresentanteWhereInput>
  }

  export type RepresentanteMarcaOrderByWithRelationInput = {
    cnpjRepresentante?: SortOrder
    id?: SortOrder
    cnpjMarca?: SortOrder
    categoria_representante?: SortOrder
    data_cadastro?: SortOrder
    Marca?: MarcaOrderByWithRelationInput
    Representante?: RepresentanteOrderByWithRelationInput
  }

  export type RepresentanteMarcaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepresentanteMarcaWhereInput | RepresentanteMarcaWhereInput[]
    OR?: RepresentanteMarcaWhereInput[]
    NOT?: RepresentanteMarcaWhereInput | RepresentanteMarcaWhereInput[]
    cnpjRepresentante?: StringFilter<"RepresentanteMarca"> | string
    cnpjMarca?: StringFilter<"RepresentanteMarca"> | string
    categoria_representante?: EnumCatClienteFilter<"RepresentanteMarca"> | $Enums.CatCliente
    data_cadastro?: DateTimeFilter<"RepresentanteMarca"> | Date | string
    Marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
    Representante?: XOR<RepresentanteScalarRelationFilter, RepresentanteWhereInput>
  }, "id">

  export type RepresentanteMarcaOrderByWithAggregationInput = {
    cnpjRepresentante?: SortOrder
    id?: SortOrder
    cnpjMarca?: SortOrder
    categoria_representante?: SortOrder
    data_cadastro?: SortOrder
    _count?: RepresentanteMarcaCountOrderByAggregateInput
    _avg?: RepresentanteMarcaAvgOrderByAggregateInput
    _max?: RepresentanteMarcaMaxOrderByAggregateInput
    _min?: RepresentanteMarcaMinOrderByAggregateInput
    _sum?: RepresentanteMarcaSumOrderByAggregateInput
  }

  export type RepresentanteMarcaScalarWhereWithAggregatesInput = {
    AND?: RepresentanteMarcaScalarWhereWithAggregatesInput | RepresentanteMarcaScalarWhereWithAggregatesInput[]
    OR?: RepresentanteMarcaScalarWhereWithAggregatesInput[]
    NOT?: RepresentanteMarcaScalarWhereWithAggregatesInput | RepresentanteMarcaScalarWhereWithAggregatesInput[]
    cnpjRepresentante?: StringWithAggregatesFilter<"RepresentanteMarca"> | string
    id?: IntWithAggregatesFilter<"RepresentanteMarca"> | number
    cnpjMarca?: StringWithAggregatesFilter<"RepresentanteMarca"> | string
    categoria_representante?: EnumCatClienteWithAggregatesFilter<"RepresentanteMarca"> | $Enums.CatCliente
    data_cadastro?: DateTimeWithAggregatesFilter<"RepresentanteMarca"> | Date | string
  }

  export type AutenticacaoLoginCreateInput = {
    email: string
    codigo: number
    data_criacao?: Date | string
  }

  export type AutenticacaoLoginUncheckedCreateInput = {
    id?: number
    email: string
    codigo: number
    data_criacao?: Date | string
  }

  export type AutenticacaoLoginUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutenticacaoLoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutenticacaoLoginCreateManyInput = {
    id?: number
    email: string
    codigo: number
    data_criacao?: Date | string
  }

  export type AutenticacaoLoginUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutenticacaoLoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaProdutoCreateInput = {
    descricao: string
    Produto?: ProdutoCreateNestedManyWithoutCategoriaProdutoInput
  }

  export type CategoriaProdutoUncheckedCreateInput = {
    id?: number
    descricao: string
    Produto?: ProdutoUncheckedCreateNestedManyWithoutCategoriaProdutoInput
  }

  export type CategoriaProdutoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUpdateManyWithoutCategoriaProdutoNestedInput
  }

  export type CategoriaProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUncheckedUpdateManyWithoutCategoriaProdutoNestedInput
  }

  export type CategoriaProdutoCreateManyInput = {
    id?: number
    descricao: string
  }

  export type CategoriaProdutoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
    Login: LoginCreateNestedOneWithoutClienteInput
    Pedido?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    id_log: number
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
    Pedido?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    Login?: LoginUpdateOneRequiredWithoutClienteNestedInput
    Pedido?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_log?: IntFieldUpdateOperationsInput | number
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    Pedido?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    id_log: number
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
  }

  export type ClienteUpdateManyMutationInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
  }

  export type ClienteUncheckedUpdateManyInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_log?: IntFieldUpdateOperationsInput | number
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
  }

  export type LoginCreateInput = {
    password: string
    Cliente?: ClienteCreateNestedManyWithoutLoginInput
    Representante?: RepresentanteCreateNestedManyWithoutLoginInput
  }

  export type LoginUncheckedCreateInput = {
    id?: number
    password: string
    Cliente?: ClienteUncheckedCreateNestedManyWithoutLoginInput
    Representante?: RepresentanteUncheckedCreateNestedManyWithoutLoginInput
  }

  export type LoginUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    Cliente?: ClienteUpdateManyWithoutLoginNestedInput
    Representante?: RepresentanteUpdateManyWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    Cliente?: ClienteUncheckedUpdateManyWithoutLoginNestedInput
    Representante?: RepresentanteUncheckedUpdateManyWithoutLoginNestedInput
  }

  export type LoginCreateManyInput = {
    id?: number
    password: string
  }

  export type LoginUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaCreateInput = {
    razao_social: string
    cnpj: string
    Produto?: ProdutoCreateNestedManyWithoutMarcaInput
    RepresentanteMarca?: RepresentanteMarcaCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUncheckedCreateInput = {
    razao_social: string
    cnpj: string
    Produto?: ProdutoUncheckedCreateNestedManyWithoutMarcaInput
    RepresentanteMarca?: RepresentanteMarcaUncheckedCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUpdateInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUpdateManyWithoutMarcaNestedInput
    RepresentanteMarca?: RepresentanteMarcaUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaUncheckedUpdateInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUncheckedUpdateManyWithoutMarcaNestedInput
    RepresentanteMarca?: RepresentanteMarcaUncheckedUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaCreateManyInput = {
    razao_social: string
    cnpj: string
  }

  export type MarcaUpdateManyMutationInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUncheckedUpdateManyInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateInput = {
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    Representante: RepresentanteCreateNestedOneWithoutPedidoInput
    PedidoProduto?: PedidoProdutoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_cli: string
    cnpj_rep: string
    PedidoProduto?: PedidoProdutoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    Representante?: RepresentanteUpdateOneRequiredWithoutPedidoNestedInput
    PedidoProduto?: PedidoProdutoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    cnpj_cli?: StringFieldUpdateOperationsInput | string
    cnpj_rep?: StringFieldUpdateOperationsInput | string
    PedidoProduto?: PedidoProdutoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_cli: string
    cnpj_rep: string
  }

  export type PedidoUpdateManyMutationInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    cnpj_cli?: StringFieldUpdateOperationsInput | string
    cnpj_rep?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoProdutoCreateInput = {
    quantidade: number
    Pedido: PedidoCreateNestedOneWithoutPedidoProdutoInput
    Produto: ProdutoCreateNestedOneWithoutPedidoProdutoInput
  }

  export type PedidoProdutoUncheckedCreateInput = {
    id_prod: number
    id_ped: number
    quantidade: number
  }

  export type PedidoProdutoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUpdateOneRequiredWithoutPedidoProdutoNestedInput
    Produto?: ProdutoUpdateOneRequiredWithoutPedidoProdutoNestedInput
  }

  export type PedidoProdutoUncheckedUpdateInput = {
    id_prod?: IntFieldUpdateOperationsInput | number
    id_ped?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProdutoCreateManyInput = {
    id_prod: number
    id_ped: number
    quantidade: number
  }

  export type PedidoProdutoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProdutoUncheckedUpdateManyInput = {
    id_prod?: IntFieldUpdateOperationsInput | number
    id_ped?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateInput = {
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    PedidoProduto?: PedidoProdutoCreateNestedManyWithoutProdutoInput
    Marca: MarcaCreateNestedOneWithoutProdutoInput
    CategoriaProduto: CategoriaProdutoCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    id_cat: number
    cnpj_marca: string
    PedidoProduto?: PedidoProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    PedidoProduto?: PedidoProdutoUpdateManyWithoutProdutoNestedInput
    Marca?: MarcaUpdateOneRequiredWithoutProdutoNestedInput
    CategoriaProduto?: CategoriaProdutoUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    id_cat?: IntFieldUpdateOperationsInput | number
    cnpj_marca?: StringFieldUpdateOperationsInput | string
    PedidoProduto?: PedidoProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    id_cat: number
    cnpj_marca: string
  }

  export type ProdutoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    id_cat?: IntFieldUpdateOperationsInput | number
    cnpj_marca?: StringFieldUpdateOperationsInput | string
  }

  export type RepresentanteCreateInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    Pedido?: PedidoCreateNestedManyWithoutRepresentanteInput
    Login: LoginCreateNestedOneWithoutRepresentanteInput
    RepresentanteMarca?: RepresentanteMarcaCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    id_log: number
    Pedido?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
    RepresentanteMarca?: RepresentanteMarcaUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUpdateManyWithoutRepresentanteNestedInput
    Login?: LoginUpdateOneRequiredWithoutRepresentanteNestedInput
    RepresentanteMarca?: RepresentanteMarcaUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_log?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
    RepresentanteMarca?: RepresentanteMarcaUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteCreateManyInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    id_log: number
  }

  export type RepresentanteUpdateManyMutationInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteUncheckedUpdateManyInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_log?: IntFieldUpdateOperationsInput | number
  }

  export type RepresentanteMarcaCreateInput = {
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
    Marca: MarcaCreateNestedOneWithoutRepresentanteMarcaInput
    Representante: RepresentanteCreateNestedOneWithoutRepresentanteMarcaInput
  }

  export type RepresentanteMarcaUncheckedCreateInput = {
    cnpjRepresentante: string
    id?: number
    cnpjMarca: string
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
  }

  export type RepresentanteMarcaUpdateInput = {
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Marca?: MarcaUpdateOneRequiredWithoutRepresentanteMarcaNestedInput
    Representante?: RepresentanteUpdateOneRequiredWithoutRepresentanteMarcaNestedInput
  }

  export type RepresentanteMarcaUncheckedUpdateInput = {
    cnpjRepresentante?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    cnpjMarca?: StringFieldUpdateOperationsInput | string
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteMarcaCreateManyInput = {
    cnpjRepresentante: string
    id?: number
    cnpjMarca: string
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
  }

  export type RepresentanteMarcaUpdateManyMutationInput = {
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteMarcaUncheckedUpdateManyInput = {
    cnpjRepresentante?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    cnpjMarca?: StringFieldUpdateOperationsInput | string
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type AutenticacaoLoginCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    codigo?: SortOrder
    data_criacao?: SortOrder
  }

  export type AutenticacaoLoginAvgOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
  }

  export type AutenticacaoLoginMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    codigo?: SortOrder
    data_criacao?: SortOrder
  }

  export type AutenticacaoLoginMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    codigo?: SortOrder
    data_criacao?: SortOrder
  }

  export type AutenticacaoLoginSumOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusUserFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUser | EnumStatusUserFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUserFilter<$PrismaModel> | $Enums.StatusUser
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumCatClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.CatCliente | EnumCatClienteFieldRefInput<$PrismaModel>
    in?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumCatClienteFilter<$PrismaModel> | $Enums.CatCliente
  }

  export type LoginScalarRelationFilter = {
    is?: LoginWhereInput
    isNot?: LoginWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
    receita_bruta?: SortOrder
    categoria_cliente?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id_log?: SortOrder
    receita_bruta?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
    receita_bruta?: SortOrder
    categoria_cliente?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
    receita_bruta?: SortOrder
    categoria_cliente?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id_log?: SortOrder
    receita_bruta?: SortOrder
  }

  export type EnumStatusUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUser | EnumStatusUserFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUserWithAggregatesFilter<$PrismaModel> | $Enums.StatusUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUserFilter<$PrismaModel>
    _max?: NestedEnumStatusUserFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCatClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CatCliente | EnumCatClienteFieldRefInput<$PrismaModel>
    in?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumCatClienteWithAggregatesFilter<$PrismaModel> | $Enums.CatCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCatClienteFilter<$PrismaModel>
    _max?: NestedEnumCatClienteFilter<$PrismaModel>
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type RepresentanteListRelationFilter = {
    every?: RepresentanteWhereInput
    some?: RepresentanteWhereInput
    none?: RepresentanteWhereInput
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepresentanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type LoginAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LoginMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type LoginMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type LoginSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepresentanteMarcaListRelationFilter = {
    every?: RepresentanteMarcaWhereInput
    some?: RepresentanteMarcaWhereInput
    none?: RepresentanteMarcaWhereInput
  }

  export type RepresentanteMarcaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarcaCountOrderByAggregateInput = {
    razao_social?: SortOrder
    cnpj?: SortOrder
  }

  export type MarcaMaxOrderByAggregateInput = {
    razao_social?: SortOrder
    cnpj?: SortOrder
  }

  export type MarcaMinOrderByAggregateInput = {
    razao_social?: SortOrder
    cnpj?: SortOrder
  }

  export type EnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type RepresentanteScalarRelationFilter = {
    is?: RepresentanteWhereInput
    isNot?: RepresentanteWhereInput
  }

  export type PedidoProdutoListRelationFilter = {
    every?: PedidoProdutoWhereInput
    some?: PedidoProdutoWhereInput
    none?: PedidoProdutoWhereInput
  }

  export type PedidoProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    data_pedido?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
    cnpj_cli?: SortOrder
    cnpj_rep?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor_total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    data_pedido?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
    cnpj_cli?: SortOrder
    cnpj_rep?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    data_pedido?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
    cnpj_cli?: SortOrder
    cnpj_rep?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    valor_total?: SortOrder
  }

  export type EnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type PedidoProdutoId_prodId_pedCompoundUniqueInput = {
    id_prod: number
    id_ped: number
  }

  export type PedidoProdutoCountOrderByAggregateInput = {
    id_prod?: SortOrder
    id_ped?: SortOrder
    quantidade?: SortOrder
  }

  export type PedidoProdutoAvgOrderByAggregateInput = {
    id_prod?: SortOrder
    id_ped?: SortOrder
    quantidade?: SortOrder
  }

  export type PedidoProdutoMaxOrderByAggregateInput = {
    id_prod?: SortOrder
    id_ped?: SortOrder
    quantidade?: SortOrder
  }

  export type PedidoProdutoMinOrderByAggregateInput = {
    id_prod?: SortOrder
    id_ped?: SortOrder
    quantidade?: SortOrder
  }

  export type PedidoProdutoSumOrderByAggregateInput = {
    id_prod?: SortOrder
    id_ped?: SortOrder
    quantidade?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MarcaScalarRelationFilter = {
    is?: MarcaWhereInput
    isNot?: MarcaWhereInput
  }

  export type CategoriaProdutoScalarRelationFilter = {
    is?: CategoriaProdutoWhereInput
    isNot?: CategoriaProdutoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    validade?: SortOrder
    peso?: SortOrder
    preco?: SortOrder
    id_cat?: SortOrder
    cnpj_marca?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    preco?: SortOrder
    id_cat?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    validade?: SortOrder
    peso?: SortOrder
    preco?: SortOrder
    id_cat?: SortOrder
    cnpj_marca?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    validade?: SortOrder
    peso?: SortOrder
    preco?: SortOrder
    id_cat?: SortOrder
    cnpj_marca?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    preco?: SortOrder
    id_cat?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RepresentanteCountOrderByAggregateInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
  }

  export type RepresentanteAvgOrderByAggregateInput = {
    id_log?: SortOrder
  }

  export type RepresentanteMaxOrderByAggregateInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
  }

  export type RepresentanteMinOrderByAggregateInput = {
    cnpj?: SortOrder
    razao_social?: SortOrder
    status?: SortOrder
    email?: SortOrder
    data_cadastro?: SortOrder
    id_log?: SortOrder
  }

  export type RepresentanteSumOrderByAggregateInput = {
    id_log?: SortOrder
  }

  export type RepresentanteMarcaCountOrderByAggregateInput = {
    cnpjRepresentante?: SortOrder
    id?: SortOrder
    cnpjMarca?: SortOrder
    categoria_representante?: SortOrder
    data_cadastro?: SortOrder
  }

  export type RepresentanteMarcaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepresentanteMarcaMaxOrderByAggregateInput = {
    cnpjRepresentante?: SortOrder
    id?: SortOrder
    cnpjMarca?: SortOrder
    categoria_representante?: SortOrder
    data_cadastro?: SortOrder
  }

  export type RepresentanteMarcaMinOrderByAggregateInput = {
    cnpjRepresentante?: SortOrder
    id?: SortOrder
    cnpjMarca?: SortOrder
    categoria_representante?: SortOrder
    data_cadastro?: SortOrder
  }

  export type RepresentanteMarcaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProdutoCreateNestedManyWithoutCategoriaProdutoInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaProdutoInput, ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | ProdutoCreateWithoutCategoriaProdutoInput[] | ProdutoUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaProdutoInput | ProdutoCreateOrConnectWithoutCategoriaProdutoInput[]
    createMany?: ProdutoCreateManyCategoriaProdutoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutCategoriaProdutoInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaProdutoInput, ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | ProdutoCreateWithoutCategoriaProdutoInput[] | ProdutoUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaProdutoInput | ProdutoCreateOrConnectWithoutCategoriaProdutoInput[]
    createMany?: ProdutoCreateManyCategoriaProdutoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUpdateManyWithoutCategoriaProdutoNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaProdutoInput, ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | ProdutoCreateWithoutCategoriaProdutoInput[] | ProdutoUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaProdutoInput | ProdutoCreateOrConnectWithoutCategoriaProdutoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput[]
    createMany?: ProdutoCreateManyCategoriaProdutoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput | ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaProdutoNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaProdutoInput, ProdutoUncheckedCreateWithoutCategoriaProdutoInput> | ProdutoCreateWithoutCategoriaProdutoInput[] | ProdutoUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaProdutoInput | ProdutoCreateOrConnectWithoutCategoriaProdutoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput[]
    createMany?: ProdutoCreateManyCategoriaProdutoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput | ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type LoginCreateNestedOneWithoutClienteInput = {
    create?: XOR<LoginCreateWithoutClienteInput, LoginUncheckedCreateWithoutClienteInput>
    connectOrCreate?: LoginCreateOrConnectWithoutClienteInput
    connect?: LoginWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type EnumStatusUserFieldUpdateOperationsInput = {
    set?: $Enums.StatusUser
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCatClienteFieldUpdateOperationsInput = {
    set?: $Enums.CatCliente
  }

  export type LoginUpdateOneRequiredWithoutClienteNestedInput = {
    create?: XOR<LoginCreateWithoutClienteInput, LoginUncheckedCreateWithoutClienteInput>
    connectOrCreate?: LoginCreateOrConnectWithoutClienteInput
    upsert?: LoginUpsertWithoutClienteInput
    connect?: LoginWhereUniqueInput
    update?: XOR<XOR<LoginUpdateToOneWithWhereWithoutClienteInput, LoginUpdateWithoutClienteInput>, LoginUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ClienteCreateNestedManyWithoutLoginInput = {
    create?: XOR<ClienteCreateWithoutLoginInput, ClienteUncheckedCreateWithoutLoginInput> | ClienteCreateWithoutLoginInput[] | ClienteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLoginInput | ClienteCreateOrConnectWithoutLoginInput[]
    createMany?: ClienteCreateManyLoginInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type RepresentanteCreateNestedManyWithoutLoginInput = {
    create?: XOR<RepresentanteCreateWithoutLoginInput, RepresentanteUncheckedCreateWithoutLoginInput> | RepresentanteCreateWithoutLoginInput[] | RepresentanteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: RepresentanteCreateOrConnectWithoutLoginInput | RepresentanteCreateOrConnectWithoutLoginInput[]
    createMany?: RepresentanteCreateManyLoginInputEnvelope
    connect?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutLoginInput = {
    create?: XOR<ClienteCreateWithoutLoginInput, ClienteUncheckedCreateWithoutLoginInput> | ClienteCreateWithoutLoginInput[] | ClienteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLoginInput | ClienteCreateOrConnectWithoutLoginInput[]
    createMany?: ClienteCreateManyLoginInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type RepresentanteUncheckedCreateNestedManyWithoutLoginInput = {
    create?: XOR<RepresentanteCreateWithoutLoginInput, RepresentanteUncheckedCreateWithoutLoginInput> | RepresentanteCreateWithoutLoginInput[] | RepresentanteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: RepresentanteCreateOrConnectWithoutLoginInput | RepresentanteCreateOrConnectWithoutLoginInput[]
    createMany?: RepresentanteCreateManyLoginInputEnvelope
    connect?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
  }

  export type ClienteUpdateManyWithoutLoginNestedInput = {
    create?: XOR<ClienteCreateWithoutLoginInput, ClienteUncheckedCreateWithoutLoginInput> | ClienteCreateWithoutLoginInput[] | ClienteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLoginInput | ClienteCreateOrConnectWithoutLoginInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLoginInput | ClienteUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: ClienteCreateManyLoginInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLoginInput | ClienteUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLoginInput | ClienteUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type RepresentanteUpdateManyWithoutLoginNestedInput = {
    create?: XOR<RepresentanteCreateWithoutLoginInput, RepresentanteUncheckedCreateWithoutLoginInput> | RepresentanteCreateWithoutLoginInput[] | RepresentanteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: RepresentanteCreateOrConnectWithoutLoginInput | RepresentanteCreateOrConnectWithoutLoginInput[]
    upsert?: RepresentanteUpsertWithWhereUniqueWithoutLoginInput | RepresentanteUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: RepresentanteCreateManyLoginInputEnvelope
    set?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    disconnect?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    delete?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    connect?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    update?: RepresentanteUpdateWithWhereUniqueWithoutLoginInput | RepresentanteUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: RepresentanteUpdateManyWithWhereWithoutLoginInput | RepresentanteUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: RepresentanteScalarWhereInput | RepresentanteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutLoginNestedInput = {
    create?: XOR<ClienteCreateWithoutLoginInput, ClienteUncheckedCreateWithoutLoginInput> | ClienteCreateWithoutLoginInput[] | ClienteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLoginInput | ClienteCreateOrConnectWithoutLoginInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLoginInput | ClienteUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: ClienteCreateManyLoginInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLoginInput | ClienteUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLoginInput | ClienteUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type RepresentanteUncheckedUpdateManyWithoutLoginNestedInput = {
    create?: XOR<RepresentanteCreateWithoutLoginInput, RepresentanteUncheckedCreateWithoutLoginInput> | RepresentanteCreateWithoutLoginInput[] | RepresentanteUncheckedCreateWithoutLoginInput[]
    connectOrCreate?: RepresentanteCreateOrConnectWithoutLoginInput | RepresentanteCreateOrConnectWithoutLoginInput[]
    upsert?: RepresentanteUpsertWithWhereUniqueWithoutLoginInput | RepresentanteUpsertWithWhereUniqueWithoutLoginInput[]
    createMany?: RepresentanteCreateManyLoginInputEnvelope
    set?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    disconnect?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    delete?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    connect?: RepresentanteWhereUniqueInput | RepresentanteWhereUniqueInput[]
    update?: RepresentanteUpdateWithWhereUniqueWithoutLoginInput | RepresentanteUpdateWithWhereUniqueWithoutLoginInput[]
    updateMany?: RepresentanteUpdateManyWithWhereWithoutLoginInput | RepresentanteUpdateManyWithWhereWithoutLoginInput[]
    deleteMany?: RepresentanteScalarWhereInput | RepresentanteScalarWhereInput[]
  }

  export type ProdutoCreateNestedManyWithoutMarcaInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type RepresentanteMarcaCreateNestedManyWithoutMarcaInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutMarcaInput, RepresentanteMarcaUncheckedCreateWithoutMarcaInput> | RepresentanteMarcaCreateWithoutMarcaInput[] | RepresentanteMarcaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutMarcaInput | RepresentanteMarcaCreateOrConnectWithoutMarcaInput[]
    createMany?: RepresentanteMarcaCreateManyMarcaInputEnvelope
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutMarcaInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type RepresentanteMarcaUncheckedCreateNestedManyWithoutMarcaInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutMarcaInput, RepresentanteMarcaUncheckedCreateWithoutMarcaInput> | RepresentanteMarcaCreateWithoutMarcaInput[] | RepresentanteMarcaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutMarcaInput | RepresentanteMarcaCreateOrConnectWithoutMarcaInput[]
    createMany?: RepresentanteMarcaCreateManyMarcaInputEnvelope
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
  }

  export type ProdutoUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutMarcaInput | ProdutoUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutMarcaInput | ProdutoUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutMarcaInput | ProdutoUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type RepresentanteMarcaUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutMarcaInput, RepresentanteMarcaUncheckedCreateWithoutMarcaInput> | RepresentanteMarcaCreateWithoutMarcaInput[] | RepresentanteMarcaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutMarcaInput | RepresentanteMarcaCreateOrConnectWithoutMarcaInput[]
    upsert?: RepresentanteMarcaUpsertWithWhereUniqueWithoutMarcaInput | RepresentanteMarcaUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: RepresentanteMarcaCreateManyMarcaInputEnvelope
    set?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    disconnect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    delete?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    update?: RepresentanteMarcaUpdateWithWhereUniqueWithoutMarcaInput | RepresentanteMarcaUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: RepresentanteMarcaUpdateManyWithWhereWithoutMarcaInput | RepresentanteMarcaUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: RepresentanteMarcaScalarWhereInput | RepresentanteMarcaScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutMarcaInput | ProdutoUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutMarcaInput | ProdutoUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutMarcaInput | ProdutoUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type RepresentanteMarcaUncheckedUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutMarcaInput, RepresentanteMarcaUncheckedCreateWithoutMarcaInput> | RepresentanteMarcaCreateWithoutMarcaInput[] | RepresentanteMarcaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutMarcaInput | RepresentanteMarcaCreateOrConnectWithoutMarcaInput[]
    upsert?: RepresentanteMarcaUpsertWithWhereUniqueWithoutMarcaInput | RepresentanteMarcaUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: RepresentanteMarcaCreateManyMarcaInputEnvelope
    set?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    disconnect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    delete?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    update?: RepresentanteMarcaUpdateWithWhereUniqueWithoutMarcaInput | RepresentanteMarcaUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: RepresentanteMarcaUpdateManyWithWhereWithoutMarcaInput | RepresentanteMarcaUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: RepresentanteMarcaScalarWhereInput | RepresentanteMarcaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    connect?: ClienteWhereUniqueInput
  }

  export type RepresentanteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<RepresentanteCreateWithoutPedidoInput, RepresentanteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutPedidoInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type PedidoProdutoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoProdutoCreateWithoutPedidoInput, PedidoProdutoUncheckedCreateWithoutPedidoInput> | PedidoProdutoCreateWithoutPedidoInput[] | PedidoProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutPedidoInput | PedidoProdutoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoProdutoCreateManyPedidoInputEnvelope
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
  }

  export type PedidoProdutoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoProdutoCreateWithoutPedidoInput, PedidoProdutoUncheckedCreateWithoutPedidoInput> | PedidoProdutoCreateWithoutPedidoInput[] | PedidoProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutPedidoInput | PedidoProdutoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoProdutoCreateManyPedidoInputEnvelope
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
  }

  export type EnumStatusPedidoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPedido
  }

  export type ClienteUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    upsert?: ClienteUpsertWithoutPedidoInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidoInput, ClienteUpdateWithoutPedidoInput>, ClienteUncheckedUpdateWithoutPedidoInput>
  }

  export type RepresentanteUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: XOR<RepresentanteCreateWithoutPedidoInput, RepresentanteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutPedidoInput
    upsert?: RepresentanteUpsertWithoutPedidoInput
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutPedidoInput, RepresentanteUpdateWithoutPedidoInput>, RepresentanteUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoProdutoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoProdutoCreateWithoutPedidoInput, PedidoProdutoUncheckedCreateWithoutPedidoInput> | PedidoProdutoCreateWithoutPedidoInput[] | PedidoProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutPedidoInput | PedidoProdutoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoProdutoUpsertWithWhereUniqueWithoutPedidoInput | PedidoProdutoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoProdutoCreateManyPedidoInputEnvelope
    set?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    disconnect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    delete?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    update?: PedidoProdutoUpdateWithWhereUniqueWithoutPedidoInput | PedidoProdutoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoProdutoUpdateManyWithWhereWithoutPedidoInput | PedidoProdutoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoProdutoScalarWhereInput | PedidoProdutoScalarWhereInput[]
  }

  export type PedidoProdutoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoProdutoCreateWithoutPedidoInput, PedidoProdutoUncheckedCreateWithoutPedidoInput> | PedidoProdutoCreateWithoutPedidoInput[] | PedidoProdutoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutPedidoInput | PedidoProdutoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoProdutoUpsertWithWhereUniqueWithoutPedidoInput | PedidoProdutoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoProdutoCreateManyPedidoInputEnvelope
    set?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    disconnect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    delete?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    update?: PedidoProdutoUpdateWithWhereUniqueWithoutPedidoInput | PedidoProdutoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoProdutoUpdateManyWithWhereWithoutPedidoInput | PedidoProdutoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoProdutoScalarWhereInput | PedidoProdutoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutPedidoProdutoInput = {
    create?: XOR<PedidoCreateWithoutPedidoProdutoInput, PedidoUncheckedCreateWithoutPedidoProdutoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPedidoProdutoInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutPedidoProdutoInput = {
    create?: XOR<ProdutoCreateWithoutPedidoProdutoInput, ProdutoUncheckedCreateWithoutPedidoProdutoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidoProdutoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutPedidoProdutoNestedInput = {
    create?: XOR<PedidoCreateWithoutPedidoProdutoInput, PedidoUncheckedCreateWithoutPedidoProdutoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPedidoProdutoInput
    upsert?: PedidoUpsertWithoutPedidoProdutoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPedidoProdutoInput, PedidoUpdateWithoutPedidoProdutoInput>, PedidoUncheckedUpdateWithoutPedidoProdutoInput>
  }

  export type ProdutoUpdateOneRequiredWithoutPedidoProdutoNestedInput = {
    create?: XOR<ProdutoCreateWithoutPedidoProdutoInput, ProdutoUncheckedCreateWithoutPedidoProdutoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutPedidoProdutoInput
    upsert?: ProdutoUpsertWithoutPedidoProdutoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutPedidoProdutoInput, ProdutoUpdateWithoutPedidoProdutoInput>, ProdutoUncheckedUpdateWithoutPedidoProdutoInput>
  }

  export type PedidoProdutoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<PedidoProdutoCreateWithoutProdutoInput, PedidoProdutoUncheckedCreateWithoutProdutoInput> | PedidoProdutoCreateWithoutProdutoInput[] | PedidoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutProdutoInput | PedidoProdutoCreateOrConnectWithoutProdutoInput[]
    createMany?: PedidoProdutoCreateManyProdutoInputEnvelope
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
  }

  export type MarcaCreateNestedOneWithoutProdutoInput = {
    create?: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutProdutoInput
    connect?: MarcaWhereUniqueInput
  }

  export type CategoriaProdutoCreateNestedOneWithoutProdutoInput = {
    create?: XOR<CategoriaProdutoCreateWithoutProdutoInput, CategoriaProdutoUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: CategoriaProdutoCreateOrConnectWithoutProdutoInput
    connect?: CategoriaProdutoWhereUniqueInput
  }

  export type PedidoProdutoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<PedidoProdutoCreateWithoutProdutoInput, PedidoProdutoUncheckedCreateWithoutProdutoInput> | PedidoProdutoCreateWithoutProdutoInput[] | PedidoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutProdutoInput | PedidoProdutoCreateOrConnectWithoutProdutoInput[]
    createMany?: PedidoProdutoCreateManyProdutoInputEnvelope
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoProdutoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<PedidoProdutoCreateWithoutProdutoInput, PedidoProdutoUncheckedCreateWithoutProdutoInput> | PedidoProdutoCreateWithoutProdutoInput[] | PedidoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutProdutoInput | PedidoProdutoCreateOrConnectWithoutProdutoInput[]
    upsert?: PedidoProdutoUpsertWithWhereUniqueWithoutProdutoInput | PedidoProdutoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: PedidoProdutoCreateManyProdutoInputEnvelope
    set?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    disconnect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    delete?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    update?: PedidoProdutoUpdateWithWhereUniqueWithoutProdutoInput | PedidoProdutoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: PedidoProdutoUpdateManyWithWhereWithoutProdutoInput | PedidoProdutoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: PedidoProdutoScalarWhereInput | PedidoProdutoScalarWhereInput[]
  }

  export type MarcaUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutProdutoInput
    upsert?: MarcaUpsertWithoutProdutoInput
    connect?: MarcaWhereUniqueInput
    update?: XOR<XOR<MarcaUpdateToOneWithWhereWithoutProdutoInput, MarcaUpdateWithoutProdutoInput>, MarcaUncheckedUpdateWithoutProdutoInput>
  }

  export type CategoriaProdutoUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<CategoriaProdutoCreateWithoutProdutoInput, CategoriaProdutoUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: CategoriaProdutoCreateOrConnectWithoutProdutoInput
    upsert?: CategoriaProdutoUpsertWithoutProdutoInput
    connect?: CategoriaProdutoWhereUniqueInput
    update?: XOR<XOR<CategoriaProdutoUpdateToOneWithWhereWithoutProdutoInput, CategoriaProdutoUpdateWithoutProdutoInput>, CategoriaProdutoUncheckedUpdateWithoutProdutoInput>
  }

  export type PedidoProdutoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<PedidoProdutoCreateWithoutProdutoInput, PedidoProdutoUncheckedCreateWithoutProdutoInput> | PedidoProdutoCreateWithoutProdutoInput[] | PedidoProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoProdutoCreateOrConnectWithoutProdutoInput | PedidoProdutoCreateOrConnectWithoutProdutoInput[]
    upsert?: PedidoProdutoUpsertWithWhereUniqueWithoutProdutoInput | PedidoProdutoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: PedidoProdutoCreateManyProdutoInputEnvelope
    set?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    disconnect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    delete?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    connect?: PedidoProdutoWhereUniqueInput | PedidoProdutoWhereUniqueInput[]
    update?: PedidoProdutoUpdateWithWhereUniqueWithoutProdutoInput | PedidoProdutoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: PedidoProdutoUpdateManyWithWhereWithoutProdutoInput | PedidoProdutoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: PedidoProdutoScalarWhereInput | PedidoProdutoScalarWhereInput[]
  }

  export type PedidoCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type LoginCreateNestedOneWithoutRepresentanteInput = {
    create?: XOR<LoginCreateWithoutRepresentanteInput, LoginUncheckedCreateWithoutRepresentanteInput>
    connectOrCreate?: LoginCreateOrConnectWithoutRepresentanteInput
    connect?: LoginWhereUniqueInput
  }

  export type RepresentanteMarcaCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutRepresentanteInput, RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput> | RepresentanteMarcaCreateWithoutRepresentanteInput[] | RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput | RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput[]
    createMany?: RepresentanteMarcaCreateManyRepresentanteInputEnvelope
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type RepresentanteMarcaUncheckedCreateNestedManyWithoutRepresentanteInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutRepresentanteInput, RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput> | RepresentanteMarcaCreateWithoutRepresentanteInput[] | RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput | RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput[]
    createMany?: RepresentanteMarcaCreateManyRepresentanteInputEnvelope
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRepresentanteInput | PedidoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRepresentanteInput | PedidoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRepresentanteInput | PedidoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type LoginUpdateOneRequiredWithoutRepresentanteNestedInput = {
    create?: XOR<LoginCreateWithoutRepresentanteInput, LoginUncheckedCreateWithoutRepresentanteInput>
    connectOrCreate?: LoginCreateOrConnectWithoutRepresentanteInput
    upsert?: LoginUpsertWithoutRepresentanteInput
    connect?: LoginWhereUniqueInput
    update?: XOR<XOR<LoginUpdateToOneWithWhereWithoutRepresentanteInput, LoginUpdateWithoutRepresentanteInput>, LoginUncheckedUpdateWithoutRepresentanteInput>
  }

  export type RepresentanteMarcaUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutRepresentanteInput, RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput> | RepresentanteMarcaCreateWithoutRepresentanteInput[] | RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput | RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput[]
    upsert?: RepresentanteMarcaUpsertWithWhereUniqueWithoutRepresentanteInput | RepresentanteMarcaUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: RepresentanteMarcaCreateManyRepresentanteInputEnvelope
    set?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    disconnect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    delete?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    update?: RepresentanteMarcaUpdateWithWhereUniqueWithoutRepresentanteInput | RepresentanteMarcaUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: RepresentanteMarcaUpdateManyWithWhereWithoutRepresentanteInput | RepresentanteMarcaUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: RepresentanteMarcaScalarWhereInput | RepresentanteMarcaScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput> | PedidoCreateWithoutRepresentanteInput[] | PedidoUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRepresentanteInput | PedidoCreateOrConnectWithoutRepresentanteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRepresentanteInput | PedidoUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: PedidoCreateManyRepresentanteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRepresentanteInput | PedidoUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRepresentanteInput | PedidoUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type RepresentanteMarcaUncheckedUpdateManyWithoutRepresentanteNestedInput = {
    create?: XOR<RepresentanteMarcaCreateWithoutRepresentanteInput, RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput> | RepresentanteMarcaCreateWithoutRepresentanteInput[] | RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput[]
    connectOrCreate?: RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput | RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput[]
    upsert?: RepresentanteMarcaUpsertWithWhereUniqueWithoutRepresentanteInput | RepresentanteMarcaUpsertWithWhereUniqueWithoutRepresentanteInput[]
    createMany?: RepresentanteMarcaCreateManyRepresentanteInputEnvelope
    set?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    disconnect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    delete?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    connect?: RepresentanteMarcaWhereUniqueInput | RepresentanteMarcaWhereUniqueInput[]
    update?: RepresentanteMarcaUpdateWithWhereUniqueWithoutRepresentanteInput | RepresentanteMarcaUpdateWithWhereUniqueWithoutRepresentanteInput[]
    updateMany?: RepresentanteMarcaUpdateManyWithWhereWithoutRepresentanteInput | RepresentanteMarcaUpdateManyWithWhereWithoutRepresentanteInput[]
    deleteMany?: RepresentanteMarcaScalarWhereInput | RepresentanteMarcaScalarWhereInput[]
  }

  export type MarcaCreateNestedOneWithoutRepresentanteMarcaInput = {
    create?: XOR<MarcaCreateWithoutRepresentanteMarcaInput, MarcaUncheckedCreateWithoutRepresentanteMarcaInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutRepresentanteMarcaInput
    connect?: MarcaWhereUniqueInput
  }

  export type RepresentanteCreateNestedOneWithoutRepresentanteMarcaInput = {
    create?: XOR<RepresentanteCreateWithoutRepresentanteMarcaInput, RepresentanteUncheckedCreateWithoutRepresentanteMarcaInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutRepresentanteMarcaInput
    connect?: RepresentanteWhereUniqueInput
  }

  export type MarcaUpdateOneRequiredWithoutRepresentanteMarcaNestedInput = {
    create?: XOR<MarcaCreateWithoutRepresentanteMarcaInput, MarcaUncheckedCreateWithoutRepresentanteMarcaInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutRepresentanteMarcaInput
    upsert?: MarcaUpsertWithoutRepresentanteMarcaInput
    connect?: MarcaWhereUniqueInput
    update?: XOR<XOR<MarcaUpdateToOneWithWhereWithoutRepresentanteMarcaInput, MarcaUpdateWithoutRepresentanteMarcaInput>, MarcaUncheckedUpdateWithoutRepresentanteMarcaInput>
  }

  export type RepresentanteUpdateOneRequiredWithoutRepresentanteMarcaNestedInput = {
    create?: XOR<RepresentanteCreateWithoutRepresentanteMarcaInput, RepresentanteUncheckedCreateWithoutRepresentanteMarcaInput>
    connectOrCreate?: RepresentanteCreateOrConnectWithoutRepresentanteMarcaInput
    upsert?: RepresentanteUpsertWithoutRepresentanteMarcaInput
    connect?: RepresentanteWhereUniqueInput
    update?: XOR<XOR<RepresentanteUpdateToOneWithWhereWithoutRepresentanteMarcaInput, RepresentanteUpdateWithoutRepresentanteMarcaInput>, RepresentanteUncheckedUpdateWithoutRepresentanteMarcaInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumStatusUserFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUser | EnumStatusUserFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUserFilter<$PrismaModel> | $Enums.StatusUser
  }

  export type NestedEnumCatClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.CatCliente | EnumCatClienteFieldRefInput<$PrismaModel>
    in?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumCatClienteFilter<$PrismaModel> | $Enums.CatCliente
  }

  export type NestedEnumStatusUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUser | EnumStatusUserFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUser[] | ListEnumStatusUserFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUserWithAggregatesFilter<$PrismaModel> | $Enums.StatusUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUserFilter<$PrismaModel>
    _max?: NestedEnumStatusUserFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCatClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CatCliente | EnumCatClienteFieldRefInput<$PrismaModel>
    in?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.CatCliente[] | ListEnumCatClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumCatClienteWithAggregatesFilter<$PrismaModel> | $Enums.CatCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCatClienteFilter<$PrismaModel>
    _max?: NestedEnumCatClienteFilter<$PrismaModel>
  }

  export type NestedEnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProdutoCreateWithoutCategoriaProdutoInput = {
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    PedidoProduto?: PedidoProdutoCreateNestedManyWithoutProdutoInput
    Marca: MarcaCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutCategoriaProdutoInput = {
    id?: number
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    cnpj_marca: string
    PedidoProduto?: PedidoProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutCategoriaProdutoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutCategoriaProdutoInput, ProdutoUncheckedCreateWithoutCategoriaProdutoInput>
  }

  export type ProdutoCreateManyCategoriaProdutoInputEnvelope = {
    data: ProdutoCreateManyCategoriaProdutoInput | ProdutoCreateManyCategoriaProdutoInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoUpsertWithWhereUniqueWithoutCategoriaProdutoInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutCategoriaProdutoInput, ProdutoUncheckedUpdateWithoutCategoriaProdutoInput>
    create: XOR<ProdutoCreateWithoutCategoriaProdutoInput, ProdutoUncheckedCreateWithoutCategoriaProdutoInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutCategoriaProdutoInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutCategoriaProdutoInput, ProdutoUncheckedUpdateWithoutCategoriaProdutoInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutCategoriaProdutoInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutCategoriaProdutoInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    descricao?: StringFilter<"Produto"> | string
    validade?: StringNullableFilter<"Produto"> | string | null
    peso?: IntNullableFilter<"Produto"> | number | null
    preco?: FloatFilter<"Produto"> | number
    id_cat?: IntFilter<"Produto"> | number
    cnpj_marca?: StringFilter<"Produto"> | string
  }

  export type LoginCreateWithoutClienteInput = {
    password: string
    Representante?: RepresentanteCreateNestedManyWithoutLoginInput
  }

  export type LoginUncheckedCreateWithoutClienteInput = {
    id?: number
    password: string
    Representante?: RepresentanteUncheckedCreateNestedManyWithoutLoginInput
  }

  export type LoginCreateOrConnectWithoutClienteInput = {
    where: LoginWhereUniqueInput
    create: XOR<LoginCreateWithoutClienteInput, LoginUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateWithoutClienteInput = {
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    Representante: RepresentanteCreateNestedOneWithoutPedidoInput
    PedidoProduto?: PedidoProdutoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: number
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_rep: string
    PedidoProduto?: PedidoProdutoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type LoginUpsertWithoutClienteInput = {
    update: XOR<LoginUpdateWithoutClienteInput, LoginUncheckedUpdateWithoutClienteInput>
    create: XOR<LoginCreateWithoutClienteInput, LoginUncheckedCreateWithoutClienteInput>
    where?: LoginWhereInput
  }

  export type LoginUpdateToOneWithWhereWithoutClienteInput = {
    where?: LoginWhereInput
    data: XOR<LoginUpdateWithoutClienteInput, LoginUncheckedUpdateWithoutClienteInput>
  }

  export type LoginUpdateWithoutClienteInput = {
    password?: StringFieldUpdateOperationsInput | string
    Representante?: RepresentanteUpdateManyWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    Representante?: RepresentanteUncheckedUpdateManyWithoutLoginNestedInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    data_pedido?: DateTimeFilter<"Pedido"> | Date | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    valor_total?: FloatFilter<"Pedido"> | number
    cnpj_cli?: StringFilter<"Pedido"> | string
    cnpj_rep?: StringFilter<"Pedido"> | string
  }

  export type ClienteCreateWithoutLoginInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
    Pedido?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutLoginInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
    Pedido?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutLoginInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutLoginInput, ClienteUncheckedCreateWithoutLoginInput>
  }

  export type ClienteCreateManyLoginInputEnvelope = {
    data: ClienteCreateManyLoginInput | ClienteCreateManyLoginInput[]
    skipDuplicates?: boolean
  }

  export type RepresentanteCreateWithoutLoginInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    Pedido?: PedidoCreateNestedManyWithoutRepresentanteInput
    RepresentanteMarca?: RepresentanteMarcaCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutLoginInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    Pedido?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
    RepresentanteMarca?: RepresentanteMarcaUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutLoginInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutLoginInput, RepresentanteUncheckedCreateWithoutLoginInput>
  }

  export type RepresentanteCreateManyLoginInputEnvelope = {
    data: RepresentanteCreateManyLoginInput | RepresentanteCreateManyLoginInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutLoginInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutLoginInput, ClienteUncheckedUpdateWithoutLoginInput>
    create: XOR<ClienteCreateWithoutLoginInput, ClienteUncheckedCreateWithoutLoginInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutLoginInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutLoginInput, ClienteUncheckedUpdateWithoutLoginInput>
  }

  export type ClienteUpdateManyWithWhereWithoutLoginInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutLoginInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    cnpj?: StringFilter<"Cliente"> | string
    razao_social?: StringFilter<"Cliente"> | string
    status?: EnumStatusUserFilter<"Cliente"> | $Enums.StatusUser
    email?: StringFilter<"Cliente"> | string
    data_cadastro?: DateTimeFilter<"Cliente"> | Date | string
    id_log?: IntFilter<"Cliente"> | number
    receita_bruta?: FloatFilter<"Cliente"> | number
    categoria_cliente?: EnumCatClienteFilter<"Cliente"> | $Enums.CatCliente
  }

  export type RepresentanteUpsertWithWhereUniqueWithoutLoginInput = {
    where: RepresentanteWhereUniqueInput
    update: XOR<RepresentanteUpdateWithoutLoginInput, RepresentanteUncheckedUpdateWithoutLoginInput>
    create: XOR<RepresentanteCreateWithoutLoginInput, RepresentanteUncheckedCreateWithoutLoginInput>
  }

  export type RepresentanteUpdateWithWhereUniqueWithoutLoginInput = {
    where: RepresentanteWhereUniqueInput
    data: XOR<RepresentanteUpdateWithoutLoginInput, RepresentanteUncheckedUpdateWithoutLoginInput>
  }

  export type RepresentanteUpdateManyWithWhereWithoutLoginInput = {
    where: RepresentanteScalarWhereInput
    data: XOR<RepresentanteUpdateManyMutationInput, RepresentanteUncheckedUpdateManyWithoutLoginInput>
  }

  export type RepresentanteScalarWhereInput = {
    AND?: RepresentanteScalarWhereInput | RepresentanteScalarWhereInput[]
    OR?: RepresentanteScalarWhereInput[]
    NOT?: RepresentanteScalarWhereInput | RepresentanteScalarWhereInput[]
    cnpj?: StringFilter<"Representante"> | string
    razao_social?: StringFilter<"Representante"> | string
    status?: EnumStatusUserFilter<"Representante"> | $Enums.StatusUser
    email?: StringFilter<"Representante"> | string
    data_cadastro?: DateTimeFilter<"Representante"> | Date | string
    id_log?: IntFilter<"Representante"> | number
  }

  export type ProdutoCreateWithoutMarcaInput = {
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    PedidoProduto?: PedidoProdutoCreateNestedManyWithoutProdutoInput
    CategoriaProduto: CategoriaProdutoCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutMarcaInput = {
    id?: number
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    id_cat: number
    PedidoProduto?: PedidoProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutMarcaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput>
  }

  export type ProdutoCreateManyMarcaInputEnvelope = {
    data: ProdutoCreateManyMarcaInput | ProdutoCreateManyMarcaInput[]
    skipDuplicates?: boolean
  }

  export type RepresentanteMarcaCreateWithoutMarcaInput = {
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
    Representante: RepresentanteCreateNestedOneWithoutRepresentanteMarcaInput
  }

  export type RepresentanteMarcaUncheckedCreateWithoutMarcaInput = {
    cnpjRepresentante: string
    id?: number
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
  }

  export type RepresentanteMarcaCreateOrConnectWithoutMarcaInput = {
    where: RepresentanteMarcaWhereUniqueInput
    create: XOR<RepresentanteMarcaCreateWithoutMarcaInput, RepresentanteMarcaUncheckedCreateWithoutMarcaInput>
  }

  export type RepresentanteMarcaCreateManyMarcaInputEnvelope = {
    data: RepresentanteMarcaCreateManyMarcaInput | RepresentanteMarcaCreateManyMarcaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoUpsertWithWhereUniqueWithoutMarcaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutMarcaInput, ProdutoUncheckedUpdateWithoutMarcaInput>
    create: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutMarcaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutMarcaInput, ProdutoUncheckedUpdateWithoutMarcaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutMarcaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutMarcaInput>
  }

  export type RepresentanteMarcaUpsertWithWhereUniqueWithoutMarcaInput = {
    where: RepresentanteMarcaWhereUniqueInput
    update: XOR<RepresentanteMarcaUpdateWithoutMarcaInput, RepresentanteMarcaUncheckedUpdateWithoutMarcaInput>
    create: XOR<RepresentanteMarcaCreateWithoutMarcaInput, RepresentanteMarcaUncheckedCreateWithoutMarcaInput>
  }

  export type RepresentanteMarcaUpdateWithWhereUniqueWithoutMarcaInput = {
    where: RepresentanteMarcaWhereUniqueInput
    data: XOR<RepresentanteMarcaUpdateWithoutMarcaInput, RepresentanteMarcaUncheckedUpdateWithoutMarcaInput>
  }

  export type RepresentanteMarcaUpdateManyWithWhereWithoutMarcaInput = {
    where: RepresentanteMarcaScalarWhereInput
    data: XOR<RepresentanteMarcaUpdateManyMutationInput, RepresentanteMarcaUncheckedUpdateManyWithoutMarcaInput>
  }

  export type RepresentanteMarcaScalarWhereInput = {
    AND?: RepresentanteMarcaScalarWhereInput | RepresentanteMarcaScalarWhereInput[]
    OR?: RepresentanteMarcaScalarWhereInput[]
    NOT?: RepresentanteMarcaScalarWhereInput | RepresentanteMarcaScalarWhereInput[]
    cnpjRepresentante?: StringFilter<"RepresentanteMarca"> | string
    id?: IntFilter<"RepresentanteMarca"> | number
    cnpjMarca?: StringFilter<"RepresentanteMarca"> | string
    categoria_representante?: EnumCatClienteFilter<"RepresentanteMarca"> | $Enums.CatCliente
    data_cadastro?: DateTimeFilter<"RepresentanteMarca"> | Date | string
  }

  export type ClienteCreateWithoutPedidoInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
    Login: LoginCreateNestedOneWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPedidoInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    id_log: number
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
  }

  export type ClienteCreateOrConnectWithoutPedidoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
  }

  export type RepresentanteCreateWithoutPedidoInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    Login: LoginCreateNestedOneWithoutRepresentanteInput
    RepresentanteMarca?: RepresentanteMarcaCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutPedidoInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    id_log: number
    RepresentanteMarca?: RepresentanteMarcaUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutPedidoInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutPedidoInput, RepresentanteUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoProdutoCreateWithoutPedidoInput = {
    quantidade: number
    Produto: ProdutoCreateNestedOneWithoutPedidoProdutoInput
  }

  export type PedidoProdutoUncheckedCreateWithoutPedidoInput = {
    id_prod: number
    quantidade: number
  }

  export type PedidoProdutoCreateOrConnectWithoutPedidoInput = {
    where: PedidoProdutoWhereUniqueInput
    create: XOR<PedidoProdutoCreateWithoutPedidoInput, PedidoProdutoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoProdutoCreateManyPedidoInputEnvelope = {
    data: PedidoProdutoCreateManyPedidoInput | PedidoProdutoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidoInput = {
    update: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
  }

  export type ClienteUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    Login?: LoginUpdateOneRequiredWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_log?: IntFieldUpdateOperationsInput | number
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
  }

  export type RepresentanteUpsertWithoutPedidoInput = {
    update: XOR<RepresentanteUpdateWithoutPedidoInput, RepresentanteUncheckedUpdateWithoutPedidoInput>
    create: XOR<RepresentanteCreateWithoutPedidoInput, RepresentanteUncheckedCreateWithoutPedidoInput>
    where?: RepresentanteWhereInput
  }

  export type RepresentanteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: RepresentanteWhereInput
    data: XOR<RepresentanteUpdateWithoutPedidoInput, RepresentanteUncheckedUpdateWithoutPedidoInput>
  }

  export type RepresentanteUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Login?: LoginUpdateOneRequiredWithoutRepresentanteNestedInput
    RepresentanteMarca?: RepresentanteMarcaUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_log?: IntFieldUpdateOperationsInput | number
    RepresentanteMarca?: RepresentanteMarcaUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type PedidoProdutoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoProdutoWhereUniqueInput
    update: XOR<PedidoProdutoUpdateWithoutPedidoInput, PedidoProdutoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoProdutoCreateWithoutPedidoInput, PedidoProdutoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoProdutoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoProdutoWhereUniqueInput
    data: XOR<PedidoProdutoUpdateWithoutPedidoInput, PedidoProdutoUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoProdutoUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoProdutoScalarWhereInput
    data: XOR<PedidoProdutoUpdateManyMutationInput, PedidoProdutoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoProdutoScalarWhereInput = {
    AND?: PedidoProdutoScalarWhereInput | PedidoProdutoScalarWhereInput[]
    OR?: PedidoProdutoScalarWhereInput[]
    NOT?: PedidoProdutoScalarWhereInput | PedidoProdutoScalarWhereInput[]
    id_prod?: IntFilter<"PedidoProduto"> | number
    id_ped?: IntFilter<"PedidoProduto"> | number
    quantidade?: IntFilter<"PedidoProduto"> | number
  }

  export type PedidoCreateWithoutPedidoProdutoInput = {
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    Representante: RepresentanteCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPedidoProdutoInput = {
    id?: number
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_cli: string
    cnpj_rep: string
  }

  export type PedidoCreateOrConnectWithoutPedidoProdutoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPedidoProdutoInput, PedidoUncheckedCreateWithoutPedidoProdutoInput>
  }

  export type ProdutoCreateWithoutPedidoProdutoInput = {
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    Marca: MarcaCreateNestedOneWithoutProdutoInput
    CategoriaProduto: CategoriaProdutoCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutPedidoProdutoInput = {
    id?: number
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    id_cat: number
    cnpj_marca: string
  }

  export type ProdutoCreateOrConnectWithoutPedidoProdutoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutPedidoProdutoInput, ProdutoUncheckedCreateWithoutPedidoProdutoInput>
  }

  export type PedidoUpsertWithoutPedidoProdutoInput = {
    update: XOR<PedidoUpdateWithoutPedidoProdutoInput, PedidoUncheckedUpdateWithoutPedidoProdutoInput>
    create: XOR<PedidoCreateWithoutPedidoProdutoInput, PedidoUncheckedCreateWithoutPedidoProdutoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPedidoProdutoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPedidoProdutoInput, PedidoUncheckedUpdateWithoutPedidoProdutoInput>
  }

  export type PedidoUpdateWithoutPedidoProdutoInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    Representante?: RepresentanteUpdateOneRequiredWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPedidoProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    cnpj_cli?: StringFieldUpdateOperationsInput | string
    cnpj_rep?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUpsertWithoutPedidoProdutoInput = {
    update: XOR<ProdutoUpdateWithoutPedidoProdutoInput, ProdutoUncheckedUpdateWithoutPedidoProdutoInput>
    create: XOR<ProdutoCreateWithoutPedidoProdutoInput, ProdutoUncheckedCreateWithoutPedidoProdutoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutPedidoProdutoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutPedidoProdutoInput, ProdutoUncheckedUpdateWithoutPedidoProdutoInput>
  }

  export type ProdutoUpdateWithoutPedidoProdutoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    Marca?: MarcaUpdateOneRequiredWithoutProdutoNestedInput
    CategoriaProduto?: CategoriaProdutoUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutPedidoProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    id_cat?: IntFieldUpdateOperationsInput | number
    cnpj_marca?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoProdutoCreateWithoutProdutoInput = {
    quantidade: number
    Pedido: PedidoCreateNestedOneWithoutPedidoProdutoInput
  }

  export type PedidoProdutoUncheckedCreateWithoutProdutoInput = {
    id_ped: number
    quantidade: number
  }

  export type PedidoProdutoCreateOrConnectWithoutProdutoInput = {
    where: PedidoProdutoWhereUniqueInput
    create: XOR<PedidoProdutoCreateWithoutProdutoInput, PedidoProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type PedidoProdutoCreateManyProdutoInputEnvelope = {
    data: PedidoProdutoCreateManyProdutoInput | PedidoProdutoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type MarcaCreateWithoutProdutoInput = {
    razao_social: string
    cnpj: string
    RepresentanteMarca?: RepresentanteMarcaCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUncheckedCreateWithoutProdutoInput = {
    razao_social: string
    cnpj: string
    RepresentanteMarca?: RepresentanteMarcaUncheckedCreateNestedManyWithoutMarcaInput
  }

  export type MarcaCreateOrConnectWithoutProdutoInput = {
    where: MarcaWhereUniqueInput
    create: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
  }

  export type CategoriaProdutoCreateWithoutProdutoInput = {
    descricao: string
  }

  export type CategoriaProdutoUncheckedCreateWithoutProdutoInput = {
    id?: number
    descricao: string
  }

  export type CategoriaProdutoCreateOrConnectWithoutProdutoInput = {
    where: CategoriaProdutoWhereUniqueInput
    create: XOR<CategoriaProdutoCreateWithoutProdutoInput, CategoriaProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type PedidoProdutoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: PedidoProdutoWhereUniqueInput
    update: XOR<PedidoProdutoUpdateWithoutProdutoInput, PedidoProdutoUncheckedUpdateWithoutProdutoInput>
    create: XOR<PedidoProdutoCreateWithoutProdutoInput, PedidoProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type PedidoProdutoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: PedidoProdutoWhereUniqueInput
    data: XOR<PedidoProdutoUpdateWithoutProdutoInput, PedidoProdutoUncheckedUpdateWithoutProdutoInput>
  }

  export type PedidoProdutoUpdateManyWithWhereWithoutProdutoInput = {
    where: PedidoProdutoScalarWhereInput
    data: XOR<PedidoProdutoUpdateManyMutationInput, PedidoProdutoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type MarcaUpsertWithoutProdutoInput = {
    update: XOR<MarcaUpdateWithoutProdutoInput, MarcaUncheckedUpdateWithoutProdutoInput>
    create: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
    where?: MarcaWhereInput
  }

  export type MarcaUpdateToOneWithWhereWithoutProdutoInput = {
    where?: MarcaWhereInput
    data: XOR<MarcaUpdateWithoutProdutoInput, MarcaUncheckedUpdateWithoutProdutoInput>
  }

  export type MarcaUpdateWithoutProdutoInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    RepresentanteMarca?: RepresentanteMarcaUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaUncheckedUpdateWithoutProdutoInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    RepresentanteMarca?: RepresentanteMarcaUncheckedUpdateManyWithoutMarcaNestedInput
  }

  export type CategoriaProdutoUpsertWithoutProdutoInput = {
    update: XOR<CategoriaProdutoUpdateWithoutProdutoInput, CategoriaProdutoUncheckedUpdateWithoutProdutoInput>
    create: XOR<CategoriaProdutoCreateWithoutProdutoInput, CategoriaProdutoUncheckedCreateWithoutProdutoInput>
    where?: CategoriaProdutoWhereInput
  }

  export type CategoriaProdutoUpdateToOneWithWhereWithoutProdutoInput = {
    where?: CategoriaProdutoWhereInput
    data: XOR<CategoriaProdutoUpdateWithoutProdutoInput, CategoriaProdutoUncheckedUpdateWithoutProdutoInput>
  }

  export type CategoriaProdutoUpdateWithoutProdutoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaProdutoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateWithoutRepresentanteInput = {
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    Cliente: ClienteCreateNestedOneWithoutPedidoInput
    PedidoProduto?: PedidoProdutoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutRepresentanteInput = {
    id?: number
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_cli: string
    PedidoProduto?: PedidoProdutoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutRepresentanteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput>
  }

  export type PedidoCreateManyRepresentanteInputEnvelope = {
    data: PedidoCreateManyRepresentanteInput | PedidoCreateManyRepresentanteInput[]
    skipDuplicates?: boolean
  }

  export type LoginCreateWithoutRepresentanteInput = {
    password: string
    Cliente?: ClienteCreateNestedManyWithoutLoginInput
  }

  export type LoginUncheckedCreateWithoutRepresentanteInput = {
    id?: number
    password: string
    Cliente?: ClienteUncheckedCreateNestedManyWithoutLoginInput
  }

  export type LoginCreateOrConnectWithoutRepresentanteInput = {
    where: LoginWhereUniqueInput
    create: XOR<LoginCreateWithoutRepresentanteInput, LoginUncheckedCreateWithoutRepresentanteInput>
  }

  export type RepresentanteMarcaCreateWithoutRepresentanteInput = {
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
    Marca: MarcaCreateNestedOneWithoutRepresentanteMarcaInput
  }

  export type RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput = {
    id?: number
    cnpjMarca: string
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
  }

  export type RepresentanteMarcaCreateOrConnectWithoutRepresentanteInput = {
    where: RepresentanteMarcaWhereUniqueInput
    create: XOR<RepresentanteMarcaCreateWithoutRepresentanteInput, RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput>
  }

  export type RepresentanteMarcaCreateManyRepresentanteInputEnvelope = {
    data: RepresentanteMarcaCreateManyRepresentanteInput | RepresentanteMarcaCreateManyRepresentanteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutRepresentanteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutRepresentanteInput, PedidoUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<PedidoCreateWithoutRepresentanteInput, PedidoUncheckedCreateWithoutRepresentanteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutRepresentanteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutRepresentanteInput, PedidoUncheckedUpdateWithoutRepresentanteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutRepresentanteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutRepresentanteInput>
  }

  export type LoginUpsertWithoutRepresentanteInput = {
    update: XOR<LoginUpdateWithoutRepresentanteInput, LoginUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<LoginCreateWithoutRepresentanteInput, LoginUncheckedCreateWithoutRepresentanteInput>
    where?: LoginWhereInput
  }

  export type LoginUpdateToOneWithWhereWithoutRepresentanteInput = {
    where?: LoginWhereInput
    data: XOR<LoginUpdateWithoutRepresentanteInput, LoginUncheckedUpdateWithoutRepresentanteInput>
  }

  export type LoginUpdateWithoutRepresentanteInput = {
    password?: StringFieldUpdateOperationsInput | string
    Cliente?: ClienteUpdateManyWithoutLoginNestedInput
  }

  export type LoginUncheckedUpdateWithoutRepresentanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    Cliente?: ClienteUncheckedUpdateManyWithoutLoginNestedInput
  }

  export type RepresentanteMarcaUpsertWithWhereUniqueWithoutRepresentanteInput = {
    where: RepresentanteMarcaWhereUniqueInput
    update: XOR<RepresentanteMarcaUpdateWithoutRepresentanteInput, RepresentanteMarcaUncheckedUpdateWithoutRepresentanteInput>
    create: XOR<RepresentanteMarcaCreateWithoutRepresentanteInput, RepresentanteMarcaUncheckedCreateWithoutRepresentanteInput>
  }

  export type RepresentanteMarcaUpdateWithWhereUniqueWithoutRepresentanteInput = {
    where: RepresentanteMarcaWhereUniqueInput
    data: XOR<RepresentanteMarcaUpdateWithoutRepresentanteInput, RepresentanteMarcaUncheckedUpdateWithoutRepresentanteInput>
  }

  export type RepresentanteMarcaUpdateManyWithWhereWithoutRepresentanteInput = {
    where: RepresentanteMarcaScalarWhereInput
    data: XOR<RepresentanteMarcaUpdateManyMutationInput, RepresentanteMarcaUncheckedUpdateManyWithoutRepresentanteInput>
  }

  export type MarcaCreateWithoutRepresentanteMarcaInput = {
    razao_social: string
    cnpj: string
    Produto?: ProdutoCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUncheckedCreateWithoutRepresentanteMarcaInput = {
    razao_social: string
    cnpj: string
    Produto?: ProdutoUncheckedCreateNestedManyWithoutMarcaInput
  }

  export type MarcaCreateOrConnectWithoutRepresentanteMarcaInput = {
    where: MarcaWhereUniqueInput
    create: XOR<MarcaCreateWithoutRepresentanteMarcaInput, MarcaUncheckedCreateWithoutRepresentanteMarcaInput>
  }

  export type RepresentanteCreateWithoutRepresentanteMarcaInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    Pedido?: PedidoCreateNestedManyWithoutRepresentanteInput
    Login: LoginCreateNestedOneWithoutRepresentanteInput
  }

  export type RepresentanteUncheckedCreateWithoutRepresentanteMarcaInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    id_log: number
    Pedido?: PedidoUncheckedCreateNestedManyWithoutRepresentanteInput
  }

  export type RepresentanteCreateOrConnectWithoutRepresentanteMarcaInput = {
    where: RepresentanteWhereUniqueInput
    create: XOR<RepresentanteCreateWithoutRepresentanteMarcaInput, RepresentanteUncheckedCreateWithoutRepresentanteMarcaInput>
  }

  export type MarcaUpsertWithoutRepresentanteMarcaInput = {
    update: XOR<MarcaUpdateWithoutRepresentanteMarcaInput, MarcaUncheckedUpdateWithoutRepresentanteMarcaInput>
    create: XOR<MarcaCreateWithoutRepresentanteMarcaInput, MarcaUncheckedCreateWithoutRepresentanteMarcaInput>
    where?: MarcaWhereInput
  }

  export type MarcaUpdateToOneWithWhereWithoutRepresentanteMarcaInput = {
    where?: MarcaWhereInput
    data: XOR<MarcaUpdateWithoutRepresentanteMarcaInput, MarcaUncheckedUpdateWithoutRepresentanteMarcaInput>
  }

  export type MarcaUpdateWithoutRepresentanteMarcaInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaUncheckedUpdateWithoutRepresentanteMarcaInput = {
    razao_social?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUncheckedUpdateManyWithoutMarcaNestedInput
  }

  export type RepresentanteUpsertWithoutRepresentanteMarcaInput = {
    update: XOR<RepresentanteUpdateWithoutRepresentanteMarcaInput, RepresentanteUncheckedUpdateWithoutRepresentanteMarcaInput>
    create: XOR<RepresentanteCreateWithoutRepresentanteMarcaInput, RepresentanteUncheckedCreateWithoutRepresentanteMarcaInput>
    where?: RepresentanteWhereInput
  }

  export type RepresentanteUpdateToOneWithWhereWithoutRepresentanteMarcaInput = {
    where?: RepresentanteWhereInput
    data: XOR<RepresentanteUpdateWithoutRepresentanteMarcaInput, RepresentanteUncheckedUpdateWithoutRepresentanteMarcaInput>
  }

  export type RepresentanteUpdateWithoutRepresentanteMarcaInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUpdateManyWithoutRepresentanteNestedInput
    Login?: LoginUpdateOneRequiredWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutRepresentanteMarcaInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    id_log?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type ProdutoCreateManyCategoriaProdutoInput = {
    id?: number
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    cnpj_marca: string
  }

  export type ProdutoUpdateWithoutCategoriaProdutoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    PedidoProduto?: PedidoProdutoUpdateManyWithoutProdutoNestedInput
    Marca?: MarcaUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutCategoriaProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    cnpj_marca?: StringFieldUpdateOperationsInput | string
    PedidoProduto?: PedidoProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    cnpj_marca?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateManyClienteInput = {
    id?: number
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_rep: string
  }

  export type PedidoUpdateWithoutClienteInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    Representante?: RepresentanteUpdateOneRequiredWithoutPedidoNestedInput
    PedidoProduto?: PedidoProdutoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    cnpj_rep?: StringFieldUpdateOperationsInput | string
    PedidoProduto?: PedidoProdutoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    cnpj_rep?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateManyLoginInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
    receita_bruta: number
    categoria_cliente: $Enums.CatCliente
  }

  export type RepresentanteCreateManyLoginInput = {
    cnpj: string
    razao_social: string
    status: $Enums.StatusUser
    email: string
    data_cadastro?: Date | string
  }

  export type ClienteUpdateWithoutLoginInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    Pedido?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutLoginInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    Pedido?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutLoginInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    receita_bruta?: FloatFieldUpdateOperationsInput | number
    categoria_cliente?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
  }

  export type RepresentanteUpdateWithoutLoginInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUpdateManyWithoutRepresentanteNestedInput
    RepresentanteMarca?: RepresentanteMarcaUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateWithoutLoginInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Pedido?: PedidoUncheckedUpdateManyWithoutRepresentanteNestedInput
    RepresentanteMarca?: RepresentanteMarcaUncheckedUpdateManyWithoutRepresentanteNestedInput
  }

  export type RepresentanteUncheckedUpdateManyWithoutLoginInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusUserFieldUpdateOperationsInput | $Enums.StatusUser
    email?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateManyMarcaInput = {
    id?: number
    descricao: string
    validade?: string | null
    peso?: number | null
    preco: number
    id_cat: number
  }

  export type RepresentanteMarcaCreateManyMarcaInput = {
    cnpjRepresentante: string
    id?: number
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
  }

  export type ProdutoUpdateWithoutMarcaInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    PedidoProduto?: PedidoProdutoUpdateManyWithoutProdutoNestedInput
    CategoriaProduto?: CategoriaProdutoUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    id_cat?: IntFieldUpdateOperationsInput | number
    PedidoProduto?: PedidoProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    validade?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableIntFieldUpdateOperationsInput | number | null
    preco?: FloatFieldUpdateOperationsInput | number
    id_cat?: IntFieldUpdateOperationsInput | number
  }

  export type RepresentanteMarcaUpdateWithoutMarcaInput = {
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Representante?: RepresentanteUpdateOneRequiredWithoutRepresentanteMarcaNestedInput
  }

  export type RepresentanteMarcaUncheckedUpdateWithoutMarcaInput = {
    cnpjRepresentante?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteMarcaUncheckedUpdateManyWithoutMarcaInput = {
    cnpjRepresentante?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoProdutoCreateManyPedidoInput = {
    id_prod: number
    quantidade: number
  }

  export type PedidoProdutoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    Produto?: ProdutoUpdateOneRequiredWithoutPedidoProdutoNestedInput
  }

  export type PedidoProdutoUncheckedUpdateWithoutPedidoInput = {
    id_prod?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProdutoUncheckedUpdateManyWithoutPedidoInput = {
    id_prod?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProdutoCreateManyProdutoInput = {
    id_ped: number
    quantidade: number
  }

  export type PedidoProdutoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    Pedido?: PedidoUpdateOneRequiredWithoutPedidoProdutoNestedInput
  }

  export type PedidoProdutoUncheckedUpdateWithoutProdutoInput = {
    id_ped?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProdutoUncheckedUpdateManyWithoutProdutoInput = {
    id_ped?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyRepresentanteInput = {
    id?: number
    data_pedido?: Date | string
    status: $Enums.StatusPedido
    valor_total: number
    cnpj_cli: string
  }

  export type RepresentanteMarcaCreateManyRepresentanteInput = {
    id?: number
    cnpjMarca: string
    categoria_representante: $Enums.CatCliente
    data_cadastro?: Date | string
  }

  export type PedidoUpdateWithoutRepresentanteInput = {
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    Cliente?: ClienteUpdateOneRequiredWithoutPedidoNestedInput
    PedidoProduto?: PedidoProdutoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutRepresentanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    cnpj_cli?: StringFieldUpdateOperationsInput | string
    PedidoProduto?: PedidoProdutoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutRepresentanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    valor_total?: FloatFieldUpdateOperationsInput | number
    cnpj_cli?: StringFieldUpdateOperationsInput | string
  }

  export type RepresentanteMarcaUpdateWithoutRepresentanteInput = {
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    Marca?: MarcaUpdateOneRequiredWithoutRepresentanteMarcaNestedInput
  }

  export type RepresentanteMarcaUncheckedUpdateWithoutRepresentanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpjMarca?: StringFieldUpdateOperationsInput | string
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepresentanteMarcaUncheckedUpdateManyWithoutRepresentanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpjMarca?: StringFieldUpdateOperationsInput | string
    categoria_representante?: EnumCatClienteFieldUpdateOperationsInput | $Enums.CatCliente
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
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