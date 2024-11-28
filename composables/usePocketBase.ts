// Using ES modules (default)
import PocketBase from "pocketbase";

export function usePocketBase() {
  const config = useRuntimeConfig();
  const pocketbaseUrl = config.public.POCKETBASE_URL as string;

  if (!pocketbaseUrl) {
    console.error("POCKETBASE_URL is not defined in the environment variables");
  }

  const pb = new PocketBase(pocketbaseUrl);
  return { pb };
}
