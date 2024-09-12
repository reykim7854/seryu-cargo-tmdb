import React, { ReactEventHandler } from "react";

export type Prop = {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  onClick?: ReactEventHandler;
};
