// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type {
  GenericConstructorTx,
  GenericConstructorTxCall,
  ConstructorTxOptions,
  GenericInstantiateSubmittableExtrinsic,
} from "dedot/contracts";

export interface ConstructorTx<ChainApi extends GenericSubstrateApi>
  extends GenericConstructorTx<ChainApi> {
  /**
   * Constructor that initializes the `bool` value to the given `init_value`.
   *
   * @param {boolean} initValue
   * @param {ConstructorTxOptions} options
   *
   * @selector 0x9bae9d5e
   **/
  new: GenericConstructorTxCall<
    ChainApi,
    (
      initValue: boolean,
      options: ConstructorTxOptions,
    ) => GenericInstantiateSubmittableExtrinsic<ChainApi>
  >;

  /**
   * Constructor that initializes the `bool` value to `false`.
   *
   * Constructors can delegate to other constructors.
   *
   * @param {ConstructorTxOptions} options
   *
   * @selector 0xed4b9d1b
   **/
  default: GenericConstructorTxCall<
    ChainApi,
    (
      options: ConstructorTxOptions,
    ) => GenericInstantiateSubmittableExtrinsic<ChainApi>
  >;
}
