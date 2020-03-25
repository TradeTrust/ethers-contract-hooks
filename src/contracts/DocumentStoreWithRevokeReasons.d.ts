/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from "ethers";
import {Listener, Provider} from "ethers/providers";
import {Arrayish, BigNumber, BigNumberish, Interface} from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface DocumentStoreWithRevokeReasonsInterface extends Interface {
  functions: {
    bulkIssue: TypedFunctionDescription<{
      encode([documents]: [Arrayish[]]): string;
    }>;

    documentIssued: TypedFunctionDescription<{encode([]: [Arrayish]): string}>;

    documentRevoked: TypedFunctionDescription<{encode([]: [Arrayish]): string}>;

    getIssuedBlock: TypedFunctionDescription<{
      encode([document]: [Arrayish]): string;
    }>;

    initialize: TypedFunctionDescription<{
      encode([_name, owner]: [string, string]): string;
    }>;

    isIssued: TypedFunctionDescription<{
      encode([document]: [Arrayish]): string;
    }>;

    isIssuedBefore: TypedFunctionDescription<{
      encode([document, blockNumber]: [Arrayish, BigNumberish]): string;
    }>;

    isOwner: TypedFunctionDescription<{encode([]: []): string}>;

    isRevoked: TypedFunctionDescription<{
      encode([document]: [Arrayish]): string;
    }>;

    isRevokedBefore: TypedFunctionDescription<{
      encode([document, blockNumber]: [Arrayish, BigNumberish]): string;
    }>;

    issue: TypedFunctionDescription<{encode([document]: [Arrayish]): string}>;

    name: TypedFunctionDescription<{encode([]: []): string}>;

    owner: TypedFunctionDescription<{encode([]: []): string}>;

    renounceOwnership: TypedFunctionDescription<{encode([]: []): string}>;

    revokeReason: TypedFunctionDescription<{encode([]: [Arrayish]): string}>;

    transferOwnership: TypedFunctionDescription<{
      encode([newOwner]: [string]): string;
    }>;

    version: TypedFunctionDescription<{encode([]: []): string}>;

    revoke: TypedFunctionDescription<{encode([document]: [Arrayish]): string}>;

    bulkRevoke: TypedFunctionDescription<{
      encode([documents]: [Arrayish[]]): string;
    }>;
  };

  events: {
    DocumentIssued: TypedEventDescription<{
      encodeTopics([document]: [Arrayish | null]): string[];
    }>;

    DocumentRevoked: TypedEventDescription<{
      encodeTopics([document]: [Arrayish | null]): string[];
    }>;

    DocumentRevokedWithReason: TypedEventDescription<{
      encodeTopics([document, reason]: [Arrayish | null, null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class DocumentStoreWithRevokeReasons extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): DocumentStoreWithRevokeReasons;
  attach(addressOrName: string): DocumentStoreWithRevokeReasons;
  deployed(): Promise<DocumentStoreWithRevokeReasons>;

  on(
    event: EventFilter | string,
    listener: Listener
  ): DocumentStoreWithRevokeReasons;
  once(
    event: EventFilter | string,
    listener: Listener
  ): DocumentStoreWithRevokeReasons;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DocumentStoreWithRevokeReasons;
  removeAllListeners(
    eventName: EventFilter | string
  ): DocumentStoreWithRevokeReasons;
  removeListener(
    eventName: any,
    listener: Listener
  ): DocumentStoreWithRevokeReasons;

  interface: DocumentStoreWithRevokeReasonsInterface;

  functions: {
    bulkIssue(
      documents: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    documentIssued(arg0: Arrayish): Promise<BigNumber>;

    documentRevoked(arg0: Arrayish): Promise<BigNumber>;

    getIssuedBlock(document: Arrayish): Promise<BigNumber>;

    initialize(
      _name: string,
      owner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isIssued(document: Arrayish): Promise<boolean>;

    isIssuedBefore(
      document: Arrayish,
      blockNumber: BigNumberish
    ): Promise<boolean>;

    isOwner(): Promise<boolean>;

    isRevoked(document: Arrayish): Promise<boolean>;

    isRevokedBefore(
      document: Arrayish,
      blockNumber: BigNumberish
    ): Promise<boolean>;

    issue(
      document: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;

    owner(): Promise<string>;

    renounceOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    revokeReason(arg0: Arrayish): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    version(): Promise<string>;

    revoke(
      document: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    bulkRevoke(
      documents: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  bulkIssue(
    documents: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  documentIssued(arg0: Arrayish): Promise<BigNumber>;

  documentRevoked(arg0: Arrayish): Promise<BigNumber>;

  getIssuedBlock(document: Arrayish): Promise<BigNumber>;

  initialize(
    _name: string,
    owner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isIssued(document: Arrayish): Promise<boolean>;

  isIssuedBefore(
    document: Arrayish,
    blockNumber: BigNumberish
  ): Promise<boolean>;

  isOwner(): Promise<boolean>;

  isRevoked(document: Arrayish): Promise<boolean>;

  isRevokedBefore(
    document: Arrayish,
    blockNumber: BigNumberish
  ): Promise<boolean>;

  issue(
    document: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  name(): Promise<string>;

  owner(): Promise<string>;

  renounceOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  revokeReason(arg0: Arrayish): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  version(): Promise<string>;

  revoke(
    document: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  bulkRevoke(
    documents: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    DocumentIssued(document: Arrayish | null): EventFilter;

    DocumentRevoked(document: Arrayish | null): EventFilter;

    DocumentRevokedWithReason(
      document: Arrayish | null,
      reason: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    bulkIssue(documents: Arrayish[]): Promise<BigNumber>;

    documentIssued(arg0: Arrayish): Promise<BigNumber>;

    documentRevoked(arg0: Arrayish): Promise<BigNumber>;

    getIssuedBlock(document: Arrayish): Promise<BigNumber>;

    initialize(_name: string, owner: string): Promise<BigNumber>;

    isIssued(document: Arrayish): Promise<BigNumber>;

    isIssuedBefore(
      document: Arrayish,
      blockNumber: BigNumberish
    ): Promise<BigNumber>;

    isOwner(): Promise<BigNumber>;

    isRevoked(document: Arrayish): Promise<BigNumber>;

    isRevokedBefore(
      document: Arrayish,
      blockNumber: BigNumberish
    ): Promise<BigNumber>;

    issue(document: Arrayish): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    renounceOwnership(): Promise<BigNumber>;

    revokeReason(arg0: Arrayish): Promise<BigNumber>;

    transferOwnership(newOwner: string): Promise<BigNumber>;

    version(): Promise<BigNumber>;

    revoke(document: Arrayish): Promise<BigNumber>;

    bulkRevoke(documents: Arrayish[]): Promise<BigNumber>;
  };
}