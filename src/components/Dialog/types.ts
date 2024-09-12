import React, { ReactEventHandler } from "react";

export type Prop = {
  children: React.ReactNode;
  openModal: boolean;
  closeModal: ReactEventHandler;
  label?: string;
};
