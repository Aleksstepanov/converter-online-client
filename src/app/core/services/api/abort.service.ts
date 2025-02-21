import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AbortService {
  private abortControllers: Map<string, AbortController> = new Map();

  createAbortController(key: string): AbortController {
    this.abortControllers.get(key)?.abort();
    const controller = new AbortController();
    this.abortControllers.set(key, controller);
    return controller;
  }

  abortRequest(key: string) {
    this.abortControllers.get(key)?.abort();
    this.abortControllers.delete(key);
  }
}
