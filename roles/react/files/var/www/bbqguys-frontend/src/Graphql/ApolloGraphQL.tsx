import { isDevelopment, isTesting } from "../config";
import window from 'global/window';
export const GRAPHQL_ENDPOINT_CLIENT = isTesting() ? "https://testing-graphql.bbqguys.com/" : (isDevelopment() && window && window.location && window.location.hostname ? "http://"+window.location.hostname+":4000/" :  "https://graphql.bbqguys.com/");
export const GRAPHQL_ENDPOINT_SERVER =  isTesting() ? "http://127.0.0.1:4000/" : (isDevelopment() ? "http://graphql:4000/" : "https://graphql.bbqguys.com/");
export const GRAPHQL_CUSTOM_NAME = "BBQGuys-Frontend";
export const GRAPHQL_CUSTOM_VERSION = "1.0";