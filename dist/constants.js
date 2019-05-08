"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typePrefix = exports.txType = void 0;
var txType = {
  MsgSend: "MsgSend",
  NewOrderMsg: "NewOrderMsg",
  CancelOrderMsg: "CancelOrderMsg",
  StdTx: "StdTx",
  PubKeySecp256k1: "PubKeySecp256k1",
  SignatureSecp256k1: "SignatureSecp256k1"
};
exports.txType = txType;
var typePrefix = {
  MsgSend: "2A2C87FA",
  NewOrderMsg: "CE6DC043",
  CancelOrderMsg: "166E681B",
  StdTx: "F0625DEE",
  PubKeySecp256k1: "EB5AE987",
  SignatureSecp256k1: "7FC4A495"
};
exports.typePrefix = typePrefix;