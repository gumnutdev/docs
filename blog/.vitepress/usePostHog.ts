import posthog from "posthog-js";

export function usePostHog() {
  posthog.init("phc_rUFVVeEW91VmDXwiB5gp93dHBljkFjC16I3WvZcw8ub", {
    api_host: "https://us.i.posthog.com",
  });

  return {
    posthog,
  };
}
