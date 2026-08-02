import {Provider} from "./providers";

/**
 * Simple dependency container.
 */
export class Container {
  private readonly registry = new Map<string, unknown>();

  /**
   * Registers a provider instance.
   * @param {Provider<T>} provider Provider definition.
   * @param {T} instance Provider instance.
   */
  register<T>(provider: Provider<T>, instance: T) {
    this.registry.set(provider.provide, instance);
  }

  /**
   * Resolves a previously registered provider instance.
   * @param {Provider<T>} provider Provider definition.
   * @return {T} Resolved provider instance.
   */
  resolve<T>(provider: Provider<T>): T {
    const instance = this.registry.get(provider.provide);
    if (!instance) {
      throw new Error(`Provider ${provider.provide} is not registered`);
    }

    return instance as T;
  }
}
