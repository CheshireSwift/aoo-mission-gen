import * as React from 'react'
import { css } from 'emotion'

export const TypeTitle = ({ title }: { title: string }) => (
  <h1 className={css({ margin: 0, padding: '0.5rem' })}>{title}</h1>
)

export default TypeTitle
