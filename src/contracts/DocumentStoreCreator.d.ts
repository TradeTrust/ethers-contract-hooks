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

interface DocumentStoreCreatorInterface extends Interface {
  functions: {
    deploy: TypedFunctionDescription<{encode([name]: [string]): string}>;
  };

  events: {
    DocumentStoreDeployed: TypedEventDescription<{
      encodeTopics([instance, creator]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class DocumentStoreCreator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DocumentStoreCreator;
  attach(addressOrName: string): DocumentStoreCreator;
  deployed(): Promise<DocumentStoreCreator>;

  on(event: EventFilter | string, listener: Listener): DocumentStoreCreator;
  once(event: EventFilter | string, listener: Listener): DocumentStoreCreator;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DocumentStoreCreator;
  removeAllListeners(eventName: EventFilter | string): DocumentStoreCreator;
  removeListener(eventName: any, listener: Listener): DocumentStoreCreator;

  interface: DocumentStoreCreatorInterface;

  functions: {
    deploy(
      name: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  deploy(
    name: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    DocumentStoreDeployed(
      instance: string | null,
      creator: string | null
    ): EventFilter;
  };

  estimate: {
    deploy(name: string): Promise<BigNumber>;
  };
}