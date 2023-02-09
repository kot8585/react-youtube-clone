import React, { createContext } from "react";
import { FakeClient } from "../client/FakeClient";
import { RealClient } from "../client/RealClient";

const fakeClient = new FakeClient();
const realClient = new RealClient();
export const ClientContext = createContext(fakeClient);


