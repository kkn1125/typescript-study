// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender?: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const lynn = new Human("Lynn", 18, "female");

// const sayHi = ({ name, age, gender }: Human): string => {
//   return `Hello ${name}, you arg ${age}, you are a ${gender}`;
// };

// console.log(sayHi(lynn));

// export {};

import * as cryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    cryptoJS.SHA256(index + previousHash + timestamp + data).toString();
}

const genesisBlock: Block = new Block(
  0,
  "2030123012124234213",
  "",
  "Hello",
  Date.now()
);

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const nextTimestamp: number = getNewTimeStamp();
  const nextHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    nextTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    nextHash,
    previousBlock.hash,
    data,
    nextTimestamp
  );
  return newBlock;
};

console.log(createNewBlock("Hello"), createNewBlock("bye bye"));

export {};
