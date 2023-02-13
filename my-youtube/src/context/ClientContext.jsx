import React, { createContext } from "react";
import { FakeClient } from "../client/FakeClient";
import { RealClient } from "../client/RealClient";
import { Youtube } from "../client/Youtube";

const fakeClient = new FakeClient();
const realClient = new RealClient();
const youtube = new Youtube(realClient);
export const ClientContext = createContext(youtube);


