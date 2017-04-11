import * as React from 'react'
import { HTMLAttributes } from 'react'

export function connect(Component: React.StatelessComponent<any>, Stores?: {}, Styles?: {}): React.ReactElement<any>

declare module 'react' {
  interface HTMLAttributes<T> {
    clazz?: string;
  }
}