// @ts-ignore
import {ServiceContext} from "@vtex/api";

declare var process : {
  env: {
    VTEX_APP_ID: string
  }
}

const appId = process.env.VTEX_APP_ID


export async function getSettings(_root: any, _args: {}, ctx: ServiceContext) {
  return await ctx.clients.apps.getAppSettings(appId)
}

export async function postSettings(_root: any, _args: {}, ctx: ServiceContext) {
  return await ctx.clients.apps.saveAppSettings(appId, {"testField" : "testValue"})
}