import React from "react";
import Authentication from "../utils/Authentication";

export const PageContext = React.createContext({
    isAuthenticated: false,
    authObject: Authentication
});